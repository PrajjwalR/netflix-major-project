<template>
  <div class="main-text-container">
    <div class="parent-tv-shows">
      <div class="tv-shows-container">
        <div class="tv-shows">Movies</div>
        <!-- Dropdown -->
        <div class="dropdown">
          <select name="genres" class="dropdown-content">
            <option href="#">Genres</option>
            <option href="#">Indian</option>
            <option href="#">US</option>
            <option href="#">British</option>
            <option href="#">Action</option>
            <option href="#">Romance</option>
            <option href="#">Comedy</option>
          </select>
        </div>
      </div>
      <div class="viewing-form-container">
        <div class="square-box three-line"><font-awesome-icon :icon="['fas', 'list']" /></div>
        <div class="square-box square-box">
          <font-awesome-icon :icon="['fas', 'table-cells-large']" />
        </div>
      </div>
    </div>
    <div class="tv-show-info">
      <div class="main-text">The <span class="text-red">CHILL</span> Zone</div>
      <div class="description-text">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus adipisci, totam magni
        tempora cumque eum. Natus pariatur molestiae dicta sed!
      </div>
      <div class="play-info-button">
        <button class="play-button common-button-class">
          <font-awesome-icon :icon="['fas', 'play']" />
          Play
        </button>
        <button class="info-button common-button-class">
          <font-awesome-icon class="awsome-info-button" :icon="['fas', 'circle-info']" />
          More Info
        </button>
      </div>
      <div class="age-rating-box">
        <div class="reload-border">
          <font-awesome-icon class="reload-icon" :icon="['fas', 'repeat']" />
        </div>
        <div class="age-rating">U/A 16+</div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.main-text-container {
  font-family: 'Bebas Neue', sans-serif;
  position: absolute;
  top: 70px;
  width: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  height: 390px;
}

.parent-tv-shows {
  display: flex;
  justify-content: space-between;
}
.viewing-form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  margin-right: 50px;
}
.square-box {
  height: 30px;
  width: 40px;
  background-color: rgb(71, 71, 71);
  border: 1px solid white;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.tv-shows-container {
  display: flex;
}
.tv-shows {
  font-size: 38px;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  align-self: flex-start;
  margin-left: 50px;
}

/* Dropdown */

/* The dropdown container */
.dropdown .dropdown-content {
  float: left;
  overflow: hidden;
  align-self: flex-start;
  background-color: black;
  opacity: 0.9;
  border: 0.7px solid white;
  color: white;
  padding-left: 10px;
  width: 110px;
  height: 30px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  margin-top: 15px;
  margin-left: 45px;
}

.dropdown-content:hover {
  background-color: black;
  opacity: 0.9;
}

/* TV show info */
.tv-show-info {
  display: flex;
  justify-content: center;
  align-items: baseline;
  flex-direction: column;
  margin-top: auto;
  width: 100%;
}
.main-text {
  font-size: 50px;
  font-weight: bold;
  margin-left: 50px;
  color: rgb(49, 49, 49);
  /* margin-right: 7%; */
  color: white;
}
.main-text .text-red {
  color: rgb(255, 2, 2);
  font-weight: bold;
}

.main-text-container .description-text {
  width: 300px;
  display: flex;
  justify-content: center;
  margin-left: 50px;
  font-size: 17px;
  font-weight: 500;
  margin-top: 10px;
}

.main-text-container .play-info-button {
  margin-top: 3rem;
  margin-left: 25px;
}

.main-text-container .play-info-button .common-button-class {
  padding: 5px;
  height: 2.2rem;
  margin-right: 10px;
  border-radius: 5px;
  border: none;
  font-size: 18px;
  font-weight: 500;
}

.main-text-container .play-info-button .play-button {
  background-color: white;
  width: 90px;
}
.main-text-container .play-info-button .play-button:hover {
  opacity: 0.7;
  cursor: pointer;
}
.main-text-container .play-info-button .info-button {
  background-color: rgb(145, 145, 145);
  color: white;
  width: 130px;
}
.main-text-container .play-info-button .info-button:hover {
  cursor: pointer;
  opacity: 0.7;
}

.main-text-container .play-info-button .info-button .awsome-info-button {
  color: rgb(255, 255, 255);
}

/* Age rating container */

.age-rating-box {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  opacity: 0.6;
  right: 0px;
  /* top: 70; */
}
.age-rating {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 80px;
  background-color: rgb(145, 145, 145);
  color: white;
  opacity: 0.6;
  font-size: 20px;
}
.age-rating:hover {
  cursor: pointer;
  opacity: 0.7;
}
.reload-icon {
  color: rgb(0, 0, 0);
  border-radius: 50px;
  width: 30px;
  height: 38px;
  font-size: 20px;
}
.reload-icon:hover {
  cursor: pointer;
  opacity: 0.7;
}
.reload-border {
  height: 40px;
  width: 50px;
  border-radius: 50px;
  border: 1px solid black;
  position: relative;
  right: 10px;
  text-align: center;
}
</style>
