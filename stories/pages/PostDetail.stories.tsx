import type { Meta, StoryObj } from "@storybook/react";
import { Container, Stack, HStack, Card, Avatar, Badge, Button, TextArea, Divider, Alert, ActionBar } from "@rel-ui/components";

const PostDetailPage = () => {
  return (
    <div style={{ background: "#fafafa", minHeight: "100vh", paddingTop: 32, paddingBottom: 32 }}>
      <Container size="md">
        <Stack gap={6}>
          {/* Article */}
          <Card variant="default" padding="lg">
            <Stack gap={6}>
              <HStack gap={3}>
                <Avatar name="Taishi I" size="lg" />
                <Stack gap={1}>
                  <span style={{ fontWeight: 600 }}>Taishi I</span>
                  <span style={{ color: "#737373", fontSize: 13 }}>2026年4月18日 · 5分で読める</span>
                </Stack>
              </HStack>

              <div>
                <HStack gap={2} style={{ marginBottom: 16 }}>
                  <Badge variant="info">テック</Badge>
                  <Badge variant="default">React</Badge>
                  <Badge variant="default">デザインシステム</Badge>
                </HStack>
                <h1 style={{ fontSize: 28, fontWeight: "bold", lineHeight: 1.4, marginBottom: 16 }}>
                  React Aria でアクセシブルなコンポーネントを作る
                </h1>
                <div style={{ color: "#404040", fontSize: 15, lineHeight: 1.8 }}>
                  <p style={{ marginBottom: 16 }}>
                    React Aria Components を使ったデザインシステムの構築方法について解説します。
                    キーボード操作、フォーカス管理、ARIA 属性が自動で付与されるため、
                    アクセシビリティを意識した開発が大幅に楽になります。
                  </p>
                  <p style={{ marginBottom: 16 }}>
                    Panda CSS と組み合わせることで、型安全なスタイリングも実現。
                    デザイントークンを Figma Variables と同期し、一貫性のある UI を構築できます。
                  </p>
                  <p>
                    この記事では、Button、Input、Dialog の実装例を通して、
                    React Aria の使い方とデザインシステムへの統合方法を説明します。
                  </p>
                </div>
              </div>

              <HStack gap={4}>
                <Button variant="ghost">❤️ 42 いいね</Button>
                <Button variant="ghost">🔖 保存</Button>
                <Button variant="ghost">📤 共有</Button>
              </HStack>
            </Stack>
          </Card>

          {/* Comments */}
          <Card variant="default" padding="lg">
            <Stack gap={6}>
              <h2 style={{ fontSize: 18, fontWeight: "bold" }}>コメント (3)</h2>

              {/* Comment form */}
              <Stack gap={3}>
                <HStack gap={3}>
                  <Avatar name="You" size="sm" />
                  <TextArea placeholder="コメントを書く..." rows={2} />
                </HStack>
                <HStack justify="end">
                  <Button variant="primary" size="sm">コメントする</Button>
                </HStack>
              </Stack>

              <Divider />

              {/* Comment 1 */}
              <Stack gap={4}>
                <HStack gap={3}>
                  <Avatar name="Alice T" size="sm" />
                  <Stack gap={1}>
                    <HStack gap={2}>
                      <span style={{ fontWeight: 600, fontSize: 14 }}>Alice T</span>
                      <span style={{ color: "#a3a3a3", fontSize: 12 }}>1時間前</span>
                    </HStack>
                    <p style={{ fontSize: 14, color: "#404040", lineHeight: 1.6 }}>
                      とても参考になりました！React Aria は触ったことがなかったので、試してみます。
                    </p>
                  </Stack>
                </HStack>

                {/* Reply */}
                <div style={{ marginLeft: 44 }}>
                  <HStack gap={3}>
                    <Avatar name="Taishi I" size="sm" />
                    <Stack gap={1}>
                      <HStack gap={2}>
                        <span style={{ fontWeight: 600, fontSize: 14 }}>Taishi I</span>
                        <Badge variant="info">著者</Badge>
                        <span style={{ color: "#a3a3a3", fontSize: 12 }}>30分前</span>
                      </HStack>
                      <p style={{ fontSize: 14, color: "#404040", lineHeight: 1.6 }}>
                        ありがとうございます！Storybook にサンプルも上げてるので参考にしてください。
                      </p>
                    </Stack>
                  </HStack>
                </div>

                <Divider />

                {/* Comment 2 */}
                <HStack gap={3}>
                  <Avatar name="Bob K" size="sm" />
                  <Stack gap={1}>
                    <HStack gap={2}>
                      <span style={{ fontWeight: 600, fontSize: 14 }}>Bob K</span>
                      <span style={{ color: "#a3a3a3", fontSize: 12 }}>3時間前</span>
                    </HStack>
                    <p style={{ fontSize: 14, color: "#404040", lineHeight: 1.6 }}>
                      Panda CSS との組み合わせが良さそうですね。token の型安全がいい。
                    </p>
                  </Stack>
                </HStack>
              </Stack>
            </Stack>
          </Card>
        </Stack>
      </Container>
    </div>
  );
};

const meta = {
  title: "Pages/Post Detail",
  component: PostDetailPage,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof PostDetailPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
