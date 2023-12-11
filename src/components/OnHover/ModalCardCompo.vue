<template>
  <div class="moreInfo-container">
    <video
      autoplay
      loop
      muted
      plays-inline
      class="more-info-video"
      src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
    ></video>
    <div class="inside-details-container">
      <div class="second-container">
        <div class="match">98% Match</div>
        <div class="season-info">
          <div class="for-awsome-icon">
            <div class="age-info">U/A 13+</div>
            <a class="add-to-list-icon">
              <font-awesome-icon
                @mouseover="showText"
                @mouseout="hideText"
                class="add-to-list-icon-itself"
                :icon="['fas', 'plus']"
              />
              <p class="on-hover-text" v-if="isTextVisible">Add to my List</p>
            </a>
          </div>
          4 Season
        </div>
        <div class="gener">Sitcon . Coming-of-age . 1980s</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// For Add to my List
const isTextVisible = ref(false)

const showText = () => {
  isTextVisible.value = true
}

const hideText = () => {
  setTimeout(() => {
    isTextVisible.value = false
  }, 200)
}
</script>

<style scoped>
.moreInfo-container {
  background-color: #161616;
  border-radius: 10px;
  box-shadow: 2px 2px 20px black;
  margin-top: 25px;
  z-index: 5;
  width: 200px;
  margin-right: 30px;
}
.more-info-video {
  width: 200px;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  height: 120px;
  margin-top: -7px;
}

.inside-details-container {
  margin-top: 10px;
}

.second-container {
  margin-left: 25px;
  margin-top: 15px;
}
.second-container div {
  margin-top: 5px;
}

.match {
  color: rgb(4, 206, 4);
  font-size: 15px;
}

.season-info {
  color: rgb(179, 179, 179);
}
.age-info {
  border: 1px solid rgb(119, 119, 119);
  color: rgb(179, 179, 179);
  width: 70px;
  height: 27px;
  text-align: center;
  margin-bottom: 5px;
}

.for-awsome-icon {
  display: flex;
}

.add-to-list-icon-itself {
  position: relative;
  margin-left: 30px;
  font-size: 30px;
  border-radius: 50%;
  border: 0.5px solid rgb(124, 122, 122);
  padding: 10px;
  cursor: pointer;
  color: rgb(145, 145, 145);
}

.on-hover-text {
  position: absolute;
  color: rgb(44, 44, 44);
  font-size: 12px;
  background-color: #ffffff;
  font-weight: 600;
  border-radius: 25px;
  padding-right: 10px;
  padding-left: 10px;
}
</style>
