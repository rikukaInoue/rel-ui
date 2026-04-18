import { css, cx } from "#styled-system/css";
import { Stack } from "../../stack";
import { Text } from "../../text";
import { UserHeader } from "../user-header";
import type { BadgeVariant } from "../../badge";

export interface CommentProps {
  user: { name: string; avatar?: string };
  timestamp: string;
  badge?: { label: string; variant?: BadgeVariant };
  body: string;
  replies?: CommentProps[];
  className?: string;
}

const replyIndent = css({ pl: "12" });

/**
 * Comment — user comment with nested replies.
 * @example
 * ```tsx
 * <Comment
 *   user={{ name: "Alice T" }}
 *   timestamp="1時間前"
 *   body="とても参考になりました！"
 *   replies={[
 *     {
 *       user: { name: "Taishi I" },
 *       timestamp: "30分前",
 *       badge: { label: "著者", variant: "info" },
 *       body: "ありがとうございます！",
 *     },
 *   ]}
 * />
 * ```
 */
export function Comment({ user, timestamp, badge, body, replies, className }: CommentProps) {
  return (
    <Stack gap={3} className={className}>
      <UserHeader name={user.name} avatar={user.avatar} subtitle={timestamp} badge={badge} size="sm" />
      <Text variant="body-sm" as="p" color="secondary">{body}</Text>
      {replies && replies.length > 0 && (
        <div className={replyIndent}>
          <Stack gap={4}>
            {replies.map((reply, i) => (
              <Comment key={i} {...reply} />
            ))}
          </Stack>
        </div>
      )}
    </Stack>
  );
}
