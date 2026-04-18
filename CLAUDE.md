# rel-ui Design System

## Overview

Figma Variables → Panda CSS tokens → React components のデザインシステム。

## Monorepo Structure

```
packages/
  tokens/       → デザイントークン（Figma Variables から同期）
  components/   → React コンポーネント（Panda CSS）
  docs/         → Storybook（開発・VRT）
```

## Commands

```bash
pnpm install          # 依存インストール
pnpm build            # 全パッケージビルド
pnpm dev              # Storybook 起動
pnpm tokens:sync      # Figma Variables → tokens 同期
pnpm test:vrt         # Visual Regression Test 実行
pnpm test:vrt:update  # VRT スナップショット更新
```

## Component Development Rules

### ファイル構成

新しいコンポーネントを作るときは以下のファイルを作成:

```
packages/components/src/{component-name}/
  {component-name}.tsx    # コンポーネント本体
  index.ts                # re-export
```

```
packages/docs/stories/
  {component-name}.stories.tsx   # Storybook ストーリー
```

### コンポーネントの規約

1. **forwardRef** を使い、DOM ref を公開する
2. **className** prop を受け取り、`cx()` でマージする
3. **Variant / Size** は型定義 + Record<Variant, string> で管理
4. **JSDoc** に `@example` を含める（Claude Code が参照しやすい）
5. **displayName** を設定する

```tsx
// テンプレート
import { type HTMLAttributes, forwardRef } from "react";
import { css, cx } from "../../styled-system/css";

export type ComponentVariant = "primary" | "secondary";

export interface ComponentProps extends HTMLAttributes<HTMLDivElement> {
  variant?: ComponentVariant;
}

/**
 * Component description.
 *
 * @example
 * ```tsx
 * <Component variant="primary">Hello</Component>
 * ```
 */
export const Component = forwardRef<HTMLDivElement, ComponentProps>(
  ({ variant = "primary", className, ...props }, ref) => {
    return <div ref={ref} className={cx(baseStyle, variantStyles[variant], className)} {...props} />;
  },
);

Component.displayName = "Component";
```

### Panda CSS の使い方

- `css()` でスタイル定義（静的、ビルド時抽出）
- `cx()` でクラス名マージ
- トークンは `@rel-ui/tokens` のプリセット経由で使用

```tsx
// OK: 静的な css()
const style = css({ bg: "brand.600", color: "white" });

// NG: 動的な style prop（Panda CSS では非推奨）
<div style={{ backgroundColor: color }} />
```

### トークンの参照

トークンはすべて `packages/tokens/src/` に定義されている。
Panda CSS 経由で使うので、直接 import する必要はない。

```tsx
// Panda CSS のトークン参照
css({ color: "brand.600" })      // colors.brand.600
css({ px: "4" })                 // spacing.4
css({ fontSize: "lg" })          // fontSizes.lg
css({ borderRadius: "md" })     // radii.md
```

## Token Update Flow

```
Figma Variables
  ↓ pnpm tokens:sync (FIGMA_TOKEN, FIGMA_FILE_ID)
packages/tokens/src/*.ts
  ↓ pnpm build
packages/tokens/dist/
  ↓ panda.config.ts の preset で参照
packages/components/ の css() でトークン利用可能
```

トークンを手動で編集しない。必ず Figma から同期する。

## VRT (Visual Regression Testing)

Storybook のストーリーに対して Playwright でスクリーンショットを撮り、差分を検出する。

```bash
pnpm test:vrt           # テスト実行（差分があればfail）
pnpm test:vrt:update    # スナップショット更新
```

CI では PR ごとに VRT を実行し、意図しない見た目の変更を防ぐ。
