<template></template>

<style></style>

<script>
export default {
  name: "results",
  data() {
    return {};
  },

  methods: {},
  mounted: async function () {
    this.$nuxt.$emit("loading-on");
    const query = Object.assign({}, this.$route.query) || {};
    try {
      let id = -1;
      sessionStorage.removeItem("traveldino-session-id");
      if (!!query.id) {
        id = query.id;
        delete query.id;
      }
      if (!!query.countryId) {
        id = query.countryId;
        delete query.countryId;
      }
      const route = {
        name: "results-id",
        path: "/results/:id",
        query: query,
        params: { id: id },
      };
      this.$router.push(route);
    } catch {}
  },
};
</script>
