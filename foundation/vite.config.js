import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "host_app",  //app name
      remotes: {
        id_bundle: "http://localhost:5024/dist/assets/id-bundle.js", 
        offer_bundle: "http://localhost:5025/dist/assets/offer-bundle.js",  
      },
      shared: ["vue"],
    })
  ],
})
