<template>
  <header class="content" ref="header">
    <div class="inner content">
      <NuxtLink :to="logoLink" @click="closeMobileMenu">
        <img src="@/assets/logo.svg" alt="" />
      </NuxtLink>
      <ul>
        <NuxtLink
          v-for="(link, index) in links"
          :key="index"
          :to="link.to"
          @click="setHeaderActiveMenuIndex(index)"
        >
          <li
            :class="{
              active: useState('headerActiveMenuIndex').value === index,
              emphasis: link.emphasis === true,
            }"
          >
            {{ link.label }}
          </li>
        </NuxtLink>
        <a href="https://www.traveldino.app/" target="_blank">
          <li class="emphasis">Try now!</li>
        </a>
      </ul>
    </div>
  </header>
</template>
<style scoped>
header {
  position: fixed;
  width: 100%;
  height: 4rem;
  background: var(--clr-white);
  transition: opacity 600ms;
  opacity: 1;
  z-index: 7000;
}

.inner {
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: inherit;
}

ul {
  display: flex;
  align-items: center;
  gap: 1rem;
}

ul * {
  font-family: var(--font-face-emphasis);
  font-size: 1rem;
  word-break: keep-all;
  white-space: nowrap;
}

.emphasis {
  background: var(--clr-primary);
  padding: 0.5rem 0.75rem;
  border-radius: 1rem;
  color: var(--clr-white);
}

.active {
  font-weight: 500;
}

img {
  height: 2rem;
}

@media screen and (min-width: 0px) {
  ul {
    display: none;
  }
}

@media screen and (min-width: 720px) {
  ul {
    display: flex;
  }
}
</style>
<script setup>
import { setHeaderActiveMenuIndex } from "~/utils";
const logoLink = "/home";
const links = [
  {
    label: "Home",
    to: "/home",
    emphasis: false,
  },
  {
    label: "About",
    to: "/about",
    emphasis: false,
  },
  // {
  //   label: "Stories",
  //   to: "/stories",
  //   emphasis: false,
  // },
  {
    label: "Contact",
    to: "/contact",
    emphasis: false,
  },
  // {
  //   label: "Try now!",
  //   to: "/survey",
  //   emphasis: true,
  // },
];

const pathIndexes = {
  "/home": 0,
  "/about": 1,
  "/contact": 2,
};

const mobileHeaderEnabled = useState("mobileHeaderEnabled");
const header = ref(null);
onMounted(() => {
  const path = window.location.pathname;
  const index = pathIndexes[path];
  if (!!index) {
    setHeaderActiveMenuIndex(index);
  }

  const el = header.value;
  if (!el) return;

  let prevY = window.scrollY;
  window.addEventListener("scroll", () => {
    const currentY = window.scrollY;
    const screenWidth = window.innerWidth;
    if (screenWidth < 720) {
    } else {
      if (window.scrollY > 0 && currentY > prevY) {
        el.style.opacity = "0";
      } else {
        el.style.opacity = "1";
        el.style.zIndex = "7001";
      }
    }
    prevY = currentY;
  });
});

const closeMobileMenu = () => {
  mobileHeaderEnabled.value = false;
};
</script>
