const path = require('path')
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources'),
        }
    },
    plugins: [
        laravel({
            input: ['resources/scss/app.scss', 'resources/js/main.js'],
            refresh: true,
        }),
        vue(),

    ],
    css: {
        devSourcemap: true,
    },
});
