<script>
import headerPets from "../components/headerPets.vue";
import Modal from "../components/Modal.vue";
import PetsFloatButton from "../components/PetsFloatButton.vue";
import PostItem from "../components/PostItem.vue";
export default {
  components: { headerPets, PostItem, Modal, PetsFloatButton },
  name: "Home",
  methods: {
    showModalFunc: function() {
      this.showModal = !this.showModal;
    },
  },
  data() {
    return {
      showModal: false,
    };
  },
};
</script>

<template>
  <body>
    <header>
      <header-pets :showTitle="true" title="home" />
    </header>
    <main class="pageFeed">
      <div class="feedList">
        <h2>Exemplos de feed (não acabados)</h2>
        <button @click="showModalFunc">show</button>
        <post-item />
      </div>
      <pets-float-button title="Novo post +" />
    </main>
    <footer></footer>
    <modal :showModal="showModal" message="Por favor, entre com sua conta" />
  </body>
</template>

<style>
.pageFeed {
  display: flex;
  justify-content: center;
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
