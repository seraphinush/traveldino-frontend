import FetchFactory from "../factory";

class serverModule extends FetchFactory {
  RESOURCE = "/";

  async ping(asyncDataOptions) {
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
}

export default serverModule;
