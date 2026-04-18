import { css, cx } from "#styled-system/css";

export interface ActionBarProps {
  /** Primary action (right side) — required */
  primary: React.ReactNode;
  /** Secondary action (left of primary) */
  secondary?: React.ReactNode;
  /** Danger action (left side, separated) */
  danger?: React.ReactNode;
  className?: string;
}

const barStyle = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "3",
});

const rightGroup = css({ display: "flex", alignItems: "center", gap: "3" });

/**
 * ActionBar — consistent button layout for form/dialog actions.
 * primary is always right, danger is always left.
 *
 * @example
 * ```tsx
 * <ActionBar
 *   primary={<Button>保存</Button>}
 *   secondary={<Button variant="secondary">キャンセル</Button>}
 * />
 * <ActionBar
 *   primary={<Button>保存</Button>}
 *   danger={<Button variant="danger">削除</Button>}
 * />
 * ```
 */
export function ActionBar({ primary, secondary, danger, className }: ActionBarProps) {
  return (
    <div className={cx(barStyle, className)}>
      <div>{danger}</div>
      <div className={rightGroup}>
        {secondary}
        {primary}
      </div>
    </div>
  );
}
