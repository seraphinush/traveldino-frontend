const resource = "countries";

export default ($axios) => ({
  get(payload) {
    const params = `?id=${payload.id}`;
    return $axios.get(`/${resource}${params}`);
  },
});
