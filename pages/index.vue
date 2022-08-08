<template>
  <section id="index-page">
    <img src="@/assets/main.png" />
    <Button @click="start()" text="테스트 시작!" />
  </section>
</template>

<style scoped>
section {
  align-items: center;
}

section > *:not(:last-child) {
  margin-bottom: 1.5rem;
}

img {
  width: 100%;
}
</style>

<script>
export default {
  name: "index-page",
  methods: {
    async start() {
      this.$nuxt.$emit("loading-on");
      const res = await this.$repositories.sessions.get();
      sessionStorage.setItem("sessionId", res.data);
      this.$router.push({ name: "survey" });
    },
  },
};
</script>
