import { css, cx } from "#styled-system/css";
import { Avatar } from "../../avatar";
import { Text } from "../../text";
import { HStack } from "../../stack";
import { Badge, type BadgeVariant } from "../../badge";

type UserHeaderSize = "sm" | "md" | "lg";

export interface UserHeaderProps {
  name: string;
  avatar?: string;
  subtitle?: string;
  badge?: { label: string; variant?: BadgeVariant };
  size?: UserHeaderSize;
  className?: string;
}

const avatarSizeMap: Record<UserHeaderSize, "sm" | "md" | "lg"> = {
  sm: "sm",
  md: "md",
  lg: "lg",
};

/**
 * UserHeader — avatar + name + optional subtitle/badge.
 * Reusable pattern for post authors, comment authors, profile headers.
 * @example
 * ```tsx
 * <UserHeader name="Taishi I" subtitle="2時間前" />
 * <UserHeader name="Taishi I" badge={{ label: "著者", variant: "info" }} />
 * <UserHeader name="Alice T" avatar="/alice.jpg" size="lg" subtitle="デザイナー" />
 * ```
 */
export function UserHeader({ name, avatar, subtitle, badge, size = "md", className }: UserHeaderProps) {
  return (
    <HStack gap={3} className={className}>
      <Avatar name={name} src={avatar} size={avatarSizeMap[size]} />
      <div>
        <HStack gap={2}>
          <Text variant="label" bold>{name}</Text>
          {badge && <Badge variant={badge.variant}>{badge.label}</Badge>}
        </HStack>
        {subtitle && <Text variant="caption" muted as="time">{subtitle}</Text>}
      </div>
    </HStack>
  );
}
