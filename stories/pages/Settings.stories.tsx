import type { Meta, StoryObj } from "@storybook/react";
import {
  Page, Container, Section, Stack, HStack,
  Card, Heading, Text, Input, TextArea, Button, Avatar, Badge,
  Divider, Alert, ActionBar, Link,
  Tabs, TabList, Tab, TabPanel,
} from "@rel-ui/components";
import { css } from "#styled-system/css";

const headerBar = css({
  bg: "bg.surface",
  borderBottom: "1px solid",
  borderColor: "border.default",
  py: "3",
  px: "6",
});

const dangerZone = css({
  borderColor: "border.error",
});

const SettingsPage = () => (
  <Page bg="muted">
    {/* Top nav */}
    <div className={headerBar}>
      <Container size="xl">
        <HStack justify="between">
          <HStack gap={4}>
            <Link href="#"><Text variant="label" bold color="link">← 戻る</Text></Link>
          </HStack>
          <Avatar name="Taishi I" size="sm" />
        </HStack>
      </Container>
    </div>

    <Container size="md">
      <Section gap={6}>
        <Stack gap={2}>
          <Heading level={1}>設定</Heading>
          <Text variant="body-sm" muted as="p">アカウントとプロフィールの管理</Text>
        </Stack>
      </Section>

      <Section>
        <Tabs>
          <TabList aria-label="Settings tabs">
            <Tab id="profile">プロフィール</Tab>
            <Tab id="account">アカウント</Tab>
            <Tab id="plan">プラン</Tab>
          </TabList>

          <TabPanel id="profile">
            <Card variant="default" padding="lg">
              <Stack gap={8}>
                {/* Avatar */}
                <HStack gap={6}>
                  <Avatar name="Taishi I" size="xl" ring />
                  <Stack gap={3}>
                    <Heading level={3}>プロフィール画像</Heading>
                    <Text variant="caption" muted as="p">JPG, PNG 最大 2MB</Text>
                    <HStack gap={2}>
                      <Button variant="secondary" size="sm">画像を変更</Button>
                      <Button variant="ghost" size="sm">削除</Button>
                    </HStack>
                  </Stack>
                </HStack>

                <Divider />

                {/* Form */}
                <Stack gap={6}>
                  <Heading level={3}>基本情報</Heading>
                  <HStack gap={4}>
                    <Input label="姓" placeholder="井上" />
                    <Input label="名" placeholder="太志" />
                  </HStack>
                  <Input label="ユーザー名" placeholder="@taishi" />
                  <Input label="メールアドレス" placeholder="taishi@example.com" />
                  <Input label="ウェブサイト" placeholder="https://rikuka.dev" />
                  <TextArea label="自己紹介" placeholder="自己紹介を入力..." rows={3} />
                </Stack>

                <Divider />

                <ActionBar
                  primary={<Button variant="primary">変更を保存</Button>}
                  secondary={<Button variant="ghost">リセット</Button>}
                />
              </Stack>
            </Card>
          </TabPanel>

          <TabPanel id="account">
            <Stack gap={6}>
              <Card variant="default" padding="lg">
                <Stack gap={6}>
                  <Stack gap={2}>
                    <Heading level={3}>パスワード変更</Heading>
                    <Text variant="body-sm" muted as="p">定期的にパスワードを変更することをおすすめします</Text>
                  </Stack>
                  <Input label="現在のパスワード" type="password" />
                  <Input label="新しいパスワード" type="password" />
                  <Input label="パスワードの確認" type="password" />
                  <HStack justify="end">
                    <Button variant="primary">パスワードを変更</Button>
                  </HStack>
                </Stack>
              </Card>

              <Card variant="outlined" padding="lg" className={dangerZone}>
                <Stack gap={4}>
                  <Stack gap={2}>
                    <HStack gap={2}>
                      <Heading level={3}>アカウント削除</Heading>
                      <Badge variant="error">危険</Badge>
                    </HStack>
                    <Text variant="body-sm" color="secondary" as="p">
                      アカウントを削除すると、すべてのデータ（投稿、コメント、設定）が完全に削除され、復元できません。
                    </Text>
                  </Stack>
                  <ActionBar
                    danger={<Button variant="danger">アカウントを削除</Button>}
                    primary={<span />}
                  />
                </Stack>
              </Card>
            </Stack>
          </TabPanel>

          <TabPanel id="plan">
            <Stack gap={4}>
              <Card variant="default" padding="lg">
                <Stack gap={4}>
                  <HStack justify="between">
                    <Stack gap={1}>
                      <HStack gap={2}>
                        <Heading level={3}>Pro プラン</Heading>
                        <Badge variant="success">有効</Badge>
                      </HStack>
                      <Text variant="body-sm" muted as="p">次回請求日: 2026年5月1日</Text>
                    </Stack>
                    <Text variant="label" bold>¥980 / 月</Text>
                  </HStack>

                  <Divider />

                  <Stack gap={3}>
                    <Text variant="label">含まれる機能:</Text>
                    <Stack gap={2}>
                      <Text variant="body-sm" color="secondary">✓ 案件数 無制限</Text>
                      <Text variant="body-sm" color="secondary">✓ ストレージ 50GB</Text>
                      <Text variant="body-sm" color="secondary">✓ レポート機能</Text>
                      <Text variant="body-sm" color="secondary">✓ API アクセス</Text>
                      <Text variant="body-sm" muted>✗ SSO</Text>
                      <Text variant="body-sm" muted>✗ 監査ログ</Text>
                    </Stack>
                  </Stack>

                  <Divider />

                  <HStack justify="between">
                    <Button variant="secondary">プランを変更</Button>
                    <Link href="#" variant="muted">請求履歴</Link>
                  </HStack>
                </Stack>
              </Card>
            </Stack>
          </TabPanel>
        </Tabs>
      </Section>
    </Container>
  </Page>
);

const meta = {
  title: "Pages/Settings",
  component: SettingsPage,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof SettingsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
