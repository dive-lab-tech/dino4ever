import '@/assets/css/style.css'
import '@/assets/css/tailwind.css'
import 'vue-final-modal/style.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVfm } from 'vue-final-modal'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import * as IconsFa from '@fortawesome/free-solid-svg-icons'
import App from './App.vue'
import router from './router'





library.add(
    IconsFa.faXmark,
    IconsFa.faPlus,
    IconsFa.faMinus,
    IconsFa.faCircle,
    IconsFa.faArrowUp,
    IconsFa.faPaperPlane,
    IconsFa.faFire,
    IconsFa.faHeart,
    IconsFa.faComment,
    IconsFa.faBolt,
    IconsFa.faCalendarDays,
    IconsFa.faBars,
    fab.faFacebookF,
    fab.faTwitter,
    fab.faInstagram,
    fab.faLinkedin,

  )



const app = createApp(App)
app.use(createVfm())
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)
app.mount('#app')
