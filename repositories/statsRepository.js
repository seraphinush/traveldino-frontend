const resource = "stats";

export default ($axios) => ({
  get(payload) {
    return $axios.get(`/${resource}?code=${payload}`);
  },
});
