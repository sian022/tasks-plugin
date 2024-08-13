import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  build: {
    rollupOptions: {
      input: {
        main: "src/index.jsx",
      },
      output: {
        dir: "dist",
        entryFileNames: "[name].js",
      },
    },
  },
});
