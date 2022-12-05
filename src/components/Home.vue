<template>
  <div class="sidenav">
    <h1>Test FullStack</h1>

    <button
       v-for="tab in tabs"
       :key="tab"
       :class="['tab-button', { active: currentTab === tab }]"
       @click="currentTab = tab"
     >
     {{ tab }}
    </button>
  </div>

  <!-- Page content -->
  <div class="main">
    <component :is=page />
  </div>
</template>
<script>
import Rechercher from "../components/Rechercher.vue";
import Parametre from "../components/Parametre.vue"
export default {
    components:{
        Rechercher,
        Parametre
    },

  data() {
    return {
      page: "Rechercher",
      tabs: ["Rechercher","Parametre"]
    };
  },

  mounted() {
    if (!this.$store.getters.isLoggedIn) {
      window.location.href = "#/";
    }
  },
};
</script>

<style>
.sidenav {
  height: 100%;
  width: 160px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgb(255, 255, 255);
  overflow-x: hidden;
  padding-top: 20px;
  border-radius: 1px;
  border-color: black;
}

.sidenav button {
  padding: 6px 8px 6px 16px;
  size: 100%;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
}

.sidenav button:hover {
  color: #006ef9;
}

.main {
  margin-left: 160px;
  padding: 0px 10px;
}

@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}
</style>
