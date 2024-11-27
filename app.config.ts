import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
    ssr: true,
    devOverlay: true,
    middleware: './src/middleware.ts',
});
