<template>
  <div class="main-container">
    <div class="modal-container">
      <div class="close-button-container">
        <button @click="closeModal" class="close-button">&times;</button>
      </div>
      <div class="modal-video-container">
        <Video></Video>
      </div>
      <ModalAdditionalInfo></ModalAdditionalInfo>
    </div>

    <div class="overlay"></div>
  </div>
</template>

<script setup>
import Video from '../Video.vue'
import ModalAdditionalInfo from './ModalAdditionalInfo.vue'

const emit = defineEmits(['closeModal'])
const closeModal = () => {
  emit('closeModal')
}
</script>

<style scoped>
.modal-video-container {
  border-radius: 50px;
}
.modal-container {
  position: absolute;
  top: 27rem;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  transition: 200ms ease-in-out;
  /* border: 1px solid rgb(124, 124, 124); */
  border-radius: 10px;
  z-index: 10;
  background-color: #161616;
  width: 80rem;
  max-width: 70%;
  height: 100vh;
  overflow-y: scroll;
}
/* .modal-container.active {
  transform: translate(-50%, -50%) scale(1);
} */
/* .modal-container .video-container {
  border-radius: 10px;
} */
.close-button-container {
  display: flex;
  width: 100%;
  justify-content: end;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: rgb(99, 99, 99);
  position: relative;
}
.close-button {
  cursor: pointer;
  border: none;
  outline: none;
  background: none;
  font-size: 1.2rem;
  margin-right: 8px;
  margin-top: 5px;
  font-weight: bold;
  position: absolute;
  color: rgb(255, 255, 255);
  border: 1px solid rgb(255, 255, 255);
  background-color: rgb(37, 37, 37);
  padding: 5px;
  border-radius: 50%;
  z-index: 1;
}
.close-button:hover {
  font-size: 1.2rem;
  font-weight: 600;
  color: rgb(255, 255, 255);
  border: 1px solid rgb(37, 37, 37);
  background-color: rgb(37, 37, 37);
}
.overlay {
  position: fixed;
  opacity: 1;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  pointer-events: all;
}
/* .overlay.active {
  pointer-events: all;
  opacity: 1;
} */
</style>
