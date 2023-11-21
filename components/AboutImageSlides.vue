<template>
  <div class="about__image-slides content">
    <img src="/images/about_img1.jpg" alt="" />
    <div class="about__image-slide-text">
      <h3 class="bolder">세계 곳곳을 돌아다닌 트래블다이노가</h3>
      <h3>여러분이 미처 상상하지 못한 목적지,</h3>
      <h3>숨겨진 보석 같은 여행지를 알려드릴게요!</h3>
      <h3>&nbsp;</h3>
      <h3>차근차근 질문을 따라가다 보면,</h3>
      <h3>사람들과 웅장한 건축물로 북적이는 도시부터</h3>
      <h3>새로운 경험이 가득한 모험적인 여행지까지</h3>
      <h3><span class="bolder">나에게 딱 맞는 최적의 여행지</span>를</h3>
      <h3>추천받을 수 있어요.</h3>
    </div>
    <img src="/images/about_img2.jpg" alt="" />
    <div class="about__image-slide-text">
      <h3>트래블다이노는</h3>
      <h3><span class="bolder">여행하는 방법</span>을 바꾸는 사람들입니다.</h3>
      <h3>&nbsp;</h3>
      <h3>여러분의 소중한 시간과 돈이</h3>
      <h3>더 값진 경험으로 연결 되도록,</h3>
      <h3><span class="bolder">영혼을 채우는 여행</span>이 되도록 연구합니다.</h3>
      <h3>&nbsp;</h3>
      <h3>나조차도 몰랐던 <span class="bolder">내 취향</span>을 발견하고,</h3>
      <h3>다른 문화를 체험하며 세계를 느껴보세요!</h3>
    </div>
  </div>
</template>
<style scoped>
.about__image-slides {
  max-width: 100%;
}

.about__image-slides > * {
  max-width: 100%;
  border-radius: 2rem;
}

@media screen and (min-width: 0px) {
  .about__image-slides {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
}

@media screen and (min-width: 1080px) {
  .about__image-slides {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  .about__image-slide-text {
    display: flex;
    flex-direction: column;
    border: 1px solid #000;
    justify-content: center;
  }

  .about__image-slides > :nth-child(4n-3),
  .about__image-slides > :nth-child(4n) {
    grid-column: 1;
  }

  .about__image-slides > :nth-child(4n-2),
  .about__image-slides > :nth-child(4n-1) {
    grid-column: 2;
  }

  .about__image-slides > :nth-child(4n-3),
  .about__image-slides > :nth-child(4n-2) {
    grid-row: 1;
  }

  .about__image-slides > :nth-child(4n),
  .about__image-slides > :nth-child(4n) {
    grid-row: 2;
  }
}
</style>
<script setup></script>
