import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "/", // สำคัญสำหรับ Vercel SPA
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
