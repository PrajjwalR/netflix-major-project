<template>
  <div class="main-text-container">
    <div class="info-div">
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
    </div>
    <div class="age-rating-box">
      <div class="reload-border">
        <font-awesome-icon class="reload-icon" :icon="['fas', 'repeat']" />
      </div>
      <div class="age-rating">U/A 16+</div>
    </div>
  </div>
</template>
<style scoped>
.main-text-container {
  font-family: 'Bebas Neue', sans-serif;
  position: absolute;
  top: 70px;
  width: 100%;
  z-index: 1;
  display: flex;
  justify-content: space-between;
}

.info-div {
  margin-top: 7rem;
}

.main-text {
  font-size: 50px;
  font-weight: bold;
  margin-left: 95px;
  /* color: rgb(49, 49, 49); */
  color: white;
}
.main-text .text-red {
  color: rgb(255, 2, 2);
  font-weight: bold;
}

.main-text-container .description-text {
  width: 15rem;
  display: flex;
  justify-content: center;
  margin-left: 70px;
  font-size: 17px;
  font-weight: 500;
}

.main-text-container .play-info-button {
  margin-top: 20px;
  margin-left: 100px;
}

.main-text-container .play-info-button .common-button-class {
  padding: 5px;
  height: 2.2rem;
  /* margin-right: 10px; */
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
  opacity: 0.6;
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
  opacity: 0.8;
  background-color: rgb(170, 170, 170);
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
  opacity: 0.8;
  color: rgb(139, 139, 139);
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
