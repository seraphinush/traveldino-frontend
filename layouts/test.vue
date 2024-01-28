<template>
  <div class="wrapper">
    <Header></Header>
    <MobileHeader></MobileHeader>
    <TestLoading></TestLoading>
    <slot />
  </div>
</template>
<script setup>
useSeoMeta({
  description:
    "전 세계를 돌아다닌 다이노의 경험을 담아 새로운 여행지를 추천해요!",
  ogDescription:
    "전 세계를 돌아다닌 다이노의 경험을 담아 새로운 여행지를 추천해요!",
  ogUrl: process.env.WEB_BASE_URL || undefined,
});
</script>
