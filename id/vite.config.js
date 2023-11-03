import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
const APPLICATION_PORT = 5024;

export default defineConfig({
  build: {
    minify: false,
    cssCodeSplit: false,
    target: "esnext",
  },
  server: {
    port: APPLICATION_PORT,
  },
  preview: {
    port: APPLICATION_PORT, //port you want to serve this remote
  },
  plugins: [
    vue(),
    federation({
      name: "id-app", //name of remote you want to use on host side
      filename: "id-bundle.js", //filename after the build
      exposes: {
        "./Menu": "./src/components/Menu.vue",  //target component you want to serve as remote side. In our case is the entire application
      },
      shared: ["vue"],
    })
  ],
})
