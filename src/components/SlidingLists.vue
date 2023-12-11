<template>
  <div class="sliding-row-main-container">
    <section class="main-section popular-on-netflix-section">
      <h3 class="card-row-heading">Popular on Netflix</h3>
      <!-- <button @click="scrollRight()">Slide Left</button> -->
      <div class="card-row">
        <template v-for="(imgUrl, i) in imgArray" :key="imgUrl">
          <CardComponent :url="imgUrl + `?random=${i + 8}`"></CardComponent>
        </template>
      </div>
    </section>
    <section class="main-section popular-on-netflix-section">
      <h3 class="card-row-heading">Continue Watching for Prajjwal</h3>
      <div class="card-row">
        <template v-for="(imgUrl, i) in imgArray" :key="imgUrl">
          <CardComponent :url="imgUrl + `?random=${i + 6}`"></CardComponent>
        </template>
      </div>
    </section>
    <section class="main-section popular-on-netflix-section">
      <h3 class="card-row-heading">Trending Now</h3>
      <div class="card-row">
        <template v-for="(imgUrl, i) in imgArray" :key="imgUrl">
          <CardComponent :url="imgUrl + `?random=${i + 5}`"></CardComponent>
        </template>
      </div>
    </section>
    <section class="main-section popular-on-netflix-section">
      <h3 class="card-row-heading">US TV Dramas</h3>
      <div class="card-row">
        <template v-for="(imgUrl, i) in imgArray" :key="imgUrl">
          <CardComponent :url="imgUrl + `?random=${i + 14}`"></CardComponent>
        </template>
      </div>
    </section>
    <section class="main-section popular-on-netflix-section">
      <h3 class="card-row-heading">Comedy</h3>
      <div class="card-row">
        <template v-for="(imgUrl, i) in imgArray" :key="imgUrl">
          <CardComponent :url="imgUrl + `?random=${i + 13}`"></CardComponent>
        </template>
      </div>
    </section>
    <section class="main-section popular-on-netflix-section">
      <h3 class="card-row-heading">Romance</h3>
      <div class="card-row">
        <template v-for="(imgUrl, i) in imgArray" :key="imgUrl">
          <CardComponent :url="imgUrl + `?random=${i + 12}`"></CardComponent>
        </template>
      </div>
    </section>
    <section class="main-section popular-on-netflix-section">
      <h3 class="card-row-heading">Si-Fi</h3>
      <div class="card-row">
        <template v-for="(imgUrl, i) in imgArray" :key="imgUrl">
          <CardComponent :url="imgUrl + `?random=${i + 1}`"></CardComponent>
        </template>
      </div>
    </section>
    <section class="main-section popular-on-netflix-section">
      <h3 class="card-row-heading">Popular on Netflix</h3>
      <div class="card-row">
        <template v-for="(imgUrl, i) in imgArray" :key="imgUrl">
          <CardComponent :url="imgUrl + `?random=${i + 11}`"></CardComponent>
        </template>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CardComponent from '../components/CardComponent.vue'

const imgArray = ref([])

for (let i = 0; i < 10; i++) {
  imgArray.value.push('https://picsum.photos/200/300')
}

// Scroll button
// const items = ref(
//   [...Array(5).keys()].map((i) => {
//     return { i }
//   })
// )
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-weight: 600;
  color: white;
}

.sliding-row-main-container {
  position: relative;
  top: -250px;
}
/* Sections */
.card-row-heading {
  padding: 10px;
  position: relative;
  left: 10px;
  font-size: 25px;
}

.card-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  height: 200px;
  overflow-x: auto;
}
</style>
