const resource = "stats";

export default ($axios) => ({
  get() {
    return $axios.get(`/${resource}`);
  },
});
