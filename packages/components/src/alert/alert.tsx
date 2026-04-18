import { type HTMLAttributes } from "react";
import { css, cx } from "#styled-system/css";

type AlertVariant = "info" | "success" | "warning" | "error";

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: AlertVariant;
}

const baseStyle = css({
  px: "4",
  py: "3",
  borderRadius: "md",
  border: "1px solid",
  fontSize: "sm",
});

const variantStyles: Record<AlertVariant, string> = {
  info: css({ bg: "alert.bg.info", color: "alert.text.info", borderColor: "alert.border.info" }),
  success: css({ bg: "alert.bg.success", color: "alert.text.success", borderColor: "alert.border.success" }),
  warning: css({ bg: "alert.bg.warning", color: "alert.text.warning", borderColor: "alert.border.warning" }),
  error: css({ bg: "alert.bg.error", color: "alert.text.error", borderColor: "alert.border.error" }),
};

/**
 * Alert — inline feedback message.
 * @example
 * ```tsx
 * <Alert variant="success">保存しました</Alert>
 * <Alert variant="error">エラーが発生しました</Alert>
 * ```
 */
export function Alert({ variant = "info", className, ...props }: AlertProps) {
  return <div role="alert" className={cx(baseStyle, variantStyles[variant], className)} {...props} />;
}
