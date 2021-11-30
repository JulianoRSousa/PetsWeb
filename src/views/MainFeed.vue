<template>
  <body>
    <header>
    </header>
    <main class="mainPage">
      <div>
        <h2 v-if="this.user">
          Bem vindo, {{ this.user.firstName | capitalize }}
        </h2>
        <div>
          <post-item />
          <button class="pets-float-button" @click="newPostFunc">
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
import PetsLocalStorage from "../controller/PetsLocalStorage";
import Modal from "../components/Modal.vue";

export default {
  components: {
    PostItem,
    Modal,
  },
  name: "CreateAccount",
  mounted() {
    if (PetsLocalStorage.getItem("token")) {
      this.logged = true;
      this.user = PetsLocalStorage.getItem("user");
    }
  },
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
  methods: {
    newPostFunc: function() {
      this.logged ? this.$router.push("/newpost") : (this.showModal = true);
    },
    showModalFunc: function() {
      if (!this.logged) {
        this.showModal = !this.showModal;
      }
    },
  },
  data() {
    return {
      showModal: false,
      user: null,
    };
  },
};
</script>

<style>
.mainPage {
  text-align: center;
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
