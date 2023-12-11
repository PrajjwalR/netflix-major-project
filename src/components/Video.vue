<template>
  <div class="video-container">
    <video
      autoplay
      loop
      muted
      plays-inline
      src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
      class="video"
    ></video>
    <!-- <div class="over-lay"></div> -->
  </div>
</template>

<script>
export default {
  data() {
    const videoArray = []

    for (let i = 0; i <= 5; i++) {
      videoArray.push(
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4'
      )
    }
    return {
      videoArray
    }
  }
}
</script>

<style scoped>
.video-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.video-container .video {
  width: 100%;
}
/* .over-lay {
  position: absolute;
  background-color: black;
  width: 100%;
  height: 50px;
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.452), rgba(255, 254, 254, 0.178));
} */
</style>
