<template>
  <body>
    <header>
      <header-pets :showTitle="false" title="Criar conta"/>
    </header>
    <main class="pageCreateAcc">
      <form class="createAcc" @submit="sendCreateAcc">
        <span class="formTitle">Criar Conta</span>
        <input-pets
          placeholder="Nome Completo"
          v-model="fullName"
          example="Pedro Silva"
        />
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
          <label for="checkBoxTerms" class="termsInfo">
            <input id="checkBoxTerms" type="checkbox" v-model="terms" />
            li e aceito os termos propostos neste
            <a href="https://github.com/JulianoRSousa/PetsWeb/">link</a>
          </label>
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
import Api from "../services/api";
import HeaderPets from '../components/HeaderPets.vue';
export default {
  components: { InputPets, ButtonPets, HeaderPets },
  name: "CreateAccount",
  methods: {
    createName: function() {
      if (this.fullName) {
        const name = this.fullName.split(" ");
        this.firstName = name.slice(0, 1).join(" ");
        this.lastName = name.slice(1, this.firstName.length).join(" ");
        return true;
      }
      return false;
    },
    sendCreateAcc: function() {
      // if (this.createName()) {
      Api.post(
        "/createlogin",
        {},
        {
          headers: {
            fullName: this.fullName,
            birthdate: this.birthDate,
            email: this.email,
            pass: this.pass,
          },
        }
      ).then(() => {
        alert("Conta criada com sucesso");
        this.$router.push("/login");
      });
    },
  },
  data() {
    return {
      fullName: null,
      firstName: null,
      lastName: null,
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
