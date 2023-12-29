import FetchFactory from "../factory";

class statsModule extends FetchFactory {
  RESOURCE = "/stats";

  async get(payload, asyncDataOptions) {
    const params = `?code=${payload}`;
    return useAsyncData(() => {
      const fetchOptions = {};
      return this.call(
        "GET",
        `${this.RESOURCE}${params}`,
        undefined,
        fetchOptions
      );
    }, asyncDataOptions);
  }

  async set(type, id, asyncDataOptions) {
    return useAsyncData(() => {
      const fetchOptions = {};
      return this.call("POST", this.RESOURCE, { id, type }, fetchOptions);
    }, asyncDataOptions);
  }
}

export default statsModule;
