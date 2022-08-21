const resource = "countries";

export default ($axios) => ({
  get(payload) {
    const params = `?type=${payload.type}&id=${payload.id}`;
    return $axios.get(`/${resource}${params}`);
  },
});
