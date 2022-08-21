<template>
  <section v-if="!!data">
    <h2>
      {{ "당신에게 지금 딱 맞는 여행지는..." }}
    </h2>
    <h1>
      {{ data.name }}
    </h1>

    <!--  -->
    <div id="img-container">
      <img id="img-location" :src="getImage()" />
      <img id="img-dino" src="@/assets/dino_hand.png" />
      <img id="img-marker" src="@/assets/location_marker.png" />
      <p id="img-info">{{ data.image_location }}</p>
    </div>

    <!-- checklist -->
    <div id="checklist">
      <img v-if="data.type_id_b == 'F'" src="@/assets/checklist/2-F.png" />
      <img v-if="data.type_id_b == 'H'" src="@/assets/checklist/2-H.png" />
      <img v-if="data.type_id_c == 'D'" src="@/assets/checklist/3-D.png" />
      <img v-if="data.type_id_c == 'U'" src="@/assets/checklist/3-U.png" />
      <img v-if="data.type_id_a == 'A'" src="@/assets/checklist/1-A.png" />
      <img v-if="data.type_id_a == 'C'" src="@/assets/checklist/1-C.png" />
      <img v-if="data.type_id_a == 'R'" src="@/assets/checklist/1-R.png" />
      <img v-if="data.is_cost_effective" src="@/assets/checklist/4-cheap.png" />
      <img v-if="data.is_walk" src="@/assets/checklist/5-transport.png" />
      <img v-if="data.is_soloable" src="@/assets/checklist/6-alone.png" />
      <img v-if="data.is_time_efficient" src="@/assets/checklist/7-short.png" />
      <img v-if="data.is_safe" src="@/assets/checklist/8-safe.png" />
    </div>

    <!-- variation 1  -->
    <div v-if="data.results_page_type == 1" class="results-desc">
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
    <div v-if="data.results_page_type == 2" class="results-desc">
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
    <div v-if="data.results_page_type == 3" class="results-desc">
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

    <!--  -->
    <div class="results-post text-center">
      <div class="like-container">
        <p class="text-center text-highlight font-face-highlight">
          결과가 마음에 들어요!
        </p>
        <div class="popup-container">
          <!-- <span class="popup-message popup-message-like">좋아요!</span> -->
          <button class="heart text-center" @click="handleLike()">
            <img class="img-heart" src="@/assets/heart.svg" />
          </button>
        </div>
      </div>

      <p class="text-center font-face-highlight">
        당신과 같은 여행지를 추천받은 사람은
        <span class="text-highlight">{{ stats.toLocaleString() }}</span
        >명이에요
      </p>
      <div class="actions">
        <div class="popup-container">
          <span class="popup-message popup-message-share">링크 복사!</span>
          <Button @click="handlePopup('share')" text="공유하기" />
        </div>
        <Button @click="handleClick('goto-main')" text="메인으로" />
      </div>
    </div>
    <p class="text-subscript">사진 출처 : Pixabay, Unsplash, Pexels</p>
  </section>
</template>

<style scoped>
section {
  align-items: center;
  font-family: var(--font-face-default);
}

section > *:not(:last-child) {
  margin-bottom: 1.5rem;
}

h1 {
  margin-bottom: 3.5rem !important;
  font-family: var(--font-face-highlight);
  font-size: 2.8rem;
  color: var(--clr-secondary);
}

h2 {
  margin: 2rem 0 0.5rem 0 !important;
  font-family: var(--font-face-highlight);
  font-weight: 400;
  font-size: 2rem;
}

#img-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  z-index: 0;
}

#img-location {
  width: 100%;
  background-color: var(--clr-background);
  border: 3px solid #000;
  border-radius: 10px;
  z-index: 5;
}

#img-dino {
  width: 8rem;
  position: absolute;
  top: -3.9rem;
  left: 2.5rem;
  z-index: 0;
}

#img-marker {
  width: 4.5rem;
  position: absolute;
  bottom: -1.5rem;
  right: 0;
  z-index: 10;
}

#img-info {
  position: absolute;
  bottom: -1.5rem;
  right: 4.5rem;
  text-align: right;
  font-size: 0.6rem;
  font-weight: 300;
}

#checklist {
  padding: 0 2rem;
  display: inline-grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

#checklist > img {
  width: 80%;
}

.results-desc,
.results-post {
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
}

.results-post {
  align-items: center;
}

.results-desc > *:not(:last-child),
.results-post > *:not(:last-child) {
  margin-bottom: 0.75rem;
}

.like-container {
  display: flex;
  flex-direction: column;
  border: 0.1875rem solid var(--clr-secondary);
  border-radius: 10px;
  margin: 0 0 2rem 0 !important;
  padding: 0.75rem 1rem;
  width: fit-content;
}

.like-container > *:not(:last-child) {
  margin-bottom: 0.75rem;
}

button.heart {
  width: 2rem;
  transition: transform 100ms linear;
}

button.heart:hover {
  transform: scale(1.1);
}

.img-heart {
  filter: var(--clr-heart-full) grayscale(1);
  transition: filter 200ms ease-out, opacity 200ms linear;
  opacity: 0.5;
}

.img-heart.bounce {
  animation: animate 1000ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.img-heart.active {
  filter: var(--clr-heart-full) grayscale(0);
  opacity: 1;
}

@keyframes animate {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(1.1, 0.9) translateY(0);
  }
  30% {
    transform: scale(0.9, 1.1) translateY(-10px);
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

.actions {
  position: relative;
  display: flex;
  justify-content: center;
}

.actions > *:not(:last-child) {
  margin-right: 1rem;
}

.popup-container {
  display: flex;
  position: relative;
  justify-content: center;
}

.popup-message {
  position: absolute;
  top: -20px;
  padding: 0.5rem 0.75rem;
  border-radius: 10px;
  background-color: #50c878;
  color: #eee;
  text-align: center;
  transition: all 150ms ease-out;
  transform: scale(0.5) translateY(0);
  opacity: 0;
  z-index: -1;
}

.popup-message::before {
  content: "";
  position: absolute;
  bottom: -2.5px;
  left: calc(50% - 3px);
  width: 6px;
  height: 6px;
  background-color: #50c878;
  transform: rotate(45deg);
}

.popup-message.active {
  transition: all 50ms ease-out;
  transform: scale(1) translateY(-20px);
  opacity: 1;
  z-index: 1;
}

.text-subscript {
  font-size: 0.6rem;
}
</style>

<script>
import { sleep, hasBatchim } from "@/assets/utils";
export default {
  name: "results-page",
  data() {
    return {
      query: {},
      data: null,
      stats: 0,
      liked: false,
      timeout: {},
    };
  },
  methods: {
    handleClick: function (action) {
      const route = { name: "index", query: {} };
      if (this.query.mode === "test") {
        route.query.mode = "test";
      }

      if (action == "goto-main") {
        this.$router.push(route);
      }
    },
    handleLike: async function () {
      try {
        const el = document.querySelector(".img-heart");
        if (!el) return;
        el.classList.add("active");
        el.classList.remove("bounce");
        setTimeout(() => {
          el.classList.add("bounce");
        }, 1);
        if (!this.liked) {
          this.liked = true;
          const sessionId = sessionStorage.getItem("traveldino-session-id");
          if (sessionId) this.$repositories.like.set(sessionId);
        }
        this.handlePopup("like");
      } catch (err) {
        console.error(err);
      }
    },
    handlePopup: async function (key) {
      if (this.timeout[key]) clearTimeout(this.timeout[key]);
      const el = document.querySelector(`span.popup-message-${key}`);
      if (!el) return;
      el.classList.add("active");
      if (navigator.clipboard) {
        const LINK = `${this.$config.APP_BASE_URL}/results?type=${this.data.type_id}&id=${this.data.id}`;
        navigator.clipboard.writeText(LINK);
        console.log("Copied link : " + LINK);
      }
      this.timeout[key] = setTimeout(() => {
        el.classList.remove("active");
      }, 2000);
    },
    hasBatchim: hasBatchim,
    getImage() {
      return require("@/assets/images/" + this.data.id + ".jpg");
    },
  },
  mounted: async function () {
    this.$nuxt.$emit("loading-on");
    this.query = this.$route.query || {};
    try {
      let data = null;
      const fetched = sessionStorage.getItem(`traveldino-results-fetched`);
      if (fetched == "true") {
        data = this.$route.params;
        sessionStorage.removeItem("traveldino-results-fetched");
      } else {
        const query = this.$route.query;
        const res = await this.$repositories.countries.get(query);
        data = res.data;
      }
      if (data.type_id_a == "A") data.type_id_a_text = "모험";
      else if (data.type_id_a == "C") data.type_id_a_text = "도시문화";
      else if (data.type_id_a == "R") data.type_id_a_text = "휴양";
      this.data = data;

      const resStats = await this.$repositories.stats.get(data.code);
      if (resStats.data < 1000) {
        if (sessionStorage.getItem(`traveldino-stats-${data.code}`)) {
          this.stats = Number(
            sessionStorage.getItem(`traveldino-stats-${data.code}`)
          );
          this.stats++;
        } else {
          this.stats = Math.round(Math.random() * 1000 + Math.random() * 1000);
        }
      } else {
        this.stats = resStats.data - 1;
      }
      sessionStorage.setItem(`traveldino-stats-${data.code}`, this.stats);
      await sleep(400);
    } catch (err) {
      console.error(err);
    } finally {
      this.$nuxt.$emit("loading-off");
    }
  },
};
</script>
