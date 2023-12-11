<template>
  <div class="nav-container" :class="{ scrolled: isScrolled }">
    <div class="nav-container-left">
      <div>
        <router-link to="/"
          ><img src="../assets/logo.png" alt="" class="netflix-logo"
        /></router-link>
      </div>
      <div class="nav-item">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="tvshows">TV Shows</router-link></li>
          <li><router-link to="/movies">Movies</router-link></li>
          <li><router-link to="/newandpopular">New & Popular</router-link></li>
          <li><router-link to="/mylist">My List</router-link></li>
          <li><router-link to="/bylanguage">Browse by Language</router-link></li>
        </ul>
      </div>
    </div>
    <div class="nav-container-right">
      <div class="search-icon-container">
        <font-awesome-icon
          @click="toggleSearch"
          class="awesome-search-icon nav-container-right-icon"
          :icon="['fas', 'magnifying-glass']"
        />
        <router-link to="#" class="search-icon-router-link" v-show="isSearchVisible">
          <input class="search-input" type="text" placeholder="Title, people, genres" />
        </router-link>
      </div>
      <div class="children-div"><a href="">Children</a></div>
      <div class="notification-icon-div" @mouseenter="showDropdown" @mouseleave="hideDropdown">
        <router-link to="">
          <font-awesome-icon
            class="awesome-notification-icon nav-container-right-icon"
            :icon="['fas', 'bell']"
          />
        </router-link>
        <div v-if="isDropdownVisible" class="dropdown-content-container">
          <NotificationSection></NotificationSection>
        </div>
      </div>
      <div class="screen-icon-div">
        <a href=""
          ><font-awesome-icon
            class="awesome-screen-icon nav-container-right-icon"
            :icon="['fas', 'mobile-screen']"
        /></a>
      </div>
    </div>
  </div>
</template>

<script>
import NotificationSection from './NotificationSection.vue'

export default {
  data() {
    return {
      isScrolled: false,
      isSearchVisible: false,
      isDropdownVisible: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      // Check the scroll position
      this.isScrolled = window.scrollY > 0
    },
    toggleSearch() {
      // Toggle the visibility of the search input
      this.isSearchVisible = !this.isSearchVisible
    },
    showDropdown() {
      this.isDropdownVisible = true
    },
    hideDropdown() {
      this.isDropdownVisible = false
    }
  },
  components: { NotificationSection }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: white;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.452), rgba(255, 255, 255, 0.178));
  transition: background-color 0.3s ease-in-out;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 2;
}

.nav-container.scrolled {
  background-color: black;
  z-index: 4;
}
.nav-container-left {
  display: flex;
  margin-left: 40px;
}
.nav-container-left .nav-item ul {
  display: flex;
  list-style: none;
  padding: 15px;
  margin-top: 5px;
}
.nav-container-left ul li {
  margin-right: 25px;
}

.nav-item ul a {
  text-decoration: none;
  font-size: 12.5px;
  font-weight: 700;
}

.nav-item ul a:hover {
  cursor: pointer;
}
.nav-container-left .netflix-logo {
  height: 65px;
  width: 125px;
}

.nav-container-left .netflix-logo:hover {
  cursor: pointer;
}

.nav-container-right {
  display: flex;
  margin-right: 45px;
  margin-top: 6px;
}

.search-icon-container {
  margin-top: 2px;
}

.search-icon-router-link {
  display: flex;
  justify-content: end;
  align-items: center;
  margin-top: -4px;
}
.awesome-search-icon {
  z-index: 2;
  position: fixed;
  color: rgb(255, 255, 255);
  font-size: 20px;
  margin-left: -25px;
  margin-top: 2px;
  cursor: pointer;
}

.search-input {
  background-color: black;
  color: rgb(255, 255, 255);
  height: 36px;
  width: 12rem;
  padding: 10px;
  border: 1px solid white;
}

.search-input::placeholder {
  font-size: 14px;
}

.nav-container-right-icon {
  height: 22px;
  font-weight: 700;
}
.nav-container-right .children-div a {
  font-weight: 600;
}

.nav-container-right div {
  padding: 10px;
  /* margin-top: 10px; */
}
.nav-container-right a {
  text-decoration: none;
  font-size: 12.5px;
}
</style>
