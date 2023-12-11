<template>
  <div class="main-container">
    <div class="additional-info-container">
      <div class="left-section">
        <div class="match">98% Match</div>
        <div class="season-info">
          <div class="age-info">U/A 13+</div>
          4 Season
        </div>
        <div class="gener">Sitcon . Coming-of-age . 1980s</div>
        <h2>S1:E1 "Pilot Part 1 & 2"</h2>
        <h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolorem nemo similique
          perferendis repellendus quas facere.
        </h4>
      </div>
      <div class="right-section">
        <div class="cast">
          <span>Cast: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, sit!
        </div>
        <div class="genres">
          <span>Genres: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, sit!
        </div>
        <div class="this-show-is"><span>This show is: </span> Witty</div>
        <div class="season-dropdwn" @click="toggleDropdown">
          <!-- Dropdown -->
          <div class="dropdown">
            <button class="dropbtn">
              Seasons 1
              <font-awesome-icon :icon="['fas', 'caret-down']" />
            </button>
            <div class="dropdown-content" v-if="isDropdownVisible">
              <a href="#">Sason 1</a>
              <a href="#">Sason 2</a>
              <a href="#">Sason 3</a>
              <a href="#">Sason 4</a>
              <a href="#">Sason 5</a>
              <a href="#">Sason 6</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="episodes-list">
      <EpisodesListInModal></EpisodesListInModal>
    </div>
    <div class="modal-card-compo">
      <div class="row">
        <ModalCardCompo></ModalCardCompo>
        <ModalCardCompo></ModalCardCompo>
        <ModalCardCompo></ModalCardCompo>
      </div>
      <div class="row">
        <ModalCardCompo></ModalCardCompo>
        <ModalCardCompo></ModalCardCompo>
        <ModalCardCompo></ModalCardCompo>
      </div>
      <div class="row">
        <ModalCardCompo></ModalCardCompo>
        <ModalCardCompo></ModalCardCompo>
        <ModalCardCompo></ModalCardCompo>
      </div>
      <div class="row-border-bottom"></div>
    </div>
    <div class="modal-footer">
      <ModalFooter></ModalFooter>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import EpisodesListInModal from '../OnHover/EpisodesListInModal.vue'
import ModalCardCompo from '../OnHover/ModalCardCompo.vue'
import ModalFooter from './ModalFooter.vue'

const isDropdownVisible = ref(false)

const toggleDropdown = () => {
  setTimeout(() => {
    isDropdownVisible.value = !isDropdownVisible.value
  }, 0)
}

// Close the dropdown when clicking outside of it
const closeDropdown = () => {
  isDropdownVisible.value = false
}

// Attach a global click event listener to close the dropdown when clicking outside
window.addEventListener('click', closeDropdown)
</script>

<style scoped>
.modal-card-compo {
  margin-top: 20px;
  margin-left: 20px;
}
.modal-card-compo .row {
  display: flex;
  flex-flow: row;
  margin-left: 20px;
}
.modal-card-compo .row-border-bottom {
  border-bottom: 2px solid rgb(48, 47, 47);
}
.modal-card-compo .row-border-bottom {
  margin-top: 25px;
}
.main-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

/* Additional info container */
.additional-info-container {
  display: flex;
  justify-content: space-between;
}

/* Left Section */
.left-section {
  margin-left: 50px;
  margin-top: 15px;
}
.second-container div {
  margin-top: 5px;
}

.match {
  color: rgb(4, 206, 4);
  font-size: 15px;
}

.season-info {
  color: rgb(179, 179, 179);
}
.age-info {
  border: 1px solid rgb(119, 119, 119);
  color: rgb(179, 179, 179);
  width: 70px;
  text-align: center;
  margin-bottom: 5px;
}
.gener {
  color: wheat;
}

.left-section h2 {
  color: white;
  margin-top: 20px;
}

.left-section h4 {
  width: 430px;
  color: white;
  margin-top: 10px;
}

/* Right Section */

.right-section {
  color: white;
  width: 250px;
  margin-right: 50px;
}
.right-section div {
  margin-top: 15px;
}

.right-section span {
  color: #646464;
}

/* Dropdown */
/* The dropdown container */
.dropdown {
  float: left;
  overflow: hidden;
  align-self: flex-start;
  background-color: black;
  cursor: pointer;
  /* opacity: 0.9; */
  border: 0.5px solid rgb(99, 99, 99);
  background-color: #222222;
  border-radius: 5px;
  width: 140px;
  height: 40px;
  padding-left: 20px;
  padding-top: 5px;
  /* font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; */
  margin-top: 15px;
  margin-left: 100px;
}

.dropdown:hover {
  background-color: rgb(53, 53, 53);
  /* opacity: 0.9; */
}

/* Dropdown button */
.dropbtn {
  font-size: 15px;
  border: none;
  outline: none;
  color: white;
  cursor: pointer;
  padding: 05px 14px;
  background-color: inherit;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; /* Important for vertical align on mobile phones */
  margin: 0; /* Important for vertical align on mobile phones */
}

.dropbtn:hover {
  color: rgb(255, 255, 255);
}

/* Dropdown content (hidden by default) */
.dropdown-content {
  position: absolute;
  background-color: black;
  /* opacity: 0.95; */
  color: white;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  float: none;
  color: rgb(255, 255, 255);
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

/* Add a grey background color to dropdown links on hover */
.dropdown-content a:hover {
  text-decoration: underline;
}

/* Show the dropdown menu on hover */
/* .dropdown:hover .dropdown-content {
  display: block;
} */
</style>
