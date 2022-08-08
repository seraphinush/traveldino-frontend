<template>
  <div id="profiles">
    <Profile
      label="Hendrick Jin"
      social="jinsoobingsoo"
      desc="취한 탐험자"
      imgSrc="dino_drink.png"
    />
    <Profile
      label="Skyy"
      social="daye.sky.lee"
      desc="취한 탐험자"
      imgSrc="dino_food.png"
    />
    <Profile
      label="Jellyjayy"
      social="jellyjayy__"
      desc="취한 탐험자"
      imgSrc="dino_gym.png"
    />
    <Profile
      label="Seraph"
      social="seraphinush"
      desc="취한 탐험자"
      imgSrc="dino_music.png"
    />
  </div>
</template>

<style scoped>
#profiles {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  padding: 2rem 0;
  font-family: var(--font-face-default);
}
</style>
