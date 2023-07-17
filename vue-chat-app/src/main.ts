import "./assets/main.css";
import { createApp,type App  } from 'vue'
import { createPinia } from 'pinia'

import ChatApp from './App.vue'
import router from './router'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css';
import { auth } from "./includes/firebase";

const vuetify = createVuetify({
  components,
  directives,
})
let app: App<Element>;

auth.onAuthStateChanged(() => {
	if (!app) {
		app =  createApp(ChatApp);
    app.use(createPinia())
    app.use(router)
    app.use(vuetify)
    app.mount('#app')
	}
});


