/* DEPRECATED */

const resource = "like";

export default ($axios) => ({
  set(payload) {
    return $axios.post(`/${resource}`, { id: payload });
  },
});
