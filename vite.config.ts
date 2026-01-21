import { reactRouter } from "@react-router/dev/vite";
import wyw from "@wyw-in-js/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import devtoolsJson from "vite-plugin-devtools-json";

export default defineConfig({
  plugins: [wyw(), devtoolsJson(), reactRouter(), tsconfigPaths()],
  resolve:
    process.env.NODE_ENV === "development"
      ? {}
      : { alias: { "react-dom/server": "react-dom/server.node" } },
});
