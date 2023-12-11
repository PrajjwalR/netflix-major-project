<script setup>
import MoviesMain from '../components/Movies/MoviesMain.vue'
import MoviesSlidingLists from '../components/Movies/MoviesSlidingLists.vue'
import MoviesFooter from '../components/Movies/MoviesFooter.vue'
import Video from '../components/Video.vue'
</script>

<template>
  <div class="home-main-container">
    <div class="wrapper-container">
      <Video></Video>
      <MoviesMain></MoviesMain>
    </div>
    <MoviesSlidingLists></MoviesSlidingLists>
    <MoviesFooter></MoviesFooter>
  </div>
</template>
<script setup></script>

<style scoped>
.home-main-container {
  width: 100%;
}
</style>
