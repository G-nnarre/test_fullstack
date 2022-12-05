import App from '../App.vue'
import { createApp } from 'vue'


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
    getToken(){
        return token;
    }
  },
});

const app = createApp(App);

app.use(store);