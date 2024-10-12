import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import griffel from "@griffel/vite-plugin";

export default defineConfig(({ command }) => ({
  server: {
    port: 4200,
    host: true,
  },
  plugins: [command === "build" && griffel(), react(), tsconfigPaths()],
}));
