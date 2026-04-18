import { css, cx } from "#styled-system/css";

type SectionSpacing = 6 | 8 | 12 | 16;

export interface SectionProps {
  gap?: SectionSpacing;
  children: React.ReactNode;
  className?: string;
}

/**
 * Section — vertical section with standardized spacing between siblings.
 * Use inside Container to separate page sections.
 * @example
 * ```tsx
 * <Container size="md">
 *   <Section gap={8}>Header area</Section>
 *   <Section gap={8}>Content area</Section>
 * </Container>
 * ```
 */
export function Section({ gap = 8, className, style, ...props }: SectionProps & { style?: React.CSSProperties }) {
  return (
    <section
      className={cx(css({ width: "100%" }), className)}
      style={{ marginBottom: `var(--spacing-${gap})`, ...style }}
      {...props}
    />
  );
}
