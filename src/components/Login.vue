<template>
  <div>
    <h1>LOGIN</h1>
    <form @submit.prevent="login">
      <input v-model="username" placeholder="username" />
      <br />
      <br />
      <input v-model="password" placeholder="password" type="password" />
      <br />
      <br />
      <button type="submit">Login</button>
    </form>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async login() {
      var adress = "".concat(
        "https://api.mathieubarton.fr/api/",
        this.username,
        "&",
        this.password
      );
      //alert(adress);
      const response = await fetch(adress, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const responsejson = await response.json();
      var token = responsejson.token;
      this.$store.commit("setToken", token);
      if (this.$store.getters.isLoggedIn) {
        window.location.href = "#/home";
      }
    },
  },
};
</script>
