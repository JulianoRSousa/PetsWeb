<template>
   <body>
    <header>
      <header-pets title="Feed" />
    </header>
    <main class="pageFeed">
      <div class="feedList">
        <h2>Exemplos de feed ({{this.user}})</h2>
        <post-item />
      </div>
    </main>
  </body>
</template>

<script>
import PostItem from "../components/PostItem.vue";
import HeaderPets from "../components/headerPets.vue";
import PetsLocalStorage from "../controller/PetsLocalStorage";

export default {
  components: {
    PostItem,
    HeaderPets,
  },
  name: "CreateAccount",
  data() {
    return {
      token: PetsLocalStorage.getItem("token"),
      user: PetsLocalStorage.getItem("user"),
    };
  },
};
</script>

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
  background-color: #F9A862;
}
</style>
