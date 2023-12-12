<script setup>
import { inject } from 'vue'
import MyListText from '../components/MyList/Mylisttext.vue'
import MyListFooter from '../components/MyList/MyListFooter.vue'
import CardComponent from '../components/CardComponent.vue'
const cards = inject('cards')
</script>

<template>
  <div class="home-main-container">
    <div class="myText">
      <MyListText></MyListText>
    </div>
    <div class="cards">
      <div class="card-component">
        <template v-for="item in cards" :key="item">
          <CardComponent :url="item"></CardComponent>
        </template>
      </div>
    </div>

    <MyListFooter></MyListFooter>
  </div>
</template>

<style scoped>
.home-main-container {
  width: 100%;
}
.myText {
  /* margin-top: 10rem; */
}
.cards {
  width: 100vw;
  background-color: rgb(95, 95, 95);
}
.card-component {
  padding: 20px 0 10px 20px;
  display: flex;
}
</style>
