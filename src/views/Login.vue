<template>
  <body>
    <header>
      <header-pets title="login" />
    </header>

    <main class="pageLogin">
      <form class="login" @submit="Login">
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
            <span class="secondaryOption">Criar uma conta</span>
          </router-link>
          <router-link to="/login">
            <span class="secondaryOption1">Esqueci minha senha</span>
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
import PetsLocalStorage from "../controller/PetsLocalStorage";

export default {
  components: { InputPets, ButtonPets, HeaderPets },
  name: "CreateAccount",
  mounted() {
    if (PetsLocalStorage.getItem("token")) {
      console.log("tem token: ", PetsLocalStorage.getItem("token"));
    } else {
      console.log("não tem token: ", PetsLocalStorage.getItem("token"));
    }
  },
  data() {
    return {
      token: "",
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
    Login: function() {
      console.log("methodLogin");
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
              PetsLocalStorage.setItem("token", res.data._id);
              this.user._id = res.data.user._id;
              this.user.email = res.data.user.email;
              this.user.username = res.data.user.username;
              this.user.birthDate = res.data.user.birthDate;
              this.user.picture_url = res.data.user.picture_url;
              PetsLocalStorage.setItem("user", this.user);
            }
            if (localStorage.getItem("token")) {
              console.log("TOKEN: ", localStorage.getItem("token"));
              this.$router.go("/feed");
            }
            console.log("TOKEN: ", localStorage.getItem("token"));
          });
      } catch (error) {
        console.log("Error: ", error);
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
.secondaryOption {
  text-decoration: none;
  color: #505050;
}
.secondaryOption1 {
  text-decoration: none;
  color: #505050;
  cursor: default;
}
</style>
