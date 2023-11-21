<template>
  <div
    class="container"
    :class="currSlide < 4 && 'no-scroll'"
    :style="currSlide < 4 && 'height: 100vh; overscroll-behavior: none;'"
  >
    <section class="index__scroll-slide-container bg-secondary">
      <div class="content">
        <div
          class="index__scroll-slide index__slide-one"
          :class="currSlide == 1 && 'active'"
        >
          <span class="spacer"></span>
          <span class="spacer"></span>
          <h2>우리 여행갈까?</h2>
          <h2>근데... <span class="bold">어디로 가지?</span></h2>
          <img src="/images/dinoanimation1.png" alt="" />
        </div>
      </div>
      <div class="content">
        <div
          class="index__scroll-slide index__slide-two"
          :class="currSlide == 2 && 'active'"
        >
          <span class="spacer"></span>
          <span class="spacer"></span>
          <h2>가보고 싶었던 곳은 많은데,</h2>
          <h2>막상 가려니 잘 모르겠어</h2>
          <img src="/images/dinoanimation2.png" alt="" />
        </div>
      </div>
      <div class="content">
        <div
          class="index__scroll-slide && index__slide-one"
          :class="(currSlide == 3 || currSlide == 4) && 'active'"
        >
          <span class="spacer"></span>
          <span class="spacer"></span>
          <h2>나한테 <span class="bold">딱 맞는 여행지</span> 없을까?</h2>
          <img src="/images/dinoanimation3.png" alt="" />
        </div>
      </div>
      <button v-if="currSlide < 4" class="arrow" @click="nextSlide">
        <div class="arrow-inner" style="--i: 0; --j: 2"></div>
        <div class="arrow-inner" style="--i: 1; --j: 1"></div>
        <div class="arrow-inner" style="--i: 2; --j: 0"></div>
      </button>
    </section>
    <section>
      <div class="index__section-two content">
        <span class="spacer"></span>
        <h2>나도 몰랐던 나의 취향,</h2>
        <h2><span class="bold">트래블다이노</span>는 알고 있어요!</h2>
        <h4>다이노의 질문을 따라가다보면 내 취향의 여행지가 짠!</h4>
        <span class="spacer"></span>
        <IndexLinearCarousel></IndexLinearCarousel>
        <span class="spacer"></span>
      </div>
    </section>
    <section class="">
      <div class="index__section-three content">
        <span class="spacer"></span>
        <h2>세계를 여행한 다이노가 알려주는</h2>
        <h2><span class="bold">새로운</span> 여행지</h2>
        <h4>
          전 세계를 돌아다닌 다이노의 경험을 담아 새로운 여행지를 추천해요!
        </h4>
        <span class="spacer"></span>
        <IndexImageSlides></IndexImageSlides>
        <span class="spacer"></span>
      </div>
    </section>
    <section>
      <div class="index__section-four content">
        <span class="spacer"></span>
        <h2>알고 있던 여행지의</h2>
        <h2><span class="bold">새로운</span> 모습 발견</h2>
        <h4>이미 알고 있던 나라가 나왔다고요?</h4>
        <h4>걱정 마세요, 이번엔 다를 테니까요!</h4>
        <span class="spacer"></span>
        <IndexOverlapCarousel></IndexOverlapCarousel>
        <span class="spacer"></span>
      </div>
    </section>
    <section class="">
      <div class="index__section-five content">
        <span class="spacer"></span>
        <div class="index__section-five-grid">
          <h2 class="grid-item-one">
            다이노랑 찰떡궁합 여행지 알아보러 갈래용?
          </h2>
          <img src="/images/travelreadydino.png" alt="" class="grid-item-two" />
          <indexSlideButton class="grid-item-three"></indexSlideButton>
        </div>
        <span class="spacer"></span>
      </div>
    </section>
    <Footer></Footer>
    <FloatingActionButton></FloatingActionButton>
  </div>
</template>
<style scoped>
.container {
  word-break: keep-all;
  overflow-x: hidden;
}

.container h2,
.container h3 {
  font-family: var(--font-face-emphasis);
}

.index__scroll-slide-container {
  position: relative;
  height: 100vh;
  z-index: 0;
  overscroll-behavior-y: contain;
}

.index__scroll-slide-container .content {
  position: absolute;
  height: inherit;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0%);
}
.index__scroll-slide {
  height: inherit;
  width: inherit;
  font-family: var(--font-face-emphasis);
  transition: 1000ms;
  opacity: 0;
  z-index: 1;
}

.index__scroll-slide img {
  position: absolute;
}

.index__slide-one h2,
.index__slide-two h2,
.index__slide-three h2 {
  transform: translateY(10vh);
  opacity: 0;
  transition: all 500ms ease-out;
}

.index__slide-one img,
.index__slide-two img,
.index__slide-three img {
  opacity: 0;
  transition: all 500ms ease-out;
}

.index__slide-one.active h2,
.index__slide-two.active h2,
.index__slide-three.active h2 {
  transform: translateY(0vh);
  opacity: 1;
}

.index__slide-one.active img,
.index__slide-two.active img,
.index__slide-three.active img {
  opacity: 1;
}

.active {
  opacity: 1;
}

.index__section-two {
  text-align: center;
}

.index__section-two > h4 {
  margin-top: 2rem;
  font-family: "Pretendard";
}

.index__section-three {
  text-align: center;
}

.index__section-three > h4 {
  margin-top: 2rem;
  font-family: "Pretendard";
}

.index__section-four {
  text-align: center;
}

.index__section-four > h4:first-of-type {
  margin-top: 2rem;
  font-family: "Pretendard";
}

.index__section-five-grid {
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  padding: 0 2rem;
}

.index__section-five-grid > .grid-item-one {
  grid-column: 2;
  grid-row: 1;
}

.index__section-five-grid > .grid-item-two {
  grid-column: 1;
  grid-row: 1 / 3;
}

.index__section-five-grid > .grid-item-three {
  grid-column: 2;
  grid-row: 2;
}

@media screen and (min-width: 0px) {
  .index__scroll-slide img {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -35%);
    width: min(70vh, 25rem);
    height: min(70vh, 25rem);
  }

  .index__section-five-grid {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .index__section-five-grid > .grid-item-one {
    text-align: center;
  }

  .index__section-five-grid > .grid-item-two {
    width: min(50%, 500px);
  }

  .index__section-five-grid > *:not(:first-child) {
    margin-top: 2rem;
  }
}

@media screen and (min-width: 720px) {
  .index__scroll-slide img {
    width: min(70vh, 30rem);
    height: min(70vh, 30rem);
  }

  .index__section-five-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 2rem;
  }

  .index__section-five-grid > .grid-item-one {
    text-align: unset;
    align-self: end;
  }

  .index__section-five-grid > .grid-item-two {
    width: min(100%, 500px);
  }

  .index__section-five-grid > *:not(:first-child) {
    margin-top: unset;
  }
}

@media screen and (min-width: 1080px) {
  .index__scroll-slide img {
    width: 30rem;
    height: 30rem;
  }
}

@media screen and (max-width: 1080px) and (orientation: landscape) {
  .index__scroll-slide img {
    transform: translate(-5%, -20%);
  }
}

.arrow {
  position: absolute;
  bottom: calc(2vh + 38px);
  left: 50%;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-animation: arrow 1.5s infinite;
  animation: arrow 1.5s infinite;
  width: 24px;
  height: 24px;
}

.arrow-inner {
  position: absolute;
  transform: translate(calc(var(--i) * 7px), calc(var(--i) * -7px));
  width: 24px;
  height: 24px;
  margin-left: -12px;
  border-left: 1px solid var(--clr-primary);
  border-bottom: 1px solid var(--clr-primary);
  -webkit-animation: arrow-inner 1.5s infinite calc(var(--j) * 150ms);
  animation: arrow-inner 1.5s infinite calc(var(--j) * 150ms);
}

@keyframes arrow {
  0% {
    -webkit-transform: rotate(-45deg) translate(0, 0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    -webkit-transform: rotate(-45deg) translate(-10px, 10px);
    opacity: 0;
  }
}

@-webkit-keyframes arrow {
  0% {
    -webkit-transform: rotate(-45deg) translate(0, 0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    -webkit-transform: rotate(-45deg) translate(-10px, 10px);
    opacity: 0;
  }
}

@keyframes arrow-inner {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@-webkit-keyframes arrow-inner {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
<script>
export default {
  name: "index",
  data() {
    return {
      currSlide: 1,
      totalSlides: 4,
      scrollCooldown: 1000,
      scrollTimestamp: Date.now(),
      touchStartY: 0,
    };
  },
  methods: {
    handleScroll(e) {
      const totalSlides = this.totalSlides;
      if (window.scrollY > 0 && this.currSlide == totalSlides) return;
      const now = Date.now();
      if (
        this.currSlide < totalSlides &&
        now - this.scrollTimestamp < this.scrollCooldown
      )
        return;

      if (e.wheelDelta > 0) {
        if (this.currSlide > 1) {
          this.currSlide--;
        }
      } else if (e.wheelDelta < 0) {
        if (this.currSlide < totalSlides) {
          this.currSlide++;
        }
      }
      this.scrollTimestamp = Date.now();
    },
    handleTouchStart(e) {
      this.touchStartY = e.touches[0].clientY;
    },
    handleTouchMove(e) {
      const totalSlides = this.totalSlides;
      if (window.scrollY > 0 && this.currSlide == totalSlides) return;
      const now = Date.now();
      if (
        this.currSlide < totalSlides &&
        now - this.scrollTimestamp < this.scrollCooldown
      )
        return;

      const currentY = e.touches[0].clientY;
      if (currentY > this.touchStartY) {
        if (this.currSlide > 1) {
          this.currSlide--;
        }
      } else if (currentY < this.touchStartY) {
        if (this.currSlide < totalSlides) {
          this.currSlide++;
        }
      }
      this.scrollTimestamp = Date.now();
    },
    nextSlide() {
      this.currSlide++;
      if (this.currSlide > 4) {
        this.currSlide == 4;
      }
    },
  },
  mounted() {
    this.currSlide = 1;
    window.document.addEventListener("wheel", this.handleScroll);
    window.document.addEventListener("mousewheel", this.handleScroll);
    window.document.addEventListener("touchstart", this.handleTouchStart);
    window.document.addEventListener("touchmove", this.handleTouchMove);
  },
  unmounted() {
    window.document.removeEventListener("wheel", this.handleScroll);
    window.document.removeEventListener("mousewheel", this.handleScroll);
    window.document.removeEventListener("touchstart", this.handleTouchStart);
    window.document.removeEventListener("touchmove", this.handleTouchMove);
  },
};
</script>
