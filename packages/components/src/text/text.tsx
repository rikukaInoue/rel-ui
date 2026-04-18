import { css, cx } from "#styled-system/css";

type TextVariant = "body" | "body-sm" | "caption" | "label" | "overline";

export interface TextProps {
  variant?: TextVariant;
  muted?: boolean;
  bold?: boolean;
  color?: "primary" | "secondary" | "muted" | "error" | "success" | "link" | "inverse";
  as?: "p" | "span" | "div" | "time" | "small";
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<TextVariant, string> = {
  body: css({ fontSize: "md", lineHeight: "normal" }),
  "body-sm": css({ fontSize: "sm", lineHeight: "normal" }),
  caption: css({ fontSize: "xs", lineHeight: "normal" }),
  label: css({ fontSize: "sm", fontWeight: "medium", lineHeight: "tight" }),
  overline: css({ fontSize: "xs", fontWeight: "semibold", lineHeight: "tight", textTransform: "uppercase", letterSpacing: "0.05em" }),
};

const colorStyles: Record<NonNullable<TextProps["color"]>, string> = {
  primary: css({ color: "text.primary" }),
  secondary: css({ color: "text.secondary" }),
  muted: css({ color: "text.muted" }),
  error: css({ color: "text.error" }),
  success: css({ color: "text.success" }),
  link: css({ color: "text.link" }),
  inverse: css({ color: "text.inverse" }),
};

const mutedStyle = css({ color: "text.muted" });
const boldStyle = css({ fontWeight: "semibold" });

/**
 * Text — styled text with semantic variants.
 * @example
 * ```tsx
 * <Text variant="body">本文テキスト</Text>
 * <Text variant="caption" muted>2時間前</Text>
 * <Text variant="label" bold>ユーザー名</Text>
 * <Text variant="body-sm" color="error">エラーメッセージ</Text>
 * ```
 */
export function Text({
  variant = "body",
  muted: isMuted,
  bold: isBold,
  color,
  as: Tag = "span",
  className,
  ...props
}: TextProps) {
  return (
    <Tag
      className={cx(
        variantStyles[variant],
        color ? colorStyles[color] : !isMuted && css({ color: "text.primary" }),
        isMuted && mutedStyle,
        isBold && boldStyle,
        className,
      )}
      {...props}
    />
  );
}
