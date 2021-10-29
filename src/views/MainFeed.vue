<script>
import PostItem from "../components/PostItem.vue";
export default {
  name: "Feed",
  components: { PostItem },
};
</script>

<template>
  <div class="main">
    <div class="separator">
      <post-item />
    </div>
  </div>
</template>

<style>
.main {
  position:absolute;
  height: 9000px;
  width: 9000px;
  background-color: #ff8;
}
.separator {
  padding-left: 2rem;
  padding-right: 2rem;
  background-color: #fa9857;
}
</style>
