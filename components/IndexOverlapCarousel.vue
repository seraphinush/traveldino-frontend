<template>
  <div class="overlap-carousel-container content">
    <div class="overlap-carousel-cards">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="overlap-carousel-card"
      >
        <img :src="card.image" alt="" />
        <div class="overlap-carousel-card-info">
          <div class="overlap-carousel-card-title">
            <span class="city fw-500">{{ card.city }}</span
            ><span class="country">{{ card.country }}</span>
          </div>
          <div class="overlap-carousel-card-summary">
            <p
              v-for="(x, index) in card.description"
              :key="index"
              class="description"
            >
              {{ x }}
            </p>
            <div class="tags">
              <span v-for="(tag, index) in card.tags" :key="index" class="tag"
                >#{{ tag }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="overlap-carousel-controller">
      <button
        v-for="(card, index) in cards"
        :key="index"
        :class="{
          button: 1 == 1,
          active: index === currCard,
        }"
        @click="setCurrentCard(index)"
      ></button>
    </div>
  </div>
</template>
<style scoped>
.overlap-carousel-container {
  display: flex;
  flex-direction: column;
}

.overlap-carousel-container > *:not(:first-child) {
  margin-top: 2rem;
}

.overlap-carousel-cards {
  position: relative;
  display: flex;
  z-index: 0;
  justify-content: center;
  perspective: 1000px;
}

.overlap-carousel-card {
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 2rem;
  overflow: hidden;
  background-color: #f9f9f9;
  box-shadow: 0 4px 10px hsla(0, 0%, 60%, 0.5);
  transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
  transition: all 1000ms ease;
}

.overlap-carousel-card > img {
  width: 100%;
}

.overlap-carousel-card-info {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 2rem;
  text-align: left;
}

.overlap-carousel-card-title {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  margin-bottom: 2rem;
}

.overlap-carousel-card-title {
}

.overlap-carousel-card-title > .city {
  font-size: 2.25rem;
  margin-right: 1rem;
}

.overlap-carousel-card-title > .country {
  font-size: 1.5rem;
}

.overlap-carousel-card-summary > .description {
  font-size: 1.5rem;
  line-height: 2rem;
}

.overlap-carousel-card-summary .tags {
  margin-top: 1rem;
  color: var(--clr-font-light);
}

.overlap-carousel-card-summary .tag:not(:first-child) {
  margin-left: 0.25rem;
}

.overlap-carousel-controller {
  align-self: center;
  justify-content: space-around;
}

.button {
  display: block;
  width: 1rem;
  height: 1rem;
  background-color: var(--clr-gray-light);
  border-radius: 9999px;
  cursor: pointer;
}

.button.active {
  background-color: var(--clr-primary);
}

@media screen and (min-width: 0px) {
  .overlap-carousel-cards {
    height: 475px;
  }
  .overlap-carousel-card {
    width: min(80vw, 300px);
    height: 475px;
  }
  .overlap-carousel-controller {
    display: none;
    width: min(300px, 100%);
  }
}

@media screen and (min-width: 720px) {
  .overlap-carousel-cards {
    height: 730px;
  }
  .overlap-carousel-card {
    width: min(80vw, 500px);
    height: 730px;
  }
  .overlap-carousel-controller {
    display: flex;
    width: min(500px, 100%);
  }
}

@media screen and (min-width: 1080px) {
  .overlap-carousel-card {
  }
}
</style>
<script setup>
import data from "~/assets/data/indexOverlapCarousel.json";
const cards = data;
const currCard = ref(0);
const interval = ref(null);
const touchStartX = ref(0);
const touchInitX = ref(0);
const touchInitY = ref(0);
const touchStartTime = ref(null);
const scrollEnabled = ref(true);
const swipeEnabled = ref(true);

const step = () => {
  currCard.value = currCard.value >= cards.length - 1 ? 0 : currCard.value + 1;
  animateCard();
};

const animateCard = () => {
  const dx = Math.min(window.innerWidth / 2, 500);
  const cardsEl = document.querySelectorAll(".overlap-carousel-card");
  cardsEl.forEach((card, index) => {
    const order = index - currCard.value;
    card.style.zIndex = Math.abs(order) * -1;

    const x = order * dx;
    const z = Math.abs(x) * -1;
    card.dataset.ix = x;
    setCardTransform(card, x, 0, z);
  });
};

const setCardTransform = (card, x, y = 0, z) => {
  card.dataset.dx = x;
  card.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
};

const setCurrentCard = (index) => {
  clearInterval(interval.value);
  currCard.value = index;
  animateCard();

  interval.value = setInterval(() => {
    step();
  }, 5000);
};

const setCardZIndex = (i) => {
  currCard.value = i;
  const cardsEl = document.querySelectorAll(".overlap-carousel-card");
  cardsEl.forEach((card, index) => {
    const order = index - currCard.value;
    card.style.zIndex = Math.abs(order) * -1;
  });
};

const handleTouchStart = (e) => {
  touchStartX.value = e.touches[0].clientX;
  touchInitX.value = e.touches[0].clientX;
  touchInitY.value = e.touches[0].clientY;
  touchStartTime.value = Date.now();
};

const handleTouchMove = (e) => {
  clearInterval(interval.value);
  if (e.touches.length > 1) return;

  let deltaX = Math.abs(touchInitX.value - e.touches[0].clientX);
  let deltaY = Math.abs(touchInitY.value - e.touches[0].clientY);
  if (scrollEnabled.value) {
    if (Date.now() - touchStartTime.value < 700 && deltaX * 2 > deltaY) {
      scrollEnabled.value = false;
    }
  } else {
    if (e.cancelable) {
      e.stopPropagation();
      e.preventDefault();
    }
  }

  if (swipeEnabled.value) {
    if (Date.now() - touchStartTime.value < 700 && deltaY * 2 > deltaX) {
      swipeEnabled.value = false;
    }
  } else {
    return;
  }

  let cardIndex = 0;
  let vali = 9999;
  const valx = e.touches[0].clientX - touchStartX.value;

  const cardsEl = document.querySelectorAll(".overlap-carousel-card");
  cardsEl.forEach((card, index) => {
    const ix = Number(card.dataset.ix);
    const x = ix + valx;
    const z = Math.abs(x) * -1;

    if (Math.abs(x) < vali) {
      vali = Math.abs(x);
      cardIndex = index;
    }
    setCardTransform(card, x, 0, z);
  });

  setCardZIndex(cardIndex);
};

const handleTouchEnd = (e) => {
  scrollEnabled.value = true;
  swipeEnabled.value = true;

  let cardIndex = 0;
  let val = 9999;
  const cardsEl = document.querySelectorAll(".overlap-carousel-card");
  cardsEl.forEach((card, index) => {
    const dx = Number(card.dataset.dx);
    if (Math.abs(dx) < val) {
      val = Math.abs(dx);
      cardIndex = index;
    }
  });

  setCurrentCard(cardIndex);
};

const handleResize = (e) => {
  animateCard();
};

onMounted(() => {
  step();
  interval.value = setInterval(() => {
    step();
  }, 5000);
  const el = document.querySelector(".overlap-carousel-container");
  if (!el) return;
  el.addEventListener("touchstart", handleTouchStart);
  el.addEventListener("touchmove", handleTouchMove);
  el.addEventListener("touchend", handleTouchEnd);

  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  clearInterval(interval.value);
  const el = document.querySelector(".overlap-carousel-container");
  if (!el) return;
  el.removeEventListener("touchstart", handleTouchStart);
  el.removeEventListener("touchmove", handleTouchMove);
  el.removeEventListener("touchend", handleTouchEnd);

  window.removeEventListener("resize", handleResize);
});
</script>
