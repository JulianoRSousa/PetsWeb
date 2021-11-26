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
        Novo post
        <svg
          style="margin-left:8px;"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          width="1em"
          height="1em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 16 16"
        >
          <g fill="white">
            <path
              fill-rule="evenodd"
              d="M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5z"
            />
            <path
              d="M10.273 2.513l-.921-.944l.715-.698l.622.637l.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89l.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622l.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01l-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637l-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89l-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622l-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01l.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944l-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318l-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92l-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016l.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944l1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318l.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92l.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z"
            />
          </g>
        </svg>
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