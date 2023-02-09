const resource = "stats";

export default ($axios) => ({
  get(payload) {
    const params = `?code=${payload}`;
    return $axios.get(`/${resource}${params}`);
  },
});
