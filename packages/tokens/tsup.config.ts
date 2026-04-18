import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/panda-preset.ts"],
  format: ["esm"],
  dts: true,
  clean: true,
});
