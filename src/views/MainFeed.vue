<template>
  <body>
    <header>
      <header-pets title="Feed" />
    </header>
    <main class="mainPage">
      <div>
        <h2 v-if="this.user">Bem vindo, {{ this.user.fullName }}</h2>
        <div>
          <post-item />
          <button class="pets-float-button" @click="showModalFunc">
            Novo post +
          </button>
          <modal
            :showModal="showModal"
            message="Por favor, entre com sua conta"
          />
        </div>
      </div>
    </main>
  </body>
</template>

<script>
import PostItem from "../components/PostItem.vue";
import HeaderPets from "../components/headerPets.vue";
import PetsLocalStorage from "../controller/PetsLocalStorage";
import Modal from "../components/Modal.vue";

export default {
  components: {
    PostItem,
    HeaderPets,
    Modal,
  },
  name: "CreateAccount",
  mounted() {
    if (PetsLocalStorage.getItem("token")) {
      this.logged = true;
      this.user = PetsLocalStorage.getItem("user");
    }
  },
  methods: {
    showModalFunc: function() {
      if (!this.logged) {
        console.log("logged? ", this.logged);
        this.showModal = !this.showModal;
      }
    },
  },
  data() {
    return {
      showModal: false,
      token: false,
      user: null,
    };
  },
};
</script>

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
.feedList {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: #f9a862;
}
</style>
