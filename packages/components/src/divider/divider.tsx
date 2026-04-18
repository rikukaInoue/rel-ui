import { css, cx } from "#styled-system/css";

export interface DividerProps {
  label?: string;
  className?: string;
}

const lineStyle = css({
  display: "flex",
  alignItems: "center",
  gap: "4",
  color: "text.muted",
  fontSize: "sm",
  _before: { content: '""', flex: 1, borderBottom: "1px solid", borderColor: "border.default" },
  _after: { content: '""', flex: 1, borderBottom: "1px solid", borderColor: "border.default" },
});

const plainStyle = css({ borderBottom: "1px solid", borderColor: "border.default" });

/**
 * Divider — horizontal separator, optionally with label.
 * @example
 * ```tsx
 * <Divider />
 * <Divider label="または" />
 * ```
 */
export function Divider({ label, className }: DividerProps) {
  if (label) {
    return <div className={cx(lineStyle, className)}>{label}</div>;
  }
  return <div className={cx(plainStyle, className)} />;
}
