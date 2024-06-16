import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      pages: path.resolve(__dirname, "./src/pages"),
      widgets: path.resolve(__dirname, "./src/widgets"),
      entities: path.resolve(__dirname, "./src/entities"),
      features: path.resolve(__dirname, "./src/features"),
      shared: path.resolve(__dirname, "./src/shared"),
      http: path.resolve(__dirname, "./src/http"),
      hooks: path.resolve(__dirname, "./src/hooks"),
      reducers: path.resolve(__dirname, "./src/reducers"),
      consts: path.resolve(__dirname, "./src/consts"),
      types: path.resolve(__dirname, "./src/types"),
    },
  },
  plugins: [svgr(), react()],
});
