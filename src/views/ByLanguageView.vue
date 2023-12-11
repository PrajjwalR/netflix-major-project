<script setup>
import ByLanguageMain from '../components/ByLanguage/ByLanguageMain.vue'
import ByLanguageSlidingLists from '../components/ByLanguage/ByLanguageSlidingLists.vue'
import ByLanguageFooter from '../components/ByLanguage/ByLanguageFooter.vue'
</script>

<template>
  <div class="home-main-container">
    <div class="wrapper-container">
      <ByLanguageMain></ByLanguageMain>
    </div>
    <ByLanguageSlidingLists></ByLanguageSlidingLists>
    <ByLanguageFooter></ByLanguageFooter>
  </div>
</template>
<script setup></script>

<style scoped>
.home-main-container {
  width: 100%;
}
.wrapper-container {
  height: 20vh;
}
</style>
