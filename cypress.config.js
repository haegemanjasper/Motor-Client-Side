import { defineConfig } from "cypress";

export default defineConfig({
    e2e: {
        baseUrl: "http://localhost:5173", // Zet de baseUrl hier
        setupNodeEvents(on, config) {
            // Implementeer node event listeners hier, indien nodig
        },
    },
});
