/**
 * Component tokens (L3) — map component-specific styles to semantic tokens.
 *
 * @figma-collection Components
 */
export const componentTokens = {
  // Button
  button: {
    bg: {
      primary: { value: "{colors.bg.action.primary}" },
      "primary.hover": { value: "{colors.bg.action.primary.hover}" },
      "primary.pressed": { value: "{colors.bg.action.primary.pressed}" },
      secondary: { value: "{colors.bg.action.secondary}" },
      "secondary.hover": { value: "{colors.bg.action.secondary.hover}" },
      "secondary.pressed": { value: "{colors.bg.action.secondary.pressed}" },
      ghost: { value: "{colors.bg.action.ghost}" },
      "ghost.hover": { value: "{colors.bg.action.ghost.hover}" },
      "ghost.pressed": { value: "{colors.bg.action.ghost.pressed}" },
      danger: { value: "{colors.bg.action.danger}" },
      "danger.hover": { value: "{colors.bg.action.danger.hover}" },
      "danger.pressed": { value: "{colors.bg.action.danger.pressed}" },
    },
    text: {
      primary: { value: "{colors.text.inverse}" },
      secondary: { value: "{colors.text.primary}" },
      ghost: { value: "{colors.text.secondary}" },
      danger: { value: "{colors.text.inverse}" },
    },
    border: {
      secondary: { value: "{colors.border.default}" },
    },
  },

  // Input
  input: {
    bg: {
      default: { value: "{colors.bg.surface}" },
      disabled: { value: "{colors.bg.muted}" },
    },
    text: {
      default: { value: "{colors.text.primary}" },
      placeholder: { value: "{colors.text.muted}" },
    },
    border: {
      default: { value: "{colors.border.default}" },
      hover: { value: "{colors.border.hover}" },
      focus: { value: "{colors.border.focus}" },
      error: { value: "{colors.border.error}" },
    },
    label: {
      text: { value: "{colors.text.secondary}" },
    },
  },

  // Card
  card: {
    bg: { value: "{colors.bg.surface}" },
    border: { value: "{colors.border.default}" },
    shadow: { value: "0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)" },
    "shadow.lg": { value: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)" },
  },

  // Badge
  badge: {
    bg: {
      default: { value: "{colors.bg.subtle}" },
      success: { value: "{colors.bg.success}" },
      warning: { value: "{colors.bg.warning}" },
      error: { value: "{colors.bg.error}" },
      info: { value: "{colors.bg.info}" },
    },
    text: {
      default: { value: "{colors.text.secondary}" },
      success: { value: "{colors.text.success}" },
      warning: { value: "{colors.text.warning}" },
      error: { value: "{colors.text.error}" },
      info: { value: "{colors.text.info}" },
    },
  },

  // Alert
  alert: {
    bg: {
      info: { value: "{colors.bg.info}" },
      success: { value: "{colors.bg.success}" },
      warning: { value: "{colors.bg.warning}" },
      error: { value: "{colors.bg.error}" },
    },
    text: {
      info: { value: "{colors.text.info}" },
      success: { value: "{colors.text.success}" },
      warning: { value: "{colors.text.warning}" },
      error: { value: "{colors.text.error}" },
    },
    border: {
      info: { value: "{colors.border.focus}" },
      success: { value: "{colors.border.success}" },
      warning: { value: "{colors.warning.500}" },
      error: { value: "{colors.border.error}" },
    },
  },

  // Dialog
  dialog: {
    bg: { value: "{colors.bg.surface}" },
    overlay: { value: "rgba(0, 0, 0, 0.5)" },
    shadow: { value: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" },
  },
} as const;
