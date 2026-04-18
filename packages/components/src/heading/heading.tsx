import { css, cx } from "#styled-system/css";

type HeadingLevel = 1 | 2 | 3 | 4;

export interface HeadingProps {
  level?: HeadingLevel;
  children: React.ReactNode;
  className?: string;
}

const levelStyles: Record<HeadingLevel, string> = {
  1: css({ fontSize: "3xl", fontWeight: "bold", lineHeight: "tight", color: "text.primary" }),
  2: css({ fontSize: "2xl", fontWeight: "bold", lineHeight: "tight", color: "text.primary" }),
  3: css({ fontSize: "xl", fontWeight: "semibold", lineHeight: "tight", color: "text.primary" }),
  4: css({ fontSize: "lg", fontWeight: "semibold", lineHeight: "tight", color: "text.primary" }),
};

/**
 * Heading — h1〜h4 with preset styles. Level controls both tag and size.
 * @example
 * ```tsx
 * <Heading level={1}>ページタイトル</Heading>
 * <Heading level={3}>セクション見出し</Heading>
 * ```
 */
export function Heading({ level = 2, className, ...props }: HeadingProps) {
  const Tag = `h${level}` as const;
  return <Tag className={cx(levelStyles[level], className)} {...props} />;
}
