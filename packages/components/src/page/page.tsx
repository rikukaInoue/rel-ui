import { css, cx } from "#styled-system/css";

export interface PageProps {
  bg?: "default" | "muted";
  children: React.ReactNode;
  className?: string;
}

const baseStyle = css({ minHeight: "100vh", py: "8" });

const bgStyles = {
  default: css({ bg: "bg.surface" }),
  muted: css({ bg: "bg.muted" }),
};

/**
 * Page — top-level page wrapper with background and min-height.
 * @example
 * ```tsx
 * <Page bg="muted">
 *   <Container size="md">...</Container>
 * </Page>
 * ```
 */
export function Page({ bg = "muted", className, ...props }: PageProps) {
  return <div className={cx(baseStyle, bgStyles[bg], className)} {...props} />;
}
