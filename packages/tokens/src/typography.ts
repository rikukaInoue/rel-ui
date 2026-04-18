/**
 * Typography tokens — synced from Figma Variables.
 * Do not edit manually. Run `pnpm tokens:sync` to update.
 *
 * @figma-collection Typography
 */
export const fonts = {
  sans: { value: '"Inter", "Noto Sans JP", system-ui, sans-serif' },
  mono: { value: '"JetBrains Mono", ui-monospace, monospace' },
} as const;

export const fontSizes = {
  xs: { value: "0.75rem" },
  sm: { value: "0.875rem" },
  md: { value: "1rem" },
  lg: { value: "1.125rem" },
  xl: { value: "1.25rem" },
  "2xl": { value: "1.5rem" },
  "3xl": { value: "1.875rem" },
  "4xl": { value: "2.25rem" },
} as const;

export const fontWeights = {
  normal: { value: "400" },
  medium: { value: "500" },
  semibold: { value: "600" },
  bold: { value: "700" },
} as const;

export const lineHeights = {
  tight: { value: "1.25" },
  normal: { value: "1.5" },
  relaxed: { value: "1.75" },
} as const;

export const radii = {
  none: { value: "0" },
  sm: { value: "0.25rem" },
  md: { value: "0.375rem" },
  lg: { value: "0.5rem" },
  xl: { value: "0.75rem" },
  full: { value: "9999px" },
} as const;
