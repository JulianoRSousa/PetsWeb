<template>
  <div class="dropdownMenu" @click="toggleShow">
    <div class="dropdownContent">
      <router-link
        v-show="!logged"
        to="/createaccount"
        v-if="title != 'criar conta'"
      >
        <button class="menuOption">criar conta</button>
      </router-link>
      <router-link v-if="title != 'login'" v-show="!logged" to="/login">
        <button class="menuOption">entrar</button>
      </router-link>
      <router-link v-if="logged" to="/">
        <button class="menuOption" @click="logOut">deslogar</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import PetsLocalStorage from "../controller/PetsLocalStorage";

export default {
  mounted() {
    if (PetsLocalStorage.getItem("token")) {
      this.logged = true;
    }
  },
  data() {
    return {
      logged: false,
      isMenuVisible: false,
    };
  },
  props: {
    title: String,
  },
  methods: {
    consolar: function() {
      console.log("out");
    },
    logOut: function() {
      PetsLocalStorage.clear();
    },
    hideMenu: function() {
      if (this.isMenuVisible) {
        this.isMenuVisible = false;
      }
    },
    toggleShow: function() {
      this.isMenuVisible = !this.isMenuVisible;
    },
  },
};
</script>

<style>
.dropdownMenu {
  flex: 1;
  text-align: end;
  align-content: end;
  justify-content: flex-end;
  font-size: 1.5rem;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-decoration: underline;
  text-decoration-color: red;
}
.dropdownContent {
  display: flex;
  flex: 1;
  justify-content: flex-end;
  text-decoration: underline;
  text-decoration-color: red;
}
.menuOption {
  display: flex;
  padding: 0.6rem 1.3rem 0.6rem 1.3rem;
  margin: 0.5rem;
  background-color: #f9a862;
  border: 1px solid #ffffff;
  border-radius: 1.5rem;
  font-size: 1.5rem;
  font-family: "Delius";
  text-decoration: underline;
  text-decoration-color: #f9a862;
  color: white;
  cursor: pointer;
}
.dropbtn {
  background-color: transparent;
  font-size: 1.5rem;
  font-family: "Delius";
  color: white;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  border: none;
}

/* #menuItem {
  position: absolute;
  display: flex;
  flex-direction: column;
  width: fit-content;
  padding: 1rem 0rem 2rem 1rem;
  justify-content: space-around;
  text-align: center;
  background-color: #ff934c;
  border-style: none none double double;
  border-color: aliceblue;
  border-radius: 0rem 0rem 0rem 3rem;
  margin-top: 1rem;
} */
</style>
