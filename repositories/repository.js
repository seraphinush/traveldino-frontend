import keywordsRepository from "./keywordsRepository";
import likeRepository from "./likeRepository";
import questionsRepository from "./questionsRepository";
import resultsRepository from "./resultsRepository";
import sessionsRepository from "./sessionsRepository";
import statsRepository from "./statsRepository";

export default ($axios) => ({
  keywords: keywordsRepository($axios),
  like: likeRepository($axios),
  questions: questionsRepository($axios),
  results: resultsRepository($axios),
  sessions: sessionsRepository($axios),
  stats: statsRepository($axios),
});
