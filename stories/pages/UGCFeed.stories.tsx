import type { Meta, StoryObj } from "@storybook/react";
import { Container, Stack, HStack, Card, Avatar, Badge, Button, Tabs, TabList, Tab, TabPanel, Pagination, EmptyState, TextArea, Divider, Alert } from "@rel-ui/components";

const FeedPage = () => {
  return (
    <div style={{ background: "#fafafa", minHeight: "100vh", paddingTop: 32, paddingBottom: 32 }}>
      <Container size="md">
        <Stack gap={6}>
          {/* Header */}
          <HStack justify="between">
            <h1 style={{ fontSize: 24, fontWeight: "bold" }}>フィード</h1>
            <Button variant="primary">新規投稿</Button>
          </HStack>

          {/* Tabs */}
          <Tabs>
            <TabList aria-label="Feed tabs">
              <Tab id="latest">新着</Tab>
              <Tab id="popular">人気</Tab>
              <Tab id="following">フォロー中</Tab>
            </TabList>
            <TabPanel id="latest">
              <Stack gap={4}>
                {/* Post Card */}
                <Card variant="default" padding="md">
                  <Stack gap={4}>
                    <HStack gap={3} justify="between">
                      <HStack gap={3}>
                        <Avatar name="Taishi I" size="md" />
                        <Stack gap={1}>
                          <span style={{ fontWeight: 600, fontSize: 14 }}>Taishi I</span>
                          <span style={{ color: "#737373", fontSize: 12 }}>2時間前</span>
                        </Stack>
                      </HStack>
                      <Badge variant="info">テック</Badge>
                    </HStack>
                    <div>
                      <h3 style={{ fontWeight: 600, fontSize: 16, marginBottom: 8 }}>React Aria でアクセシブルなコンポーネントを作る</h3>
                      <p style={{ color: "#525252", fontSize: 14, lineHeight: 1.6 }}>
                        React Aria Components を使ったデザインシステムの構築方法について。
                        キーボード操作、フォーカス管理、ARIA 属性が自動で付与されるので...
                      </p>
                    </div>
                    <HStack gap={4}>
                      <span style={{ fontSize: 13, color: "#737373" }}>❤️ 42</span>
                      <span style={{ fontSize: 13, color: "#737373" }}>💬 12</span>
                      <span style={{ fontSize: 13, color: "#737373" }}>🔖 保存</span>
                    </HStack>
                  </Stack>
                </Card>

                {/* Post Card 2 */}
                <Card variant="default" padding="md">
                  <Stack gap={4}>
                    <HStack gap={3} justify="between">
                      <HStack gap={3}>
                        <Avatar name="Alice T" size="md" />
                        <Stack gap={1}>
                          <span style={{ fontWeight: 600, fontSize: 14 }}>Alice T</span>
                          <span style={{ color: "#737373", fontSize: 12 }}>5時間前</span>
                        </Stack>
                      </HStack>
                      <Badge variant="success">デザイン</Badge>
                    </HStack>
                    <div>
                      <h3 style={{ fontWeight: 600, fontSize: 16, marginBottom: 8 }}>Figma Variables とデザイントークンの同期</h3>
                      <p style={{ color: "#525252", fontSize: 14, lineHeight: 1.6 }}>
                        Figma MCP を使って Variables をコードのトークンに自動同期する仕組みを構築しました。
                      </p>
                    </div>
                    <HStack gap={4}>
                      <span style={{ fontSize: 13, color: "#737373" }}>❤️ 28</span>
                      <span style={{ fontSize: 13, color: "#737373" }}>💬 7</span>
                      <span style={{ fontSize: 13, color: "#737373" }}>🔖 保存</span>
                    </HStack>
                  </Stack>
                </Card>

                <Pagination current={1} total={10} onPageChange={() => {}} />
              </Stack>
            </TabPanel>
            <TabPanel id="popular">
              <EmptyState
                title="人気の投稿はまだありません"
                description="いいねが多い投稿がここに表示されます"
              />
            </TabPanel>
            <TabPanel id="following">
              <EmptyState
                title="フォロー中の投稿はありません"
                description="ユーザーをフォローすると、その人の投稿がここに表示されます"
                action={<Button variant="secondary">ユーザーを探す</Button>}
              />
            </TabPanel>
          </Tabs>
        </Stack>
      </Container>
    </div>
  );
};

const meta = {
  title: "Pages/UGC Feed",
  component: FeedPage,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof FeedPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
