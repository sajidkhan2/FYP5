// import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  // Plugins section, if you want to keep the SWC plugin
  plugins: [react(), componentTagger()],

  // Resolve section for aliases
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // `@` alias points to `src/`
    },
  },

  // Server configuration for setting the port to 3000
  server: {
    port: 3000, // Port changed to 3000
    host: 'localhost', // Ensure it's only accessible on localhost
  }
});
