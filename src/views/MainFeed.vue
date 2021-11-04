<template>
  <body>
    <header>
      <header-pets title="Feed" />
    </header>
    <main class="pageFeed">
      <div class="feedList">
        <div>
          <div>
            <h2>Olá {{ this.user.firstName }}</h2>
          </div>
          <post-item />
        </div>
      </div>
    </main>
    <footer></footer>
  </body>
</template>

<script>
import PostItem from "../components/PostItem.vue";
import HeaderPets from "../components/headerPets.vue";
export default {
  components: { PostItem, HeaderPets },
  name: "CreateAccount",
  mounted() {
    if (localStorage.getItem("user")) {
      try {
        this.user = JSON.parse(localStorage.getItem("user"));
      } catch (error) {
        localStorage.removeItem("user");
      }
    }
    if (this.user._id != null) {
      this.$router.push("/feed");
      console.log("diferente");
    }
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
  background-color: #fdb05d;
}
</style>
