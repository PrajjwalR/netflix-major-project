<template>
  <div class="footer-main-container">
    <div class="social-media-icons">
      <font-awesome-icon class="footer-icons facebook-icon" :icon="['fab', 'facebook']" />
      <font-awesome-icon class="footer-icons instagram-icon" :icon="['fab', 'instagram']" />
      <font-awesome-icon class="footer-icons twitter-icon" :icon="['fab', 'twitter']" />
      <font-awesome-icon class="footer-icons youtube-icon" :icon="['fab', 'youtube']" />
    </div>
    <div class="info-links-container">
      <div class="row row-one">
        <h3>Audio Description</h3>
        <h3>Investor Relations</h3>
        <h3>Legal Notices</h3>
      </div>

      <div class="row row-two">
        <h3>Help Centre</h3>
        <h3>Jobs</h3>
        <h3>Cookie Preferences</h3>
      </div>

      <div class="row row-three">
        <h3>Gift Card</h3>
        <h3>Terms of Use</h3>
        <h3>Corporate Info.</h3>
      </div>

      <div class="row row-four">
        <h3>Media Centre</h3>
        <h3>Privacy</h3>
        <h3>Contact Us</h3>
      </div>
    </div>
    <div class="wrapper-serviceCode-copyright">
      <div class="service-code-btn">Service Code</div>
      <h4>&copy; 1997-2023 Netflix, Inc</h4>
      <h4>By Prajjwal Chauhan</h4>
    </div>
  </div>
</template>

<style scoped>
.footer-main-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  padding: 70px;
}
.social-media-icons {
  margin-right: 600px;
}
.footer-icons {
  margin-right: 25px;
  font-size: 25px;
}
.facebook-icon:hover {
  color: rgb(0, 99, 230);
  cursor: pointer;
}
.instagram-icon:hover {
  color: rgb(224, 9, 99);
  cursor: pointer;
}
.twitter-icon:hover {
  color: rgb(0, 119, 255);
  cursor: pointer;
}
.youtube-icon:hover {
  color: rgb(180, 3, 3);
  cursor: pointer;
}
.info-links-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  margin-right: 75px;
}
.row {
  display: flex;
  flex-flow: column;
  padding: 0 50px 0 50px;
}

.row h3 {
  font-size: 15px;
  color: grey;
  margin-bottom: 10px;
}

.wrapper-serviceCode-copyright {
  margin-right: 685px;
}

.service-code-btn {
  padding: 7px;
  border: 1px solid gray;
  color: gray;
  text-align: center;
  margin-bottom: 10px;
}

.service-code-btn:hover {
  cursor: pointer;
  color: white;
}

.wrapper-serviceCode-copyright h4 {
  color: gray;
  font-size: 12px;
}
</style>
