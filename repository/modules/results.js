import FetchFactory from "../factory";

class resultsModule extends FetchFactory {
  RESOURCE = "/results";

  async get(payload = {}, asyncDataOptions) {
    const COUNTRY_ID = payload.countryId || null;
    const SESSION_ID = payload.sid || null;
    const params = `?countryId=${COUNTRY_ID}&sessionId=${SESSION_ID}`;
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
