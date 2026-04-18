import { Link as AriaLink, type LinkProps as AriaLinkProps } from "react-aria-components";
import { css, cx } from "#styled-system/css";

export interface LinkProps extends AriaLinkProps {
  variant?: "default" | "muted";
  className?: string;
}

const baseStyle = css({
  color: "text.link",
  textDecoration: "none",
  cursor: "pointer",
  _hover: { color: "text.link.hover", textDecoration: "underline" },
  _focusVisible: { outline: "2px solid", outlineColor: "border.focus", outlineOffset: "2px", borderRadius: "sm" },
});

const mutedVariant = css({
  color: "text.muted",
  _hover: { color: "text.secondary" },
});

/**
 * Link — accessible text link built on React Aria.
 * @example
 * ```tsx
 * <Link href="/signup">新規登録</Link>
 * <Link href="/terms" variant="muted">利用規約</Link>
 * ```
 */
export function Link({ variant = "default", className, ...props }: LinkProps) {
  return <AriaLink className={cx(baseStyle, variant === "muted" && mutedVariant, className)} {...props} />;
}
