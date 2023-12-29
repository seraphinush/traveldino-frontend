<template>
  <div class="container">
    <section class="mobile-content">
      <div>
        <h2>나도 몰랐던,</h2>
        <h2>나에게 지금 <span class="fw-500">딱 맞는 여행지</span></h2>
      </div>
      <img src="/images/dino1.png" alt="" />
      <button @click="start" class="fw-500">지금 알아보기</button>
    </section>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100vh;
}

section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

section > div {
  width: 100%;
  font-family: var(--font-face-emphasis);
}

button {
  padding: 0.5rem 1rem;
  border: 3px solid #000;
  border-radius: 0.75rem;
  font-family: var(--font-face-emphasis);
  font-size: 1.5rem;
  transition: all 300ms linear;
  background-color: var(--clr-test-primary-100);
}

button:hover {
  background-color: var(--clr-test-primary-300);
}
</style>
<script setup>
definePageMeta({
  layout: "test",
});

const testLoadingEnabled = useState("testLoadingEnabled");
const { $api } = useNuxtApp();

const route = useRoute();
const query = ref({});

const start = async () => {
  testLoadingEnabled.value = true;
  try {
    if (query.value.mode == "test") {
      route.query.mode = "test";
      route.query.sid = "test";
      console.log("Running test in dev mode");
    } else {
      const { data, error } = await $api.sessions.get();
      if (!!error.value) {
        throw error.value;
      }
      route.query.sid = data.value;
    }

    await navigateTo({
      path: "test",
      query: query.value,
    });
  } catch (err) {
    console.log(err);
    throw createError({
      statusCode: err.statusCode,
      statusMessage: err.statusMessage,
      fatal: true,
    });
  }
};

onMounted(async () => {
  query.value = route.query || {};
  const { data } = await $api.server.ping();

  if (query.value.mode == "test") {
    console.log(route.query);
  } else {
    query.value.mode = "test";
    window.history.replaceState({}, "", route.path);
    await navigateTo({
      replace: true,
      path: "/",
      query: { ...query.value },
    });
  }
});
onUnmounted(() => {});
</script>
