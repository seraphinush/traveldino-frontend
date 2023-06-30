<template>
  <section class="align-center" ref="print" v-if="!!data">
    <!-- event related -->
    <div v-if="eventEnabled" class="event flex align-center justify-center">
      <svg
        class="flex align-center justify-center"
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        @click="handleClick('close-event')"
      >
        <g transform="scale(0.5) translate(5.8,6)">
          <path
            d="M2.5,2.5 Q6,6 9.5,9.5"
            fill="none"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M2.5,9.5 Q6,6 9.5,2.5"
            fill="none"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
          />
        </g>
      </svg>
      <div @click="handleClick('goto-event')"></div>
    </div>

    <Header />
    <h2 class="font-face-highlight">
      {{ "당신에게 지금 딱 맞는 여행지는..." }}
    </h2>
    <h1 class="font-face-highlight text-highlight-light">
      {{ data.name }}
    </h1>

    <!--  -->
    <div id="img-container" class="align-center justify-center">
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

    <!--  -->
    <div class="like-container align-center" @click="handleClick('like')">
      <p class="text-center text-highlight font-face-highlight">
        결과가 마음에 들어요!
      </p>
      <div class="popup-container justify-center">
        <!-- <span class="popup-message popup-message-like text-center">좋아요!</span> -->
        <button class="heart text-center">
          <img class="img-heart" src="@/assets/heart.svg" />
        </button>
      </div>
    </div>

    <div class="results-section align-center">
      <p class="text-center font-face-highlight">
        당신과 같은 여행지를 추천받은 사람은
        <span class="text-highlight">{{ stats.toLocaleString() }}</span
        >명이에요
      </p>
      <div class="actions justify-center">
        <div class="popup-container justify-center">
          <span class="popup-message popup-message-share text-center">
            {{ shareMessage }}
          </span>
          <Button @click="handlePopup('share')" text="공유하기" />
        </div>
        <Button @click="handleClick('goto-main')" text="메인으로" />
      </div>
    </div>

    <div class="results-section align-center">
      <span class="font-face-highlight">
        여행지 정보를 더 알고 싶다면 인스타 팔로우!
      </span>
      <a
        class="instagram-link align-center font-face-highlight"
        :href="instagram"
        target="_blank"
      >
        <img class="icon" src="@/assets/instagram.svg" />
        <span>traveldino.app</span>
      </a>
    </div>

    <div class="results-section more align-center">
      <span class="more-text"> 이 여행지가 더 궁금하다면? </span>
      <div class="more-items flex flex-row justify-around">
        <div
          class="more-item flex flex-col align-center"
          @click="handleClick('general-info')"
        >
          <img class="more-img" src="@/assets/more_info.png" />
          <span>나라정보</span>
          <span>보러가기</span>
        </div>
        <div
          class="more-item flex flex-col align-center"
          @click="handleClick('travel-info')"
        >
          <img class="more-img" src="@/assets/more_marker.png" />
          <span>여행정보</span>
          <span>보러가기</span>
        </div>
        <div
          class="more-item flex flex-col align-center"
          @click="handleClick('ticket-info')"
        >
          <img class="more-img" src="@/assets/more_plane.png" />
          <span>예매정보</span>
          <span>보러가기</span>
        </div>
      </div>
    </div>

    <p class="text-subscript">사진 출처 : Pixabay, Unsplash, Pexels</p>
  </section>
</template>

<style scoped>
section {
  position: relative;
  font-family: var(--font-face-default);
  /* yolo to get header in the image save */
  margin-top: calc(0px - var(--header-height));
  padding-top: 0;
}

section > *:not(:last-child) {
  margin-bottom: 1.5rem;
}

/* yolo to get header in the image save */
header {
  position: relative;
  margin-bottom: 0 !important;
  width: calc(100% + 2rem);
  z-index: 10;
}

h1 {
  margin-bottom: 3.5rem !important;
  font-size: 2.8rem;
}

h2 {
  margin: 2rem 0 0.5rem 0 !important;
  font-weight: 400;
  font-size: 2rem;
}

#img-container {
  position: relative;
  display: flex;
  margin-bottom: 2rem !important;
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

.results-section {
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
}

.results-section > *:not(:last-child) {
  margin-bottom: 0.75rem;
}

.like-container {
  display: flex;
  flex-direction: row;
  border: 0.1875rem solid var(--clr-secondary);
  border-radius: 10px;
  margin: 0 0 2rem 0 !important;
  padding: 0.75rem 1rem;
  width: fit-content;
  cursor: pointer;
}

.like-container > *:not(:last-child) {
  margin-right: 0.5rem;
}

button.heart {
  display: flex;
  width: 1.5rem;
  transition: transform 100ms linear;
}

.like-container:hover button.heart {
  transform: scale(1.1);
}

.img-heart {
  width: inherit;
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
    transform: scale(0.9, 1.1) translateY(-20px);
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
}

.actions > *:not(:last-child) {
  margin-right: 1rem;
}

.popup-container {
  display: flex;
  position: relative;
}

.popup-message {
  position: absolute;
  top: -20px;
  padding: 0.5rem 0.75rem;
  border-radius: 10px;
  background-color: #50c878;
  color: #eee;
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

.instagram-link {
  display: flex;
  padding: 0.25rem 0.5rem;
  font-size: 1.5rem;
  border: 0.2rem solid black;
  border-radius: 0.75rem;
  cursor: pointer;
}

.instagram-link > * {
  font-size: 1rem;
}

.instagram-link > img {
  width: 1rem;
  /* filter: var(--clr-secondary-filter); */
}

.more {
  padding: 1.5rem 0;
  width: 100%;
  background: var(--clr-primary-light);
  border-radius: 1rem;
  color: var(--clr-primary-dark);
}

.more-items {
  width: 100%;
}

.more-item {
  color: var(--clr-secondary);
  cursor: pointer;
}

.more-img {
  width: 4rem;
  margin-bottom: 0.5rem;
}

.event {
  right: 0;
  bottom: 0;
  position: fixed;
  margin: 2rem;
  z-index: 9990;
}

.event svg {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  width: 2rem;
  height: 2rem;
  border-radius: 9999px;
  background: var(--clr-secondary);
  cursor: pointer;
  z-index: 9992;
  transition: transform 0.2s;
}
.event svg:hover {
  transform: scale(1.1);
}

.event div {
  width: 16rem;
  height: 16rem;
  background: no-repeat center url("@/assets/event_2023q2_starbucks.png");
  background-size: 101%;
  border-radius: 9999px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  cursor: pointer;
  z-index: 9991;
}
</style>

<script>
const STAT_MIN_VALUE = 100;
const SHARE_LINK = "링크 복사!";

import * as html2canvas from "html2canvas";

import { sleep, hasBatchim } from "@/assets/utils";
export default {
  name: "results-id",
  data() {
    return {
      query: {},
      data: null,
      stats: 0,
      liked: false,
      shared: false,
      timeout: {},
      shareMessage: "",

      instagram: "https://instagram.com/traveldino.app",

      // event
      eventEnabled: false,
      eventLink: "https://forms.gle/HQSPEeFkudmtvCip8",
    };
  },
  methods: {
    handleClick: function (type) {
      const route = { name: "index", query: {} };
      // set test mode
      if (this.query.mode === "test") {
        route.query.mode = "test";
      }
      // route to main
      if (type == "goto-main") {
        this.$router.push(route);
      }

      // event related
      else if (type == "goto-event") {
        window.open(this.eventLink, "_blank");
      }
      // event related
      else if (type == "close-event") {
        this.eventEnabled = false;
      }

      //
      else {
        const sessionId = sessionStorage.getItem("traveldino-session-id");
        try {
          if (type == "like") {
            const el = document.querySelector(".img-heart");
            if (!el) return;
            el.classList.add("active");
            el.classList.remove("bounce");
            setTimeout(() => el.classList.add("bounce"), 1);
            if (!this.liked) {
              this.liked = true;
              if (sessionId) this.$repositories.stats.set("like", sessionId);
            }
          } else if (type == "general-info") {
            if (sessionId)
              this.$repositories.stats.set("general-info", sessionId);
            window.open(this.data.link_general_info, "_blank");
          } else if (type == "travel-info") {
            if (sessionId)
              this.$repositories.stats.set("travel-info", sessionId);
            window.open(this.data.link_travel_info, "_blank");
          } else if (type == "ticket-info") {
            if (sessionId)
              this.$repositories.stats.set("ticket-info", sessionId);
            window.open(this.data.link_ticket_info, "_blank");
          }
        } catch (err) {
          console.error(err);
        }
      }
    },
    handlePopup: async function (key) {
      if (this.timeout[key]) clearTimeout(this.timeout[key]);
      const el = document.querySelector(`span.popup-message-${key}`);
      if (!el) return;
      try {
        if (!!navigator.clipboard) {
          // if (!!navigator.clipboard) {
          //   this.$nuxt.$emit("loading-on");
          //   this.shareMessage = SHARE_IMAGE;
          //   const DIV = this.$refs.print;
          //   const canvas = await html2canvas(DIV);

          //   /* option 1 : copy image */
          //   // await canvas.toBlob((blob) =>
          //   //   navigator.clipboard.write([
          //   //     new ClipboardItem({ "image/png": blob }),
          //   //   ])
          //   // );

          //   /* option 2 : download image */
          //   const blob = canvas.toDataURL("image/png");
          //   let a = document.createElement("a");
          //   a.style.display = "none";
          //   a.setAttribute("href", blob);
          //   a.setAttribute("target", "_blank");
          //   a.setAttribute("download", "traveldino_result.png");
          //   document.body.appendChild(a);
          //   a.click();
          //   await sleep(400);
          //   document.body.removeChild(a);
          //   /* options end */

          //   this.$nuxt.$emit("loading-off");
          //   await sleep(400);
          //   el.classList.add("active");
          // } else
          if (!!navigator.clipboard.writeText) {
            this.shareMessage = SHARE_LINK;
            const LINK = window.location.href;
            navigator.clipboard.writeText(LINK);
            console.log("Copied link : " + LINK);
            el.classList.add("active");
            if (!this.shared) {
              this.shared = true;
              const sessionId = sessionStorage.getItem("traveldino-session-id");
              if (sessionId) this.$repositories.stats.set("share", sessionId);
            }
          }
        }
      } catch (err) {
        console.error(err);
      } finally {
        this.timeout[key] = setTimeout(() => {
          el.classList.remove("active");
        }, 2000);
      }
    },
    hasBatchim: hasBatchim,
    getImage() {
      return require("@/assets/images/" + this.data.id + ".jpg");
    },
  },
  mounted: async function () {
    this.$nuxt.$emit("loading-on");
    const { query, params } = this.$route || {};
    this.shareMessage = SHARE_LINK;
    try {
      query.countryId = params.id;
      this.query = query;

      if (!query.sessionId) query.sessionId = "null";
      const res = await this.$repositories.results.get(query);
      const data = res.data;

      if (data.type_id_a == "A") data.type_id_a_text = "모험";
      else if (data.type_id_a == "C") data.type_id_a_text = "도시문화";
      else if (data.type_id_a == "R") data.type_id_a_text = "휴양";
      this.data = data;

      const resStats = await this.$repositories.stats.get(data.code);
      if (resStats.data < STAT_MIN_VALUE) {
        if (sessionStorage.getItem(`traveldino-stats-${data.code}`)) {
          this.stats = Number(
            sessionStorage.getItem(`traveldino-stats-${data.code}`)
          );
          this.stats++;
        } else {
          this.stats =
            STAT_MIN_VALUE + Math.round(Math.random() * STAT_MIN_VALUE);
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
