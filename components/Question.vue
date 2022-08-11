<template>
  <div v-if="question" id="question-container">
    <p>{{ question.label }}</p>
    <ul :data-columns="question.options.length > 3 ? '2' : '1'">
      <li v-for="(option, index) in question.options" :key="index">
        <button class="option" @click="handleClick(option.value)">
          <span>{{ option.label }}</span>
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
#question-container {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  text-align: center;
}

p {
  padding: 4rem 0;
  color: var(--clr-black);
  font-size: 2rem;
  line-height: 3rem;
}

ul {
  margin: 0 5%;
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
  padding: 0.75rem 1rem;
  border: 2px solid var(--clr-secondary-light);
  border-radius: 7px;
  color: var(--clr-font);
  transition-duration: 200ms;
}

button:active {
  background-color: var(--clr-secondary);
  border: 2px solid var(--clr-secondary);
  color: var(--clr-white);
}

@media (hover: hover) and (pointer: fine) {
  button:hover {
    background-color: var(--clr-secondary-ultra-light);
  }

  button:active {
    background-color: var(--clr-secondary);
    border: 2px solid var(--clr-secondary);
    color: var(--clr-white);
  }
}

span {
  font-size: 1.25rem;
}
</style>

<script>
export default {
  props: {
    question: {
      type: Object,
      required: true,
    },
  },
  methods: {
    handleClick(val) {
      this.$emit("on-answer", val);
    },
  },
};
</script>
