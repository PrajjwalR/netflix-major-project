<script setup>
import NewAndPopularSlidingLists from '../components/NewAndPopular/NewAndPopularSlidingLists.vue'
import NewAndPopularFooter from '../components/NewAndPopular/NewAndPopularFooter.vue'
</script>

<template>
  <div class="home-main-container">
    <NewAndPopularSlidingLists></NewAndPopularSlidingLists>
    <NewAndPopularFooter></NewAndPopularFooter>
  </div>
</template>
<script setup></script>

<style scoped>
.home-main-container {
  width: 100%;
}
</style>
