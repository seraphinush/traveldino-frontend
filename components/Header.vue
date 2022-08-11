<template>
  <header>
    <span>TravelDino</span>
  </header>
</template>

<style scoped>
header {
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  height: var(--header-height);
  background-color: var(--clr-primary);
  box-shadow: 0 0 4px 4px hsla(0, 1%, 0%, 0.1);
  z-index: 1000;
  font-family: var(--font-face-default);
  font-weight: 700;
  color: var(--clr-black);
  /* responsive in main.css */
}

span {
  padding-top: calc(1.5rem * 0.15);
  font-size: 1.5rem;
}
</style>
