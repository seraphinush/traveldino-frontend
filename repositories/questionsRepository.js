const resource = "questions";

export default ($axios) => ({
  get(payload = null) {
    if (!!payload && !isNaN(payload)) {
      return $axios.get(`/${resource}/${payload}`)
    } else {
      return $axios.get(`/${resource}`);
    }
  },
});
