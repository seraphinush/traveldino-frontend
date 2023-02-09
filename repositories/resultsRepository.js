const resource = "results";

export default ($axios) => ({
  get(payload) {
    const params =
      `?countryId=${payload.countryId}` + `&sessionId=${payload.sessionId}`;
    return $axios.get(`/${resource}${params}`);
  },
});
