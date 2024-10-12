import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import griffel from '@griffel/vite-plugin';


// https://vite.dev/config/
export default defineConfig({
    server: {
        port: 4200,
        host: true
    },
    plugins: [react(), tsconfigPaths()],
})
