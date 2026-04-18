import { type HTMLAttributes } from "react";
import { css, cx } from "#styled-system/css";

/** Allowed gap values — enforced at the type level */
type StackGap = 1 | 1.5 | 2 | 3 | 4 | 6 | 8 | 12 | 16;

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  gap?: StackGap;
  align?: "start" | "center" | "end" | "stretch";
}

export interface HStackProps extends HTMLAttributes<HTMLDivElement> {
  gap?: StackGap;
  align?: "start" | "center" | "end" | "baseline";
  justify?: "start" | "center" | "end" | "between";
  wrap?: boolean;
}

const stackBase = css({ display: "flex", flexDirection: "column" });
const hstackBase = css({ display: "flex", flexDirection: "row", alignItems: "center" });

/**
 * Stack — vertical layout.
 * @example
 * ```tsx
 * <Stack gap={6}>
 *   <Input label="Email" />
 *   <Input label="Password" />
 *   <Button>Submit</Button>
 * </Stack>
 * ```
 */
export function Stack({ gap = 4, align = "stretch", className, style, ...props }: StackProps) {
  return (
    <div
      className={cx(stackBase, className)}
      style={{ gap: `var(--spacing-${gap})`, alignItems: align, ...style }}
      {...props}
    />
  );
}

/**
 * HStack — horizontal layout.
 * @example
 * ```tsx
 * <HStack gap={3} justify="end">
 *   <Button variant="secondary">Cancel</Button>
 *   <Button variant="primary">Save</Button>
 * </HStack>
 * ```
 */
export function HStack({ gap = 3, align = "center", justify = "start", wrap = false, className, style, ...props }: HStackProps) {
  const justifyMap = { start: "flex-start", center: "center", end: "flex-end", between: "space-between" };
  return (
    <div
      className={cx(hstackBase, className)}
      style={{
        gap: `var(--spacing-${gap})`,
        alignItems: align,
        justifyContent: justifyMap[justify],
        flexWrap: wrap ? "wrap" : "nowrap",
        ...style,
      }}
      {...props}
    />
  );
}
