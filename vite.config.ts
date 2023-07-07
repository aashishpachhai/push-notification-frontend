import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
export default defineConfig({
  // other configuration options...
  // other configuration options...
  plugins: [
    // other plugins...
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "robots.txt", "safari-pinned-tab.svg"],
      manifest: {
        name: "My React Vite App",
        short_name: "My App",
        theme_color: "#ffffff",
        start_url: "/",

        icons: [
          // add icons configuration here
          {
            src: "vite.svg",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      },
    }) as any,
  ],
});
