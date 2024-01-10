export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const { GGL_GTAG_ID } = config.public;
  if (!GGL_GTAG_ID)
    throw new Error("Environmental variable GGL_GTAG_ID is undefined");

  function gtag() {
    window.dataLayer.push(arguments);
  }

  window.dataLayer = window.dataLayer || [];

  gtag("js", new Date());
  gtag("config", GGL_GTAG_ID);

  useHead({
    script: [
      {
        src: `https://www.googletagmanager.com/gtag/js?id=${GGL_GTAG_ID}`,
        async: true,
      },
    ],
  });
});
