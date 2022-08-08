<template>
  <button @click="handleClick">
    <span>{{ text }}</span>
  </button>
</template>

<style scoped>
button {
  width: fit-content;
  padding: 0.375rem 1.5rem;
  background-color: var(--clr-secondary-ultra-light);
  border-radius: 0.75rem;
  border: 0.25rem solid var(--clr-secondary);
  transition-duration: 200ms;
  color: var(--clr-secondary);
  font-family: var(--font-face-highlight);
  text-align: center;
  cursor: pointer;
}

button:hover {
  background-color: var(--clr-secondary);
  color: var(--clr-white);
}

span {
  font-size: 1.75rem;
}
</style>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleClick() {
      this.$emit("click");
    },
  },
};
</script>
