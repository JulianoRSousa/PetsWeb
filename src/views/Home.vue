<script>
import headerPets from "../components/headerPets.vue";
import PostItem from "../components/PostItem.vue";
export default {
  components: { headerPets, PostItem },
  name: "Home",
};
</script>

<template>
  <body>
    <header>
      <header-pets title="Home" />
    </header>
    <main class="pageFeed">
      <div class="feedList">
        <h2>Exemplos de feed (não acabados)</h2>
        <post-item />
      </div>
    </main>
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
  background-color: #ffb464;
}
</style>
