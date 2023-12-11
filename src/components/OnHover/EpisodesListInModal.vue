<template>
  <div class="main-container">
    Episodes
    <div class="col">
      <img src="https://picsum.photos/200/300?random=9" class="card-img" alt="" />
      <div class="img-text">
        <h2>Lorem ipsum dolor sit amet, consectetur.</h2>
        <p>Today</p>
      </div>
    </div>
    <div class="border-line"></div>
    <div class="col">
      <img src="https://picsum.photos/201/300?random=9" class="card-img" alt="" />
      <div class="img-text">
        <h2>Lorem ipsum dolor sit amet, consectetur.</h2>
        <p>Today</p>
      </div>
    </div>
    <div class="border-line"></div>
    <div class="col">
      <img src="https://picsum.photos/202/300?random=9" class="card-img" alt="" />
      <div class="img-text">
        <h2>Lorem ipsum dolor sit amet, consectetur.</h2>
        <p>Today</p>
      </div>
    </div>
    <div class="border-line"></div>
    <div class="col">
      <img src="https://picsum.photos/203/300?random=94" class="card-img" alt="" />
      <div class="img-text">
        <h2>Lorem ipsum dolor sit amet, consectetur.</h2>
        <p>Today</p>
      </div>
    </div>
    <div class="border-line"></div>
    <div class="col">
      <img src="https://picsum.photos/204/300?random=69" class="card-img" alt="" />
      <div class="img-text">
        <h2>Lorem ipsum dolor sit amet, consectetur.</h2>
        <p>Today</p>
      </div>
    </div>
    <div class="border-line"></div>
    <div class="col">
      <img src="https://picsum.photos/204/300?random=29" class="card-img" alt="" />
      <div class="img-text">
        <h2>Lorem ipsum dolor sit amet, consectetur.</h2>
        <p>Today</p>
      </div>
    </div>
    <div class="border-line"></div>
    <div class="col">
      <img src="https://picsum.photos/204/300?random=91" class="card-img" alt="" />
      <div class="img-text">
        <h2>Lorem ipsum dolor sit amet, consectetur.</h2>
        <p>Today</p>
      </div>
    </div>
    <div class="border-line"></div>
    <div class="col">
      <img src="https://picsum.photos/204/300?random=90" class="card-img" alt="" />
      <div class="img-text">
        <h2>Lorem ipsum dolor sit amet, consectetur.</h2>
        <p>Today</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-container {
  background-color: #161616;
  color: white;
  width: 30rem;
  font-weight: 600;
  font-size: 20px;
  margin-left: 1rem;
  margin-top: 10px;
  z-index: 3;
  /* border-top: 2px solid white; */
  border-bottom: 2px solid rgb(128, 128, 128);
  /* border-right: 0.5px solid rgb(83, 83, 83);
  border-left: 0.5px solid rgb(83, 83, 83); */
}
.col {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 120px;
}
.card-img {
  height: 70px;
  width: 155px;
  border-radius: 5px;
}

.img-text {
  margin-left: 10px;
}
.img-text h2 {
  height: 60px;
  font-size: 20px;
}
.img-text p {
  font-size: 13px;
}
.border-line {
  height: 1px;
  background-color: rgb(83, 83, 83);
  width: 30rem;
  margin-left: -10px;
}
</style>
