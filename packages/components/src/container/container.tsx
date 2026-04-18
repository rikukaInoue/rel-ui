import { type HTMLAttributes } from "react";
import { css, cx } from "#styled-system/css";

/** Container width presets */
type ContainerSize = "sm" | "md" | "lg" | "xl" | "full";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: ContainerSize;
}

const sizeMap: Record<ContainerSize, string> = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  full: "100%",
};

const baseStyle = css({ mx: "auto", px: "6", width: "100%" });

/**
 * Container — constrained width + centered.
 * @example
 * ```tsx
 * <Container size="sm">
 *   <Card>Login form</Card>
 * </Container>
 * ```
 */
export function Container({ size = "lg", className, style, ...props }: ContainerProps) {
  return (
    <div
      className={cx(baseStyle, className)}
      style={{ maxWidth: sizeMap[size], ...style }}
      {...props}
    />
  );
}
