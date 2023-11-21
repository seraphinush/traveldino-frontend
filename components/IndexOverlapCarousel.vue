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
            <span class="city">{{ card.city }}</span
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
  font-weight: bold;
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
<script>
export default {
  data() {
    return {
      cards: [
        {
          city: "체스키크룸로프",
          country: "체코",
          description: ["마을 전체가 세계문화유산인", "보헤미안의 고향"],
          tags: ["동유럽", "세계문화유산", "중세시대", "보헤미안"],
          image: "/images/main_sec4_img1.jpg",
        },
        {
          city: "보르도",
          country: "프랑스",
          description: [
            "전세계에서 가장 큰 문화유적이자",
            "프랑스 와인의 수도",
          ],
          tags: ["서유럽", "세계문화유산", "프랑스와인"],
          image: "/images/main_sec4_img2.jpg",
        },
        {
          city: "과나후아토",
          country: "멕시코",
          description: [
            "알록달록한 색의 향연을 볼 수 있는",
            "영화 코코의 배경지",
          ],
          tags: ["중남미", "구시가지", "죽은자의날", "영화코코"],
          image: "/images/main_sec4_img3.jpg",
        },
        {
          city: "랑카위",
          country: "말레이시아",
          description: [
            "유네스코 세계지질공원과",
            "빛나는 자연을 보유한 케다주의 보석",
          ],
          tags: ["동남아", "세계지질공원", "군도", "야생동물"],
          image: "/images/main_sec4_img4.jpg",
        },
        {
          city: "그단스크",
          country: "폴란드",
          description: ["천 년 이상의 전통을 간직한", "활력 넘치는 항구 도시"],
          tags: ["동남아", "세계지질공원", "군도", "야생동물"],
          image: "/images/main_sec4_img5.jpg",
        },
        {
          city: "사르데냐",
          country: "이탈리아",
          description: ["남쪽 지중해의 보물이자", "이탈리아인들의 여름 휴양지"],
          tags: ["동남아", "세계지질공원", "군도", "야생동물"],
          image: "/images/main_sec4_img6.jpg",
        },
      ],
      currCard: 0,
      interval: null,
      debounce: Date.now(),
    };
  },
  methods: {
    step() {
      this.currCard =
        this.currCard >= this.cards.length - 1 ? 0 : this.currCard + 1;
      this.animateCard();
    },
    animateCard() {
      const cardsEl = document.querySelectorAll(".overlap-carousel-card");
      cardsEl.forEach((card, index) => {
        const order = index - this.currCard;
        card.dataset.order = order;
        card.style.zIndex = Math.abs(order) * -1;

        const x = order * 80;
        const y = 0;
        const z = Math.abs(order * 100) * -1;
        this.setTransformCard(card, x, y, z);
      });
    },
    setTransformCard(card, x, y = 0, z) {
      card.dataset.dx = x;
      card.dataset.dy = y;
      card.dataset.dz = z;
      card.style.transform = `translate3d(${x}px, ${y}px, ${z}px) rotateX(0deg) rotateY(0deg)`;
    },
    setCurrentCard(index) {
      clearInterval(this.interval);
      this.currCard = index;
      this.animateCard();

      this.interval = setInterval(() => {
        this.step();
      }, 5000);
    },
    setCardOrder(currCardIndex) {
      this.currCard = currCardIndex;
      const cardsEl = document.querySelectorAll(".overlap-carousel-card");
      cardsEl.forEach((card, index) => {
        const order = index - this.currCard;
        card.dataset.order = order;
        card.style.zIndex = Math.abs(order) * -1;
      });
    },
    handleTouchStart(e) {
      this.touchStartX = e.touches[0].clientX;
    },
    handleTouchMove(e) {
      clearInterval(this.interval);
      if (Date.now() - this.debounce < 200) return;
      let dx = 4;
      let dz = 5;
      const val = this.touchStartX - e.touches[0].clientX;
      if (val > 0) {
        // left
        dx *= -1;
      } else if (val < 0) {
        // right
        dx *= 1;
      } else if (val == 0) {
        return;
      }

      const cardsEl = document.querySelectorAll(".overlap-carousel-card");
      cardsEl.forEach((card, index) => {
        let x = 0;
        let y = 0;
        let z = 0;
        const currentX = Number(card.dataset.dx);
        const currentZ = Number(card.dataset.dz);

        x = currentX + dx;

        if (val > 0) {
          if (x >= 0) {
            z = currentZ + dz;
          } else if (x < 0) {
            z = currentZ - dz;
          }
        } else if (val < 0) {
          if (x >= 0) {
            z = currentZ - dz;
          } else if (x < 0) {
            z = currentZ + dz;
          }
        }

        if (Math.abs(z) < 40) {
          this.setCardOrder(index);
        }

        this.setTransformCard(card, x, y, z);
      });
      this.touchStartX = e.touches[0].clientX;
    },
    handleTouchEnd(e) {
      let cardIndex = 0;
      let val = 9999;
      const cardsEl = document.querySelectorAll(".overlap-carousel-card");
      cardsEl.forEach((card, index) => {
        const x = Math.abs(Number(card.dataset.dx));
        if (x < val) {
          val = x;
          cardIndex = index;
        }
      });
      this.setCurrentCard(cardIndex);
    },
  },
  mounted() {
    this.step();
    this.interval = setInterval(() => {
      this.step();
    }, 5000);
    const el = document.querySelector(".overlap-carousel-container");
    if (!el) return;
    el.addEventListener("touchstart", this.handleTouchStart);
    el.addEventListener("touchmove", this.handleTouchMove);
    el.addEventListener("touchend", this.handleTouchEnd);
  },
  unmounted() {
    clearInterval(this.interval);
    const el = document.querySelector(".overlap-carousel-container");
    if (!el) return;
    el.removeEventListener("touchstart", this.handleTouchStart);
    el.removeEventListener("touchmove", this.handleTouchMove);
    el.removeEventListener("touchend", this.handleTouchEnd);
  },
};
</script>
