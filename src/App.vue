<script>
import Login from "./components/Login.vue";
import Home from "./components/Home.vue";

const routes = {
  '/': Login,
  '/home': Home,
}
export default {
  data(){
    return {
      currentPath: window.location.hash
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/']
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
      this.currentPath = window.location.hash 
    })
  }
} 
</script>
<template>
<component :is="currentView" />
  <!-- <a href="#/home">Home</a> --> 
</template>