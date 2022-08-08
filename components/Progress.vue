<template>
  <div class="progress-container">
    <img src="@/assets/dino_airplane.png" />
    <div class="progress-info">
      <p class="progress-header">
        {{ "나에게 딱 맞는 여행지를 찾기까지..." }}
      </p>
      <div class="progress-bar">
        <span></span>
        <span :style="`width: ${(current / total) * 100}%`"></span>
      </div>
      <p class="progress-counter">{{ current }} / {{ total }}</p>
    </div>
  </div>
</template>

<style scoped>
.progress-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  width: 100%;
  text-align: right;
  z-index: 0;
  height: 40px;
}

img {
  height: 100%;
  object-fit: cover;
}

.progress-info {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  white-space: nowrap;
  font-size: var(--progress-bar-font-size);
}

.progress-bar {
  position: relative;
  margin: 4px 0;
  height: 3px;
}

.progress-bar > span:nth-child(1) {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #e1e1e1;
  z-index: 1;
}

.progress-bar > span:nth-child(2) {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: #fc6c6c;
  z-index: 2;
  transition-property: width;
  transition-duration: 300ms;
}

.progress-header {
  color: var(--clr-font-light);
  font-size: 0.75rem;
}

.progress-counter {
  color: var(--clr-secondary);
  font-size: 0.75rem;
}
</style>

<script>
export default {
  props: {
    current: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
  },
};
</script>
