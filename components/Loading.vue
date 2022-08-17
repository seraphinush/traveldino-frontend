<template>
  <div v-show="enabled" id="loading-container">
    <div class="loading">
      <span :style="`background-color: ${this.color};--i:0;`"></span>
      <span :style="`background-color: ${this.color};--i:1;`"></span>
      <span :style="`background-color: ${this.color};--i:2;`"></span>
      <span :style="`background-color: ${this.color};--i:3;`"></span>
      <span :style="`background-color: ${this.color};--i:4;`"></span>
    </div>
  </div>
</template>

<style scoped>
#loading-container {
  position: fixed;
  width: inherit;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
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
  flex-direction: row;
  z-index: 9999;
}

.loading span {
  display: block;
  margin-right: 5px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  animation: animate 1200ms linear infinite;
  animation-delay: calc(100ms * var(--i));
  z-index: inherit;
  opacity: 0;
}

.loading span:last-child {
  margin-right: 0;
}

@keyframes animate {
  0% {
    opacity: 1;
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 0;
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
