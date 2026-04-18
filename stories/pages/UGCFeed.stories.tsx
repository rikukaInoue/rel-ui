import type { Meta, StoryObj } from "@storybook/react";
import {
  Page, Container, Section, Stack, HStack,
  Heading, Text, Button, Badge,
  Tabs, TabList, Tab, TabPanel,
  Pagination, EmptyState,
  PostCard,
} from "@rel-ui/components";

const FeedPage = () => (
  <Page bg="muted">
    <Container size="md">
      <Section>
        <HStack justify="between">
          <Heading level={1}>フィード</Heading>
          <Button variant="primary">新規投稿</Button>
        </HStack>
      </Section>

      <Section>
        <Tabs>
          <TabList aria-label="Feed tabs">
            <Tab id="latest">新着</Tab>
            <Tab id="popular">人気</Tab>
            <Tab id="following">フォロー中</Tab>
          </TabList>

          <TabPanel id="latest">
            <Stack gap={4}>
              <PostCard
                user={{ name: "Taishi I" }}
                timestamp="2時間前"
                tags={[{ label: "テック", variant: "info" }]}
                title="React Aria でアクセシブルなコンポーネントを作る"
                body="React Aria Components を使ったデザインシステムの構築方法について。キーボード操作、フォーカス管理、ARIA 属性が自動で付与されるので..."
                likes={42}
                comments={12}
              />

              <PostCard
                user={{ name: "Alice T" }}
                timestamp="5時間前"
                tags={[{ label: "デザイン", variant: "success" }]}
                title="Figma Variables とデザイントークンの同期"
                body="Figma MCP を使って Variables をコードのトークンに自動同期する仕組みを構築しました。"
                likes={28}
                comments={7}
              />

              <PostCard
                user={{ name: "Bob K" }}
                timestamp="1日前"
                tags={[
                  { label: "AWS", variant: "warning" },
                  { label: "認証", variant: "default" },
                ]}
                title="Cognito を隠した OIDC Provider の設計"
                body="マルチプロダクトで共通の認証基盤を作る際に、Cognito を Proxy IdP として隠蔽するパターンを解説します。"
                likes={65}
                comments={23}
              />

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
      </Section>
    </Container>
  </Page>
);

const meta = {
  title: "Pages/UGC Feed",
  component: FeedPage,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof FeedPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
