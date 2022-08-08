const resource = "questions";

export default ($axios) => ({
  get(id = null) {
    if (!!id && !isNaN(id)) {
      return $axios.get(`/${resource}`/id)
    } else {
      return $axios.get(`/${resource}`);
    }
  },
});
