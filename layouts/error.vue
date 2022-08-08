<template>
  <section class="text-center">
    <p>없다네</p>
    <nav>
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

div {
  flex: 1;
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
export default {
  methods: {
    handleNavClick(action) {
      if (action == "goto-main") {
        this.$router.push({ name: "index" });
      }
    },
  },
};
</script>
