<template>
  <header>
    <h1>Rechercher</h1>
    <hr />
  </header>
  <vue-tel-input @input="maj" v-model="phone" defaultCountry="FR" ></vue-tel-input><button :onClick="chercher" >Rechercher</button>
  {{phone}}
  {{fields}}
  <component v-for="field in fields" :is="SepecificiteVue" :titre="field.titre" :description="field.description"></component>
</template>
<script>
import { VueTelInput } from 'vue3-tel-input';
import SpecificiteVue from './Specificite.vue';
import { defineAsyncComponent, defineComponent, ref } from "vue"
export default {

    components:{
        VueTelInput,
        SpecificiteVue: defineAsyncComponent(() => import("./Specificite.vue"))
    },
    data(){
        return {
            phone: null,
            fields:[],
        };
    },
  methods: {
    maj(payload,objet){
        //alert(objet.number);
        this.phone=objet.number;

    },
    async chercher() {
        //alert(this.phone);
        const key = "IYeNMn3tUmguTPNcTxPH4pATCGf0c61G";
      var adress = "".concat(
        "https://api.apilayer.com/number_verification/validate?number=",
        this.phone.slice(1)
      );
      //alert(adress);
      const response = await fetch(adress, {
        method: "GET",
        headers: {
            "apikey":key,
          "Content-Type": "application/json",
        },
      });
      const responsejson = await response.json();
      for (var titre in responsejson){
        this.fields.push({
            "titre":titre,
            "description":responsejson[titre]
        });
      }
    },
  },
};
</script>
<style>
input {
  border: 1px solid #707070;
  border-radius: 10px;
  opacity: 1;
}
</style>
