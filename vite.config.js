import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    base: "/",
    build: {
        outDir: "dist",
        rollupOptions: {
            input: {
                main: "./src/main.jsx",
            },
        },
    },
    plugins: [react()],
});
