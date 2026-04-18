/**
 * Semantic tokens (L2) — map meaning to primitive tokens.
 * Do not edit manually. Run `pnpm tokens:sync` to update.
 *
 * @figma-collection Semantic
 */
export const semanticColors = {
  bg: {
    surface: { value: "{colors.white}" },
    muted: { value: "{colors.neutral.50}" },
    subtle: { value: "{colors.neutral.100}" },
    action: {
      primary: { value: "{colors.brand.600}" },
      "primary.hover": { value: "{colors.brand.700}" },
      "primary.pressed": { value: "{colors.brand.800}" },
      secondary: { value: "{colors.neutral.100}" },
      "secondary.hover": { value: "{colors.neutral.200}" },
      "secondary.pressed": { value: "{colors.neutral.300}" },
      ghost: { value: "transparent" },
      "ghost.hover": { value: "{colors.neutral.100}" },
      "ghost.pressed": { value: "{colors.neutral.200}" },
      danger: { value: "{colors.error.500}" },
      "danger.hover": { value: "{colors.error.700}" },
      "danger.pressed": { value: "{colors.error.700}" },
    },
    success: { value: "{colors.success.50}" },
    warning: { value: "{colors.warning.50}" },
    error: { value: "{colors.error.50}" },
    info: { value: "{colors.info.50}" },
  },
  text: {
    primary: { value: "{colors.neutral.900}" },
    secondary: { value: "{colors.neutral.600}" },
    muted: { value: "{colors.neutral.400}" },
    inverse: { value: "{colors.white}" },
    error: { value: "{colors.error.500}" },
    success: { value: "{colors.success.700}" },
    warning: { value: "{colors.warning.700}" },
    info: { value: "{colors.info.700}" },
    link: { value: "{colors.brand.600}" },
    "link.hover": { value: "{colors.brand.700}" },
  },
  border: {
    default: { value: "{colors.neutral.300}" },
    hover: { value: "{colors.neutral.400}" },
    focus: { value: "{colors.brand.500}" },
    error: { value: "{colors.error.500}" },
    success: { value: "{colors.success.500}" },
  },
  icon: {
    default: { value: "{colors.neutral.500}" },
    muted: { value: "{colors.neutral.400}" },
    inverse: { value: "{colors.white}" },
    error: { value: "{colors.error.500}" },
    success: { value: "{colors.success.500}" },
    warning: { value: "{colors.warning.500}" },
    info: { value: "{colors.info.500}" },
  },
} as const;
