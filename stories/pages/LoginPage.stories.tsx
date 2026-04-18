import type { Meta, StoryObj } from "@storybook/react";
import { AuthPageLayout, Stack, Input, Button, Divider } from "@rel-ui/components";

const meta = {
  title: "Pages/Login",
  component: AuthPageLayout,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof AuthPageLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    logo: <div style={{ fontSize: 24, fontWeight: "bold" }}>🔒 rellf</div>,
    heading: "ログイン",
    form: (
      <Stack gap={6}>
        <Input label="メールアドレス" placeholder="you@example.com" />
        <Input label="パスワード" type="password" placeholder="パスワードを入力" />
        <Button variant="primary" style={{ width: "100%" }}>ログイン</Button>
        <Divider label="または" />
        <Button variant="secondary" style={{ width: "100%" }}>Google でログイン</Button>
      </Stack>
    ),
    footer: <>アカウントをお持ちでない方は <a href="#">新規登録</a></>,
  },
};

export const WithError: Story = {
  args: {
    logo: <div style={{ fontSize: 24, fontWeight: "bold" }}>🔒 rellf</div>,
    heading: "ログイン",
    form: (
      <Stack gap={6}>
        <Input label="メールアドレス" placeholder="you@example.com" isInvalid errorMessage="メールアドレスが正しくありません" />
        <Input label="パスワード" type="password" placeholder="パスワードを入力" />
        <Button variant="primary" style={{ width: "100%" }}>ログイン</Button>
      </Stack>
    ),
  },
};
