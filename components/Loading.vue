<template>
  <div
    v-show="enabled"
    id="loading-container"
    class="align-center justify-center"
  >
    <div class="loading justify-center">
      <span>...LOADING...</span>
      <div class="loading-anim justify-center">
        <span :style="`--i:0;`">두</span>
        <span :style="`--i:1;`">구</span>
        <span :style="`--i:0;`">두</span>
        <span :style="`--i:1;`">구</span>
        <span :style="`--i:0;`">두</span>
        <span :style="`--i:1;`">구</span>
        <span :style="`--i:0;`">두</span>
        <span :style="`--i:1;`">구</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
#loading-container {
  position: fixed;
  width: inherit;
  height: inherit;
  display: flex;
  background-color: var(--clr-loading-background);
  backdrop-filter: blur(2px);
  z-index: 1001;
}

@media screen and (min-width: 560px) {
  #loading-container {
    border-radius: 25px;
  }
}

.loading {
  display: flex;
  flex-direction: column;
  z-index: 9999;
  font-family: var(--font-face-highlight);
  color: var(--clr-secondary);
}

.loading > *:nth-child(1) {
  font-size: 2.5rem;
}

.loading > *:nth-child(2) {
  font-size: 0.75rem;
}

.loading-anim {
  display: flex;
  flex-direction: row;
}

.loading-anim span {
  display: block;
  animation: animate 150ms alternate infinite;
  animation-delay: calc(150ms * var(--i));
  transform: translateY(0);
}

@keyframes animate {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(0.2rem);
  }
}
</style>

<script>
export default {
  props: {
    color: {
      type: String,
      required: false,
      default: "#fff",
    },
  },
  data() {
    return {
      enabled: false,
    };
  },
  mounted: function () {
    this.$nuxt.$on("loading-on", () => {
      const el = document.querySelector("#content");
      if (!el) return;
      this.enabled = true;
      el.classList.add("noscroll");
    });

    this.$nuxt.$on("loading-off", () => {
      const el = document.querySelector("#content");
      if (!el) return;
      this.enabled = false;
      el.classList.remove("noscroll");
    });
  },
};
</script>
