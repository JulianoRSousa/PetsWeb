<template>
  <body class="grid">
    <div
      class="postContainer is-one-third"
      v-for="(post, index) in data"
      :key="index"
    >
      <header id="headerUserInfo">
        <img :src="post.user.picture_url" alt="User image" class="userImage" />
        <div class="userInfo">
          <span>{{ post.user.firstName }} {{ post.user.lastName }}</span>
          <span class="username">@{{ post.user.username }}</span>
        </div>
        <div class="optionIcon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path d="M10 10h4v4h-4zm6 0h4v4h-4zM4 10h4v4H4z" fill="#292929" />
          </svg>
        </div>
      </header>
      <main class="mainContent">
        <div class="mainInternalDiv">
          <img
            class="mainInternalImage"
            alt="Pet image"
            :src="post.pet.picture_url"
          />
          <span class="mainInternalDate">{{ post.postDate }}</span>
        </div>
        <div class="mainInternalDiv">
          <span class="petName"
            >{{ post.pet.firstName }} {{ post.pet.lastName }}</span
          >
          <span class="description">{{ post.description }}</span>
          <div v-if="post.state == 1" class="infoStateContainer colorStateBlue">
            <span class="infoStateText">encontrado</span>
          </div>
          <div
            v-else-if="post.state == 2"
            class="infoStateContainer colorStateRed"
          >
            <span class="infoStateText">perdido</span>
          </div>
          <div v-else class="infoStateContainer">
            <span class="infoStateText">adoção</span>
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
      colorState: "blue",
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
.grid {
  display: grid;
  text-align: start;
  grid-template-columns: repeat(auto-fill, minmax(24rem, 1fr));
  grid-gap: 30px;
  background: #f8b172;
  padding-top: 2rem;
}
.postContainer {
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 1.8rem 0px;
  min-height: 17rem;
  min-width: 24rem;
  height: 17rem;
  width: 24rem;
  margin: 0 auto 30px;
  overflow: hidden;
  font-family: "Delius", sans-serif;
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
  border-radius: 50% 0%;
  opacity: 80%;
}
.userInfo {
  display: flex;
  flex: 1;
  padding-left: 8px;
  flex-direction: column;
  font-family: "Delius";
  justify-content: space-evenly;
}
.username {
  margin-left: -5px;
  font-size: 0.8rem;
  font-family: "Delius";
}
.optionIcon {
  display: grid;
  padding: 0.5rem;
  place-items: flex-start;
  cursor: pointer;
}
.mainContent {
  display: flex;
  flex: 5;
}
.mainInternalDiv {
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow: hidden;
  
}
.mainInternalImage {
  flex: 1;
  max-width: 100%;
  object-fit: cover;
  border-radius: 0rem 2rem 0rem 0rem;
}
.mainInternalDate {
  text-align: center;
  color: #292929;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-shadow: 0px 2px 2px rgba(255, 255, 255, 0.6);
}
.petName {
  flex: 1;
  font-size: 1.5rem;
  color: #333333;
  text-align: center;
}
.description {
  flex: 8;
  margin: 5px;
  font-size: 1rem;
}
.infoStateContainer {
  display: flex;
  flex: 3;
  border-radius: 2rem 0px 0px 0px;
  width: 60%;
  align-self: flex-end;
  justify-content: center;
  align-items: center;
}
.colorStateBlue {
  background-color: rgb(34, 113, 204);
}
.colorStateRed {
  background-color: rgb(196, 49, 49);
}
.infoStateText {
  color: white;
  font-size: 1.2rem;
}
</style>
