const resource = "share";

export default ($axios) => ({
  set(payload) {
    return $axios.post(`/${resource}`, { id: payload });
  },
});
