import { css, cx } from "#styled-system/css";

export interface AuthPageLayoutProps {
  logo: React.ReactNode;
  heading: string;
  description?: string;
  form: React.ReactNode;
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
  background: "linear-gradient(180deg, var(--colors-bg-muted) 0%, var(--colors-bg-surface) 100%)",
});

const cardStyle = css({
  width: "100%",
  maxWidth: "420px",
  bg: "bg.surface",
  borderRadius: "xl",
  border: "1px solid",
  borderColor: "border.default",
  p: "10",
  boxShadow: "0 4px 6px -1px rgba(0,0,0,0.07), 0 10px 15px -3px rgba(0,0,0,0.05)",
});

const logoWrap = css({ display: "flex", justifyContent: "center", mb: "8" });
const headingStyle = css({ fontSize: "2xl", fontWeight: "bold", color: "text.primary", textAlign: "center", mb: "2" });
const descStyle = css({ fontSize: "sm", color: "text.muted", textAlign: "center", mb: "8" });
const noDescMb = css({ mb: "8" });
const footerStyle = css({
  fontSize: "sm",
  color: "text.muted",
  textAlign: "center",
  mt: "8",
  pt: "6",
  borderTop: "1px solid",
  borderColor: "border.default",
});

/**
 * AuthPageLayout — full-page auth layout with gradient bg and card shadow.
 * @example
 * ```tsx
 * <AuthPageLayout
 *   logo={<Logo />}
 *   heading="ログイン"
 *   description="アカウントにサインインしてください"
 *   form={<Stack gap={6}>...</Stack>}
 *   footer={<>新規登録は <Link href="/signup">こちら</Link></>}
 * />
 * ```
 */
export function AuthPageLayout({ logo, heading, description, form, footer, className }: AuthPageLayoutProps) {
  return (
    <div className={cx(pageStyle, className)}>
      <div className={cardStyle}>
        <div className={logoWrap}>{logo}</div>
        <h1 className={cx(headingStyle, !description && noDescMb)}>{heading}</h1>
        {description && <p className={descStyle}>{description}</p>}
        {form}
        {footer && <p className={footerStyle}>{footer}</p>}
      </div>
    </div>
  );
}
