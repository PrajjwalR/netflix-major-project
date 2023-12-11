<template>
  <div class="sliding-row-main-container">
    <section class="main-section popular-on-netflix-section">
      <h3 class="card-row-heading">Award-Winning TV Shows</h3>
      <div class="card-row">
        <template v-for="(imgUrl, i) in imgArray" :key="imgUrl">
          <CardComponent :url="imgUrl + `?random=${i + 7}`"></CardComponent>
        </template>
      </div>
    </section>
    <section class="main-section popular-on-netflix-section">
      <h3 class="card-row-heading">Continue Watching for Prajjwal</h3>
      <div class="card-row">
        <template v-for="(imgUrl, i) in imgArray" :key="imgUrl">
          <CardComponent :url="imgUrl + `?random=${i + 8}`"></CardComponent>
        </template>
      </div>
    </section>
    <section class="main-section popular-on-netflix-section">
      <h3 class="card-row-heading">Trending Now</h3>
      <div class="card-row">
        <template v-for="(imgUrl, i) in imgArray" :key="imgUrl">
          <CardComponent :url="imgUrl + `?random=${i + 6}`"></CardComponent>
        </template>
      </div>
    </section>
    <section class="main-section popular-on-netflix-section">
      <h3 class="card-row-heading">Oscar-Winning Visually-Striking US TV Shows</h3>
      <div class="card-row">
        <template v-for="(imgUrl, i) in imgArray" :key="imgUrl">
          <CardComponent :url="imgUrl + `?random=${i + 5}`"></CardComponent>
        </template>
      </div>
    </section>
    <section class="main-section popular-on-netflix-section">
      <h3 class="card-row-heading">Top 10 Movies in India Today</h3>
      <div class="card-row">
        <template v-for="(imgUrl, i) in imgArray" :key="imgUrl">
          <CardComponent :url="imgUrl + `?random=${i + 4}`"></CardComponent>
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
          <CardComponent :url="imgUrl + `?random=${i + 3}`"></CardComponent>
        </template>
      </div>
    </section>
    <section class="main-section popular-on-netflix-section">
      <h3 class="card-row-heading">Popular on Netflix</h3>
      <div class="card-row">
        <template v-for="(imgUrl, i) in imgArray" :key="imgUrl">
          <CardComponent :url="imgUrl + `?random=${i + 1}`"></CardComponent>
        </template>
      </div>
    </section>
  </div>
</template>

<script>
import CardComponent from '../CardComponent.vue'

export default {
  data() {
    const imgArray = []

    for (let i = 0; i < 10; i++) {
      imgArray.push('https://picsum.photos/200/301')
    }
    return {
      imgArray,
      isCardVisible: false
    }
  },
  components: {
    CardComponent
  }
}
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
.card-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  height: 200px;
  overflow-x: auto;
}
.card-row-heading {
  padding: 10px;
  position: relative;
  left: 10px;
  font-size: 25px;
}
</style>
