<template>
  <body id="modal-alert" class="modal-container">
    <div class="modal">
      <button @click="toggleShow" class="button-close">x</button>
      <h3 class="subtitle">{{ message }}</h3>
      <form class="form">
        <dropdown />
        <!-- <side-login /> -->
      </form>
    </div>
  </body>
</template>

<script>
import Dropdown from "./Dropdown.vue";
// import SideLogin from "./SideLogin.vue";

export default {
  name: "Modal",
  components: {
    // SideLogin,
    Dropdown,
  },
  watch: {
    showModal: function() {
      this.toggleShow();
    },
  },
  props: {
    showModal: Boolean,
    message: String,
  },
  methods: {
    toggleShow: function() {
      document.getElementById("modal-alert").classList.contains("show")
        ? document.getElementById("modal-alert").classList.remove("show")
        : document.getElementById("modal-alert").classList.add("show");
    },
  },
};
</script>

<style>
.modal-container {
  display: none;
  top: 0px;
  left: 0px;
  z-index: 2000;
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: transparent;
  display: none;
  justify-content: center;
  align-items: center;
}
.modal {
  background-color: #ff8637;
  max-width: 30%;
  min-width: 320px;
  padding: 40px;
  border: 10px double white;
  box-shadow: 0 0 0 10px white;
  position: relative;
  border-radius: 30px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.3);
}
.form {
  display: flex;
  flex: 1;
  align-self: center;
  min-width: 300px;
  justify-content: space-around;
  align-content: center;
}
.subtitle {
  word-wrap: break-word;
  color: white;
  text-align: center;
  font-family: "Delius";
  color: white;
}
.modal-container.show {
  display: flex;
}
.show .modal {
  animation: modalAnim 0.3s;
}

@keyframes modalAnim {
  from {
    opacity: 0;
    transform: translate3d(0, -60px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
.button-close {
  position: absolute;
  font-size: 1.2em;
  top: -30px;
  right: -30px;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: 4px solid white;
  background-color: #f9a862;
  cursor: pointer;
  color: white;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.3);
}
</style>
