import type { Meta, StoryObj } from "@storybook/react";
import {
  Page, Container, Section, Stack, HStack,
  Card, Heading, Text, Button, Badge, Avatar,
  TextArea, Divider,
  UserHeader, Comment,
} from "@rel-ui/components";

const PostDetailPage = () => (
  <Page bg="muted">
    <Container size="md">
      <Section>
        <Card variant="default" padding="lg">
          <Stack gap={6}>
            <UserHeader name="Taishi I" subtitle="2026年4月18日 · 5分で読める" size="lg" />

            <Stack gap={4}>
              <HStack gap={2}>
                <Badge variant="info">テック</Badge>
                <Badge>React</Badge>
                <Badge>デザインシステム</Badge>
              </HStack>

              <Heading level={1}>React Aria でアクセシブルなコンポーネントを作る</Heading>

              <Stack gap={4}>
                <Text variant="body" color="secondary" as="p">
                  React Aria Components を使ったデザインシステムの構築方法について解説します。
                  キーボード操作、フォーカス管理、ARIA 属性が自動で付与されるため、
                  アクセシビリティを意識した開発が大幅に楽になります。
                </Text>
                <Text variant="body" color="secondary" as="p">
                  Panda CSS と組み合わせることで、型安全なスタイリングも実現。
                  デザイントークンを Figma Variables と同期し、一貫性のある UI を構築できます。
                </Text>
                <Text variant="body" color="secondary" as="p">
                  この記事では、Button、Input、Dialog の実装例を通して、
                  React Aria の使い方とデザインシステムへの統合方法を説明します。
                </Text>
              </Stack>
            </Stack>

            <HStack gap={4}>
              <Button variant="ghost" size="sm">❤️ 42 いいね</Button>
              <Button variant="ghost" size="sm">🔖 保存</Button>
              <Button variant="ghost" size="sm">📤 共有</Button>
            </HStack>
          </Stack>
        </Card>
      </Section>

      <Section>
        <Card variant="default" padding="lg">
          <Stack gap={6}>
            <Heading level={2}>コメント (3)</Heading>

            <Stack gap={3}>
              <HStack gap={3} align="start">
                <Avatar name="You" size="sm" />
                <TextArea placeholder="コメントを書く..." rows={2} />
              </HStack>
              <HStack justify="end">
                <Button variant="primary" size="sm">コメントする</Button>
              </HStack>
            </Stack>

            <Divider />

            <Stack gap={6}>
              <Comment
                user={{ name: "Alice T" }}
                timestamp="1時間前"
                body="とても参考になりました！React Aria は触ったことがなかったので、試してみます。"
                replies={[
                  {
                    user: { name: "Taishi I" },
                    timestamp: "30分前",
                    badge: { label: "著者", variant: "info" },
                    body: "ありがとうございます！Storybook にサンプルも上げてるので参考にしてください。",
                  },
                ]}
              />

              <Divider />

              <Comment
                user={{ name: "Bob K" }}
                timestamp="3時間前"
                body="Panda CSS との組み合わせが良さそうですね。token の型安全がいい。"
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
