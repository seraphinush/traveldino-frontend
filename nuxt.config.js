export default defineNuxtConfig({
  target: "server",
  ssr: true,
  app: {
    head: {
      meta: [
        {
          charset: "utf-8",
          viewport: "width=device-width, initial-scale=1, maximum-scale=1",
        },
        {
          name: "google-adsense-account",
          content: process.env.GGL_ADSENSE_ID,
        },
      ],
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
      script: [
        {
          hid: "gtm",
          innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${process.env.GGL_GTM_ID}')`,
        },
      ],
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
