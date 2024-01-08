<template>
  <div class="progress-container">
    <img
      src="/images/dino_airplane.png"
      :style="`--current: ${current}; --total: ${total}`"
      alt=""
    />
    <div class="bar" :style="`--current: ${current}; --total: ${total}`"></div>
    <p class="progress-counter">{{ current }} / {{ total }}</p>
  </div>
</template>
<style scoped>
.progress-container {
  position: relative;
  width: 100%;
  height: 6rem;
  z-index: 0;
}

img {
  position: absolute;
  height: 3rem;
  top: 50%;
  transform: translateY(-55%);
  z-index: 3;

  transition: left 300ms ease-out;
  left: calc(var(--current) * (100% - (3rem)) / var(--total));
}

.bar {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 3px;
  background-color: transparent;
  z-index: 2;

  transition: width 300ms ease-out;
  width: 100%;
  /* width: calc(var(--current) / var(--total) * 100%); */
}

.bar::before {
  display: block;
  position: absolute;
  content: "";
  height: 3px;
  background: var(--clr-bg-gray-light);
  z-index: 1;

  width: 100%;
}

.bar::after {
  display: block;
  position: absolute;
  content: "";
  height: 3px;
  background: var(--clr-test-primary-500);
  z-index: 2;

  transition: width 300ms ease-out;
  width: calc(var(--current) / var(--total) * 100%);
}

.progress-counter {
  position: absolute;
  right: 0;
  bottom: 0;
}
</style>
<script setup>
const props = defineProps({
  current: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
});
</script>
