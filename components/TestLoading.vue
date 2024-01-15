<template>
  <div v-show="testLoadingEnabled" class="loading-container">
    <!-- <span class="loading-text">LOADING</span> -->
    <div class="loading-anim">
      <span class="fw-700" :style="`--i:0;`">두</span>
      <span class="fw-700" :style="`--i:1;`">구</span>
      <span class="fw-700" :style="`--i:0;`">두</span>
      <span class="fw-700" :style="`--i:1;`">구</span>
      <span class="fw-700" :style="`--i:0;`">두</span>
      <span class="fw-700" :style="`--i:1;`">구</span>
      <span class="fw-700" :style="`--i:0;`">두</span>
      <span class="fw-700" :style="`--i:1;`">구</span>
    </div>
  </div>
</template>
<style scoped>
.loading-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  background-color: #eeeeeeaa;
  backdrop-filter: blur(4px);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.loading-text {
  font-size: 1.25rem;
}

.loading-anim {
  display: flex;
  flex-direction: row;
  color: var(--clr-test-secondary-500);
  font-size: 2rem;
}

.loading-anim span {
  display: block;
  font-family: var(--font-face-emphasis);

  animation: animate 150ms alternate infinite;
  animation-delay: calc(150ms * var(--i));
  transform: translateY(0);
}

@keyframes animate {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(0.2rem);
  }
}
</style>
<script setup>
const testLoadingEnabled = useState("testLoadingEnabled");
</script>
