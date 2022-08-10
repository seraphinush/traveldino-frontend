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
      desc="세계일주를 꿈꾸는 로직 및 디자인 담당자"
      imgSrc="dino_food.png"
    />
    <Profile
      label="Jellyjayy"
      social="jellyjayy__"
      desc="운동에 중독될랑말랑한 기획자"
      imgSrc="dino_gym.png"
    />
    <Profile
      label="Seraph"
      social="seraphinush"
      desc="여행하고 싶지만 집돌이인 웹앱 개발자"
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
