import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
    server: {
        port: 4100,
        host: true
    },
    plugins: [react(), tsconfigPaths()],
})
