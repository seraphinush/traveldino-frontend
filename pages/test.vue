<template>
  <div class="container">
    <span class="spacer"></span>
    <section class="mobile-content">
      <TestQuestion
        v-if="question != null"
        :question="question"
        @on-answer="handleAnswer"
      />
      <span style="flex: 1;" class="spacer"></span>
      <div class="question-actions">
        <button @click="handleNavClick('goto-prev')" :disabled="answered == 0">
          뒤로
        </button>
        <button @click="handleNavClick('goto-main')">메인으로</button>
      </div>
      <TestProgress :current="answered" :total="questionsTotal" />
    </section>
    <span class="spacer"></span>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 4rem);
  margin-top: 4rem;
}

section {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  height: 100%;
}

.question-actions {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.question-actions > button:first-of-type {
  padding-left: 4rem;
}

.question-actions > button:last-of-type {
  padding-right: 4rem;
}

.question-actions > button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
</style>
<script setup>
definePageMeta({
  layout: "test",
});

import { sleep, getQuestionType } from "@/assets/utils";
const testLoadingEnabled = useState("testLoadingEnabled");
const { $api } = useNuxtApp();

const route = useRoute();
const query = ref({});
const question = ref(null);
const questions = ref([]);
const questionsTotal = 8;
const answered = ref(0);
const answers = ref([]);

const handleNavClick = (action) => {
  if (action == "goto-main") {
    navigateTo({
      path: "/",
      query: query.value,
    });
  }
  if (action == "goto-prev") {
    answers.value.pop();
    answered.value--;
    updateQuestion();
  }
};

const handleAnswer = (val) => {
  if (answered.value == questionsTotal) return;
  answered.value++;
  answers.value.push([question.value.type, val]);
  if (answered.value < questionsTotal) {
    updateQuestion();
  } else {
    evaluate();
  }
};

const updateQuestion = async () => {
  try {
    const arg = answers.value.length ? answers.value[0][1] : null;
    const type = getQuestionType(answered.value, arg);
    const ret = questions.value.find((x) => x.type == type);
    if (type == "keyword") {
      const arg = answers.value.reduce((obj, x) => {
        obj[x[0]] = x[1];
        return obj;
      }, {});
      testLoadingEnabled.value = true;
      const { data, error } = await $api.keywords.get(arg);
      testLoadingEnabled.value = false;
      if (!!error.value) {
        throw error.value;
      }
      ret.options = data.value;
    }
    question.value = ret;
  } catch (err) {
    console.error(err);
    throw createError({
      statusCode: err.statusCode,
      statusMessage: err.statusMessage,
      fatal: true,
    });
  }
};

const evaluate = async () => {
  testLoadingEnabled.value = true;
  const arg = answers.value.reduce((obj, x) => {
    obj[x[0]] = x[1];
    return obj;
  }, {});
  arg.id = query.value.sid;

  // simulate loading time..
  const t = Date.now();
  const s = 1 * 1000; // 1 seconds

  try {
    const { data, error } = await $api.sessions.set(arg);
    if (!!error.value) {
      throw error.value;
    }

    const d = Date.now() - t;
    if (d < s) {
      await sleep(s - d);
    }

    const { countryId } = data.value;
    navigateTo({
      path: `/results/${countryId}`,
      query: query.value,
    });
  } catch (err) {
    testLoadingEnabled.value = false;
    console.error(err);
    throw createError({
      statusCode: err.statusCode,
      statusMessage: err.statusMessage,
      fatal: true,
    });
  }
};

onMounted(async () => {
  testLoadingEnabled.value = true;
  query.value = route.query || {};

  try {
    const { data, error } = await $api.questions.get();
    if (!!error.value) {
      throw error.value;
    }
    questions.value = data.value;
    updateQuestion();
  } catch (err) {
    console.error(err);
    throw createError({
      statusCode: err.statusCode,
      statusMessage: err.statusMessage,
      fatal: true,
    });
  } finally {
    testLoadingEnabled.value = false;
  }
});
</script>
>
