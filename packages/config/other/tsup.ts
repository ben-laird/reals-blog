import { defineConfig, type Options } from "tsup";

export const tsupOptions: Options = {
  dts: true,
  entry: {
    core: "src/index.ts",
  },
};

export const tsupConfig = defineConfig(tsupOptions);
