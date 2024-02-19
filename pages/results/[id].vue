<template>
  <div class="container results-container">
    <section v-if="!!data" class="mobile-content">
      <h3 class="">
        {{ "당신에게 지금 딱 맞는 여행지는..." }}
      </h3>
      <h1 class="fw-700">
        {{ data.name }}
      </h1>

      <!--  -->
      <div class="results-img">
        <img src="/images/dinohand.png" alt="" class="results-img-dino" />
        <img
          v-if="!!data.id"
          :src="`/images/results/${data.id}.jpg`"
          alt=""
          class="results-img-location"
        />

        <!-- checklist -->
        <div class="results-checklist">
          <span v-if="data.type"></span>
          <span v-if="data.type_id_b == 'F'">잘알려진</span>
          <span v-if="data.type_id_b == 'H'">나만알고픈</span>
          <span v-if="data.type_id_c == 'D'">선진화된</span>
          <span v-if="data.type_id_c == 'U'">정겨운</span>
          <span v-if="data.type_id_a == 'A'">어드벤처</span>
          <span v-if="data.type_id_a == 'C'">도시문화</span>
          <span v-if="data.type_id_a == 'R'">휴양지</span>
          <span v-if="data.is_cost_effective">혜자물가</span>
          <span v-if="data.is_walk">대중교통편리</span>
          <span v-if="data.is_soloable">혼자서도굿</span>
          <span v-if="data.is_time_efficient">단기간가능</span>
          <span v-if="data.is_safe">안전한치안</span>
        </div>
      </div>

      <!-- variation 1  -->
      <div v-if="data.results_page_type == 1" class="results-section">
        <p>
          {{ `당신에게 꼭 맞는 여행지로` }}
          <span class="text-highlight">{{ `[${data.name}]` }}</span
          >{{ `${hasBatchim(data.name) ? "이" : "가"} 선택되었네요!` }}
        </p>
        <p>
          {{
            `${data.name}${hasBatchim(data.name) ? "은" : "는"} ${
              data.region_phrase
            }에 있어요. ${data.type_id_a_text}${
              hasBatchim(data.type_id_a_text) ? "을" : "를"
            } 원하신다면 100점짜리 여행지랍니다.`
          }}
        </p>
        <p>
          {{ `${data.type_phrase}, ${data.keyword_phrase}` }}
        </p>
        <p>
          {{
            `${data.name}에 가기로 결정하셨다면, ${data.exclusivity}${
              hasBatchim(data.exclusivity) ? "을" : "를"
            } 자신 있게 추천할게요 :)`
          }}
        </p>
      </div>

      <!-- variation 2  -->
      <div v-if="data.results_page_type == 2" class="results-section">
        <p>
          {{ `당신의 여행 스타일은 ` }}
          <span class="text-highlight">{{ `[${data.name}]` }}</span
          >{{ `${hasBatchim(data.name) ? "과" : "와"} 꼭 맞는군요!` }}
        </p>
        <p>
          {{
            `${data.name}${hasBatchim(data.name) ? "은" : "는"} ${
              data.region_phrase
            }에 있어요. ${data.type_id_a_text}${
              hasBatchim(data.type_id_a_text) ? "을" : "를"
            } 원하는 당신에게 잊지 못할 추억을 만들어줄 거예요.`
          }}
        </p>
        <p>
          {{ `${data.type_phrase}, ${data.keyword_phrase}` }}
        </p>
        <p>
          {{
            `${data.name}에 가기로 결정하셨다면, ${data.exclusivity}${
              hasBatchim(data.exclusivity) ? "은" : "는"
            } 건너뛰지 않기를 추천해요:)`
          }}
        </p>
      </div>

      <!-- variation 3  -->
      <div v-if="data.results_page_type == 3" class="results-section">
        <p>
          {{ `당신과` }}
          <span class="text-highlight">{{ `[${data.name}]` }}</span
          >{{ `${hasBatchim(data.name) ? "은" : "는"} 찰떡궁합!` }}
        </p>
        <p>
          {{
            `${data.name}${hasBatchim(data.name) ? "은" : "는"} ${
              data.region_phrase
            }에 있어요. ${data.type_id_a_text}${
              hasBatchim(data.type_id_a_text) ? "을" : "를"
            } 원하는 당신에겐 최고의 여행지일 거예요.`
          }}
        </p>
        <p>
          {{ `${data.type_phrase}, ${data.keyword_phrase}` }}
        </p>
        <p>
          {{
            `다음 여행지를 ${data.name}${
              hasBatchim(data.name) ? "으로" : "로"
            } 결정하셨다면, 추천 관광지는 ${data.exclusivity}!`
          }}
        </p>
      </div>

      <!-- like button -->
      <button
        class="results-btn-like"
        :data-active="likedActive"
        @click="handleClick('like')"
      >
        <span>결과가 마음에 들어요!</span>
        <img :class="liked && 'liked'" src="@/assets/heart.svg" alt="" />
      </button>

      <!-- share button -->
      <button
        class="results-btn-share fw-700"
        :data-active="sharedActive"
        :data-text="SHARE_LINK"
        @click="handleClick('share')"
      >
        <div>
          <span>공유하기</span>
          <img src="@/assets/link.svg" alt="" />
        </div>
      </button>

      <!-- stats -->
      <div class="results-stats">
        <p>
          당신과 같은 여행지를 추천받은 사람은
          <span>{{ stats.toLocaleString() }}</span
          >명이에요
        </p>
      </div>

      <!-- more -->
      <!-- <div class="results-more">
        <p>이 여행지가 더 궁금하다면?</p>
        <div class="results-more-items">
          <button
            class="results-more-item"
            @click="handleClick('general-info')"
          >
            <img class="more-img" src="/images/more_info.png" />
            <span>나라정보</span>
            <span>보러가기</span>
          </button>
          <button class="results-more-item" @click="handleClick('travel-info')">
            <img class="more-img" src="/images/more_marker.png" />
            <span>여행정보</span>
            <span>보러가기</span>
          </button>
          <button class="results-more-item" @click="handleClick('ticket-info')">
            <img class="more-img" src="/images/more_plane.png" />
            <span>예매정보</span>
            <span>보러가기</span>
          </button>
        </div>
      </div> -->

      <!-- beta service -->
      <div class="results-beta">
        <span>Beta Service</span>
        <div>
          <p>새로운 여행지가 나와서 어떻게 여행을 시작하실지 막막하신가요?</p>
          <p>트래블다이노가 도와드릴게요!</p>
        </div>
        <a class="results-btn-beta" :href="BETA_LINK">여행 상담 신청하기</a>
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 4rem);
  margin-top: 4rem;
}

section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
}

section > h1 {
  font-size: 2.5rem;
  line-height: 3.5rem;
  font-family: var(--font-face-emphasis);
  color: var(--clr-test-secondary-500);
  transform: translateY(-1.25rem);
}

.results-img {
  position: relative;
  z-index: 5;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.results-img-dino {
  position: absolute;
  width: 8rem;
  top: -4.25rem;
  left: 0.5rem;
  z-index: 0;
}

.results-img-location {
  position: relative;
  width: 100%;
  border-radius: 1rem;
  box-shadow: var(--box-shadow-default);
  z-index: 6;
}

.results-checklist {
  display: flex;
  gap: 0.25rem;
  flex-wrap: wrap;
  color: var(--clr-test-secondary-500);
}

.results-checklist > span::before {
  content: "#";
  font-weight: 700;
}

.results-checklist > span {
  font-weight: 700;
}

.results-section {
  width: 100%;
}

.results-section > p {
  line-height: 1.5rem;
}

.results-section > p:not(:last-child) {
  padding-bottom: 1rem;
}

.results-section .text-highlight {
  color: var(--clr-test-primary-500);
}

.results-btn-like {
  padding: 1rem 2rem;
  border-radius: 50px;
  box-shadow: 0 0 0 2px var(--clr-test-secondary-500);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.results-btn-like img {
  width: 1rem;
  height: 1rem;
  filter: invert(19%) sepia(84%) saturate(4137%) hue-rotate(351deg)
    brightness(100%) contrast(100%) grayscale(1);
  transition: filter 200ms ease-out, opacity 200ms linear;
  opacity: 0.5;
}

.results-btn-like img.liked {
  filter: invert(19%) sepia(84%) saturate(4137%) hue-rotate(351deg)
    brightness(100%) contrast(100%) grayscale(0);
  opacity: 1;
}

.results-btn-like[data-active="true"] img {
  animation: animate 1000ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

@keyframes animate {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(1.1, 0.9) translateY(0);
  }
  30% {
    transform: scale(0.9, 1.1) translateY(-15px);
  }
  50% {
    transform: scale(1.05, 0.95) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(-2px);
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}

.results-btn-share {
  position: relative;
  width: fit-content;
  box-shadow: 0 0 0 2px var(--clr-test-secondary-500);
  border-radius: 50px;
  transition: filter 200ms ease-out, opacity 200ms linear;
  overflow: hidden;
}

.results-btn-share div {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  position: relative;
  width: 100%;
  height: 100%;
  padding: 1rem 2rem;
  box-shadow: 0 0 0 2px var(--clr-test-secondary-500),
    0 0 0 1px var(--clr-test-secondary-500) inset;
  border-radius: 50px;

  /* color: var(--clr-white);
  background-color: var(--clr-test-secondary-500); */
  box-shadow: 0 0 0 2px var(--clr-test-secondary-500);
  border-radius: 50px;
  background-color: var(--clr-white);
  z-index: -1;
}

.results-btn-share img {
  width: 1rem;
  height: 1rem;
  transform: rotate(-45deg);
}

.results-btn-share::before {
  content: attr(data-text);
  width: calc(100% + 0.2rem);
  height: calc(100% + 0.2rem);
  padding: 1.1rem 0;
  border-radius: 50px;
  position: absolute;
  top: 50%;
  left: 100%;
  transform: translate(50%, -50%);

  background-color: var(--clr-white);

  box-shadow: 0 0 0 2px var(--clr-test-secondary-500);
  background-color: var(--clr-test-secondary-500);
  color: var(--clr-white);
  z-index: 1;
}

.results-btn-share[data-active="true"]::before {
  animation: popup 3000ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

@keyframes popup {
  0% {
    transform: translate(2%, -50%);
  }
  18% {
    transform: translate(calc(-100% + 0.1rem), -50%);
  }
  82% {
    transform: translate(calc(-100% + 0.1rem), -50%);
  }
  100% {
    transform: translate(-200%, -50%);
  }
}

.results-stats p {
  font-weight: 700;
  text-align: center;
}

.results-stats p > span {
  font-weight: inherit;
  color: var(--clr-test-secondary-500);
}

.results-more {
  display: none;
  /* display: flex; */
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  padding: 2rem;
  border-radius: 1rem;
  background-color: var(--clr-test-secondary-50);
}

.results-more p {
  text-align: center;
  font-weight: 700;
  color: var(--clr-test-secondary-500);
}

.results-more-items {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 1rem;
}

.results-more-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
}

.results-more-item > img {
  width: 4rem;
}

.results-beta {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;

  padding: 2rem;
  border-radius: 1rem;
  background-color: var(--clr-test-secondary-50);
}

.results-beta p {
  text-align: center;
  font-weight: 700;
}

.results-beta span {
  font-weight: 700;
}

.results-btn-beta {
  text-align: center;
  padding: 1rem 2rem;
  border-radius: 50px;
  background-color: var(--clr-test-secondary-500);
  box-shadow: 0 0 0 2px var(--clr-test-secondary-500);
  color: var(--clr-white);
}
</style>
<script setup>
definePageMeta({
  layout: "test",
});

const title = "당신에게 지금 딱 맞는 여행지는..! | 트래블다이노";
useSeoMeta({
  title: title,
  ogTitle: title,
});

import { sleep, hasBatchim } from "~/utils";
const testLoadingEnabled = useState("testLoadingEnabled");
const { $api } = useNuxtApp();
const query = ref({});
const route = useRoute();
const data = ref({});
const statsData = ref({});

const stats = ref(0);
const liked = ref(false);
const likedActive = ref(false);
const shared = ref(false);
const sharedActive = ref(false);

const STAT_MIN_VALUE = 100;
const SHARE_LINK = "링크 복사!";

const BETA_LINK = "/";

const handleClick = async (action) => {
  const { mode } = query.value;

  if (action == "goto-main") {
    navigateTo({
      path: "/",
      query: mode ? { mode: mode } : null,
    });
  }

  // event related
  else if (action == "goto-event") {
    //
  } else if (action == "close-event") {
    //
  }

  //
  else {
    const sid =
      query.value.sid == "test" || query.value.sid == "null"
        ? null
        : query.value.sid;
    try {
      if (action == "like") {
        likedActive.value = false;
        setTimeout(() => (likedActive.value = true), 1);
        if (!liked.value) {
          liked.value = true;
          if (sid) $api.stats.set("like", sid);
        }
      } else if (action == "share") {
        const LINK = window.location.href;
        navigator.clipboard.writeText(LINK);
        console.log("Copied link : " + LINK);
        sharedActive.value = false;
        setTimeout(() => (sharedActive.value = true), 1);
        if (!shared.value) {
          shared.value = true;
          if (sid) $api.stats.set("share", sid);
        }
      } else if (action == "general-info") {
        if (sid) $api.stats.set("general-info", sid);
        window.open(data.value.link_general_info, "_blank");
      } else if (action == "travel-info") {
        if (sid) $api.stats.set("travel-info", sid);
        window.open(data.value.link_travel_info, "_blank");
      } else if (action == "ticket-info") {
        if (sid) $api.stats.set("ticket-info", sid);
        window.open(data.value.link_ticket_info, "_blank");
      }
    } catch (err) {
      console.error(err);
    }
  }
};

try {
  const params = route.params || {};
  query.value.countryId = params.id;

  const { data: _data, error: _error } = await $api.results.get(query.value);
  if (!!_error.value) {
    throw _error.value;
  }
  if (_data.value.type_id_a == "A") _data.value.type_id_a_text = "모험";
  else if (_data.value.type_id_a == "C")
    _data.value.type_id_a_text = "도시문화";
  else if (_data.value.type_id_a == "R") _data.value.type_id_a_text = "휴양";
  data.value = _data.value;

  const { data: _statsData, error: _statsError } = await $api.stats.get(
    data.value.code
  );
  if (!!_statsError.value) {
    throw _statsError.value;
  }
  statsData.value = _statsData.value;

  useHead({
    title: `당신에게 지금 딱 맞는 여행지는 ${data.value.name}! | 트래블다이노`,
    meta: [
      {
        name: "og:title",
        content: `당신에게 지금 딱 맞는 여행지는 ${data.value.name}! | 트래블다이노`,
      },
    ],
  });
  useSeoMeta({
    title: () =>
      `당신에게 지금 딱 맞는 여행지는 ${data.value.name}! | 트래블다이노`,
    ogTitle: () =>
      `당신에게 지금 딱 맞는 여행지는 ${data.value.name}! | 트래블다이노`,
  });
} catch (err) {
  console.error(err);
  throw createError({
    statusCode: err.statusCode,
    statusMessage: err.statusMessage,
    fatal: true,
  });
} finally {
  testLoadingEnabled.value = false;
}

onMounted(async () => {
  await sleep(1);
  testLoadingEnabled.value = true;
  query.value = route.query || {};

  if (!!query.value.sessionId) {
    query.value.sid = query.value.sessionId;
    delete query.value.sessionId;

    let queries = "?";
    for (const x in query.value) {
      if (queries.length > 1) {
        queries += "&";
      }
      queries += `${x}=${query.value[x]}`;
    }
    window.history.replaceState({}, "", `${route.path}${queries}`);
  }

  if (statsData.value < STAT_MIN_VALUE) {
    const rand = STAT_MIN_VALUE + Math.round(Math.random() * STAT_MIN_VALUE);
    if (sessionStorage.getItem(`traveldino-stats-${data.value.code}`)) {
      const num = Number(
        sessionStorage.getItem(`traveldino-stats-${data.value.code}`)
      );
      stats.value = isNaN(num) ? rand : num;

      stats.value++;
    } else {
      stats.value = rand;
    }
  } else {
    stats.value = statsData.value;
  }
  sessionStorage.setItem(`traveldino-stats-${data.value.code}`, stats.value);
  await sleep(400);

  testLoadingEnabled.value = false;
});
</script>
