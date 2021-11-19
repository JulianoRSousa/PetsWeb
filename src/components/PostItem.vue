<template>
  <body>
    <div class="postContainer" v-for="(post, index) in data" :key="index">
      <header id="headerUserInfo">
        <img :src="post.user.picture_url" class="userImage" />
        <div class="userInfo">
          <span>{{ post.user.firstName }} {{ post.user.lastName }}</span>
          <span class="username">@{{ post.user.username }}</span>
        </div>
        <div class="optionIcon">
          <img />
        </div>
      </header>
      <main class="mainContent">
        <div class="mainInternalDiv">
          <img class="mainInternalImage" />
          <span class="mainInternalDate">12 de Julho de 2021</span>
        </div>
        <div class="mainInternalDiv">
          <span class="petName"
            >{{ post.pet.firstName }} {{ post.pet.lastName }}</span
          >
          <span class="description">{{ post.description }}</span>
          <div class="infoStateContainer">
            <span class="infoStateText">encontrado</span>
          </div>
        </div>
      </main>
    </div>
  </body>
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
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@600&display=swap");
.postContainer {
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 2.4rem 0px;
  min-height: 17rem;
  min-width: 24rem;
  height: 17rem;
  width: 24rem;
  margin: 100px;
  overflow: hidden;
  font-family: "Quicksand", sans-serif;
  font-size: 1.2rem;
  color: #333333;
}
#headerUserInfo {
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
}
.userImage {
  width: 3.5rem;
  padding-right: 10px;
}
.userInfo {
  display: flex;
  flex: 1;
  flex-direction: column;
}
.username {
  font-size: 0.8rem;
}
.optionIcon {
  width: 2.8rem;
}
.mainContent {
  display: flex;
  flex: 5;
}
.mainInternalDiv {
  display: flex;
  flex: 1;
  flex-direction: column;
}
.mainInternalImage {
  flex: 1;
  margin: 0.2rem;
  margin-left: 0.8rem;
}
.mainInternalDate {
  text-align: center;
}
.petName {
  flex: 1;
  font-size: 1.5rem;
  color: #333333;
  text-align: center;
}
.description {
  flex: 8;
  font-family: "Delius";
  margin: 5px;
  font-size: 1rem;
}
.infoStateContainer {
  display: flex;
  flex: 3;
  background-color: #116ead;
  border-radius: 2rem 0px;
  width: 60%;
  align-self: flex-end;
  justify-content: center;
  align-items: center;
}
.infoStateText {
  color: white;
  font-size: 1rem;
}
</style>
