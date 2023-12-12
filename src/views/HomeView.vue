<script setup>
import Main from '../components/Main.vue'
import SlidingLists from '../components/SlidingLists.vue'
import Footer from '../components/Footer.vue'
import Video from '../components/Video.vue'
</script>

<template>
  <div class="home-main-container">
    <div class="wrapper-container">
      <Video></Video>
      <Main></Main>
    </div>
    <SlidingLists class="sliding-lists"></SlidingLists>
    <Footer></Footer>
  </div>
</template>

<style scoped>
.home-main-container {
  width: 100%;
}

.sliding-lists {
  position: relative;
  z-index: 2;
}
</style>
