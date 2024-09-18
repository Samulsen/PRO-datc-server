/// <reference types='vitest' />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { nxViteTsPaths } from "@nx/vite/plugins/nx-tsconfig-paths.plugin";
import dotenv from "dotenv";

dotenv.config();

console.log("VITE CONFIG", process.env.SERVE_PORT);

export default defineConfig({
  root: __dirname,
  cacheDir: "../../node_modules/.vite/apps/admin",

  server: {
    port: process.env.SERVE_PORT ? parseInt(process.env.SERVE_PORT) : 4201,
    host: true,
  },

  preview: {
    port: 4300,
    host: "localhost",
  },

  plugins: [react(), nxViteTsPaths()],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },

  build: {
    outDir: "../../dist/apps/admin",
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },

  test: {
    globals: true,
    cache: {
      dir: "../../node_modules/.vitest",
    },
    environment: "jsdom",
    include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],

    reporters: ["default"],
    coverage: {
      reportsDirectory: "../../coverage/apps/admin",
      provider: "v8",
    },
  },
});
