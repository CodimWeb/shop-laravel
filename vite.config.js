const path = require('path')
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    resolve: {
        // alias: {
        //     '@': path.resolve(__dirname, 'resources'),
        // }
    },
    plugins: [
        react(),
        laravel({
            input: ['resources/scss/app.scss', 'resources/js/index.jsx'],
            refresh: true,
        }),

    ],
    css: {
        devSourcemap: true,
    },
});
