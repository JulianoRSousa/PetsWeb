<script>
// import Cliente from "./components/Cliente.vue";
import InputPets from "./components/InputPets.vue";
import SignButton from "./components/SignButton.vue";

export default {
  name: "App",
  components: {
    // Cliente,
    InputPets,
    SignButton,
  },
  data() {
    return {
      cliente: {
        nome: "Juliano",
        idade: "18",
      },
      user: {
        email: "",
        pass: "",
      },
    };
  },
};
</script>

<template>
  <div id="app">
    <div id="teste">
      <h1 id="title">pets</h1>
      <input-pets placeholder="email" type="text" v-model="user.email" />
      <input-pets placeholder="senha" type="password" v-model="user.pass" />
      <a href="" id="passrec">esqueceu sua senha?</a>
      
      <sign-button title="entrar" />
      <sign-button title="criar conta" />
    </div>
  </div>
</template>

<style>
#app {
  position: absolute;
  background-color: #ff8637;
  width: 100vw;
  height: 100vh;
  padding: -10px;
  margin: -10px;
  color: #eef1ff;
}
#title {
  font-size: 3rem;
  margin-bottom: 8vh;
}
#teste {
  margin-top: 20vh;
  text-align: center;
}
#passrec {
  font-size: 12px;
  color: #eef1ff;
}
</style>
