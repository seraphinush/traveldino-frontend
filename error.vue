<template>
  <div>
    <NuxtLayout name="default">
      <div class="container content">
        <span class="error-code fw-700">{{ error.statusCode }}</span>
        <span class="">{{ message }}</span>
        <span class="error-message">{{ error.statusMessage }}</span>
        <span class="spacer"></span>
        <button id="btn-error-gotomain" @click="handleError">메인으로</button>
      </div>
    </NuxtLayout>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  height: 100vh;
}

.error-code {
  font-size: 4rem;
  font-family: var(--font-face-emphasis);
  color: var(--clr-test-secondary-500);
}

.error-message {
  font-family: Consolas;
}
</style>
<script setup>
const props = defineProps({
  error: Object,
});

const message =
  "죄송합니다. 현재 서버에서 오류가 발생했습니다. 나중에 다시 시도해 주세요.";

// https://github.com/nuxt/nuxt/issues/22683
const handleError = () => clearError({ redirect: "/" });

onMounted(() => {});
</script>
