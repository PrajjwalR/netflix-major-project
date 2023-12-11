<template>
  <div class="moreInfo-container">
    <video
      autoplay
      loop
      muted
      plays-inline
      class="more-info-video"
      src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"
    ></video>
    <div class="inside-details-container">
      <div class="buttons-icons">
        <a>
          <font-awesome-icon class="awesome-icons" :icon="['fas', 'circle-play']" />
        </a>
        <a @click="toggleToList(url)" @mouseover="showAddText" @mouseout="hideAddText">
          <p class="on-hover-text on-hover-text-add" v-if="isAddTextVisible">Add to my List</p>
          <font-awesome-icon class="awesome-icons" :icon="['fas', 'plus']" />
        </a>
        <a @mouseover="showLikeText" @mouseout="hideLikeText">
          <font-awesome-icon class="awesome-icons" :icon="['fas', 'thumbs-up']" />
          <p class="on-hover-text" v-if="isLikeTextVisible">Do you Like it?</p>
        </a>
        <a class="drop-down-icon" @click="openModal">
          <font-awesome-icon class="awesome-icons" :icon="['fas', 'arrow-down']" />
        </a>
      </div>
      <div class="second-container">
        <div class="match">98% Match</div>
        <div class="season-info">
          <div class="age-info">U/A 13+</div>
          4 Season
        </div>
        <div class="gener">Sitcon . Coming-of-age . 1980s</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['openModal'])

const openModal = () => {
  emit('openModal')
}

// Add to my List text display on Hovering over the Add button.
import { ref, inject, defineProps, defineEmits } from 'vue'
const isCardAdded = ref(false)
const cards = inject('cards', ref([]))
const props = defineProps({
  url: String
})

// For Add to my List.
const isAddTextVisible = ref(false)
const isLikeTextVisible = ref(false)

const showAddText = () => {
  isAddTextVisible.value = true
}

const hideAddText = () => {
  isAddTextVisible.value = false
}

// For Like it text.
const showLikeText = () => {
  isLikeTextVisible.value = true
}

const hideLikeText = () => {
  isLikeTextVisible.value = false
}

//For toggling the list  script

const toggleToList = (url) => {
  if (isCardAdded.value) {
    // Remove the card if it's already added
    const index = cards.value.indexOf(url)
    if (index !== -1) {
      cards.value.splice(index, 1)
    }
  } else {
    // Add the card if it's not added
    cards.value.push(url)
  }

  // Toggle the isCardAdded variable for the next click
  isCardAdded.value = !isCardAdded.value
}
</script>

<style scoped>
.on-hover-text {
  position: absolute;
  color: rgb(44, 44, 44);
  font-size: 20px;
  background-color: #ffffff;
  font-weight: 600;
  border-radius: 25px;
  padding-right: 10px;
  padding-left: 10px;
}
.on-hover-text-add {
  margin-top: 30px;
}

/* .moreInfo-hover-element {
  padding: 20px;
  width: 250px;
  box-shadow: 10px 10px 5px 12px lightblue;
} */
.moreInfo-container {
  /* height: 350px; */
  /* width: 300px; */
  background-color: #161616;
  border-radius: 10px;
  box-shadow: 2px 2px 20px black;
  position: absolute;
  margin-top: -250px;
  margin-left: -15px;
  /* top: -20px; */
  /* left: 0; */
  z-index: 5;
}
.more-info-video {
  width: 300px;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  height: 169px;
  margin-top: -7px;
}

.inside-details-container {
  margin-top: 10px;
}
.buttons-icons {
  margin-left: 25px;
  display: flex;
  justify-content: flex-start;
}

.awesome-icons {
  position: relative;
  font-size: 30px;
  margin-right: 20px;
  color: white;
}
.awesome-icons:hover {
  color: #a1a1a1;
}

.buttons-icons .drop-down-icon {
  margin-left: 70px;
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
  text-align: center;
  margin-bottom: 5px;
}
</style>
