<template>
  <a href="https://www.traveldino.app/" target="_blank">
    <div class="index__slide-button-container">
      <img src="/images/dino_airplane.png" alt="" ref="button" />
      <span class="placeholder"></span>
      <h3 class="bold">{{ buttonText }}</h3>
    </div>
  </a>
</template>
<style scoped>
a {
  width: fit-content;
  border-radius: 5rem;
}
.index__slide-button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.25rem 1.5rem 1.25rem 1.25rem;
  width: fit-content;
  height: fit-content;
  background-color: var(--clr-primary);
  color: var(--clr-white);
  border-radius: 5rem;
  box-shadow: var(--box-shadow-default);
}

.index__slide-button-container > h3 {
  margin-left: 1rem;
}

img {
  padding: 0.5rem;
  width: 5rem;
  height: 5rem;
  background-color: var(--clr-white);
  border-radius: 9999px;
  transform: rotate(-15deg);
  box-shadow: var(--box-shadow-default);
}

@media screen and (min-width: 0px) {

}

@media screen and (min-width: 720px) {
  h3 {
    font-size: 30px;
  }
}
</style>
<script setup>
const buttonText = "테스트하기";
</script>
