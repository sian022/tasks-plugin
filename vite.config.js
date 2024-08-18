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
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith(".css")) {
            return "assets/main.css"; // Always output as main.css
          }
          return "assets/[name].[ext]";
        },
        entryFileNames: "[name].js",
      },
    },
  },
});
