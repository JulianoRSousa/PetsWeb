<template>
  <body>
    <header class="headerApp">
      <a class="appName" href="http://localhost:8080/?#/">Pets</a>
      <span class="pageTitle">{{ title }}</span>
      <div class="dropdownMenu">
        <button @click="toggleShow" class="dropbtn">Menu</button>
        <div v-if="showMenu" class="dropdownContent">
          <div class="menuItem">
            <router-link to="/login">
              <span class="menuOption">Login</span>
            </router-link>
            <router-link to="/createaccount">
              <span class="menuOption">Criar Conta</span>
            </router-link>
            <router-link to="/" @click="logOut">
              <span class="menuOption">Deslogar</span>
            </router-link>
          </div>
        </div>
      </div>
    </header>
  </body>
</template>

<script>
export default {
  name: "HeaderPets",
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    logOut: function() {
      localStorage.clear();
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
  height: 13rem;
  width: fit-content;
  padding: 1rem;
  flex-direction: column;
  border-radius: 3rem 0rem 3rem 3rem;
  justify-content: space-around;
  text-align: center;
  background-color: #ff8637;
  position: absolute;
}
.menuOption {
  text-decoration: none;
  color: white;
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
.dropdown-content {
  display: none;
  position: absolute;
  right: 0;
  background-color: #f9f9f9;
  min-width: 10rem;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}
</style>
