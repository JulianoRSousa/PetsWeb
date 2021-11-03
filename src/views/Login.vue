<template>
  <body>
    <header class="headerApp">
      <a class="appName" href="http://localhost:8080/?#/">Pets</a>
    </header>
    <main class="pageLogin">
      <form class="login">
        <span class="formTitle">Login</span>
        <input-pets
          placeholder="Email"
          type="email"
          example="pedro@gmail.com"
        />
        <input-pets
          placeholder="Senha"
          type="password"
          example="••••••••"
          minlength="8"
        />
        <button-pets title="Entrar" />
        <div class="secondaryContainer">
          <a href="?#/createaccount" class="nodec">Criar uma conta</a>
          <a href="?#/createaccount" class="nodec">Esqueci minha senha</a>
        </div>
      </form>
    </main>
    <footer></footer>
  </body>
</template>

<script>
import InputPets from "../components/InputPets.vue";
import ButtonPets from "../components/ButtonPets.vue";
export default {
  components: { InputPets, ButtonPets },
  name: "CreateAccount",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Satisfy&display=swap");
.pageLogin {
  display: flex;
  align-items: center;
  justify-content: center;
}
.login {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: fit-content;
  padding-left: 1rem;
  padding-right: 1rem;
  height: 30rem;
  border-radius: 3rem;
  border-width: 1px;
  background-color: #ffca85;
}

.secondaryContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: space-around;
  text-decoration: none;
  width: 100%;
}
.nodec {
  text-decoration: none;
  color: #505050;
}
</style>
