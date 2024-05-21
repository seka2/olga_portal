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
    },
  },
  plugins: [svgr(), react()],
});
