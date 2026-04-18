import { defineConfig } from "@pandacss/dev";
import { relUiPreset } from "@rel-ui/tokens/panda-preset";

export default defineConfig({
  preflight: true,
  presets: ["@pandacss/preset-base", relUiPreset],
  include: ["./src/**/*.{ts,tsx}"],
  outdir: "src/styled-system",
  outExtension: "js",
  jsxFramework: "react",
});
