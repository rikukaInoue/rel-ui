import type { Meta, StoryObj } from "@storybook/react";
import {
  Page, Container, Section, Stack, HStack,
  Card, Heading, Text, Input, TextArea, Button, Avatar,
  Divider, Alert, ActionBar,
  Tabs, TabList, Tab, TabPanel,
} from "@rel-ui/components";

const SettingsPage = () => (
  <Page bg="muted">
    <Container size="md">
      <Section>
        <Heading level={1}>設定</Heading>
      </Section>

      <Section>
        <Alert variant="info">プロフィールの変更は保存後に反映されます。</Alert>
      </Section>

      <Section>
        <Tabs>
          <TabList aria-label="Settings tabs">
            <Tab id="profile">プロフィール</Tab>
            <Tab id="account">アカウント</Tab>
            <Tab id="notifications">通知</Tab>
          </TabList>

          <TabPanel id="profile">
            <Card variant="default" padding="lg">
              <Stack gap={8}>
                <HStack gap={6}>
                  <Avatar name="Taishi I" size="xl" />
                  <Stack gap={2}>
                    <Button variant="secondary" size="sm">画像を変更</Button>
                    <Text variant="caption" muted>JPG, PNG 最大 2MB</Text>
                  </Stack>
                </HStack>

                <Divider />

                <Stack gap={6}>
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
                  primary={<Button variant="primary">保存</Button>}
                  secondary={<Button variant="secondary">リセット</Button>}
                />
              </Stack>
            </Card>
          </TabPanel>

          <TabPanel id="account">
            <Stack gap={4}>
              <Card variant="default" padding="lg">
                <Stack gap={6}>
                  <Heading level={3}>パスワード変更</Heading>
                  <Input label="現在のパスワード" type="password" />
                  <Input label="新しいパスワード" type="password" />
                  <Input label="パスワードの確認" type="password" />
                  <HStack justify="end">
                    <Button variant="primary">パスワードを変更</Button>
                  </HStack>
                </Stack>
              </Card>

              <Card variant="outlined" padding="lg">
                <Stack gap={4}>
                  <Heading level={3}>危険な操作</Heading>
                  <Text variant="body-sm" color="secondary" as="p">
                    アカウントを削除すると、すべてのデータが完全に削除され、復元できません。
                  </Text>
                  <HStack>
                    <Button variant="danger">アカウントを削除</Button>
                  </HStack>
                </Stack>
              </Card>
            </Stack>
          </TabPanel>

          <TabPanel id="notifications">
            <Card variant="default" padding="lg">
              <Stack gap={4}>
                <Heading level={3}>通知設定</Heading>
                <Text variant="body-sm" muted as="p">通知コンポーネントは今後追加予定です。</Text>
              </Stack>
            </Card>
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
