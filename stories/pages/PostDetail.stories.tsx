import type { Meta, StoryObj } from "@storybook/react";
import {
  Page, Container, Section, Stack, HStack,
  Card, Heading, Text, Button, Badge, Avatar,
  TextArea, Divider, Link,
  UserHeader, Comment,
} from "@rel-ui/components";
import { css } from "#styled-system/css";

const headerBar = css({
  bg: "bg.surface",
  borderBottom: "1px solid",
  borderColor: "border.default",
  py: "3",
  px: "6",
});

const articleBody = css({
  lineHeight: "1.8",
  "& p": { mb: "4" },
});

const PostDetailPage = () => (
  <Page bg="muted">
    {/* Top nav */}
    <div className={headerBar}>
      <Container size="xl">
        <HStack justify="between">
          <HStack gap={4}>
            <Link href="#"><Text variant="label" bold color="link">← フィードに戻る</Text></Link>
          </HStack>
          <HStack gap={3}>
            <Button variant="ghost" size="sm">🔖 保存</Button>
            <Button variant="ghost" size="sm">📤 共有</Button>
          </HStack>
        </HStack>
      </Container>
    </div>

    <Container size="md">
      {/* Article */}
      <Section gap={6}>
        <Card variant="default" padding="lg">
          <Stack gap={8}>
            {/* Meta */}
            <Stack gap={4}>
              <HStack gap={2} wrap>
                <Badge variant="info">テック</Badge>
                <Badge>React</Badge>
                <Badge>デザインシステム</Badge>
              </HStack>

              <Heading level={1}>React Aria でアクセシブルなコンポーネントを作る</Heading>

              <HStack justify="between">
                <UserHeader name="Taishi I" subtitle="2026年4月18日" size="md" badge={{ label: "著者", variant: "info" }} />
                <Text variant="caption" muted>5分で読める</Text>
              </HStack>
            </Stack>

            <Divider />

            {/* Body */}
            <div className={articleBody}>
              <Text variant="body" color="secondary" as="p">
                React Aria Components を使ったデザインシステムの構築方法について解説します。
                キーボード操作、フォーカス管理、ARIA 属性が自動で付与されるため、
                アクセシビリティを意識した開発が大幅に楽になります。
              </Text>
              <Text variant="body" color="secondary" as="p">
                Panda CSS と組み合わせることで、型安全なスタイリングも実現。
                デザイントークンを Figma Variables と同期し、一貫性のある UI を構築できます。
                セマンティックトークンの L1 → L2 → L3 の3層構造が、
                テーマの変更やダークモード対応を容易にします。
              </Text>
              <Text variant="body" color="secondary" as="p">
                この記事では、Button、Input、Dialog の実装例を通して、
                React Aria の使い方とデザインシステムへの統合方法を説明します。
                TypeScript の型システムを活用したルール強制の仕組みも紹介します。
              </Text>
            </div>

            <Divider />

            {/* Actions */}
            <HStack justify="between">
              <HStack gap={3}>
                <Button variant="secondary" size="sm">❤️ 42 いいね</Button>
                <Button variant="ghost" size="sm">💬 3 コメント</Button>
              </HStack>
              <HStack gap={2}>
                <Button variant="ghost" size="sm">🔖 保存</Button>
                <Button variant="ghost" size="sm">📤 共有</Button>
              </HStack>
            </HStack>
          </Stack>
        </Card>
      </Section>

      {/* Comments */}
      <Section gap={8}>
        <Card variant="default" padding="lg">
          <Stack gap={6}>
            <Heading level={2}>コメント (3)</Heading>

            {/* Comment form */}
            <Card variant="outlined" padding="md">
              <Stack gap={3}>
                <HStack gap={3} align="start">
                  <Avatar name="You" size="sm" />
                  <TextArea placeholder="コメントを書く..." rows={2} />
                </HStack>
                <HStack justify="end">
                  <Button variant="primary" size="sm">コメントする</Button>
                </HStack>
              </Stack>
            </Card>

            <Stack gap={6}>
              <Comment
                user={{ name: "Alice T" }}
                timestamp="1時間前"
                body="とても参考になりました！React Aria は触ったことがなかったので、試してみます。Panda CSS との組み合わせも気になります。"
                replies={[
                  {
                    user: { name: "Taishi I" },
                    timestamp: "30分前",
                    badge: { label: "著者", variant: "info" },
                    body: "ありがとうございます！Storybook にサンプルも上げてるので参考にしてください。rel-ui で検索すると出てきます。",
                  },
                ]}
              />

              <Divider />

              <Comment
                user={{ name: "Bob K" }}
                timestamp="3時間前"
                body="Panda CSS との組み合わせが良さそうですね。token の型安全がいい。うちのプロジェクトでも導入を検討します。"
              />
            </Stack>
          </Stack>
        </Card>
      </Section>
    </Container>
  </Page>
);

const meta = {
  title: "Pages/Post Detail",
  component: PostDetailPage,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof PostDetailPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
