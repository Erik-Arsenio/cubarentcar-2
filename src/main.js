import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';

// import Aura from '@primevue/themes'
// const app = createApp(App);

import './assets/main.css';
import './assets/flags.css'


import 'primeicons'

// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'primevue/resources/themes/lara-light-indigo/theme.css'
// import 'primevue/resources/primevue.min.css'
// import 'primeicons/primeicons.css'
// import '@fortawesome/fontawesome-free/css/all.min.css'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { faPlaneArrival } from '@fortawesome/free-solid-svg-icons'

// library.add(faPlaneArrival)

import router from './router'

const app = createApp(App)
// Registrar componente global de Font Awesome
// app.component('font-awesome-icon', FontAwesomeIcon)

app.use(PrimeVue, {
    /* Configuration */
     theme: {
        preset: Aura,
        darkModeSelector: '.dark',
        mode: 'dark', // Cambia a 'light' para el modo claro
    }
});

// app.use(createPinia())

app.use(router)

app.mount('#app')
