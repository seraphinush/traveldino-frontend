<template></template>
<style></style>
<script setup>
const testLoadingEnabled = useState("testLoadingEnabled");
const route = useRoute();
const query = ref({});

onMounted(() => {
  query.value = route.query || {};
  let id = -1;
  if (!!query.value.id) {
    id = query.value.id;
    delete query.value;
  }

  if (!!query.value.countryId) {
    id = query.value.countryId;
    delete query.value.countryId;
  }

  if (!!query.value.sessionId) {
    query.value.sid = query.value.sessionId;
    delete query.value.sessionId;
  }

  if (id >= 0) {
    testLoadingEnabled.value = true;
    navigateTo({
      path: `/results/${id}`,
      query: query.value,
    });
  } else {
    //
  }
});
</script>
