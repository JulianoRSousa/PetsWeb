<template>
  <body>
    <header>
      <header-pets title=" " />
    </header>
    <main class="pageCreateAcc">
      <form class="createAcc" @submit="sendCreateAcc">
        <span class="formTitle">Criar Conta</span>
        <input-pets placeholder="Nome Completo" example="Pedro Silva" />
        <input-pets
          placeholder="Data de nascimento"
          type="date"
          example="01/01/1999"
          v-model="birthDate"
        />
        <input-pets
          placeholder="Email"
          type="email"
          example="pedro@gmail.com"
          v-model="email"
        />
        <input-pets
          placeholder="Senha"
          type="password"
          example="••••••••"
          :minlength="8"
          v-model="pass"
        />
        <input-pets
          placeholder="Repetir senha"
          type="password"
          example="••••••••"
          :minlength="8"
          v-model="repeatPass"
        />
        <p>
          <input type="checkbox" v-model="terms" />
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
import HeaderPets from "../components/headerPets.vue";
import Api from "../services/api";
export default {
  components: { InputPets, ButtonPets, HeaderPets },
  name: "CreateAccount",
  methods: {
    sendCreateAcc: function() {
      Api.post(
        "/createlogin",
        {},
        {
          headers: {
            fullname: this.fullName,
            birthdate: this.birthDate,
            email: this.email,
            pass: this.pass,
          },
        }
      ).then((res) => {
        console.log(res.data);
      });
    },
  },
  data() {
    return {
      fullName: null,
      email: null,
      pass: null,
      repeatPass: null,
      birthDate: null,
      terms: false,
    };
  },
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
