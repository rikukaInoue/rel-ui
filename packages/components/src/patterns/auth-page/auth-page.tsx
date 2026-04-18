import { css, cx } from "#styled-system/css";

export interface AuthPageLayoutProps {
  /** Logo or brand element */
  logo: React.ReactNode;
  /** Page heading ("ログイン", "アカウント作成" etc.) */
  heading: string;
  /** Form content (should be wrapped in Stack) */
  form: React.ReactNode;
  /** Footer text (e.g. "アカウントをお持ちでない方は...") */
  footer?: React.ReactNode;
  className?: string;
}

const pageStyle = css({
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  bg: "bg.muted",
  px: "4",
  py: "12",
});

const cardStyle = css({
  width: "100%",
  maxWidth: "sm",
  bg: "bg.surface",
  borderRadius: "xl",
  border: "1px solid",
  borderColor: "border.default",
  p: "8",
});

const logoWrap = css({ display: "flex", justifyContent: "center", mb: "6" });
const headingStyle = css({ fontSize: "2xl", fontWeight: "bold", color: "text.primary", textAlign: "center", mb: "8" });
const footerStyle = css({ fontSize: "sm", color: "text.muted", textAlign: "center", mt: "6" });

/**
 * AuthPageLayout — full-page auth layout (login, signup, reset password).
 * Structure is fixed by type — logo, heading, form, footer.
 *
 * @example
 * ```tsx
 * <AuthPageLayout
 *   logo={<img src="/logo.svg" alt="Logo" />}
 *   heading="ログイン"
 *   form={
 *     <Stack gap={6}>
 *       <Input label="メール" />
 *       <Input label="パスワード" type="password" />
 *       <Button variant="primary">ログイン</Button>
 *       <Divider label="または" />
 *       <Button variant="secondary">Google でログイン</Button>
 *     </Stack>
 *   }
 *   footer={<>アカウントをお持ちでない方は <a href="/signup">新規登録</a></>}
 * />
 * ```
 */
export function AuthPageLayout({ logo, heading, form, footer, className }: AuthPageLayoutProps) {
  return (
    <div className={cx(pageStyle, className)}>
      <div className={cardStyle}>
        <div className={logoWrap}>{logo}</div>
        <h1 className={headingStyle}>{heading}</h1>
        {form}
        {footer && <p className={footerStyle}>{footer}</p>}
      </div>
    </div>
  );
}
