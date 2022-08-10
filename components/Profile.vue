<template>
  <div class="profile">
    <img class="profile-image" :src="getSrc(imgSrc)" />
    <div class="text-center">
      <p class="font-face-highlight">{{ label }}</p>
      <p class="">{{ desc }}</p>
    </div>
    <a :href="`https://www.instagram.com/${social}`">
      <img class="icon" src="@/assets/instagram.svg" />
    </a>
  </div>
</template>

<style scoped>
.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile > *:not(:last-child) {
  margin-bottom: 0.5rem;
}

img.profile-image {
  width: 80%;
  border: 2px solid #000;
  border-radius: 100%;
}

p {
  font-size: 0.75rem;
  line-height: 1rem;
}

a {
  width: 1.5rem;
  height: 1.5rem;
}

img.icon {
  width: 1.5rem;
  transition: transform 100ms ease-in;
}

img.icon:hover {
  transform: scale(1.2);
}
</style>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    social: {
      type: String,
      default: "",
    },
  },
  methods: {
    getSrc(src) {
      return require("@/assets/" + src);
    },
  },
};
</script>
