const resource = "";

export default ($axios) => ({
  ping() {
    return $axios.get(`/${resource}`);
  },
});
