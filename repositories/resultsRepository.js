const resource = "results";

export default ($axios) => ({
  get(payload) {
    return $axios.post(`/${resource}`, payload);
  },
});
