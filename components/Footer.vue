<template>
  <footer class="bg-secondary">
    <img src="@/assets/logo.svg" alt="" class="logo" />
    <div class="content links">
      <a
        v-for="(link, index) in links"
        :key="index"
        :href="link.url"
        class="link"
      >
        <div class="icon">
          <img :src="link.iconSrc" alt="" />
        </div>
        <p>{{ link.label }}</p>
      </a>
    </div>
    <span>{{ copyright }}</span>
  </footer>
</template>
<style scoped>
footer {
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  gap: 1rem;
  font-family: var(--font-face-default);
}

footer > * {
  margin-left: auto;
  margin-right: auto;
}

.logo {
  width: 12rem;
  filter: brightness(0%);
}

.links {
  width: 100%;
  display: flex;
  gap: 1rem;
}

.link {
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}

.icon {
  position: relative;
  width: 2rem;
  height: 2rem;
  padding: 0.25rem;
  background: var(--clr-primary-light);
  border-radius: 9999px;
}

.icon > img {
  width: 1rem;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

span {
  font-size: 0.8rem;
}

@media screen and (min-width: 0px) {
  .links {
    flex-direction: column;
    align-items: center;
  }
}

@media screen and (min-width: 720px) {
  .links {
    flex-direction: row;
    width: unset;
  }
}
</style>
<script setup>
import data from "~/assets/data/footer.json";
const links = data.links;
const copyright = data.copyright;
</script>
