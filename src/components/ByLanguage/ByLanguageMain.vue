<template>
  <div class="main-text-container">
    <div class="wrapper">
      <div class="parent-prefrence-container">
        <div class="prefrence-container">
          <div class="browse-prefrence">Browse By Language</div>

          <!-- Dropdown -->
          <div class="prefrence-div">
            <div class="text">Select Your Preferences</div>
            <div class="dropdown">
              <button class="dropbtn">
                Original Language
                <font-awesome-icon class="language-arrow" :icon="['fas', 'caret-down']" />
              </button>
              <div class="dropdown-content">
                <a href="#">Original Language</a>
                <a href="#">Dubbing</a>
                <a href="#">Subtitles</a>
              </div>
            </div>
            <div class="dropdown">
              <button class="dropbtn">
                English
                <font-awesome-icon class="audio-arrow" :icon="['fas', 'caret-down']" />
              </button>
              <div class="dropdown-content">
                <a href="#">Hindi</a>
                <a href="#">Turkish</a>
                <a href="#">American</a>
                <a href="#">Arabic</a>
                <a href="#">Tamil</a>
                <a href="#">Danish</a>
                <a href="#">Marathi</a>
              </div>
            </div>
            <div class="sort-by-div">
              <div class="text">Sort by</div>
              <div class="dropdown">
                <button class="dropbtn">
                  Suggestions For You
                  <font-awesome-icon class="suggestion-arrow" :icon="['fas', 'caret-down']" />
                </button>
                <div class="dropdown-content">
                  <a href="#">Original Language</a>
                  <a href="#">Dubbing</a>
                  <a href="#">Subtitles</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.main-text-container {
  display: flex;
  min-height: 76vh;
  justify-content: center;
  font-family: 'Bebas Neue', sans-serif;
  position: relative;
  margin-top: 3.55rem;
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.parent-prefrence-container {
  width: 100%;
  display: flex;
}

.prefrence-container {
  display: block;
  margin-top: 20px;
  margin-right: 16.5rem;
}
.browse-prefrence {
  font-size: 25px;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 400;
  align-self: flex-start;
  position: relative;
  margin-left: 50px;
}

.prefrence-div {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-left: 50px;
}

.prefrence-div .text {
  font-size: 15px;
  font-family: Arial, Helvetica, sans-serif;
}

.sort-by-div {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15rem;
}

/* Dropdown */
/* The dropdown container */
.dropdown {
  float: left;
  overflow: hidden;
  align-self: flex-start;
  background-color: black;
  opacity: 0.9;
  border: 0.7px solid white;
  width: 110px;
  height: 28px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  margin-top: 15px;
  margin-left: 20px;
  width: 180px;
}

.dropdown:hover {
  background-color: black;
  opacity: 0.9;
}

/* Dropdown button */
.dropbtn {
  font-size: 15px;
  border: none;
  outline: none;
  color: white;
  padding: 05px 14px;
  background-color: inherit;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; /* Important for vertical align on mobile phones */
  margin: 0; /* Important for vertical align on mobile phones */
}

.dropbtn .language-arrow {
  margin-left: 3px;
}
.dropbtn .audio-arrow {
  margin-left: 70px;
}
.dropbtn .suggestion-arrow {
  margin-left: 7px;
}

.dropbtn:hover {
  color: rgb(255, 255, 255);
}

/* Dropdown content (hidden by default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: black;
  opacity: 0.95;
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
.dropdown:hover .dropdown-content {
  display: block;
}
</style>
