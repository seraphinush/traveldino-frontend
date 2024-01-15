import { $fetch } from "ofetch";

import keywordsModule from "~/repository/modules/keywords";
import questionsModule from "~/repository/modules/questions";
import resultsModule from "~/repository/modules/results";
import serverModule from "~/repository/modules/server";
import sessionsModule from "~/repository/modules/sessions";
import statsModule from "~/repository/modules/stats";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const { API_BASE_URL } = config.public;
  if (!API_BASE_URL)
    throw new Error("Environmental variable API_BASE_URL is undefined");

  const fetchOptions = {
    baseURL: API_BASE_URL,
  };

  const apiFecther = $fetch.create(fetchOptions);

  const modules = {
    keywords: new keywordsModule(apiFecther),
    questions: new questionsModule(apiFecther),
    results: new resultsModule(apiFecther),
    server: new serverModule(apiFecther),
    sessions: new sessionsModule(apiFecther),
    stats: new statsModule(apiFecther),
  };

  return {
    provide: {
      api: modules,
    },
  };
});
