const resource = "sessions";

export default ($axios) => ({
  get() {
    return $axios.get(`/${resource}`);
  },
  set(payload) {
    return $axios.post(`/${resource}`, payload)
  }
});
