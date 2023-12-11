<template>
  <div class="sliding-row-main-container">
    <section class="main-section popular-on-netflix-section">
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
  margin-top: 12rem;
  height: 100vh;
  margin-left: 1.5rem;
}

/* Sections */

.card-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  height: 200px;
}
</style>
