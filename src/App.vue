<script setup>
import { provide, ref } from 'vue'
import Navbar from './components/Navbar.vue'

const cards = ref([])
provide('cards', cards)
</script>

<template>
  <div class="body">
    <Navbar></Navbar>

    <router-view class="view"></router-view>
  </div>
</template>

<style scoped>
.body {
  overflow-x: hidden;
}
</style>
