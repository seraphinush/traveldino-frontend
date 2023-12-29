<template>
  <div class="question-container">
    <span>{{ question.label }}</span>
    <span class="spacer"></span>
    <ul :data-columns="question.options.length > 3 ? '2' : '1'">
      <li v-for="(option, index) in question.options" :key="index">
        <button @click="handleClick(option.value)">
          {{ option.label }}
        </button>
      </li>
    </ul>
  </div>
</template>
<style scoped>
.question-container {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
}

.question-container > span {
  font-size: 1.5rem;
  line-height: 2rem;
}

.question-container > ul {
  display: grid;
  word-break: keep-all;
  gap: 1.5rem;
}

ul[data-columns="1"] {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}

ul[data-columns="2"] {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

button {
  width: 100%;
  padding: 1rem;
  border: 2px solid #000;
  border-radius: 1rem;
  font-size: 1.25rem;
  line-height: 1.25rem;
  transition-duration: 300ms;
  background-color: var(--clr-test-primary-100);
}

@media (hover: hover) and (pointer: fine) {
  button:hover {
    background-color: var(--clr-test-primary-500);
  }
}
</style>
<script setup>
const props = defineProps({
  question: {
    type: Object,
  },
});
const emit = defineEmits(["on-answer"]);

const handleClick = (val) => {
  emit("on-answer", val);
};
</script>
