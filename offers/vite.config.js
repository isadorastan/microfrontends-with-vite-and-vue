import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/

const APPLICATION_PORT = 5025;

export default defineConfig({
  build: {
    minify: false,
    cssCodeSplit: false,
    target: "esnext",
  },
  server: {
    port: APPLICATION_PORT
  },
  preview: {
    port: APPLICATION_PORT, //port you want to serve this remote
  },
  plugins: [
    vue(),
    federation({
      name: "offer-app", //name of remote you want to use on host side
      filename: "offer-bundle.js", //filename after the build
      exposes: {
        "./Filter": "./src/components/Filter.vue",  //target component you want to serve as remote side. In our case is the entire application
        "./Button": "./src/components/Button.vue"
      },
      shared: ["vue"],
    })
  ],
})
