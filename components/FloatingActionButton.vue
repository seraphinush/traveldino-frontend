<template>
  <div ref="fab" class="fab-container" :class="enabled && 'active'">
    <img src="/images/dinohand.png" alt="" />
    <a :href="link" target="_blank" class="fw-700">
      {{ text }}
    </a>
  </div>
</template>
<style scoped>
.fab-container {
  position: fixed;
  right: 1rem;
  bottom: 10vh;
  z-index: 0;

  transition-property: opacity, transform;
  transition-timing-function: ease-out;
  transition-duration: 300ms;
  opacity: 0;
  transform: translateX(calc(100% + 2rem));

  pointer-events: none;
}
img {
  position: relative;
  width: 6rem;
  transform: translate(15px, 10px);
  z-index: 1;
}
a {
  position: relative;
  display: block;
  background: var(--clr-primary);
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  font-family: var(--font-face-default);
  color: var(--clr-white);
  z-index: 100;
}

@media screen and (min-width: 720px) {
  .fab-container {
    right: calc((100vw - 720px) / 2);
  }
}

@media screen and (min-width: 1080px) {
  .fab-container {
    right: calc((100vw - 1080px) / 2);
  }
}

@media screen and (min-width: 1200px) {
  .fab-container {
    right: calc((100vw - 1080px) / 2);
  }
}

.fab-container.active {
  transition-duration: 600ms;
  opacity: 1;
  transform: translateX(0);

  pointer-events: auto;
}

</style>
<script setup>
const enabled = useState("fabEnabled");

const text = "내 취향 여행지 찾기";
const link = "/";
const pathIndexes = {
  "/home": 0,
  "/about": 1,
  "/contact": 2,
  "/test": 3,
};

onMounted(() => {
  const path = window.location.pathname;
  const index = pathIndexes[path];
});
</script>
