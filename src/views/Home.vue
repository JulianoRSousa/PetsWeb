<script>
import headerPets from "../components/headerPets.vue";
import Modal from "../components/Modal.vue";
import PetsLocalStorage from "../controller/PetsLocalStorage";
import PostItem from "../components/PostItem.vue";
export default {
  components: {
    headerPets,
    PostItem,
    Modal,
    // PetsFloatButton
  },
  name: "Home",
  mounted() {
    if (PetsLocalStorage.getItem("token")) {
      this.logged = true;
    }
  },
  methods: {
    showModalFunc: function() {
      if (!this.logged) {
        this.showModal = !this.showModal;
      }
    },
  },
  data() {
    return {
      logged: false,
      showModal: false,
    };
  },
};
</script>

<template>
  <body>
    <header style="vertical-align: baseline;">
      <header-pets :showTitle="true" title="home" />
    </header>
    <main class="mainPage">
      <h2>Exemplos de feed (não acabados)</h2>
      <button @click="showModalFunc">show</button>
      <div>
        <post-item />
      </div>
      <button class="pets-float-button" @click="showModalFunc">
        Novo Post +
      </button>
    </main>
    <footer></footer>
    <modal :showModal="showModal" message="Por favor, entre com sua conta" />
  </body>
</template>

<style>
.mainPage {
  background-color: #f9a862;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.mainPage::-webkit-scrollbar {
  display: none;
}
</style>
