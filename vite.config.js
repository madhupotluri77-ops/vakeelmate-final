import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    // Proxy Anthropic API calls through your server.js to hide your API key
    proxy: {
      "/api/claude": {
        target: "http://localhost:3001",
        changeOrigin: true,
      },
    },
  },
});
