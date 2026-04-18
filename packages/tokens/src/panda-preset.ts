import { definePreset } from "@pandacss/dev";
import { colors } from "./colors";
import { spacing } from "./spacing";
import { fonts, fontSizes, fontWeights, lineHeights, radii } from "./typography";

/**
 * Panda CSS Preset — rel-ui design tokens.
 *
 * Usage in panda.config.ts:
 * ```ts
 * import { relUiPreset } from "@rel-ui/tokens/panda-preset";
 * export default defineConfig({
 *   presets: ["@pandacss/preset-base", relUiPreset],
 * });
 * ```
 */
export const relUiPreset = definePreset({
  name: "rel-ui",
  theme: {
    extend: {
      tokens: {
        colors,
        spacing,
        fonts,
        fontSizes,
        fontWeights,
        lineHeights,
        radii,
      },
    },
  },
});
