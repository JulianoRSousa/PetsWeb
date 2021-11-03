<template>
  <body>
    <header class="headerApp">
      <a class="appName" href="http://localhost:8080/?#/">Pets</a>
      <div class="pageMenu">Menu</div>
    </header>
    <main class="pageCreateAcc">
      <form class="createAcc">
        <span class="formTitle">Criar Conta</span>
        <input-pets placeholder="Nome Completo" example="Pedro Silva" />
        <input-pets
          placeholder="Data de nascimento"
          type="date"
          example="01/01/1999"
        />
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
        <input-pets
          placeholder="Repetir senha"
          type="password"
          example="••••••••"
          minlength="8"
        />
        <p>
          <input type="checkbox" />
          <span class="termsInfo">li e aceito os termos propostos neste </span>
          <a href="https://github.com/JulianoRSousa/PetsWeb/">link</a>
        </p>
        <button-pets title="Criar Conta" />
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
.pageCreateAcc {
  display: flex;
  align-items: center;
  justify-content: center;
}
.createAcc {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: fit-content;
  padding-left: 1rem;
  padding-right: 1rem;
  height: 34rem;
  border-radius: 3rem;
  border-width: 1px;
  background-color: #ffca85;
}
.termsInfo {
  color: #505050;
}
.formTitle {
  font-size: 1.5rem;
  color: white;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 2rem;
}
</style>
