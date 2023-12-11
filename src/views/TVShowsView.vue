<template>
  <div class="home-main-container">
    <div class="wrapper-container">
      <Video v-if="showVideo" @displayChanged="videoAppearenceChanged()"> </Video>
      <TVShowsMain class="tv-main"></TVShowsMain>
    </div>
    <TVShowsSlidingLists></TVShowsSlidingLists>
    <TVShowsFooter></TVShowsFooter>
  </div>
</template>
<script setup>
import TVShowsMain from '../components/TVShows/TVShowsMain.vue'
import TVShowsSlidingLists from '../components/TVShows/TVShowsSlidingLists.vue'
import TVShowsFooter from '../components/TVShows/TVShowsFooter.vue'
import Video from '../components/Video.vue'

import { ref } from 'vue'

const showVideo = ref(true)
const videoAppearenceChanged = () => {
  console.log('change')
  showVideo.value = !showVideo.value
}
</script>

<style scoped>
.home-main-container {
  width: 100%;
}
</style>
