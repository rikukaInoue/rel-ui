import { TextArea as AriaTextArea, TextField, Label, FieldError, type TextFieldProps } from "react-aria-components";
import { css, cx } from "#styled-system/css";

export interface TextAreaProps extends TextFieldProps {
  label?: string;
  errorMessage?: string;
  placeholder?: string;
  rows?: number;
  className?: string;
}

const textareaStyle = css({
  display: "block",
  width: "100%",
  borderRadius: "md",
  border: "1px solid",
  borderColor: "input.border.default",
  bg: "input.bg.default",
  color: "input.text.default",
  px: "4",
  py: "3",
  fontSize: "md",
  resize: "vertical",
  minHeight: "20",
  transition: "all 0.15s ease",
  _placeholder: { color: "input.text.placeholder" },
  _hover: { borderColor: "input.border.hover" },
  _focus: { outline: "none", borderColor: "input.border.focus", boxShadow: "0 0 0 1px var(--colors-input-border-focus)" },
  _disabled: { opacity: 0.5, cursor: "not-allowed", bg: "input.bg.disabled" },
});

const invalidStyle = css({
  borderColor: "input.border.error",
  _focus: { borderColor: "input.border.error", boxShadow: "0 0 0 1px var(--colors-input-border-error)" },
});

const labelStyle = css({ display: "block", fontSize: "sm", fontWeight: "medium", color: "input.label.text", mb: "1" });
const errorStyle = css({ fontSize: "sm", color: "text.error", mt: "1" });
const fieldStyle = css({ width: "100%" });

/**
 * TextArea — multi-line text input built on React Aria.
 * @example
 * ```tsx
 * <TextArea label="Bio" placeholder="Tell us about yourself" rows={4} />
 * <TextArea label="Comment" isRequired />
 * ```
 */
export function TextArea({ label, errorMessage, placeholder, rows = 3, className, ...props }: TextAreaProps) {
  return (
    <TextField className={cx(fieldStyle, className)} {...props}>
      {label && <Label className={labelStyle}>{label}</Label>}
      <AriaTextArea
        className={({ isInvalid }) => cx(textareaStyle, isInvalid && invalidStyle)}
        placeholder={placeholder}
        rows={rows}
      />
      {errorMessage && <FieldError className={errorStyle}>{errorMessage}</FieldError>}
    </TextField>
  );
}
