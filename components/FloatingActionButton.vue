<template>
  <div class="container" ref="fab">
    <img src="/images/dinohand.png" alt="" />
    <a href="https://www.traveldino.app/" target="_blank" class="bolder">
      {{ text }}
    </a>
  </div>
</template>
<style scoped>
.container {
  position: fixed;
  right: 1rem;
  bottom: 10vh;
  transition: opacity 600ms;
  opacity: 0;
  z-index: 0;
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
  .container {
    right: calc((100vw - 720px) / 2);
  }
}

@media screen and (min-width: 1080px) {
  .container {
    right: calc((100vw - 1080px) / 2);
  }
}

@media screen and (min-width: 1200px) {
  .container {
    right: calc((100vw - 1080px) / 2);
  }
}
</style>
<script setup>
const text = "내 취향 여행지 찾기";
const pathIndexes = {
  "/home": 0,
  "/about": 1,
  "/contact": 2,
};

const fab = ref(null);
onMounted(() => {
  const path = window.location.pathname;
  const index = pathIndexes[path];

  const el = fab.value;
  if (!el) return;
  el.style.opacity = "1";

  window.addEventListener("scroll", () => {
    const screenHeight = window.innerHeight;
    const limitY = document.body.scrollHeight - screenHeight * 2;
    const currentY = window.scrollY;

    if (index === 0) {
      if (currentY > Math.floor(screenHeight / 10) && currentY < limitY) {
        el.style.opacity = "1";
      } else {
        el.style.opacity = "0";
      }
    }
  });
});
</script>
