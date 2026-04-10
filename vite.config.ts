import { defineConfig } from "vite"
import { sveltekit } from "@sveltejs/kit/vite"

export default defineConfig(async () => ({
    plugins: [sveltekit()],

    server: {
        port: 3000,
    },
}))
