<template>
  <body>
    <header>
      <pets-header :showTitle="false" title="Login" />
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
        <button-pets title="Entrar"/>
        <div class="secondaryContainer">
          <router-link to="/createaccount">
            <span class="secondaryOption">Criar uma conta</span>
          </router-link>
          <router-link to="/login">
            <span class="secondaryOption1">Esqueci minha senha</span>
          </router-link>
        </div>
      </form>
    </main>
  </body>
</template>

<script>
import InputPets from "../components/InputPets.vue";
import ButtonPets from "../components/ButtonPets.vue";
import api from "../services/api";
import PetsLocalStorage from "../controller/PetsLocalStorage";
import PetsHeader from '../components/PetsHeader.vue';

export default {
  components: { InputPets, ButtonPets, PetsHeader, },
  name: "Login",
  mounted() {
    if (PetsLocalStorage.getItem("token")) {
      this.$router.push("/feed");
    }
  },
  watch: {
    token: function() {
      this.$router.go("/feed");
    },
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
        fullName: null,
        firstName: null,
        lastName: null,
      },
      email: null,
      pass: null,
      notifications: null,
      loginInfo: null,
    };
  },
  methods: {
    Login: function() {
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
              PetsLocalStorage.setItem("loginInfo", res.data);
              this.user._id = res.data.user._id;
              this.user.email = res.data.user.email;
              this.user.username = res.data.user.username;
              this.user.birthDate = res.data.user.birthDate;
              this.user.picture_url = res.data.user.picture_url;
              this.user.fullName =
                res.data.user.firstName + " " + res.data.user.lastName;
              this.user.firstName = res.data.user.firstName;
              this.user.lastName = res.data.user.lastName;
              PetsLocalStorage.setItem("user", this.user);
              this.token = res.data._id;
            }
          });
      } catch (error) {
        console.log("Error: ", error);
      }
    },
  },
};
</script>

<style>
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
.formTitle {
  font-size: 1.5rem;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 2rem;
  color: #292929;
}
.secondaryOption {
  text-decoration: none;
  color: #292929;
}
.secondaryOption1 {
  text-decoration: none;
  color: #292929;
  cursor: default;
}
</style>
