<template>
  <body class="grid">
    <div
      class="postContainer is-one-third"
      v-for="(post, index) in data"
      :key="index"
    >
    <post-item :post="post"/>
    </div>
  </body>
</template>

<script>
import api from "../services/api";
import PostItem from './PostItem.vue';
export default {
  components: { PostItem },
  created: function () {
    this.getOn();
  },
  data() {
    return {
      data: [],
      colorState: "blue",
    };
  },
  methods: {
    getOn: function () {
      api.get("/getmainfeed").then((res) => {
        this.data = res.data;
      });
    },
  },
};
</script>

<style>
.grid {
  display: grid;
  text-align: start;
  grid-template-columns: repeat(auto-fill, minmax(24rem, 1fr));
  grid-gap: 30px;
  background: #f8b172;
  padding-top: 2rem;
}

</style>
