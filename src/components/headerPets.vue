<template>
  <body>
    <header class="headerApp">
      <router-link v-if="logged" class="appName" to="/feed">
        pets
      </router-link>
      <router-link v-else class="appName" to="/">
        pets
      </router-link>
      <span v-if="showTitle" class="pageTitle">{{ title }}</span>
      <dropdown :title="title" />
    </header>
  </body>
</template>

<script>
import PetsLocalStorage from "../controller/PetsLocalStorage";
import Dropdown from "./Dropdown.vue";
export default {
  components: { Dropdown },
  name: "HeaderPets",
  mounted() {
    if (PetsLocalStorage.getItem("token")) {
      this.logged = true;
    }
  },
  data() {
    return {
      logged: false,
    };
  },
  methods: {
  },
  props: {
    showTitle: Boolean,
    title: String,
  },
};
</script>

<style>
.headerApp {
  display: flex;
  min-height: 3.5rem;
  border-color: aliceblue;
  border-style: none none double none;
  background-color: #ff934c;
}
.appName {
  display: flex;
  flex: 1;
  padding-left: 1rem;
  justify-content: start;
  align-items: center;
  font-size: 1.5rem;
  color: white;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-decoration: none;
}
.pageTitle {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: white;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
