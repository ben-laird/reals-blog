import { resolve } from "path";
import dts from "vite-plugin-dts";
import { defineConfig } from "vitest/config";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "@typelaunch-turbo/external-vite",
      fileName: "@typelaunch-turbo/external-vite",
    },
  },
  test: {
    includeSource: ["src/**/*.{js,ts}"],
    coverage: { reporter: ["html-spa", "text"] },
  },
  define: {
    "import.meta.vitest": "undefined",
  },
  plugins: [dts()],
});
