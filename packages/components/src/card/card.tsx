import { type HTMLAttributes } from "react";
import { css, cx } from "#styled-system/css";

type CardVariant = "default" | "outlined" | "elevated";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  padding?: "sm" | "md" | "lg";
  hoverable?: boolean;
}

const baseStyle = css({
  borderRadius: "lg",
  bg: "card.bg",
  transition: "all 0.2s ease",
});

const variantStyles: Record<CardVariant, string> = {
  default: css({ border: "1px solid", borderColor: "card.border", boxShadow: "0 1px 2px 0 rgba(0,0,0,0.05)" }),
  outlined: css({ border: "1px solid", borderColor: "card.border" }),
  elevated: css({ boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)" }),
};

const hoverStyle = css({
  _hover: {
    boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)",
    borderColor: "border.hover",
  },
});

const paddingStyles = {
  sm: css({ p: "4" }),
  md: css({ p: "6" }),
  lg: css({ p: "8" }),
};

/**
 * Card — surface with border/shadow.
 * @example
 * ```tsx
 * <Card variant="elevated" padding="lg">...</Card>
 * <Card hoverable>Clickable card</Card>
 * ```
 */
export function Card({ variant = "default", padding = "md", hoverable, className, ...props }: CardProps) {
  return (
    <div className={cx(baseStyle, variantStyles[variant], paddingStyles[padding], hoverable && hoverStyle, className)} {...props} />
  );
}
