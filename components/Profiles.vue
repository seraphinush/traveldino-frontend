<template>
  <div id="profiles">
    <Profile
      label="Hendrick Jin"
      social="jinsoobingsoo"
      :desc="['세계 맥주 뿌수는', '알파고']"
      imgSrc="dino_drink.png"
    />
    <Profile
      label="Skyy"
      social="daye.sky.lee"
      :desc="['전세계 감튀를 먹어보러', '여행다니는 마케터']"
      imgSrc="dino_food.png"
    />
    <Profile
      label="Jellyjayy"
      social="jellyjayy__"
      :desc="['세계 명산 정복을', '꿈꾸는 기획자']"
      imgSrc="dino_gym.png"
    />
    <Profile
      label="Seraph"
      social="seraphinush"
      :desc="['여행하고 싶지만', '집돌이인 웹앱 개발자']"
      imgSrc="dino_music.png"
    />
  </div>
</template>

<style scoped>
#profiles {
  display: grid;
  grid-template-columns: repeat(var(--profiles-columns), minmax(0, 1fr));
  padding: 2rem 1rem;
  height: var(--profiles-height);
  font-family: var(--font-face-default);
  gap: 1rem;
}

@media screen and (min-width: 560px) {
  #profiles {
    gap: 0rem;
  }
}
</style>
