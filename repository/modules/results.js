import FetchFactory from "../factory";

class resultsModule extends FetchFactory {
  RESOURCE = "/results";

  async get(payload = null, asyncDataOptions) {
    const params =
      `?countryId=${payload.countryId}` + `&sessionId=${payload.sid}`;
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
}

export default resultsModule;
