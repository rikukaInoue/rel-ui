import { type HTMLAttributes } from "react";
import { css, cx } from "#styled-system/css";

type CardVariant = "default" | "outlined" | "elevated";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  padding?: "sm" | "md" | "lg";
}

const baseStyle = css({ borderRadius: "lg", bg: "card.bg" });

const variantStyles: Record<CardVariant, string> = {
  default: css({ border: "1px solid", borderColor: "card.border", boxShadow: "card.shadow" }),
  outlined: css({ border: "1px solid", borderColor: "card.border" }),
  elevated: css({ boxShadow: "card.shadow.lg" }),
};

const paddingStyles = {
  sm: css({ p: "4" }),
  md: css({ p: "6" }),
  lg: css({ p: "8" }),
};

/**
 * Card — surface with border/shadow.
 * @example
 * ```tsx
 * <Card variant="elevated" padding="lg">
 *   <Stack gap={4}>...</Stack>
 * </Card>
 * ```
 */
export function Card({ variant = "default", padding = "md", className, ...props }: CardProps) {
  return (
    <div className={cx(baseStyle, variantStyles[variant], paddingStyles[padding], className)} {...props} />
  );
}
