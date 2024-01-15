import FetchFactory from "../factory";

class questionsModule extends FetchFactory {
  RESOURCE = "/questions";

  async get(payload = null, asyncDataOptions) {
    const path =
      !!payload && !isNaN(payload)
        ? `${this.RESOURCE}/${payload}`
        : `${this.RESOURCE}`;
    return useAsyncData(() => {
      const fetchOptions = {};
      return this.call("GET", path, undefined, fetchOptions);
    }, asyncDataOptions);
  }
}

export default questionsModule;
