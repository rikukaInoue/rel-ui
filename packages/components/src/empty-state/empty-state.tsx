import { css, cx } from "#styled-system/css";

export interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
}

const baseStyle = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  py: "16",
  px: "6",
  textAlign: "center",
});

const iconStyle = css({ color: "icon.muted", mb: "4", fontSize: "4xl" });
const titleStyle = css({ fontSize: "lg", fontWeight: "medium", color: "text.primary", mb: "2" });
const descStyle = css({ fontSize: "sm", color: "text.muted", mb: "6", maxWidth: "sm" });

/**
 * EmptyState — placeholder for empty lists/pages.
 * @example
 * ```tsx
 * <EmptyState
 *   title="投稿がありません"
 *   description="最初の投稿を作成してみましょう"
 *   action={<Button>新規投稿</Button>}
 * />
 * ```
 */
export function EmptyState({ icon, title, description, action, className }: EmptyStateProps) {
  return (
    <div className={cx(baseStyle, className)}>
      {icon && <div className={iconStyle}>{icon}</div>}
      <div className={titleStyle}>{title}</div>
      {description && <p className={descStyle}>{description}</p>}
      {action}
    </div>
  );
}
