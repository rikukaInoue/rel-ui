import type { Meta, StoryObj } from "@storybook/react";
import { AuthPageLayout, Stack, HStack, Input, Button, Divider, Text, Link, Alert } from "@rel-ui/components";
import { css } from "#styled-system/css";

const logoStyle = css({
  fontSize: "3xl",
  fontWeight: "bold",
  background: "linear-gradient(135deg, var(--colors-brand-600), var(--colors-brand-400))",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  color: "transparent",
  letterSpacing: "-0.02em",
});

const Logo = () => <span className={logoStyle}>rellf</span>;

const meta = {
  title: "Pages/Login",
  component: AuthPageLayout,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof AuthPageLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    logo: <Logo />,
    heading: "おかえりなさい",
    description: "アカウントにサインインしてください",
    form: (
      <Stack gap={6}>
        <Input label="メールアドレス" placeholder="you@example.com" />
        <Stack gap={2}>
          <Input label="パスワード" type="password" placeholder="パスワードを入力" />
          <HStack justify="end">
            <Link href="#" variant="muted">パスワードをお忘れですか？</Link>
          </HStack>
        </Stack>
        <Button variant="primary" fullWidth>ログイン</Button>
        <Divider label="または" />
        <Button variant="secondary" fullWidth>Google でログイン</Button>
      </Stack>
    ),
    footer: <>アカウントをお持ちでない方は <Link href="#">新規登録</Link></>,
  },
};

export const WithError: Story = {
  args: {
    logo: <Logo />,
    heading: "おかえりなさい",
    description: "アカウントにサインインしてください",
    form: (
      <Stack gap={6}>
        <Alert variant="error">メールアドレスまたはパスワードが正しくありません</Alert>
        <Input label="メールアドレス" placeholder="you@example.com" isInvalid />
        <Input label="パスワード" type="password" placeholder="パスワードを入力" isInvalid />
        <Button variant="primary" fullWidth>ログイン</Button>
      </Stack>
    ),
    footer: <>アカウントをお持ちでない方は <Link href="#">新規登録</Link></>,
  },
};

export const SignUp: Story = {
  args: {
    logo: <Logo />,
    heading: "アカウント作成",
    description: "無料ではじめましょう",
    form: (
      <Stack gap={6}>
        <HStack gap={4}>
          <Input label="姓" placeholder="井上" isRequired />
          <Input label="名" placeholder="太志" isRequired />
        </HStack>
        <Input label="メールアドレス" placeholder="you@example.com" isRequired />
        <Input label="パスワード" type="password" placeholder="8文字以上の英数字・記号" isRequired />
        <Text variant="caption" muted as="p">
          登録することで、<Link href="#">利用規約</Link>と<Link href="#">プライバシーポリシー</Link>に同意したものとみなされます。
        </Text>
        <Button variant="primary" fullWidth>アカウントを作成</Button>
        <Divider label="または" />
        <Button variant="secondary" fullWidth>Google で登録</Button>
      </Stack>
    ),
    footer: <>すでにアカウントをお持ちの方は <Link href="#">ログイン</Link></>,
  },
};

export const ForgotPassword: Story = {
  args: {
    logo: <Logo />,
    heading: "パスワードリセット",
    description: "登録したメールアドレスにリセット用のコードを送信します",
    form: (
      <Stack gap={6}>
        <Input label="メールアドレス" placeholder="you@example.com" isRequired />
        <Button variant="primary" fullWidth>リセットコードを送信</Button>
      </Stack>
    ),
    footer: <Link href="#">ログインに戻る</Link>,
  },
};

export const EmailVerification: Story = {
  args: {
    logo: <Logo />,
    heading: "メール確認",
    description: "入力したメールアドレスに確認コードを送信しました",
    form: (
      <Stack gap={6}>
        <Input label="確認コード" placeholder="6桁のコードを入力" isRequired />
        <Button variant="primary" fullWidth>確認</Button>
        <HStack justify="center">
          <Text variant="body-sm" muted>コードが届かない場合は </Text>
          <Link href="#">再送信</Link>
        </HStack>
      </Stack>
    ),
    footer: <Link href="#">ログインに戻る</Link>,
  },
};
