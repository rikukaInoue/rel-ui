import { defineConfig } from "tsup";
import path from "path";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"],
  dts: true,
  clean: true,
  external: ["react", "react-dom"],
  esbuildOptions(options) {
    options.alias = {
      "#styled-system": path.resolve("src/styled-system"),
    };
  },
});
