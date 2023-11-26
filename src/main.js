import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import i18n from './i18n'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faCheck,
  faChevronRight,
  faChevronLeft,
  faXmark,
  faCircleCheck
} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faCheck)
library.add(faChevronRight)
library.add(faChevronLeft)
library.add(faXmark)
library.add(faCircleCheck)

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
