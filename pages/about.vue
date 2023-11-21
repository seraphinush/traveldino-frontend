<template>
  <div class="container bg-secondary">
    <section class="about__hero">
      <img src="/images/about_main_banner.jpg" alt="" />
      <div class="content">
        <span class="spacer"></span>
        <span class="spacer"></span>
        <span class="spacer"></span>
        <span class="spacer"></span>
        <h3 class="bold">수없이 떠나본 사람에게도</h3>
        <h3 class="bold">모든 '떠남'은 항상 최초의 경험이다.</h3>
        <h3 class="bold">
          떠나는 방법은 자기 스스로에게도 교육할 수 없는 것이다.
        </h3>
        <span class="vertical-line"></span>
        <h4>김화영 행복의충격</h4>
        <span class="spacer"></span>
        <span class="spacer"></span>
        <span class="spacer"></span>
      </div>
    </section>
    <section class="about__section-two">
      <div class="content">
        <span class="spacer"></span>
        <h3>
          그동안 여러분의 모든 <span class="bolder">'떠남'</span>은 어땠나요?
        </h3>
        <h3>무엇을 기대하며 어떤 여행지를 선택했나요?</h3>
        <h3>&nbsp;</h3>
        <h3>누군가의 추천, 어딘가의 광고로</h3>
        <h3>기대감을 채우지 못한 적이 있나요?</h3>
        <h3>&nbsp;</h3>
        <h3>만약 그렇다면 지금 트래블다이노에서</h3>
        <h3><span class="bolder">가장 나다운 여행지</span>를 만나보세요!</h3>
        <h3>&nbsp;</h3>
        <img src="/images/dino1.png" alt="" />
        <h3>&nbsp;</h3>
        <h2 class="emphasis bolder">We Are <span class="bolder">TravelDino!</span></h2>
        <span class="spacer"></span>
        <about-image-slides></about-image-slides>
        <span class="spacer"></span>
      </div>
    </section>
    <section class="about__footer">
      <div class="content">
        <h3 class="bold">
          가장 나다운 여행을 떠나는 방법<span class="bold">.</span>
        </h3>
        <img src="@/assets/logo.svg" alt="" class="logo" />
      </div>
    </section>
  </div>
</template>
<style scoped>
.container {
  min-height: 100vh;
}

.about__hero {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.about__hero > img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  filter: brightness(80%);
}

.about__hero > .content {
  color: var(--clr-white);
  text-align: center;
}

.about__hero .vertical-line {
  margin: 1rem 0;
  display: inline-block;
  height: 6rem;
  border-left: 1px solid var(--clr-white);
  border-right: 1px solid var(--clr-white);
}

.about__section-two {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.about__section-two img {
  width: min(50vw, 300px);
}

.about__section-two h2 > span {
  color: var(--clr-primary);
}

.about__footer > .content {
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
}

.about__footer h3 > span {
  display: inline-block;
  color: var(--clr-secondary);
  transform: scale(2.5) translate(0.1rem, -0.3rem);
}

.about__footer .logo {
  width: 100%;
  filter: brightness(0);
  transform: scale(1.05) translateY(1rem);
  align-self: center;
}

@media screen and (min-width: 0px) {
  .about__hero > img {
    height: 100%;
  }

  .about__section-two h2 {
    font-size: 4rem;
    line-height: 5rem;
  }

  .about__footer h3 {
    font-size: 2rem;
    line-height: 3rem;
  }
}

@media screen and (min-width: 720px) {
  .about__section-two h2 {
    font-size: 4.5rem;
    line-height: 5.5rem;
  }

  .about__footer h3 {
    font-size: 2rem;
    line-height: 3rem;
  }
}

@media screen and (min-width: 1080px) {
  .about__hero > img {
    height: calc(105vw * 9 / 16);
  }
}

@media screen and (min-width: 1440px) {
  .about__hero > img {
    width: 105vw;
    height: auto;
  }
}
</style>
<script setup>
definePageMeta({
  layout: "default",
});
</script>
