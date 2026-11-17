import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [vue(), tailwindcss()],
    base: './', // Penting! Agar aset/path tidak rusak saat di-build ke file lokal
    server: {
        port: 5173,
        strictPort: true, // Mengunci port di 5173
    },
});