<template>
  <div class="container">
    <section class="content__hero">
      <img :src="heroImageUrl" alt="" />
      <div class="content">
        <span class="spacer"></span>
        <span class="spacer"></span>
        <span class="spacer"></span>
        <div class="content__hero_text">
          <h2 v-for="(text, index) in heroTexts" :key="index" class="bold">
            {{ text }}
          </h2>
        </div>
        <span class="spacer"></span>
        <span class="spacer"></span>
        <span class="spacer"></span>
      </div>
    </section>
    <section class="content__section-two">
      <div class="content">
        <span class="spacer"></span>
        <h3 class="content__section-header bolder">
          수많은 리뷰들로 검증된 곳을 원한다면,
        </h3>
        <div
          v-for="(card, index) in cardsA"
          :key="index"
          class="content__card"
          :class="index % 2 === 0 ? 'fade-in-left' : 'fade-in-right'"
          :data-direction="index % 2 === 0 ? 'forward' : 'reverse'"
        >
          <img :src="card.imageUrl" alt="" />
          <div class="content__card-info">
            <div class="content__card-title">
              <span class="city">{{ card.city }}</span>
              <span class="country">{{ card.country }}</span>
            </div>
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
    </section>
    <section class="content__section-two">
      <div class="content">
        <span class="spacer"></span>
        <h3 class="content__section-header bolder">
          아무도 안 가본 새로운 세상을 원한다면,
        </h3>
        <div
          v-for="(card, index) in cardsB"
          :key="index"
          class="content__card"
          :class="index % 2 === 0 ? 'fade-in-left' : 'fade-in-right'"
          :data-direction="index % 2 === 0 ? 'forward' : 'reverse'"
        >
          <img :src="card.imageUrl" alt="" />
          <div class="content__card-info">
            <div class="content__card-title">
              <span class="city">{{ card.city }}</span>
              <span class="country">{{ card.country }}</span>
            </div>
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
        <span class="spacer"></span>
      </div>
    </section>
    <section class="content__pagination">
      <div class="content">
        <NuxtLink :to="prevLink">
          <div class="button-content">
            <svg
              width="24"
              height="20"
              viewBox="0 0 24 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.0121 0.42005C11.1453 0.552731 11.2509 0.710385 11.323 0.883978C11.3951 1.05757 11.4322 1.24369 11.4322 1.43165C11.4322 1.61962 11.3951 1.80573 11.323 1.97932C11.2509 2.15292 11.1453 2.31058 11.0121 2.44325L4.88419 8.57118L22.3789 8.57118C22.7577 8.57118 23.121 8.72165 23.3888 8.98948C23.6566 9.25731 23.8071 9.62056 23.8071 9.99933C23.8071 10.3781 23.6566 10.7413 23.3888 11.0092C23.121 11.277 22.7577 11.4275 22.3789 11.4275L4.88419 11.4275L11.0121 17.5578C11.2804 17.8261 11.4311 18.19 11.4311 18.5694C11.4311 18.9488 11.2804 19.3127 11.0121 19.581C10.7438 19.8493 10.3799 20 10.0005 20C9.62109 20 9.25721 19.8493 8.98891 19.581L0.420048 11.0121C0.286907 10.8794 0.181267 10.7218 0.109186 10.5482C0.0371047 10.3746 1.17001e-07 10.1885 1.19243e-07 10.0005C1.21484e-07 9.81255 0.0371047 9.62644 0.109186 9.45284C0.181267 9.27925 0.286908 9.12159 0.420048 8.98891L8.98891 0.42005C9.12159 0.286909 9.27925 0.181269 9.45284 0.109188C9.62643 0.0371057 9.81255 1.17013e-07 10.0005 1.19255e-07C10.1885 1.21496e-07 10.3746 0.0371057 10.5482 0.109188C10.7218 0.181269 10.8794 0.286909 11.0121 0.42005Z"
                fill="black"
              />
            </svg>
            <h4 class="bold">PREV</h4>
          </div>

          <h4 class="emphasis bold">{{ prevText }}</h4>
        </NuxtLink>
        <NuxtLink :to="nextLink">
          <div class="button-content">
            <h4 class="bold">NEXT</h4>
            <svg
              width="24"
              height="20"
              viewBox="0 0 24 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.9879 19.5799C12.8547 19.4473 12.7491 19.2896 12.677 19.116C12.6049 18.9424 12.5678 18.7563 12.5678 18.5683C12.5678 18.3804 12.6049 18.1943 12.677 18.0207C12.7491 17.8471 12.8547 17.6894 12.9879 17.5567L19.1158 11.4288L1.62105 11.4288C1.24228 11.4288 0.87903 11.2784 0.611202 11.0105C0.343372 10.7427 0.192907 10.3794 0.192907 10.0007C0.192907 9.62191 0.343372 9.25865 0.611202 8.99082C0.87903 8.72299 1.24228 8.57253 1.62105 8.57253L19.1158 8.57253L12.9879 2.44222C12.7196 2.17393 12.5689 1.81005 12.5689 1.43062C12.5689 1.0512 12.7196 0.687312 12.9879 0.419019C13.2562 0.150725 13.6201 -4.49724e-07 13.9995 -4.37136e-07C14.3789 -4.24549e-07 14.7428 0.150725 15.0111 0.419019L23.58 8.98788C23.7131 9.12056 23.8187 9.27822 23.8908 9.45181C23.9629 9.62541 24 9.81152 24 9.99948C24 10.1874 23.9629 10.3736 23.8908 10.5472C23.8187 10.7208 23.7131 10.8784 23.58 11.0111L15.0111 19.5799C14.8784 19.7131 14.7208 19.8187 14.5472 19.8908C14.3736 19.9629 14.1874 20 13.9995 20C13.8115 20 13.6254 19.9629 13.4518 19.8908C13.2782 19.8187 13.1206 19.7131 12.9879 19.5799Z"
                fill="black"
              />
            </svg>
          </div>

          <h4 class="emphasis bold">{{ nextText }}</h4>
        </NuxtLink>
      </div>
    </section>
    <Footer></Footer>
    <FloatingActionButton></FloatingActionButton>
  </div>
</template>
<style scoped>
.content__hero {
  position: relative;
  display: flex;
  overflow: hidden;
}

.content__hero > img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  filter: brightness(90%);
}

.content__hero .content__hero_text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 16rem;
  padding: 0 3rem;
  width: fit-content;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  font-family: var(--font-face-emphasis);
  color: var(--clr-white);
  border-radius: 1.5rem;
}

.content__card {
  display: flex;
  padding: 2rem 0;
  transition: all 900ms ease-out;
  opacity: 1;
}

.content__card > img {
  border-radius: 1.5rem;
}

.content__card-info {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.content__card-info > *:not(:first-child) {
  margin-top: 0rem;
}

.content__card-title {
  display: flex;
  align-items: baseline;
  margin-bottom: 1rem;
}

.content__card-title > .city {
  font-size: 2.25rem;
  font-weight: bold;
  margin-right: 1rem;
}

.content__card-title > .country {
  font-size: 1.5rem;
}

/* .content__card-info > .description {
  font-size: 1rem;
} */

.content__card-info > .tags {
  margin-top: 1rem;
  color: var(--clr-font-light);
}

.content__card-info .tag:not(:first-child) {
  margin-left: 0.25rem;
}

.content__pagination {
  margin-bottom: 2rem;
}

.content__pagination a {
  display: flex;
  flex-direction: column;
  width: fit-content;
}

.content__pagination .button-content {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.content__pagination .button-content > *:not(:first-child) {
  margin-left: 1rem;
}

.content__pagination .button-content > h4 {
  color: var(--clr-gray-light);
}

.content__pagination a:nth-of-type(1) > * {
  align-self: flex-start;
}

.content__pagination a:nth-of-type(2) > * {
  align-self: flex-end;
}

@media screen and (min-width: 0px) {
  .content__hero > img {
    height: 100%;
  }

  .content__card {
    flex-direction: column;
  }

  .content__card[data-direction="forward"] > .content__card-info {
    padding-top: 1rem;
  }

  .content__card[data-direction="reverse"] > .content__card-info {
    padding-top: 1rem;
  }

  .content__card > img {
    width: 100%;
  }

  .content__card-info > .description {
    font-size: 1.25rem;
    line-height: 1.5rem;
  }

  .content__pagination > .content {
    display: flex;
    flex-direction: column;
  }

  .content__pagination a:nth-of-type(2) {
    align-self: flex-end;
  }

  .fade-in-left {
    transform: translateY(15vw);
    opacity: 0;
  }

  .fade-in-right {
    transform: translateY(15vw);
    opacity: 0;
  }
}

@media screen and (min-width: 720px) {
  .content__card[data-direction="forward"] {
    flex-direction: row;
  }

  .content__card[data-direction="forward"] > .content__card-info {
    padding-top: unset;
    padding-left: 3.5rem;
  }

  .content__card[data-direction="reverse"] {
    flex-direction: row-reverse;
  }

  .content__card[data-direction="reverse"] > .content__card-info {
    padding-top: unset;
    padding-right: 3.5rem;
  }

  .content__card > img {
    width: 55%;
  }

  .content__pagination > .content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .content__section-header {
    font-size: 35px !important;
  }

  .content__card-info > .description {
    font-size: 25px;
    line-height: calc(25px + 0.5rem);
  }

  .fade-in-left {
    transform: translateX(-15vw);
    opacity: 0;
  }

  .fade-in-right {
    transform: translateX(15vw);
    opacity: 0;
  }
}

@media screen and (min-width: 1080px) {
  .content__hero > img {
    height: calc(105vw * 9 / 16);
  }
}

@media screen and (min-width: 1440px) {
  .content__hero > img {
    width: 105vw;
    height: auto;
  }
}
</style>
<script setup>
const heroImageUrl = "/images/rest_main_banner.jpg";
const heroTexts = ["드넓은 바다와", "함께하는", "느긋한 힐링"];

const prevLink = "/content/city";
const prevText = "화려한 문화가 가득한 여행지";

const nextLink = "/content/adventure";
const nextText = "새로운 모험이 가득한 여행지";

const cardsA = [
  {
    city: "니스",
    country: "프랑스",
    description: [
      "겨울에도 따뜻한 지중해성 기후와",
      "많고 푸른 바다로 일년 내내",
      "관광객이 끊이지 않는 곳",
    ],
    tags: ["서유럽", "지중해", "프로방스"],
    imageUrl: "/images/rest_img1_nice.jpg",
  },
  {
    city: "세부",
    country: "필리핀",
    description: [
      "세계에서 가장 하얀 모래로 이루어진",
      "그림같은 해안선과",
      "모든 것이 다 갖춰진 호화로운 리조트",
    ],
    tags: ["막탄", "화이트비치", "스노쿨링"],
    imageUrl: "/images/rest_img2_cebu.jpg",
  },
  {
    city: "몰디브",
    country: "",
    description: [
      "한없이 파란 바다와",
      "자연 그대로의 깨끗한 모래 사장,",
      "다양한 문화를 간직한 나라",
    ],
    tags: ["신혼여행지", "지상낙원", "오버워터빌라"],
    imageUrl: "/images/rest_img3_maldives.jpg",
  },
];
const cardsB = [
  {
    city: "바하마",
    country: "",
    description: [
      "과거 해적들의 주무대이자",
      "카리브 해 곳곳에 흩어져 있는",
      "700여 개의 열대 섬",
    ],
    tags: ["청록빛바다", "나소", "캐리비안해적"],
    imageUrl: "/images/rest_img4_bahama.jpg",
  },
  {
    city: "몰타",
    country: "",
    description: [
      "단위 면적당",
      "가장 많은 세계 문화유산을 보유한",
      "매력적인 지중해 휴양지",
    ],
    tags: ["지중해", "라임스톤", "발레타"],
    imageUrl: "/images/rest_img5_malta.jpg",
  },
  {
    city: "바라데로",
    country: "쿠바",
    description: [
      "70여 개의 올인클루시브 호텔과",
      "다양한 투어 프로그램을 품은",
      "쿠바 최고의 휴양지",
    ],
    tags: ["카리브해", "이까꼬스", "올인클루시브"],
    imageUrl: "/images/rest_img6_varadero.jpg",
  },
];

const animOnScroll = () => {
  const cards = window.document.querySelectorAll(
    ".content__card.fade-in-left, .content__card.fade-in-right"
  );
  if (!cards.length) {
    window.document.removeEventListener("scroll", animOnScroll);
    window.document.removeEventListener("touchmove", animOnScroll);
    return;
  }
  cards.forEach((card, index) => {
    const bottom = Math.floor(window.innerHeight * 0.8);
    if (bottom > card.getBoundingClientRect().y) {
      card.classList.remove("fade-in-left");
      card.classList.remove("fade-in-right");
    }
  });
};
onMounted(() => {
  window.document.addEventListener("scroll", animOnScroll);
  window.document.addEventListener("touchmove", animOnScroll);
  setTimeout(() => {
    animOnScroll();
  }, 1);
});
onUnmounted(() => {
  window.document.removeEventListener("scroll", animOnScroll);
  window.document.removeEventListener("touchmove", animOnScroll);
});
</script>
