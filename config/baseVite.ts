import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import griffel from "@griffel/vite-plugin";

defineConfig(({ command }) => ({
  server: {
    host: true,
  },
  plugins: [command === "build" && griffel()],
}));
