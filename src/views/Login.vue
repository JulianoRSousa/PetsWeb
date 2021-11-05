<template>
  <body>
    <header>
      <header-pets />
    </header>

    <main class="pageLogin">
      <form class="login" @submit="sendLogin">
        <span class="formTitle">Login</span>
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
        <button-pets title="Entrar" />
        <div class="secondaryContainer">
          <router-link to="/createacc">
            <span class="nodec">Criar uma conta</span>
          </router-link>
          <router-link to="/login">
            <span class="nodec">Esqueci minha senha</span>
          </router-link>
        </div>
      </form>
    </main>
    <footer></footer>
  </body>
</template>

<script>
import InputPets from "../components/InputPets.vue";
import ButtonPets from "../components/ButtonPets.vue";
import HeaderPets from "../components/headerPets.vue";
import api from "../services/api";
export default {
  components: { InputPets, ButtonPets, HeaderPets },
  name: "CreateAccount",

  mounted() {
    console.log("user: ", localStorage.getItem("user"));
    if (localStorage.getItem("user")) {
      try {
        this.user = JSON.parse(localStorage.getItem("user"));
      } catch (error) {
        localStorage.removeItem("user");
      }
    }
  },

  data() {
    return {
      user: {
        _id: null,
        email: null,
        username: null,
        birthDate: null,
        picture_url: null,
      },
      email: null,
      pass: null,
    };
  },
  methods: {
    addUser() {
      if (!this.newUser) return;
      this.user.push(this.newUser);
      this.newUser = "";
      this.saveUser();
    },
    saveUser() {
      const parsed = JSON.stringify(this.user);
      localStorage.setItem("user", parsed);
    },

    sendLogin: function() {
      try {
        api
          .post(
            "/createauth",
            {},
            {
              headers: {
                email: this.email,
                pass: this.pass,
              },
            }
          )
          .then((res) => {
            if (res.status === 201) {
              this.user._id = res.data.user._id;
              this.user.email = res.data.user.email;
              this.user.username = res.data.user.username;
              this.user.birthDate = res.data.user.birthDate;
              this.user.picture_url = res.data.user.picture_url;
              this.saveUser();
            }
          });
      } catch (error) {
        console.log("Erro: ", error);
      }
    },
  },
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
