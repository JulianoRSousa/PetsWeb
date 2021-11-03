<template>
  <body>
    <header class="headerApp">
      <a class="appName" href="http://localhost:8080/?#/">Pets</a>
      <span class="pageTitle">Ultimas Postagens</span>
      <div class="pageMenu">oi</div>
    </header>
    <main class="pageFeed">
      <div class="feedList">
        <div>
          <post-item />
        </div>
      </div>
    </main>
    <footer></footer>
  </body>
</template>

<script>
import PostItem from "../components/PostItem.vue";
export default {
  components: { PostItem },
  name: "CreateAccount",
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
