import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import glsl from "vite-plugin-glsl";

// Cosmos Drift — Vite configuration.
// vite-plugin-glsl lets us import .glsl/.vert/.frag files as strings
// and use #include directives to share noise / math helper chunks.
export default defineConfig({
  plugins: [
    react(),
    glsl({
      include: ["**/*.glsl", "**/*.vert", "**/*.frag"],
      warnDuplicatedImports: true,
      defaultExtension: "glsl",
      compress: false,
      watch: true,
    }),
  ],
  server: {
    host: true,
    port: 5173,
  },
  build: {
    target: "esnext",
    sourcemap: false,
  },
});
