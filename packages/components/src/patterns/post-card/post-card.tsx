import { css } from "#styled-system/css";
import { Card } from "../../card";
import { Stack } from "../../stack";
import { HStack } from "../../stack";
import { Text } from "../../text";
import { Heading } from "../../heading";
import { Badge, type BadgeVariant } from "../../badge";
import { Button } from "../../button";
import { UserHeader } from "../user-header";

export interface PostCardTag {
  label: string;
  variant?: BadgeVariant;
}

export interface PostCardProps {
  user: { name: string; avatar?: string };
  timestamp: string;
  tags?: PostCardTag[];
  title: string;
  body: string;
  likes?: number;
  comments?: number;
  onLike?: () => void;
  onComment?: () => void;
  onSave?: () => void;
  className?: string;
}

/**
 * PostCard — UGC feed item with author, content, and actions.
 * @example
 * ```tsx
 * <PostCard
 *   user={{ name: "Taishi I" }}
 *   timestamp="2時間前"
 *   tags={[{ label: "テック", variant: "info" }]}
 *   title="React Aria でアクセシブルなコンポーネントを作る"
 *   body="React Aria Components を使ったデザインシステムの構築方法について..."
 *   likes={42}
 *   comments={12}
 * />
 * ```
 */
export function PostCard({
  user,
  timestamp,
  tags,
  title,
  body,
  likes = 0,
  comments = 0,
  onLike,
  onComment,
  onSave,
  className,
}: PostCardProps) {
  return (
    <Card variant="default" padding="md" className={className}>
      <Stack gap={4}>
        <HStack justify="between">
          <UserHeader name={user.name} avatar={user.avatar} subtitle={timestamp} />
          {tags && (
            <HStack gap={2}>
              {tags.map((tag) => (
                <Badge key={tag.label} variant={tag.variant}>{tag.label}</Badge>
              ))}
            </HStack>
          )}
        </HStack>

        <Stack gap={2}>
          <Heading level={3}>{title}</Heading>
          <Text variant="body-sm" color="secondary" as="p">{body}</Text>
        </Stack>

        <HStack gap={4}>
          <Button variant="ghost" size="sm" onPress={onLike}>❤️ {likes}</Button>
          <Button variant="ghost" size="sm" onPress={onComment}>💬 {comments}</Button>
          <Button variant="ghost" size="sm" onPress={onSave}>🔖 保存</Button>
        </HStack>
      </Stack>
    </Card>
  );
}
