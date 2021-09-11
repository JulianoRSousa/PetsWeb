<script>
// import InputPets from "./InputPets.vue";
import SideLogin from "./components/SideLogin.vue";

export default {
  name: "app",
  components: {
    SideLogin,
  },
};
</script>

<template>
  <div style="margin: -10px">
    <header class="Content-Header">
      <div class="buttonLogin">
        <button >
          <span style="color:white">Entrar</span>
        </button>
        <side-login class="internLogin" />
      </div>
      <span>Header</span>
    </header>
    <div class="Content-Page">
      <span>Main</span>
    </div>
  </div>
</template>

<style>
.Content-Page {
  width: 100vw;
  height: 100vh;
  background-color: #f9a862;
}
.buttonLogin {
  border-width: 2px;
  border-color: red;
  height: auto;
  width: 20vw;
  padding: 10px;
  text-align: center;
  background-color: transparent;
}
.Content-Header {
  min-height: 3rem;
  height: 6vh;
  max-height: 60px;
  width: 100vw;
  background-color: #ff9b58;
  orientation: landscape;
}
.Side-Login {
  background-color: #ff9b58;
  min-width: 25rem;
  max-width: 20vw;
  height: 100vh;
  text-align: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  align-self: flex-end;
}
.internLogin {
  padding-top: 10vh;
}
</style>
