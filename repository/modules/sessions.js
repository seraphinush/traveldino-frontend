import FetchFactory from "../factory";

class sessionsModule extends FetchFactory {
  RESOURCE = "/sessions";

  async get(asyncDataOptions) {
    return useAsyncData(() => {
      const fetchOptions = {};
      return this.call(
        "GET",
        `${this.RESOURCE}`,
        undefined,
        fetchOptions
      );
    }, asyncDataOptions);
  }

  async set(payload, asyncDataOptions) {
    return useAsyncData(() => {
      const fetchOptions = {};
      return this.call(
        "POST",
        `${this.RESOURCE}`,
        payload,
        fetchOptions
      );
    }, asyncDataOptions);
  }
}

export default sessionsModule;
