require("dotenv").config();

export default {
  target: "static",

  head: {
    title: "TravelDino",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, maximum-scale=1",
      },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
      // open graph
      { property: "og:type", content: "website" },
      { property: "og:title", content: "TravelDino" },
      {
        property: "og:description",
        content: "당신에게 딱 맞는 여행지를 찾자!",
      },
      // { property: "og:image", content: "" },
      // { property: "og:url", content: "" },
    ],
    link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
    script: [
      {
        src: `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.GGL_ADSENSE_ID}`,
        crossorigin: "anonymous",
      },
    ],
  },

  css: ["@/assets/css/main.css"],

  plugins: ["~/plugins/repositories.js"],

  components: true,

  buildModules: [],

  modules: ["@nuxtjs/axios", "@nuxtjs/google-gtag"],

  build: {},

  axios: {
    baseURL: process.env.API_BASE_URL || "http://localhost:4000/",
  },

  'google-gtag': {
    id: process.env.GGL_GTAG_ID,
  },
};
