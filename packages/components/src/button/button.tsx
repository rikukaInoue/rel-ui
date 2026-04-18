import { Button as AriaButton, type ButtonProps as AriaButtonProps } from "react-aria-components";
import { css, cx } from "#styled-system/css";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends AriaButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: css({
    bg: "button.bg.primary",
    color: "button.text.primary",
    shadow: "0 1px 2px 0 rgba(0,0,0,0.1)",
    _hover: { bg: "button.bg.primary.hover", shadow: "0 2px 4px 0 rgba(0,0,0,0.15)", transform: "translateY(-1px)" },
    _pressed: { bg: "button.bg.primary.pressed", shadow: "none", transform: "translateY(0)" },
  }),
  secondary: css({
    bg: "button.bg.secondary",
    color: "button.text.secondary",
    border: "1px solid",
    borderColor: "button.border.secondary",
    _hover: { bg: "button.bg.secondary.hover", borderColor: "border.hover", shadow: "0 1px 2px 0 rgba(0,0,0,0.05)" },
    _pressed: { bg: "button.bg.secondary.pressed" },
  }),
  ghost: css({
    bg: "button.bg.ghost",
    color: "button.text.ghost",
    _hover: { bg: "button.bg.ghost.hover" },
    _pressed: { bg: "button.bg.ghost.pressed" },
  }),
  danger: css({
    bg: "button.bg.danger",
    color: "button.text.danger",
    shadow: "0 1px 2px 0 rgba(0,0,0,0.1)",
    _hover: { bg: "button.bg.danger.hover", shadow: "0 2px 4px 0 rgba(0,0,0,0.15)", transform: "translateY(-1px)" },
    _pressed: { bg: "button.bg.danger.pressed", shadow: "none", transform: "translateY(0)" },
  }),
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: css({ px: "3", py: "1.5", fontSize: "sm", borderRadius: "md" }),
  md: css({ px: "4", py: "2", fontSize: "md", borderRadius: "md" }),
  lg: css({ px: "6", py: "2.5", fontSize: "lg", borderRadius: "lg" }),
};

const baseStyle = css({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "2",
  fontWeight: "medium",
  cursor: "pointer",
  transition: "all 0.15s ease",
  _disabled: {
    opacity: 0.5,
    cursor: "not-allowed",
    transform: "none !important",
    shadow: "none !important",
  },
  _focusVisible: {
    outline: "2px solid",
    outlineColor: "border.focus",
    outlineOffset: "2px",
  },
});

const fullWidthStyle = css({ width: "100%" });

/**
 * Button — accessible button built on React Aria.
 * @example
 * ```tsx
 * <Button variant="primary">保存</Button>
 * <Button variant="danger" size="sm">削除</Button>
 * <Button variant="secondary" fullWidth>Google でログイン</Button>
 * ```
 */
export function Button({ variant = "primary", size = "md", fullWidth, className, ...props }: ButtonProps) {
  return (
    <AriaButton
      className={cx(baseStyle, variantStyles[variant], sizeStyles[size], fullWidth && fullWidthStyle, className)}
      {...props}
    />
  );
}
