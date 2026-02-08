import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    define: {
        // Sanity needs this
        'process.env': process.env,
    },
    server: {
        port: 3333,
    },
    build: {
        outDir: '../../dist/apps/gs-app-admin',
        emptyOutDir: true,
    },
});
