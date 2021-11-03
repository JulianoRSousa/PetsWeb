<template>
  <div>
    <div class="postContainer" v-for="(post, index) in data" :key="index">
      <div class="userInfoContainer">
        <div>
          <span>icon</span>
        </div>
        <img :src="post.user.picture_url" class="imgProfile" />
        <div>
          <h3>{{ post.user.firstName }} {{ post.user.lastName }}</h3>
          <h4>@{{ post.user.username }}</h4>
        </div>
        <div><span>icon2</span></div>
      </div>
      <div class="postContentContainer">
        <h2>Name: {{ post.pet.firstName }} {{ post.pet.lastName }}</h2>
        <h2>Description: {{ post.description }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../services/api";
export default {
  created: function() {
    this.getOn();
  },
  data() {
    return {
      data: [],
    };
  },
  methods: {
    getOn: function() {
      api.get("/getmainfeed").then((res) => {
        this.data = res.data;
      });
    },
  },
};
</script>

<style>
.postContainer {
  background-color: #fff;
  height: 27rem;
  width: 49.5rem;
  padding-top: 1rem;
  padding-left: 1rem;
  margin-top: 10rem;
  box-shadow: 0.1rem 0.3rem 0.3rem 0.3rem rgba(0, 0, 0.25, 0.25);
  border-radius: 3rem 0rem;
}
.userInfoContainer {
  background-color: red;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
}
.imgProfile {
  height: 3.7rem;
  width: 3.7rem;
  border-radius: 3rem 3rem;
}
</style>
