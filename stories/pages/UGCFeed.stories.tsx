import type { Meta, StoryObj } from "@storybook/react";
import {
  Page, Container, Section, Stack, HStack,
  Card, Heading, Text, Button, Badge, Input, Avatar, Divider,
  Tabs, TabList, Tab, TabPanel,
  Pagination, EmptyState,
  PostCard, UserHeader,
} from "@rel-ui/components";
import { css } from "#styled-system/css";

const headerBar = css({
  bg: "bg.surface",
  borderBottom: "1px solid",
  borderColor: "border.default",
  py: "3",
  px: "6",
  position: "sticky",
  top: 0,
  zIndex: 10,
});

const searchInput = css({ maxWidth: "320px" });

const sidebarCard = css({ position: "sticky", top: "80px" });

const FeedPage = () => (
  <Page bg="muted">
    {/* Top nav */}
    <div className={headerBar}>
      <Container size="xl">
        <HStack justify="between">
          <HStack gap={6}>
            <Text variant="label" bold color="link">rellf</Text>
            <Input placeholder="検索..." inputSize="sm" className={searchInput} />
          </HStack>
          <HStack gap={3}>
            <Button variant="primary" size="sm">新規投稿</Button>
            <Avatar name="Taishi I" size="sm" />
          </HStack>
        </HStack>
      </Container>
    </div>

    <Container size="xl">
      <HStack gap={8} align="start">
        {/* Main feed */}
        <div className={css({ flex: 1, py: "6" })}>
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
                    body="React Aria Components を使ったデザインシステムの構築方法について。キーボード操作、フォーカス管理、ARIA 属性が自動で付与されるため、アクセシビリティを意識した開発が楽になります。"
                    likes={42}
                    comments={12}
                  />

                  <PostCard
                    user={{ name: "Alice T" }}
                    timestamp="5時間前"
                    tags={[{ label: "デザイン", variant: "success" }]}
                    title="Figma Variables とデザイントークンの同期"
                    body="Figma MCP を使って Variables をコードのトークンに自動同期する仕組みを構築しました。rehype-mermaid との連携で、ドキュメントも自動生成。"
                    likes={28}
                    comments={7}
                  />

                  <PostCard
                    user={{ name: "Bob K" }}
                    timestamp="1日前"
                    tags={[
                      { label: "AWS", variant: "warning" },
                      { label: "認証" },
                    ]}
                    title="Cognito を隠した OIDC Provider の設計"
                    body="マルチプロダクトで共通の認証基盤を作る際に、Cognito を Proxy IdP として隠蔽するパターンを解説します。JWT のクレーム設計、auth_time / amr の実装まで。"
                    likes={65}
                    comments={23}
                  />

                  <PostCard
                    user={{ name: "Carol M" }}
                    timestamp="2日前"
                    tags={[{ label: "インフラ", variant: "error" }]}
                    title="Lambda@Edge + Google OIDC で PR プレビュー環境を保護する"
                    body="CloudFront を共有してサブドメインルーティングで PR 環境を分離。Google OIDC で認証し、allowedEmails でアクセス制限。デプロイ 2 分、月額 $1 未満。"
                    likes={51}
                    comments={15}
                  />

                  <HStack justify="center">
                    <Pagination current={1} total={10} onPageChange={() => {}} />
                  </HStack>
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
        </div>

        {/* Sidebar */}
        <div className={css({ width: "280px", flexShrink: 0, py: "6", display: { base: "none", lg: "block" } })}>
          <Stack gap={4} className={sidebarCard}>
            <Card variant="default" padding="md">
              <Stack gap={4}>
                <Text variant="label" bold>人気のタグ</Text>
                <HStack gap={2} wrap>
                  <Badge variant="info">テック</Badge>
                  <Badge variant="success">デザイン</Badge>
                  <Badge variant="warning">AWS</Badge>
                  <Badge variant="error">インフラ</Badge>
                  <Badge>React</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>認証</Badge>
                </HStack>
              </Stack>
            </Card>

            <Card variant="default" padding="md">
              <Stack gap={4}>
                <Text variant="label" bold>おすすめユーザー</Text>
                <Stack gap={3}>
                  <HStack justify="between">
                    <UserHeader name="Alice T" subtitle="デザイナー" size="sm" />
                    <Button variant="secondary" size="sm">フォロー</Button>
                  </HStack>
                  <HStack justify="between">
                    <UserHeader name="Bob K" subtitle="エンジニア" size="sm" />
                    <Button variant="secondary" size="sm">フォロー</Button>
                  </HStack>
                  <HStack justify="between">
                    <UserHeader name="Carol M" subtitle="SRE" size="sm" />
                    <Button variant="secondary" size="sm">フォロー</Button>
                  </HStack>
                </Stack>
              </Stack>
            </Card>

            <Text variant="caption" muted as="p">
              &copy; 2026 rellf. All rights reserved.
            </Text>
          </Stack>
        </div>
      </HStack>
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
