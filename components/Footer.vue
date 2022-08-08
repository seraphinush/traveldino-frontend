<template>
  <footer>
    <div>
      <span>문의</span>
      <a :href="`mailto:${email}`">
        {{ email }}
      </a>
    </div>
    <span>
      {{ copyright }}
    </span>
  </footer>
</template>

<style scoped>
footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 0;
  background-color: var(--clr-primary-light);
  font-family: var(--font-face-default);
  font-size: 0.75rem;
  color: var(--clr-black);
  z-index: 1000;
}

div {
  display: flex;
  flex-direction: row;
  font-size: inherit;
  gap: .2rem;
}

a {
  font-weight: 700;
  color: inherit;
  font-size: inherit;
}

span {
  font-size: inherit;
}
</style>

<script>
export default {
  data() {
    return {
      email: "info.traveldino@gmail.com",
      copyright: "©TravelDino All Rights Reserved. 2022",
    };
  },
};
</script>
