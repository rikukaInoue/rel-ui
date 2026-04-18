import type { Meta, StoryObj } from "@storybook/react";
import { AuthPageLayout, Stack, Input, Button, Divider, Text, Link } from "@rel-ui/components";

const meta = {
  title: "Pages/Login",
  component: AuthPageLayout,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof AuthPageLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    logo: <Text variant="label" bold>🔒 rellf</Text>,
    heading: "ログイン",
    form: (
      <Stack gap={6}>
        <Input label="メールアドレス" placeholder="you@example.com" />
        <Input label="パスワード" type="password" placeholder="パスワードを入力" />
        <Button variant="primary">ログイン</Button>
        <Divider label="または" />
        <Button variant="secondary">Google でログイン</Button>
      </Stack>
    ),
    footer: <>アカウントをお持ちでない方は <Link href="#">新規登録</Link></>,
  },
};

export const WithError: Story = {
  args: {
    logo: <Text variant="label" bold>🔒 rellf</Text>,
    heading: "ログイン",
    form: (
      <Stack gap={6}>
        <Input label="メールアドレス" placeholder="you@example.com" isInvalid errorMessage="メールアドレスが正しくありません" />
        <Input label="パスワード" type="password" placeholder="パスワードを入力" />
        <Button variant="primary">ログイン</Button>
      </Stack>
    ),
  },
};

export const SignUp: Story = {
  args: {
    logo: <Text variant="label" bold>🔒 rellf</Text>,
    heading: "アカウント作成",
    form: (
      <Stack gap={6}>
        <Input label="メールアドレス" placeholder="you@example.com" isRequired />
        <Input label="パスワード" type="password" placeholder="8文字以上" isRequired />
        <Input label="パスワード確認" type="password" placeholder="もう一度入力" isRequired />
        <Button variant="primary">アカウントを作成</Button>
        <Divider label="または" />
        <Button variant="secondary">Google で登録</Button>
      </Stack>
    ),
    footer: <>すでにアカウントをお持ちの方は <Link href="#">ログイン</Link></>,
  },
};

export const ForgotPassword: Story = {
  args: {
    logo: <Text variant="label" bold>🔒 rellf</Text>,
    heading: "パスワードリセット",
    form: (
      <Stack gap={6}>
        <Text variant="body-sm" color="secondary" as="p">
          登録したメールアドレスを入力してください。パスワードリセット用のコードを送信します。
        </Text>
        <Input label="メールアドレス" placeholder="you@example.com" isRequired />
        <Button variant="primary">リセットコードを送信</Button>
      </Stack>
    ),
    footer: <><Link href="#">ログインに戻る</Link></>,
  },
};
