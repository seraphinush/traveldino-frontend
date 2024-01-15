<template>
  <div id="index-image-slide">
    <div class="index-image-slide__content content">
      <img
        v-for="(source, index) in moSources"
        :key="index"
        :src="source"
        :data-active="index === currSlideIndex"
        class="index-image-slide__img"
        :style="clientWidth >= 720 && 'display: none'"
      />
      <img
        v-for="(source, index) in pcSources"
        :key="index"
        :src="source"
        :data-active="index === currSlideIndex"
        class="index-image-slide__img"
        :style="clientWidth < 720 && 'display: none'"
      />
      <div class="dark-overlay"></div>
      <button
        v-for="(caption, index) in captions"
        :key="index"
        :data-active="index === currSlideIndex"
        class="index-image-slide__btn"
        @click="setSlideIndex(index)"
      >
        <h3>{{ caption }}</h3>
      </button>
    </div>
  </div>
</template>
<style scoped>
#index-image-slide {
  padding: 0 2rem;
  position: relative;
  width: 100%;
  z-index: 0;
}

.index-image-slide__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 2rem;
  overflow: hidden;
  z-index: 0;
  box-shadow: inset 0 4px 10px hsla(0, 0%, 40%, 1);
}

.index-image-slide__img {
  position: absolute;
  transition: all 1000ms;
  opacity: 0;
  width: inherit;
  object-fit: cover;
  height: 100%;
  width: 100%;
}

.index-image-slide__img[data-active="true"] {
  opacity: 1 !important;
}

.index-image-slide__btn {
  position: relative;
  font-family: var(--font-face-default);
  color: var(--clr-white);
  transition: all 300ms;
  z-index: 10;
  cursor: pointer;
  opacity: 0.7;
}

.index-image-slide__btn[data-active="true"] {
  opacity: 1 !important;
}

.index-image-slide__btn[data-active="true"] h3 {
  font-weight: 700;
  text-decoration: underline;
}

.dark-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--clr-black);
  opacity: 0.3;
  z-index: 2;
}

@media screen and (min-width: 0px) {
  .index-image-slide__content {
    aspect-ratio: 350 / 500;
  }

  .index-image-slide__btn:not(:first-child) {
    margin-top: 0.5rem;
  }

  .index-image-slide__btn:not(:last-child) {
    margin-bottom: 0.5rem;
  }
}

@media screen and (min-width: 720px) {
  .index-image-slide__content {
    aspect-ratio: 1195 / 830;
  }

  .index-image-slide__btn h3 {
    font-size: 40px;
  }

  .index-image-slide__btn:not(:first-child) {
    margin-top: 1rem;
  }

  .index-image-slide__btn:not(:last-child) {
    margin-bottom: 1rem;
  }
}
</style>
<script setup>
const captions = [
  "지구 끝에서 만나는 빙하, 파타고니아",
  "영화 아바타의 배경지, 플리트비체",
  "두 눈으로 직접 담는 화산 분화, 아카테낭고",
  "아름다운 불교 유적 도시, 바간",
];
const moSources = [
  "/images/main_sec3_bg1_patagonia_mo.jpg",
  "/images/main_sec3_bg2_plitvice_mo.jpg",
  "/images/main_sec3_bg3_acatenango_mo.jpg",
  "/images/main_sec3_bg4_bagan_mo.jpg",
];
const pcSources = [
  "/images/main_sec3_bg1_patagonia.jpg",
  "/images/main_sec3_bg2_plitvice.jpg",
  "/images/main_sec3_bg3_acatenango.jpg",
  "/images/main_sec3_bg4_bagan.jpg",
];

const currSlideIndex = ref(0);
const interval = ref(null);
const startInterval = () => {
  clearInterval(interval.value);
  interval.value = setInterval(() => {
    currSlideIndex.value = currSlideIndex.value + 1;
    if (currSlideIndex.value > 3) {
      currSlideIndex.value = 0;
    }
  }, 5000);
};
const setSlideIndex = (i = 0) => {
  currSlideIndex.value = i;
  startInterval();
};

const clientWidth = ref(0);
const handleResize = (e) => {
  clientWidth.value = window.innerWidth;
  console.log(clientWidth.value)
};
onMounted(() => {
  startInterval();
  clientWidth.value = window.innerWidth;
  window.addEventListener("resize", handleResize);
});
onUnmounted(() => {
  clearInterval(interval.value);
  window.removeEventListener("resize", handleResize);
});
</script>
