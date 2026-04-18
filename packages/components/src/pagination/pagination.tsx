import { css, cx } from "#styled-system/css";

export interface PaginationProps {
  current: number;
  total: number;
  onPageChange: (page: number) => void;
  className?: string;
}

const baseStyle = css({ display: "flex", alignItems: "center", gap: "1" });

const buttonStyle = css({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "8",
  height: "8",
  borderRadius: "md",
  fontSize: "sm",
  cursor: "pointer",
  border: "none",
  bg: "transparent",
  color: "text.secondary",
  _hover: { bg: "bg.subtle" },
  _disabled: { opacity: 0.5, cursor: "not-allowed" },
});

const activeStyle = css({ bg: "bg.action.primary", color: "text.inverse", _hover: { bg: "bg.action.primary.hover" } });
const ellipsisStyle = css({ width: "8", height: "8", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "text.muted", fontSize: "sm" });

function getPages(current: number, total: number): (number | "...")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const pages: (number | "...")[] = [1];
  if (current > 3) pages.push("...");
  for (let i = Math.max(2, current - 1); i <= Math.min(total - 1, current + 1); i++) pages.push(i);
  if (current < total - 2) pages.push("...");
  pages.push(total);
  return pages;
}

/**
 * Pagination — page navigation.
 * @example
 * ```tsx
 * <Pagination current={3} total={10} onPageChange={setPage} />
 * ```
 */
export function Pagination({ current, total, onPageChange, className }: PaginationProps) {
  const pages = getPages(current, total);
  return (
    <nav className={cx(baseStyle, className)} aria-label="Pagination">
      <button className={buttonStyle} disabled={current <= 1} onClick={() => onPageChange(current - 1)} aria-label="Previous page">
        ←
      </button>
      {pages.map((p, i) =>
        p === "..." ? (
          <span key={`e${i}`} className={ellipsisStyle}>…</span>
        ) : (
          <button
            key={p}
            className={cx(buttonStyle, p === current && activeStyle)}
            onClick={() => onPageChange(p)}
            aria-current={p === current ? "page" : undefined}
          >
            {p}
          </button>
        ),
      )}
      <button className={buttonStyle} disabled={current >= total} onClick={() => onPageChange(current + 1)} aria-label="Next page">
        →
      </button>
    </nav>
  );
}
