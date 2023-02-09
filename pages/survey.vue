<template>
  <section>
    <Progress :current="answered" :total="questionsTotal" />
    <Question
      v-if="question != null"
      :question="question"
      @on-answer="handleAnswer"
    />
    <nav v-if="question != null">
      <button v-if="answered > 0" @click="handleNavClick('goto-prev')">
        <span>이전으로</span>
      </button>
      <span v-if="answered > 0">|</span>
      <button @click="handleNavClick('goto-main')">
        <span>메인으로</span>
      </button>
    </nav>
  </section>
</template>

<style scoped>
section {
  font-family: var(--font-face-highlight);
}

section > *:not(:last-child) {
  margin-bottom: 1.5rem;
}

nav {
  width: 100%;
  font-family: var(--font-face-default);
  font-size: var(--survey-nav-font-size);
  color: var(--clr-font);
  text-align: center;
}
</style>

<script>
import { sleep, getQuestionType } from "@/assets/utils";
import Progress from "../components/Progress";
export default {
  name: "survey-page",
  layout: "survey",
  components: { Progress },
  data() {
    return {
      loading: false,
      query: {},
      questions: [],
      questionsTotal: 8,
      question: null,
      answered: 0,
      answers: {},
    };
  },
  methods: {
    handleNavClick(action) {
      const route = { name: "index", query: {} };
      if (this.query.mode === "test") {
        route.query.mode = "test";
      }

      if (action == "goto-main") {
        this.$router.push(route);
      }
      if (action == "goto-prev") {
        delete this.answers[this.question.type];
        this.answered--;
        this.updateQuestion();
      }
    },
    async handleAnswer(val) {
      if (this.loading) return;
      if (this.answered == this.questionsTotal) return;
      this.loading = true;
      this.answered++;
      this.answers[this.question.type] = val;
      if (this.answered < this.questionsTotal) {
        this.updateQuestion();
      } else {
        this.evaluate();
      }
    },
    async updateQuestion() {
      try {
        const type = getQuestionType(this.answered, this.answers["type_id_a"]);
        const question = this.questions.find((x) => x.type == type);
        if (type == "keyword") {
          const res = await this.$repositories.keywords.get(this.answers);
          question.options = res.data;
        }
        this.question = question;
        this.loading = false;
      } catch (err) {
        console.error(err);
      }
    },
    async evaluate() {
      this.$nuxt.$emit("loading-on");
      this.question = null;
      const route = { name: "results", query: {} };
      const sessionId = sessionStorage.getItem("traveldino-session-id");

      // client mode
      if (this.query.mode == "test") {
        route.query.mode = "test";
        this.answers.id = "test";
      } else {
        this.answers.id = sessionId;
      }

      // simulate loading time..
      let t = Date.now();
      const s = 3 * 1000; // 3 seconds

      try {
        const res = await this.$repositories.sessions.set(this.answers);
        route.query.countryId = res.data.countryId;
        route.query.sessionId = this.answers.id;
        this.loading = false;
        // simulating loading time..
        const d = Date.now() - t;
        if (d < s) {
          await sleep(s - d);
        }
        this.$router.push(route);
      } catch (err) {
        console.error(err);
        this.$nuxt.$emit("loading-off");
      }
    },
  },
  mounted: async function () {
    this.$nuxt.$emit("loading-on");
    try {
      const query = Object.assign({}, this.$route.query) || {};
      this.query = query;
      const res = await this.$repositories.questions.get();
      this.questions = res.data;
      this.updateQuestion();
    } catch (err) {
      console.error(err);
    } finally {
      this.$nuxt.$emit("loading-off");
    }
  },
};
</script>
