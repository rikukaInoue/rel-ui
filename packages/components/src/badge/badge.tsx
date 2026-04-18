import { type HTMLAttributes } from "react";
import { css, cx } from "#styled-system/css";

export type BadgeVariant = "default" | "success" | "warning" | "error" | "info";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: css({ bg: "neutral.100", color: "neutral.700" }),
  success: css({ bg: "success.50", color: "success.700" }),
  warning: css({ bg: "warning.50", color: "warning.700" }),
  error: css({ bg: "error.50", color: "error.700" }),
  info: css({ bg: "info.50", color: "info.700" }),
};

const baseStyle = css({
  display: "inline-flex",
  alignItems: "center",
  px: "2.5",
  py: "0.5",
  borderRadius: "full",
  fontSize: "xs",
  fontWeight: "medium",
});

/**
 * Badge component for status indicators and labels.
 *
 * @example
 * ```tsx
 * <Badge>Default</Badge>
 * <Badge variant="success">Active</Badge>
 * <Badge variant="error">Error</Badge>
 * ```
 */
export function Badge({ variant = "default", className, ...props }: BadgeProps) {
  return (
    <span className={cx(baseStyle, variantStyles[variant], className)} {...props} />
  );
}
