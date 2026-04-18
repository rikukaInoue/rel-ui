/**
 * Color tokens — synced from Figma Variables.
 * Do not edit manually. Run `pnpm tokens:sync` to update.
 *
 * @figma-collection Colors
 */
export const colors = {
  // Brand
  brand: {
    50: { value: "#eff6ff" },
    100: { value: "#dbeafe" },
    200: { value: "#bfdbfe" },
    300: { value: "#93c5fd" },
    400: { value: "#60a5fa" },
    500: { value: "#3b82f6" },
    600: { value: "#2563eb" },
    700: { value: "#1d4ed8" },
    800: { value: "#1e40af" },
    900: { value: "#1e3a8a" },
  },

  // Neutral
  neutral: {
    50: { value: "#fafafa" },
    100: { value: "#f5f5f5" },
    200: { value: "#e5e5e5" },
    300: { value: "#d4d4d4" },
    400: { value: "#a3a3a3" },
    500: { value: "#737373" },
    600: { value: "#525252" },
    700: { value: "#404040" },
    800: { value: "#262626" },
    900: { value: "#171717" },
  },

  // Semantic
  success: {
    50: { value: "#f0fdf4" },
    500: { value: "#22c55e" },
    700: { value: "#15803d" },
  },
  warning: {
    50: { value: "#fffbeb" },
    500: { value: "#f59e0b" },
    700: { value: "#b45309" },
  },
  error: {
    50: { value: "#fef2f2" },
    500: { value: "#ef4444" },
    700: { value: "#b91c1c" },
  },
  info: {
    50: { value: "#eff6ff" },
    500: { value: "#3b82f6" },
    700: { value: "#1d4ed8" },
  },
} as const;
