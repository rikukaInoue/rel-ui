import { definePreset } from "@pandacss/dev";
import { colors } from "./colors";
import { spacing } from "./spacing";
import { fonts, fontSizes, fontWeights, lineHeights, radii } from "./typography";
import { semanticColors } from "./semantic";
import { componentTokens } from "./component-tokens";

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
      semanticTokens: {
        colors: {
          ...semanticColors,
          ...componentTokens,
        },
      },
    },
  },
});
