import countriesRepository from "./countriesRepository";
import keywordsRepository from "./keywordsRepository";
import likeRepository from "./likeRepository";
import questionsRepository from "./questionsRepository";
import resultsRepository from "./resultsRepository";
import sessionsRepository from "./sessionsRepository";
import serverRepository from "./serverRepository";
import statsRepository from "./statsRepository";

export default ($axios) => ({
  countries: countriesRepository($axios),
  keywords: keywordsRepository($axios),
  like: likeRepository($axios),
  questions: questionsRepository($axios),
  results: resultsRepository($axios),
  sessions: sessionsRepository($axios),
  server: serverRepository($axios),
  stats: statsRepository($axios),
});
