import { css, cx } from "#styled-system/css";

type AvatarSize = "sm" | "md" | "lg" | "xl";

export interface AvatarProps {
  src?: string;
  name: string;
  size?: AvatarSize;
  ring?: boolean;
  className?: string;
}

const sizeStyles: Record<AvatarSize, string> = {
  sm: css({ width: "8", height: "8", fontSize: "xs" }),
  md: css({ width: "10", height: "10", fontSize: "sm" }),
  lg: css({ width: "12", height: "12", fontSize: "md" }),
  xl: css({ width: "16", height: "16", fontSize: "lg" }),
};

const baseStyle = css({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "full",
  fontWeight: "medium",
  overflow: "hidden",
  flexShrink: 0,
  transition: "all 0.15s ease",
});

const imgStyle = css({ width: "100%", height: "100%", objectFit: "cover" });
const fallbackStyle = css({
  background: "linear-gradient(135deg, var(--colors-brand-500), var(--colors-brand-700))",
  color: "text.inverse",
});
const ringStyle = css({ outline: "2px solid", outlineColor: "border.focus", outlineOffset: "2px" });

function getInitials(name: string): string {
  return name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
}

/**
 * Avatar — user profile image with gradient fallback initials.
 * @example
 * ```tsx
 * <Avatar name="Taishi I" src="/avatar.jpg" />
 * <Avatar name="Taishi I" size="lg" ring />
 * ```
 */
export function Avatar({ src, name, size = "md", ring, className }: AvatarProps) {
  return (
    <span className={cx(baseStyle, sizeStyles[size], !src && fallbackStyle, ring && ringStyle, className)} aria-label={name}>
      {src ? <img src={src} alt={name} className={imgStyle} /> : getInitials(name)}
    </span>
  );
}
