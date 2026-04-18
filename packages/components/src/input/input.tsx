import { Input as AriaInput, TextField, Label, FieldError, type TextFieldProps } from "react-aria-components";
import { css, cx } from "#styled-system/css";

export type InputSize = "sm" | "md" | "lg";

export interface InputProps extends TextFieldProps {
  inputSize?: InputSize;
  label?: string;
  errorMessage?: string;
  placeholder?: string;
  className?: string;
}

const sizeStyles: Record<InputSize, string> = {
  sm: css({ px: "3", py: "1.5", fontSize: "sm" }),
  md: css({ px: "4", py: "2", fontSize: "md" }),
  lg: css({ px: "4", py: "3", fontSize: "lg" }),
};

const inputStyle = css({
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

const invalidInputStyle = css({
  borderColor: "error.500",
  _focus: {
    borderColor: "error.500",
    boxShadow: "0 0 0 1px var(--colors-error-500)",
  },
});

const labelStyle = css({
  display: "block",
  fontSize: "sm",
  fontWeight: "medium",
  color: "neutral.700",
  mb: "1",
});

const errorStyle = css({
  fontSize: "sm",
  color: "error.500",
  mt: "1",
});

const fieldStyle = css({
  width: "100%",
});

/**
 * Input component built on React Aria TextField.
 * Provides accessible labeling, validation, and error messaging.
 *
 * @example
 * ```tsx
 * <Input label="Email" placeholder="you@example.com" />
 * <Input label="Password" type="password" isRequired />
 * <Input label="Name" isInvalid errorMessage="Name is required" />
 * ```
 */
export function Input({
  inputSize = "md",
  label,
  errorMessage,
  placeholder,
  className,
  ...props
}: InputProps) {
  return (
    <TextField className={cx(fieldStyle, className)} {...props}>
      {label && <Label className={labelStyle}>{label}</Label>}
      <AriaInput
        className={({ isInvalid }) =>
          cx(inputStyle, sizeStyles[inputSize], isInvalid && invalidInputStyle)
        }
        placeholder={placeholder}
      />
      {errorMessage && <FieldError className={errorStyle}>{errorMessage}</FieldError>}
    </TextField>
  );
}
