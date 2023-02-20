import countriesRepository from "./countriesRepository";
import keywordsRepository from "./keywordsRepository";
import likeRepository from "./likeRepository";
import questionsRepository from "./questionsRepository";
import resultsRepository from "./resultsRepository";
import serverRepository from "./serverRepository";
import sessionsRepository from "./sessionsRepository";
import shareRepository from "./shareRepository";
import statsRepository from "./statsRepository";

export default ($axios) => ({
  countries: countriesRepository($axios),
  keywords: keywordsRepository($axios),
  like: likeRepository($axios),
  questions: questionsRepository($axios),
  results: resultsRepository($axios),
  server: serverRepository($axios),
  sessions: sessionsRepository($axios),
  share: shareRepository($axios),
  stats: statsRepository($axios),
});
