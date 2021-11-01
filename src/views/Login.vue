<template>
  <body>
    <header>
      <a href="" class="appName"
        >Pets</a
      >
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
        <a href="?#/createaccount" class="createAccount">Criar uma conta</a>
        <a class="secondaryOption">Esqueci minha senha</a>

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
  width: 30rem;
  height: 30rem;
  border-radius: 3rem;
  border-width: 1px;
  background-color: #fdb05d;
}
.formTitle {
  font-size: 1.5rem;
  color: white;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 2rem;
}
.secondaryContainer{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: space-around;
  width: 100%
}
</style>
