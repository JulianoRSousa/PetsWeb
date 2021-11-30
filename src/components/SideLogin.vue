<script>
import InputPets from "./InputPets.vue";
import SignButton from "./SignButton.vue";

export default {
  name: "Side-Login",
  components: {
    InputPets,
    SignButton,
  },
  data() {
    return {
      user: {
        email: "",
        pass: "",
      },
    };
  },
};
</script>

<template>
  <div class="SideMenu">
    <h2>Login</h2>
    <input-pets placeholder="email" type="text" v-model="user.email" />
    <input-pets placeholder="senha" type="password" v-model="user.pass" />
    <sign-button title="entrar" />
    <sign-button title="criar conta" />
  </div>
</template>

<style>
.SideMenu {
  padding: -10px;
  color: #eef1ff;
}
/* #passrec {
  font-size: 12px;
  color: #eef1ff;
} */
</style>
