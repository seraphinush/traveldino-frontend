import FetchFactory from "../factory";

class keywordsModule extends FetchFactory {
  RESOURCE = "/keywords";

  async get(payload, asyncDataOptions) {
    return useAsyncData(() => {
      const fetchOptions = {};
      return this.call("POST", this.RESOURCE, payload, fetchOptions);
    }, asyncDataOptions);
  }
}

export default keywordsModule;
