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
    ],
    link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
  },

  css: ["@/assets/css/main.css"],

  plugins: ["~/plugins/repositories.js"],

  components: true,

  buildModules: [],

  modules: ["@nuxtjs/axios"],

  build: {},

  axios: {
    baseURL: process.env.API_BASE_URL || "http://localhost:4000/",
  },
  publicRuntimeConfig: {
    APP_URL: process.env.APP_URL || null,
    FAKE_APP_URL: process.env.FAKE_APP_URL || null,
  },
};
