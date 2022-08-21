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

section > * {
  margin-bottom: 2.5rem;
}

img {
  margin-top: 2.5rem;
  width: 100%;
}
</style>

<script>
export default {
  name: "index-page",
  data() {
    return {
      query: {},
    };
  },
  methods: {
    async start() {
      try {
        this.$nuxt.$emit("loading-on");
        const route = { name: "survey", query: {} };

        // client mode
        if (this.query.mode == "test") {
          route.query.mode = "test";
          console.log("Running survey in test mode");
        } else {
          const res = await this.$repositories.sessions.get();
          sessionStorage.setItem("traveldino-session-id", res.data);
        }

        this.$router.push(route);
      } catch (err) {
        console.error(err);
      }
    },
  },
  mounted: async function () {
    this.query = this.$route.query || {};
    await this.$repositories.server.ping();
  },
};
</script>
