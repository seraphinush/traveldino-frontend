<template>
  <section>
    <Progress :current="answered" :total="questionsTotal" />
    <Question
      v-if="question != null"
      :question="question"
      @on-answer="handleAnswer"
    />
    <nav>
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
      questions: [],
      questionsTotal: 8,
      question: null,
      answered: 0,
      answers: {},
    };
  },
  methods: {
    handleNavClick(action) {
      if (action == "goto-main") {
        this.$router.push({ name: "index" });
      }
      if (action == "goto-prev") {
        delete this.answers[this.question.type];
        this.answered--;
        this.updateQuestion();
      }
    },
    async handleAnswer(val) {
      if (this.answered == this.questionsTotal) return;
      this.answered++;
      this.answers[this.question.type] = val;
      if (this.answered < this.questionsTotal) {
        this.updateQuestion();
      } else {
        this.evaluate();
      }
    },
    async updateQuestion() {
      const type = getQuestionType(this.answered, this.answers["type_id_a"]);
      const question = this.questions.find((x) => x.type == type);
      if (type == "keyword") {
        const res = await this.$repositories.keywords.get(this.answers);
        question.options = res.data;
      }
      this.question = question;
    },
    async evaluate() {
      this.answers.id = sessionStorage.getItem("sessionId");
      const res = await this.$repositories.results.get(this.answers);
      this.$router.push({ name: "results", params: res.data });
    },
  },
  async mounted() {
    this.$nuxt.$emit("loading-on");
    const res = await this.$repositories.questions.get();
    this.questions = res.data;
    this.updateQuestion();
    await sleep(400);
    this.$nuxt.$emit("loading-off");
  },
};
</script>
