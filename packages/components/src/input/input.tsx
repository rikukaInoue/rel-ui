import { type InputHTMLAttributes, forwardRef } from "react";
import { css, cx } from "#styled-system/css";

export type InputSize = "sm" | "md" | "lg";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputSize?: InputSize;
  error?: boolean;
}

const sizeStyles: Record<InputSize, string> = {
  sm: css({ px: "3", py: "1.5", fontSize: "sm" }),
  md: css({ px: "4", py: "2", fontSize: "md" }),
  lg: css({ px: "4", py: "3", fontSize: "lg" }),
};

const baseStyle = css({
  display: "block",
  width: "100%",
  borderRadius: "md",
  border: "1px solid",
  borderColor: "neutral.300",
  bg: "white",
  color: "neutral.900",
  transition: "all 0.15s ease",
  _placeholder: { color: "neutral.400" },
  _hover: { borderColor: "neutral.400" },
  _focus: {
    outline: "none",
    borderColor: "brand.500",
    boxShadow: "0 0 0 1px var(--colors-brand-500)",
  },
  _disabled: {
    opacity: 0.5,
    cursor: "not-allowed",
    bg: "neutral.50",
  },
});

const errorStyle = css({
  borderColor: "error.500",
  _focus: {
    borderColor: "error.500",
    boxShadow: "0 0 0 1px var(--colors-error-500)",
  },
});

/**
 * Input component.
 *
 * @example
 * ```tsx
 * <Input placeholder="Email" />
 * <Input inputSize="lg" error />
 * ```
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ inputSize = "md", error = false, className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cx(baseStyle, sizeStyles[inputSize], error && errorStyle, className)}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";
