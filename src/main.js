import { createApp } from 'vue'
import App from './App.vue'
//import router from './router'

import './assets/main.css'
import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";
import VueTelInput from 'vue3-tel-input'
import 'vue3-tel-input/dist/vue3-tel-input.css'

const app = createApp(App)

//app.use(router)
const store = createStore({
    state: {
      token: null,
    },
    mutations: {
      setToken(state, token) {
        state.token = token;
      },
    },
    actions: {},
    getters: {
      isLoggedIn(state) {
        return !!state.token;
      },
    },
    plugins: [
      createPersistedState()
    ]
  });

app.use(store)

const VueTelInputOptions = {
  placeholder: "Entrez votre numéro"
}


app.use(VueTelInput,VueTelInputOptions);

app.mount('#app')
