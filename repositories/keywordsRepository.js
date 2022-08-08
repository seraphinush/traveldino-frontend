const resource = "keywords";

export default ($axios) => ({
  get(payload) {
    return $axios.post(`/${resource}`, payload);
  },
});
