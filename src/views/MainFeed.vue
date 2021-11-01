<script>
import PostItem from "../components/PostItem.vue";
export default {
  name: "Feed",
  components: { PostItem },
};
</script>

<template>
  <div>
    <div class="separator">
      <post-item />
    </div>
  </div>
</template>

<style>
.separator {
  padding-left: 2rem;
  padding-right: 2rem;
  background-color: #fa9857;
}
</style>
