import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// import { fileURLToPath, URL } from 'node:url'
// import path from 'path'

// const path = require('path')

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, "src"),
        }
    },
    server: {
        port: 3000,
        open: true,
    },
    // build: {
    //     outDir: 'dist',
    //     assetsDir: 'assets',
    //     sourceMap: false,
    // }
})