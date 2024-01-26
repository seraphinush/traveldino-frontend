export default defineSitemapEventHandler(async (e) => {
  if (!process.env.API_BASE_URL) return [];

  const res = await fetch(process.env.API_BASE_URL + "/countries/ids");
  const data = await res.json();
  const ret = data.map((x) => {
    return {
      loc: `/results/${x}`,
      lastmod: new Date(),
    };
  });

  return ret;
});
