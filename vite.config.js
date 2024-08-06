import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            input: "index.html",
            output: {
                manualChunks: undefined,
            },
        },
    },
    server: {
        historyApiFallback: true,
    },
});
