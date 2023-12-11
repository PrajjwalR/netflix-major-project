<template>
  <div class="sliding-row-main-container">
    <section class="main-section popular-on-netflix-section">
      <h3 class="card-row-heading">New Netflix</h3>
      <div class="card-row">
        <template v-for="(imgUrl, i) in imgArray" :key="imgUrl">
          <CardComponent :url="imgUrl + `?random=${i + 6}`"></CardComponent>
        </template>
      </div>
    </section>
    <section class="main-section popular-on-netflix-section">
      <h3 class="card-row-heading">Top 10 Movies in India Today</h3>
      <div class="card-row">
        <template v-for="(imgUrl, i) in imgArray" :key="imgUrl">
          <CardComponent :url="imgUrl + `?random=${i + 5}`"></CardComponent>
        </template>
      </div>
    </section>
    <section class="main-section popular-on-netflix-section">
      <h3 class="card-row-heading">Coming Next Week</h3>
      <div class="card-row">
        <template v-for="(imgUrl, i) in imgArray" :key="imgUrl">
          <CardComponent :url="imgUrl + `?random=${i + 8}`"></CardComponent>
        </template>
      </div>
    </section>
    <section class="main-section popular-on-netflix-section">
      <h3 class="card-row-heading">Top 10 TV Shows in India Today</h3>
      <div class="card-row">
        <template v-for="(imgUrl, i) in imgArray" :key="imgUrl">
          <CardComponent :url="imgUrl + `?random=${i + 1}`"></CardComponent>
        </template>
      </div>
    </section>
    <section class="main-section popular-on-netflix-section">
      <h3 class="card-row-heading">Top Comedy</h3>
      <div class="card-row">
        <template v-for="(imgUrl, i) in imgArray" :key="imgUrl">
          <CardComponent :url="imgUrl + `?random=${i + 9}`"></CardComponent>
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
  margin-top: 5rem;
}

/* Sections */

.card-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  height: 200px;
}
.card-row-heading {
  padding: 10px;
  position: relative;
  left: 10px;
  font-size: 25px;
}
</style>
