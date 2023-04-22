const resource = "stats";

export default ($axios) => ({
  get(payload) {
    const params = `?code=${payload}`;
    return $axios.get(`/${resource}${params}`);
  },
  set(type, payload) {
    const body = {
      id: payload,
      type: type,
    };
    return $axios.post(`/${resource}`, body);
  },
});
