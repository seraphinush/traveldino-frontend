<template>
  <div class="index__linear-carousel-container content">
    <div class="index__linear-carousel-cards">
      <NuxtLink
        v-for="(card, index) in cards"
        :key="index"
        :to="card.link"
        class="index__linear-carousel-card"
      >
        <h4>{{ card.label }}</h4>
        <img :src="card.imgSrc" alt="" />
      </NuxtLink>
    </div>
  </div>
</template>
<style scoped>
.index__linear-carousel-container {
  display: flex;
  flex-direction: column;
}

.index__linear-carousel-cards {
  display: flex;
  justify-content: center;
  perspective: 1000px;
  perspective-origin: 1000px 50%;
  gap: 2rem;
}

.index__linear-carousel-card {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  box-shadow: var(--box-shadow-default);
  overflow: hidden;
  transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
  transition: all 300ms ease-out;
  overflow: hidden;
  z-index: 0;
}

.index__linear-carousel-card:hover {
  transform: scale(1.02);
}

.index__linear-carousel-card > h4 {
  width: 100%;
  padding: calc(100% / 2) 0;
  vertical-align: middle;
  position: relative;
  font-family: var(--font-face-default);
  color: var(--clr-white);
  z-index: 5;
  border-radius: 2rem;
}

.index__linear-carousel-card > h4::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: inherit;
  height: 100%;
  z-index: -1;
  transition: all 300ms linear;
  border-radius: 2rem;
}

.index__linear-carousel-card > img {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 0;
}

@media screen and (min-width: 0px) {
  .index__linear-carousel-cards {
    height: calc((2rem * 2) + (225px * 3));
    align-items: center;
    flex-direction: column;
  }

  .index__linear-carousel-card {
    width: 200px;
    height: 225px;
  }

  .index__linear-carousel-card > h4::before {
    background-color: rgba(0, 0, 0, 0.2);
  }
}

@media screen and (min-width: 720px) {
  .index__linear-carousel-cards {
    height: 225px;
    flex-direction: row;
  }

  .index__linear-carousel-card {
    width: 200px;
    height: 225px;
  }

  .index__linear-carousel-card > h4:hover::before {
    background-color: rgba(0, 0, 0, 0.2);
  }
}

@media screen and (min-width: 1080px) {
  .index__linear-carousel-cards {
    height: 340px;
  }

  .index__linear-carousel-card {
    width: 300px;
    height: 340px;
  }

  .index__linear-carousel-card > h4::before {
    background-color: unset;
  }
}
</style>
<script setup>
const cards = [
  {
    label: "느긋한 힐링",
    imgSrc: "/images/main_sec2_bg1.jpg",
    link: "/content/resort",
  },
  {
    label: "새로운 모험",
    imgSrc: "/images/main_sec2_bg2.jpg",
    link: "/content/adventure",
  },
  {
    label: "북적이는 도시",
    imgSrc: "/images/main_sec2_bg3.jpg",
    link: "/content/city",
  },
];
</script>
