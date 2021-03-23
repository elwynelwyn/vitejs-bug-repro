import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

export default ({ command, mode }) => {
    return defineConfig({
        logLevel: "info",
        plugins: [
            reactRefresh(),
        ],
        build: {
            assetsDir: "./",
            manifest: true,
            target: "es2015",
            cssCodeSplit: false,
            rollupOptions: {
                input: {
                    "src": "src/index.tsx"
                }
            },
        }
    });
};
