<template>
  <div id="headerMenu" class="dropdownContent">
    <router-link
      class="menuOption"
      v-show="!logged"
      to="/createaccount"
      v-if="title != 'criar conta'"
    >
      <svg
        style="margin-right: 4px"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        role="img"
        width="1em"
        height="1em"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 36 36"
      >
        <path
          d="M31.43 16H10v2h21.43a1 1 0 0 0 0-2z"
          class="clr-i-outline clr-i-outline-path-1"
          fill="#292929"
        />
        <path
          d="M31.43 24H10v2h21.43a1 1 0 0 0 0-2z"
          class="clr-i-outline clr-i-outline-path-2"
          fill="#292929"
        />
        <path
          d="M15.45 10h16a1 1 0 0 0 0-2h-14z"
          class="clr-i-outline clr-i-outline-path-3"
          fill="#292929"
        />
        <path
          d="M17.5 3.42a1.09 1.09 0 0 0-1.55 0l-8.06 8.06l-3.38-3.64a1.1 1.1 0 1 0-1.61 1.5l4.94 5.3L17.5 5a1.1 1.1 0 0 0 0-1.58z"
          class="clr-i-outline clr-i-outline-path-4"
          fill="#292929"
        />
      </svg>
      criar conta
    </router-link>
    <router-link
      class="menuOption"
      v-if="title != 'login'"
      v-show="!logged"
      to="/login"
    >
      <svg
        style="margin-right: 4px"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        role="img"
        width="1em"
        height="1em"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 36 36"
      >
        <path
          class="clr-i-outline clr-i-outline-path-1"
          d="M30.4 17.6c-1.8-1.9-4.2-3.2-6.7-3.7c-1.1-.3-2.2-.5-3.3-.6c2.8-3.3 2.3-8.3-1-11.1s-8.3-2.3-11.1 1s-2.3 8.3 1 11.1c.6.5 1.2.9 1.8 1.1v2.2l-1.6-1.5c-1.4-1.4-3.7-1.4-5.2 0c-1.4 1.4-1.5 3.6-.1 5l4.6 5.4c.2 1.4.7 2.7 1.4 3.9c.5.9 1.2 1.8 1.9 2.5v1.9c0 .6.4 1 1 1h13.6c.5 0 1-.5 1-1v-2.6c1.9-2.3 2.9-5.2 2.9-8.1v-5.8c.1-.4 0-.6-.2-.7zm-22-9.4c0-3.3 2.7-5.9 6-5.8c3.3 0 5.9 2.7 5.8 6c0 1.8-.8 3.4-2.2 4.5v-5a3.4 3.4 0 0 0-3.4-3.2c-1.8-.1-3.4 1.4-3.4 3.2v5.2c-1.7-1-2.7-2.9-2.8-4.9zM28.7 24c.1 2.6-.8 5.1-2.5 7.1c-.2.2-.4.4-.4.7v2.1H14.2v-1.4c0-.3-.2-.6-.4-.8c-.7-.6-1.3-1.3-1.8-2.2c-.6-1-1-2.2-1.2-3.4c0-.2-.1-.4-.2-.6l-4.8-5.7c-.3-.3-.5-.7-.5-1.2c0-.4.2-.9.5-1.2c.7-.6 1.7-.6 2.4 0l2.9 2.9v3l1.9-1V7.9c.1-.7.7-1.3 1.5-1.2c.7 0 1.4.5 1.4 1.2v11.5l2 .4v-4.6c.1-.1.2-.1.3-.2c.7 0 1.4.1 2.1.2v5.1l1.6.3v-5.2l1.2.3c.5.1 1 .3 1.5.5v5l1.6.3v-4.6c.9.4 1.7 1 2.4 1.7l.1 5.4z"
          fill="#292929"
        />
      </svg>
      entrar
    </router-link>
    <router-link class="menuOption" v-if="logged" to="/notifications">
      <svg
        style="margin-right:4px"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        role="img"
        width="1em"
        height="1em"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
      >
        <g fill="none">
          <path
            d="M12 1.996a7.49 7.49 0 0 1 7.496 7.25l.004.25v4.097l1.38 3.156a1.25 1.25 0 0 1-1.145 1.75L15 18.502a3 3 0 0 1-5.995.177L9 18.499H4.275a1.251 1.251 0 0 1-1.147-1.747L4.5 13.594V9.496c0-4.155 3.352-7.5 7.5-7.5zM13.5 18.5l-3 .002a1.5 1.5 0 0 0 2.993.145l.006-.147zM12 3.496c-3.32 0-6 2.674-6 6v4.41L4.656 17h14.697L18 13.907V9.509l-.004-.225A5.988 5.988 0 0 0 12 3.496z"
            fill="#292929"
          />
        </g>
      </svg>
      notificações
    </router-link>
    <router-link v-if="logged" to="/profile">
      <div class="menuOption">
        <svg
          style="margin-right:4px"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          width="1em"
          height="1em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 32 32"
        >
          <circle cx="26" cy="16" r="4" fill="#292929" />
          <path
            d="M22 30h-2v-5a5 5 0 0 0-5-5H9a5 5 0 0 0-5 5v5H2v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7z"
            fill="#292929"
          />
          <path
            d="M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7z"
            fill="#292929"
          />
        </svg>
        meu perfil
      </div>
    </router-link>
    <router-link class="menuOption" v-if="logged" to="/settings">
      <svg
        style="margin-right: 4px"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        role="img"
        width="1em"
        height="1em"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 20 20"
      >
        <path
          fill="#292929"
          d="M11.078 0c.294 0 .557.183.656.457l.706 1.957c.253.063.47.126.654.192c.201.072.46.181.78.33l1.644-.87a.702.702 0 0 1 .832.131l1.446 1.495c.192.199.246.49.138.744l-.771 1.807c.128.235.23.436.308.604c.084.183.188.435.312.76l1.797.77c.27.115.437.385.419.674l-.132 2.075a.69.69 0 0 1-.46.605l-1.702.605c-.049.235-.1.436-.154.606a8.79 8.79 0 0 1-.298.774l.855 1.89a.683.683 0 0 1-.168.793l-1.626 1.452a.703.703 0 0 1-.796.096l-1.676-.888a7.23 7.23 0 0 1-.81.367l-.732.274l-.65 1.8a.696.696 0 0 1-.64.457L9.11 20a.697.697 0 0 1-.669-.447l-.766-2.027a14.625 14.625 0 0 1-.776-.29a9.987 9.987 0 0 1-.618-.293l-1.9.812a.702.702 0 0 1-.755-.133L2.22 16.303a.683.683 0 0 1-.155-.783l.817-1.78a9.517 9.517 0 0 1-.302-.644a14.395 14.395 0 0 1-.3-.811L.49 11.74a.69.69 0 0 1-.49-.683l.07-1.921a.688.688 0 0 1 .392-.594l1.878-.902c.087-.319.163-.567.23-.748a8.99 8.99 0 0 1 .314-.712L2.07 4.46a.683.683 0 0 1 .15-.79l1.404-1.326a.702.702 0 0 1 .75-.138l1.898.784c.21-.14.4-.253.572-.344c.205-.109.479-.223.824-.346l.66-1.841A.696.696 0 0 1 8.984 0h2.094zm-.49 1.377H9.475L8.87 3.071a.693.693 0 0 1-.434.423c-.436.145-.751.27-.935.367c-.195.103-.444.26-.74.47a.703.703 0 0 1-.673.074l-1.83-.755l-.713.674l.743 1.57c.09.19.088.41-.006.597c-.2.401-.335.697-.403.879c-.068.181-.159.492-.27.922a.69.69 0 0 1-.37.45l-1.79.859l-.036.98l1.62.492c.215.065.385.23.456.442c.16.48.288.834.38 1.056a10 10 0 0 0 .404.827c.101.188.108.412.019.606l-.751 1.638l.711.668l1.782-.762a.703.703 0 0 1 .603.024c.365.192.637.325.809.398c.175.073.51.195.996.361a.693.693 0 0 1 .424.41l.708 1.871l.926-.02l.597-1.654a.692.692 0 0 1 .409-.413l1.037-.388c.262-.097.58-.25.951-.46a.703.703 0 0 1 .674-.008l1.577.835l.887-.791L15.856 14a.681.681 0 0 1-.001-.56c.182-.407.305-.714.367-.91c.061-.192.124-.469.185-.825a.69.69 0 0 1 .451-.533l1.648-.585l.072-1.14l-1.62-.694a.692.692 0 0 1-.377-.394a15.337 15.337 0 0 0-.378-.944a11.01 11.01 0 0 0-.42-.794a.682.682 0 0 1-.035-.606l.725-1.7l-.764-.79l-1.488.788a.703.703 0 0 1-.633.013a11.296 11.296 0 0 0-.968-.426a7.185 7.185 0 0 0-.857-.23a.694.694 0 0 1-.508-.441l-.668-1.853zm-.564 4.264c2.435 0 4.41 1.953 4.41 4.361c0 2.408-1.975 4.36-4.41 4.36c-2.436 0-4.41-1.952-4.41-4.36c0-2.408 1.974-4.36 4.41-4.36zm0 1.378c-1.667 0-3.018 1.335-3.018 2.983c0 1.648 1.351 2.984 3.018 2.984c1.666 0 3.017-1.336 3.017-2.984s-1.35-2.983-3.017-2.983z"
        />
      </svg>
      configurações
    </router-link>
    <router-link v-if="logged" to="/">
      <div @click="logOut" class="menuOption">
        <svg
          style="margin-right: 4px"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          width="1em"
          height="1em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 512 512"
        >
          <path
            d="M304 336v40a40 40 0 0 1-40 40H104a40 40 0 0 1-40-40V136a40 40 0 0 1 40-40h152c22.09 0 48 17.91 48 40v40"
            fill="none"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
          />
          <path
            fill="none"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
            d="M368 336l80-80l-80-80"
          />
          <path
            fill="none"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
            d="M176 256h256"
          />
        </svg>
        sair
      </div>
    </router-link>
  </div>
</template>

<script>
import PetsLocalStorage from "../controller/PetsLocalStorage";
// import { Icon } from "@iconify/vue";
export default {
  components: {
    // Icon,
  },
  mounted() {
    if (PetsLocalStorage.getItem("token")) {
      this.logged = true;
    }
  },
  watch: {
    logged: function() {
      if (this.logged) {
        this.menu = document.querySelector("#headerMenu");
        this.menu.classList.add("logged");
      } else {
        this.menu = document.querySelector(".logged");
        this.menu.classList.remove("logged");
      }
    },
  },
  data() {
    return {
      logged: false,
    };
  },
  props: {
    title: String,
  },
  methods: {
    logOut: function() {
      PetsLocalStorage.clear();
    },
  },
};
</script>

<style>
.dropdownContent {
  display: flex;
  flex: 1;
  justify-content: flex-end;
  text-decoration: underline;
  white-space: nowrap;
}
.logged {
  flex: 10;
}
.menuOption {
  display: flex;
  padding: 0.6rem 10px;
  margin: 0.5rem;
  background-color: #f9a862;
  border: 1px solid #ffffff;
  border-radius: 1.5rem;
  font-size: 1.5rem;
  font-family: "Delius";
  text-decoration: underline;
  text-decoration-color: #f9a862;
  /* color: white; */
  color: #292929;
  cursor: pointer;
  width: fit-content;
  justify-content: center;
  align-items: center;
}
.dropbtn {
  background-color: transparent;
  font-size: 1.5rem;
  font-family: "Delius";
  /* color: white; */
  color:#292929;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  border: none;
}

</style>
