<template>
  <body>
    <header class="headerApp">
      <a class="appName" href="http://localhost:8080/?#/">Pets</a>
      <span class="pageTitle">{{ title }}</span>
      <div class="dropdownMenu">
        <button @click="toggleShow" class="dropbtn">Menu</button>
        <div v-if="showMenu" class="dropdownContent">
          <div class="menuItem">
            <router-link
              v-show="!logged"
              class="menuOptionContainer"
              to="/login"
            >
              <span class="menuOption">Login</span>
            </router-link>
            <router-link
              v-show="!logged"
              class="menuOptionContainer"
              to="/createaccount"
            >
              <span>Criar Conta</span>
            </router-link>
            <router-link v-show="logged" class="menuOptionContainer" to="/">
              <span @click="logOut">Deslogar</span>
            </router-link>
          </div>
        </div>
      </div>
    </header>
  </body>
</template>

<script>
import PetsLocalStorage from "../controller/PetsLocalStorage";
export default {
  name: "HeaderPets",
  mounted() {
    if (PetsLocalStorage.getItem("token")) {
      this.logged = true;
    }
  },
  data() {
    return {
      logged: false,
      showMenu: false,
    };
  },
  methods: {
    logOut: function() {
      PetsLocalStorage.clear();
    },
    toggleShow: function() {
      this.showMenu = !this.showMenu;
    },
  },
  props: {
    title: String,
  },
};
</script>

<style>
.headerApp {
  display: flex;
  padding-left: 1rem;
  padding-right: 1rem;
  background-image: linear-gradient(180deg, #ff8637, #ffb464);
}
.appName {
  flex: 1;
  text-align: left;
  font-size: 1.5rem;
  color: white;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-decoration: none;
}
.pageTitle {
  flex: 1;
  text-align: center;
  font-size: 1.5rem;
  color: white;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.dropdownMenu {
  flex: 1;
  text-align: end;
  align-content: end;
  justify-content: flex-end;
  font-size: 1.5rem;
  color: white;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.dropdownContent {
  display: flex;
  flex: 1;
  align-content: center;
  justify-content: flex-end;
}
.menuItem {
  display: flex;
  width: fit-content;
  padding-bottom: 2rem;
  padding-top: 2rem;
  flex-direction: column;
  border-radius: 3rem 0rem 3rem 3rem;
  justify-content: space-around;
  text-align: center;
  background-color: #ff8637;
  position: absolute;
}
.menuOptionContainer {
  color: white;
  margin: 0.6rem;
}
.dropbtn {
  background-color: transparent;
  color: white;
  padding: 1rem;
  font-size: 1.5rem;
  color: white;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: "Satisfy";
  cursor: pointer;
  border: none;
}
</style>
