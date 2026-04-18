/**
 * Figma Variables → Panda CSS tokens sync script.
 *
 * Usage:
 *   FIGMA_TOKEN=xxx FIGMA_FILE_ID=xxx pnpm tokens:sync
 *
 * This script fetches variables from Figma's REST API and generates
 * token files that Panda CSS consumes via the preset.
 */

const FIGMA_API = "https://api.figma.com/v1";

interface FigmaVariable {
  id: string;
  name: string;
  resolvedType: "COLOR" | "FLOAT" | "STRING";
  valuesByMode: Record<string, unknown>;
}

interface FigmaVariableCollection {
  id: string;
  name: string;
  variableIds: string[];
}

async function fetchFigmaVariables(fileId: string, token: string) {
  const res = await fetch(`${FIGMA_API}/files/${fileId}/variables/local`, {
    headers: { "X-Figma-Token": token },
  });
  if (!res.ok) throw new Error(`Figma API error: ${res.status}`);
  return res.json();
}

function figmaColorToHex(color: { r: number; g: number; b: number; a: number }): string {
  const r = Math.round(color.r * 255).toString(16).padStart(2, "0");
  const g = Math.round(color.g * 255).toString(16).padStart(2, "0");
  const b = Math.round(color.b * 255).toString(16).padStart(2, "0");
  if (color.a < 1) {
    const a = Math.round(color.a * 255).toString(16).padStart(2, "0");
    return `#${r}${g}${b}${a}`;
  }
  return `#${r}${g}${b}`;
}

function buildTokenTree(
  variables: Record<string, FigmaVariable>,
  collection: FigmaVariableCollection,
  defaultModeId: string,
) {
  const tree: Record<string, unknown> = {};

  for (const varId of collection.variableIds) {
    const variable = variables[varId];
    if (!variable) continue;

    const parts = variable.name.split("/");
    let current = tree;

    for (let i = 0; i < parts.length - 1; i++) {
      const key = parts[i].toLowerCase().replace(/\s+/g, "-");
      if (!current[key]) current[key] = {};
      current = current[key] as Record<string, unknown>;
    }

    const leafKey = parts[parts.length - 1].toLowerCase().replace(/\s+/g, "-");
    const rawValue = variable.valuesByMode[defaultModeId];

    if (variable.resolvedType === "COLOR" && typeof rawValue === "object") {
      current[leafKey] = { value: figmaColorToHex(rawValue as { r: number; g: number; b: number; a: number }) };
    } else if (variable.resolvedType === "FLOAT" && typeof rawValue === "number") {
      current[leafKey] = { value: `${rawValue / 16}rem` };
    } else if (variable.resolvedType === "STRING" && typeof rawValue === "string") {
      current[leafKey] = { value: rawValue };
    }
  }

  return tree;
}

function generateFile(name: string, tokens: Record<string, unknown>): string {
  return `/**
 * ${name} tokens — synced from Figma Variables.
 * Do not edit manually. Run \`pnpm tokens:sync\` to update.
 *
 * @figma-collection ${name}
 * @generated ${new Date().toISOString()}
 */
export const ${name.toLowerCase()} = ${JSON.stringify(tokens, null, 2)} as const;
`;
}

async function main() {
  const token = process.env.FIGMA_TOKEN;
  const fileId = process.env.FIGMA_FILE_ID;

  if (!token || !fileId) {
    console.error("Usage: FIGMA_TOKEN=xxx FIGMA_FILE_ID=xxx pnpm tokens:sync");
    console.error("");
    console.error("Get your token at: https://www.figma.com/developers/api#access-tokens");
    process.exit(1);
  }

  console.log("Fetching Figma variables...");
  const data = await fetchFigmaVariables(fileId, token);

  const { variables, variableCollections } = data.meta;
  const collections = Object.values(variableCollections) as FigmaVariableCollection[];

  console.log(`Found ${collections.length} collection(s):`);

  const fs = await import("fs");
  const path = await import("path");

  for (const collection of collections) {
    const modes = (data.meta.variableCollections[collection.id] as { modes: { modeId: string; name: string }[] }).modes;
    const defaultModeId = modes[0].modeId;

    const tokens = buildTokenTree(variables, collection, defaultModeId);
    const fileName = collection.name.toLowerCase().replace(/\s+/g, "-");
    const content = generateFile(collection.name, tokens);

    const outPath = path.join(import.meta.dirname, `${fileName}.ts`);
    fs.writeFileSync(outPath, content);
    console.log(`  ✓ ${collection.name} → src/${fileName}.ts (${collection.variableIds.length} variables)`);
  }

  console.log("\nDone! Run `pnpm build` to compile.");
}

main().catch(console.error);
