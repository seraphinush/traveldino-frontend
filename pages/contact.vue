<template>
  <div class="container contact__container">
    <section class="contact__main">
      <div class="content">
        <span class="spacer"></span>
        <span class="spacer"></span>
        <h2 class="emphasis bold">
          가장 나다운 여행을 떠날 수 있도록 다양한 프로젝트를 준비하고 있습니다
        </h2>
        <h4>
          트래블다이노의 다음 프로젝트가 궁금하다면 언제든지 연락 주세요 :)
        </h4>
      </div>
    </section>
    <section class="contact__contact-cards">
      <div class="content">
        <div
          v-for="(card, index) in contactCards"
          :key="index"
          class="contact__contact-card"
        >
          <p class="bolder">{{ card.type }}</p>
          <a :href="card.link" target="_blank">{{ card.label }}</a>
        </div>
      </div>
    </section>
    <section class="contact__members">
      <div class="content">
        <span class="spacer"></span>
        <p class="bolder">Traveldino Squad</p>
        <ContactProfiles />
        <span class="spacer"></span>
      </div>
    </section>

    <p class="contact__footer emphasis bolder">Contact us</p>
  </div>
</template>
<style scoped>
.contact__container {
  height: 100vh;
  background-image: url("/images/contact_bg.jpg");
  background-size: cover;
  word-break: keep-all;
  overflow: auto;
}

section {
  position: relative;
  z-index: 1;
}

section:not(:first-child) {
  margin-top: 2rem;
}

.contact__main {
}

.contact__main h4 {
  margin-top: 1.25rem;
  font-family: var(--font-face-default);
}

.contact__contact-card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.contact__members > .content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

h2 {
  width: min(calc(100vw - 2rem), 640px);
}

.contact__footer {
  position: fixed;
  width: 100%;
  color: var(--clr-white);
  word-break: keep-all;
  text-align: center;
  z-index: 0;
}

@media screen and (min-width: 0px) {
  .contact__contact-cards > .content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .contact__footer {
    bottom: -3vw;
    font-size: 12vw;
  }
}

@media screen and (min-width: 300px) {
  .contact__contact-cards > .content {
    display: flex;
    flex-direction: row;
    gap: 4rem;
  }
}

@media screen and (min-width: 720px) {
  .contact__footer {
    bottom: -2rem;
    font-size: 7.5rem;
  }
}

@media screen and (min-width: 1080px) {
  .contact__footer {
    bottom: -3rem;
    font-size: 190px;
  }
}
</style>
<script setup>
const contactCards = [
  {
    type: "Email",
    label: "info.traveldino@gmail.com",
    link: "mailto:info.traveldino@gmail.com",
  },
  {
    type: "Instagram",
    label: "@traveldino.app",
    link: "https://instagram.com/traveldino.app",
  },
];
definePageMeta({
  layout: "default",
});
</script>
