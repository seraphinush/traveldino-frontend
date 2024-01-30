export default defineNuxtConfig({
  target: "server",
  ssr: true,
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1, maximum-scale=1",
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
    },
  },
  css: ["@/assets/css/main.css"],
  modules: ["@nuxtjs/sitemap"],
  runtimeConfig: {
    public: {
      ENVIRONMENT: process.env.ENVIRONMENT || undefined,
      API_BASE_URL: process.env.API_BASE_URL || "http://localhost:4000/",
      GGL_GTAG_ID: process.env.GGL_GTAG_ID || undefined,
    },
  },
  site: {
    url: process.env.WEB_BASE_URL || undefined,
  },
  sitemap: {
    sources: ["/api/sitemap"],
  },
});
