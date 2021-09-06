<script>
import Cliente from "./components/Cliente.vue";
import InputPets from './components/InputPets.vue';
export default {
  name: "App",
  components: {
    Cliente,
    InputPets,
  },
  data() {
    return {
      cliente:{
        nome:"Juliano",
        idade: "18"
      },
      user:{
        email:"",
        pass: ""
      }
    };
  },
};
</script>

<template>
  <div id="app">
    <input-pets title="Email" v-model="user.email" />
    <input-pets title="Senha" v-model="user.pass" />
    <Cliente :cliente="cliente" />
    <Cliente :cliente="cliente" />
    <Cliente :cliente="cliente" />
  </div>
</template>

<style>
#app {
  background-color: #ff8637;
  min-height: 100vh;
  width: 100%;
  padding: 0;
  margin: 0;
  text-align: center;
  color: #2c3e50;
}
</style>
