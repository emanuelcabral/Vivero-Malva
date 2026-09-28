import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // rutas relativas: sirve en GitHub Pages sin importar el nombre del repo
});
