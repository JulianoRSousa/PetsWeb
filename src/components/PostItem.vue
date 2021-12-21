<template>
  <body>
    <div class="postContainer is-one-third" @click="showPost(post)">
      <header id="headerUserInfo">
        <img :src="post.user.picture_url" alt="User image" class="userImage" />
        <div class="userInfo">
          <span>{{ post.user.firstName }} {{ post.user.lastName }}</span>
          <span class="username">@{{ post.user.username }}</span>
        </div>
        
      </header>
      <main class="mainContent">
        <div class="mainInternalDiv">
          <img
            class="mainInternalImage"
            alt="Pet image"
            :src="post.picture_url"
          />
          <span class="mainInternalDate">{{ postDate }}</span>
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
          <div v-else class="infoStateContainer colorStateGreen">
            <span class="infoStateText">adoção</span>
          </div>
        </div>
      </main>
    </div>
  </body>
</template>

<script>
import dateFormat, { masks } from "dateformat";
export default {
  data() {
    return {
      showPost: function(post){
        console.log('Post clicked = ',post)
      },
    };
  },
  computed: {
    
    postDate: function () {
      masks.PostFormatTime = 'dd"/"m"/"yyyy';
      masks.PostFormatDay = "DDDD";
      if (Date.parse(this.post.postedAt) > Date.now() - 24 * 60 * 60 * 1000) {
        return dateFormat(this.post.postedAt, "PostFormatDay");
      }
      return dateFormat(this.post.postedAt, "PostFormatTime");
    },
  },
  props: {
    post: {},
  },
};
</script>

<style>
.postContainer {
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 2rem 0px;
  min-height: 17rem;
  min-width: 24rem;
  height: 17rem;
  width: 24rem;
  margin: 0 auto 30px;
  overflow: hidden;
  font-family: "Delius", sans-serif;
  font-size: 1.2rem;
  color: #333333;
  cursor: pointer;
}
#headerUserInfo {
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
}
.userImage {
  width: 3.5rem;
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
.colorStateGreen {
  background-color: rgb(44, 151, 34);
}
.infoStateText {
  color: white;
  font-size: 1.2rem;
}
</style>
