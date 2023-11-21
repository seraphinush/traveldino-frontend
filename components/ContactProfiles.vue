<template>
  <div class="contact__profiles">
    <div
      v-for="(profile, index) in profiles"
      :key="index"
      class="contact__profile"
    >
      <img :src="profile.imgSrc" alt="" />
      <div class="contact__profile-info">
        <p class="bold">{{ profile.label }}</p>
        <span>{{ profile.description }}</span>
      </div>
    </div>
  </div>
</template>
<style scoped>
.contact__profiles {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  font-family: var(--font-face-default);
}

.contact__profile {
  display: flex;
}

.contact__profile > *:not(:last-child) {
  margin-right: 0.75rem;
}

.contact__profile img {
  background-color: var(--clr-white);
  border: 1px solid #000;
  border-radius: 100%;
}

.contact__profile-info {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.contact__profile-info > * {
  font-size: 0.8rem;
}

@media screen and (min-width: 0px) {
  .contact__profiles {
    flex-direction: column;
  }
  .contact__profile {
    width: 100%;
  }
  .contact__profile img {
    width: 50px;
    min-width: 50px;
    height: 50px;
    min-height: 50px;
  }
}

@media screen and (min-width: calc(400px + 3rem)) {
  .contact__profiles {
    flex-direction: row;
  }
  .contact__profile {
    width: 200px;
  }
}

@media screen and (min-width: 720px) {
}

@media screen and (min-width: 1080px) {
  .contact__profile img {
    width: 70px;
    min-width: 70px;
    height: 70px;
    min-height: 70px;
  }
}
</style>
<script setup>
import data from "~/assets/data/contact.json";
const profiles = data.profiles;
</script>
