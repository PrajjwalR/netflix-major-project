<template>
  <div class="sliding-row-main-container">
    <section class="main-section popular-on-netflix-section">
      <div class="card-row">
        <template v-for="(imgUrl, i) in imgArray" :key="imgUrl">
          <CardComponent :url="imgUrl + `?random=${i + 55}`"></CardComponent>
        </template>
      </div>
    </section>
    <section class="main-section popular-on-netflix-section">
      <div class="card-row">
        <template v-for="(imgUrl, i) in imgArray" :key="imgUrl">
          <CardComponent :url="imgUrl + `?random=${i + 45}`"></CardComponent>
        </template>
      </div>
    </section>
    <section class="main-section popular-on-netflix-section">
      <div class="card-row">
        <template v-for="(imgUrl, i) in imgArray" :key="imgUrl">
          <CardComponent :url="imgUrl + `?random=${i + 33}`"></CardComponent>
        </template>
      </div>
    </section>
    <section class="main-section popular-on-netflix-section">
      <div class="card-row">
        <template v-for="(imgUrl, i) in imgArray" :key="imgUrl">
          <CardComponent :url="imgUrl + `?random=${i + 22}`"></CardComponent>
        </template>
      </div>
    </section>
    <section class="main-section popular-on-netflix-section">
      <div class="card-row">
        <template v-for="(imgUrl, i) in imgArray" :key="imgUrl">
          <CardComponent :url="imgUrl + `?random=${i + 11}`"></CardComponent>
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
