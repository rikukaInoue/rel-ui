import { Dialog as AriaDialog, DialogTrigger, Modal, ModalOverlay, Heading, type DialogProps as AriaDialogProps } from "react-aria-components";
import { css, cx } from "#styled-system/css";

/** Danger variant requires confirmText */
export type DialogProps =
  | {
      variant?: "default" | "info";
      title: string;
      children: React.ReactNode;
      className?: string;
    }
  | {
      variant: "danger";
      title: string;
      confirmText: string;
      children: React.ReactNode;
      className?: string;
    };

export interface DialogContentProps extends AriaDialogProps {
  className?: string;
}

const overlayStyle = css({
  position: "fixed",
  inset: 0,
  bg: "dialog.overlay",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 50,
});

const modalStyle = css({
  bg: "dialog.bg",
  borderRadius: "xl",
  p: "6",
  width: "100%",
  maxWidth: "lg",
  mx: "4",
  boxShadow: "dialog.shadow",
});

const headingStyle = css({
  fontSize: "lg",
  fontWeight: "semibold",
  color: "text.primary",
  mb: "4",
});

const dangerHeadingStyle = css({ color: "text.error" });

/**
 * Dialog — modal dialog built on React Aria.
 * Danger variant requires confirmText for destructive actions.
 *
 * @example
 * ```tsx
 * <DialogTrigger>
 *   <Button>Open</Button>
 *   <DialogContent title="Confirm">
 *     <p>Are you sure?</p>
 *   </DialogContent>
 * </DialogTrigger>
 *
 * <DialogTrigger>
 *   <Button variant="danger">Delete</Button>
 *   <DialogContent variant="danger" title="削除の確認" confirmText="削除する">
 *     <p>この操作は取り消せません。</p>
 *   </DialogContent>
 * </DialogTrigger>
 * ```
 */
export function DialogContent(props: DialogProps) {
  const variant = props.variant ?? "default";
  return (
    <ModalOverlay className={overlayStyle}>
      <Modal className={cx(modalStyle, props.className)}>
        <AriaDialog>
          <Heading slot="title" className={cx(headingStyle, variant === "danger" && dangerHeadingStyle)}>
            {props.title}
          </Heading>
          {props.children}
        </AriaDialog>
      </Modal>
    </ModalOverlay>
  );
}

export { DialogTrigger };
