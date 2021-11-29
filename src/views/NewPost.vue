<template>
  <body>
    <header>
      <header-pets :showTitle="false" title="Criar Publicação" />
    </header>
    <main>
      <create-post />
    </main>
  </body>
</template>
<!-- <footer>
      <div class="postContainer">
        <header id="headerUserInfo">
          <img :src="userInfo.picture_url" alt="User image" class="userImage" />
          <div class="userInfo">
            <span>{{ userInfo.firstName }} {{ userInfo.lastName }}</span>
            <span class="username">@{{ userInfo.username }}</span>
          </div>
          <div class="optionIconExample">
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
            <img class="mainInternalImage" alt="Pet image" :src="imageData" />
            <span class="mainInternalDate">12 de Julho de 2021</span>
          </div>
          <div class="mainInternalDiv">
            <span class="petName">{{ petName }}</span>
            <span class="description">{{ postDescription }}</span>
            <div v-if="petState == 1" class="infoStateContainer colorStateBlue">
              <span class="infoStateText">encontrado</span>
            </div>
            <div
              v-else-if="petState == 2"
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
    </footer> -->

<script>
import CreatePost from "../components/CreatePost.vue";
import HeaderPets from "../components/HeaderPets.vue";
export default {
  components: { HeaderPets, CreatePost },
};
</script>

<style></style>
