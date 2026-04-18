import { Tabs as AriaTabs, TabList as AriaTabList, Tab as AriaTab, TabPanel as AriaTabPanel, type TabsProps as AriaTabsProps, type TabProps as AriaTabProps, type TabPanelProps as AriaTabPanelProps } from "react-aria-components";
import { css, cx } from "#styled-system/css";

export interface TabsProps extends AriaTabsProps {
  className?: string;
}
export interface TabProps extends AriaTabProps {
  className?: string;
}
export interface TabPanelProps extends AriaTabPanelProps {
  className?: string;
}

const tabListStyle = css({
  display: "flex",
  gap: "0",
  borderBottom: "1px solid",
  borderColor: "border.default",
});

const tabStyle = css({
  px: "4",
  py: "2",
  fontSize: "sm",
  fontWeight: "medium",
  color: "text.muted",
  cursor: "pointer",
  borderBottom: "2px solid transparent",
  transition: "all 0.15s ease",
  _hover: { color: "text.primary" },
  _selected: { color: "text.link", borderBottomColor: "border.focus" },
  _focusVisible: { outline: "2px solid", outlineColor: "border.focus", outlineOffset: "-2px" },
});

const panelStyle = css({ pt: "4" });

/**
 * Tabs — tabbed navigation built on React Aria.
 * @example
 * ```tsx
 * <Tabs>
 *   <TabList>
 *     <Tab id="posts">投稿</Tab>
 *     <Tab id="comments">コメント</Tab>
 *     <Tab id="likes">いいね</Tab>
 *   </TabList>
 *   <TabPanel id="posts">投稿一覧...</TabPanel>
 *   <TabPanel id="comments">コメント一覧...</TabPanel>
 *   <TabPanel id="likes">いいね一覧...</TabPanel>
 * </Tabs>
 * ```
 */
export function Tabs({ className, ...props }: TabsProps) {
  return <AriaTabs className={className} {...props} />;
}

export function TabList({ className, ...props }: { className?: string; children: React.ReactNode; "aria-label"?: string }) {
  return <AriaTabList className={cx(tabListStyle, className)} {...props} />;
}

export function Tab({ className, ...props }: TabProps) {
  return <AriaTab className={cx(tabStyle, className)} {...props} />;
}

export function TabPanel({ className, ...props }: TabPanelProps) {
  return <AriaTabPanel className={cx(panelStyle, className)} {...props} />;
}
