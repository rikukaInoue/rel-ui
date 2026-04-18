import { type ButtonHTMLAttributes, forwardRef } from "react";
import { css, cx } from "#styled-system/css";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: css({
    bg: "brand.600",
    color: "white",
    _hover: { bg: "brand.700" },
    _active: { bg: "brand.800" },
  }),
  secondary: css({
    bg: "neutral.100",
    color: "neutral.800",
    border: "1px solid",
    borderColor: "neutral.300",
    _hover: { bg: "neutral.200" },
    _active: { bg: "neutral.300" },
  }),
  ghost: css({
    bg: "transparent",
    color: "neutral.700",
    _hover: { bg: "neutral.100" },
    _active: { bg: "neutral.200" },
  }),
  danger: css({
    bg: "error.500",
    color: "white",
    _hover: { bg: "error.700" },
    _active: { bg: "error.700" },
  }),
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: css({ px: "3", py: "1.5", fontSize: "sm" }),
  md: css({ px: "4", py: "2", fontSize: "md" }),
  lg: css({ px: "6", py: "3", fontSize: "lg" }),
};

const baseStyle = css({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "2",
  borderRadius: "md",
  fontWeight: "medium",
  cursor: "pointer",
  transition: "all 0.15s ease",
  _disabled: {
    opacity: 0.5,
    cursor: "not-allowed",
  },
  _focusVisible: {
    outline: "2px solid",
    outlineColor: "brand.500",
    outlineOffset: "2px",
  },
});

/**
 * Button component.
 *
 * @example
 * ```tsx
 * <Button variant="primary" size="md">Click me</Button>
 * <Button variant="secondary" size="sm">Cancel</Button>
 * <Button variant="danger" onClick={handleDelete}>Delete</Button>
 * ```
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cx(baseStyle, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
