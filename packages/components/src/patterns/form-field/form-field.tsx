import { css, cx } from "#styled-system/css";

type AllowedFormChild = React.ReactElement<{ label?: string }>;

export interface FormFieldProps {
  label: string;
  required?: boolean;
  help?: string;
  error?: string;
  children: AllowedFormChild;
  className?: string;
}

const fieldStyle = css({ width: "100%" });
const labelRow = css({ display: "flex", justifyContent: "space-between", mb: "1" });
const labelStyle = css({ fontSize: "sm", fontWeight: "medium", color: "input.label.text" });
const requiredStyle = css({ color: "text.error", ml: "0.5" });
const helpStyle = css({ fontSize: "sm", color: "text.muted", mt: "1" });
const errorMsgStyle = css({ fontSize: "sm", color: "text.error", mt: "1" });

/**
 * FormField — wraps an input with label, required mark, help/error text.
 * Enforces consistent form layout.
 *
 * @example
 * ```tsx
 * <FormField label="メールアドレス" required>
 *   <Input placeholder="you@example.com" />
 * </FormField>
 * <FormField label="備考" help="任意です">
 *   <TextArea placeholder="自由入力" />
 * </FormField>
 * ```
 */
export function FormField({ label, required, help, error, children, className }: FormFieldProps) {
  const message = error || help;
  return (
    <div className={cx(fieldStyle, className)}>
      <div className={labelRow}>
        <span className={labelStyle}>
          {label}
          {required && <span className={requiredStyle}>*</span>}
        </span>
      </div>
      {children}
      {message && <p className={error ? errorMsgStyle : helpStyle}>{message}</p>}
    </div>
  );
}
