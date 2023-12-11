import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {
  faSearch,
  faBell,
  faMobileScreen,
  faCircleInfo,
  fas
} from '@fortawesome/free-solid-svg-icons'

// Import the Facebook icon directly
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook'
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram'
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter'
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube'

/* add icons to the library */
library.add(
  faSearch,
  faBell,
  faMobileScreen,
  faCircleInfo,
  fas,
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube
)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
