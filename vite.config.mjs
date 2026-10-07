import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";

const srcPath = fileURLToPath(new URL("./src/", import.meta.url));

export default defineConfig({
  plugins: [react()],
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: "apexcharts-vendor",
              test: /node_modules[\\/]apexcharts[\\/]/,
              maxSize: 350000,
              priority: 20,
            },
          ],
        },
      },
    },
  },
  resolve: {
    alias: [
      {
        find: /^(layouts|views|components|assets|variables)\//,
        replacement: `${srcPath}$1/`,
      },
      {
        find: /^routes\.jsx$/,
        replacement: `${srcPath}routes.jsx`,
      },
    ],
  },
});
