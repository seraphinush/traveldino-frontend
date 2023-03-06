export default async ({ app }) => {
  if (process.client) {
    const gtagId = app.$config.GGL_GTAG_ID;

    const exist = Boolean(
      document.querySelector(
        `head > script[src="https://www.googletagmanager.com/gtag/js?id=${gtagId}"]`
      )
    );

    if (!exist) {
      const myScript = document.createElement("script");
      myScript.type = "text/javascript";
      myScript.src = `https://www.googletagmanager.com/gtag/js?id=${gtagId}`;
      myScript.async = true;
      document.head.appendChild(myScript);
    }

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", `${gtagId}`);
  }
};
