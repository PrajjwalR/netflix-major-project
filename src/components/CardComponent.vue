<template>
  <div @mouseover="showCard" @mouseleave="hideCard">
    <div class="card">
      <img class="card-image" :src="url" alt="" />
    </div>
    <OnHoverCompo
      @openModal="onOpenModal"
      v-if="isCardVisible"
      :url="url"
      class="hover-element"
    ></OnHoverCompo>
  </div>
  <Teleport to="body">
    <ModalCompo v-if="isModalVisible" @closeModal="hideModal"></ModalCompo>
  </Teleport>
</template>

<script setup>
import OnHoverCompo from '../components/OnHover/OnHoverCompo.vue'
import ModalCompo from './OnHover/ModalCompo.vue'
import { ref } from 'vue'
defineProps({
  url: String
})

// Hover Card Script
const isCardVisible = ref(false)

const showCard = () => {
  isCardVisible.value = true
}
const hideCard = () => {
  isCardVisible.value = false
}

// Modal Script
const isModalVisible = ref(false)

const onOpenModal = () => {
  isModalVisible.value = true
}
const hideModal = () => {
  isModalVisible.value = false
}
</script>

<style scoped>
.card {
  margin-right: 8px;
  /* transition: 0.3s ease-in-out; */
}
.card:hover {
  transform: scale(1.2);
}

.card-image {
  width: 250px;
  border-radius: 6px;
  height: 154px;
}
</style>
