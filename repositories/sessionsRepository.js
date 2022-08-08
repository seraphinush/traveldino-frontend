const resource = "sessions";

export default ($axios) => ({
  get() {
    return $axios.get(`/${resource}`);
  },
});
