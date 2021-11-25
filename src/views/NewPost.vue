<template>
  <body>
    <header>
      <header-pets title="Criar Post" />
    </header>

    <main class="pageNewPost">
      <div class="formTitle">Criar publicação</div>
      <div class="container">
        <div>
          <div class="headerInfo">
            <div class="topHeaderInfo">
              <img class="userImage" :src="loginInfo.user.picture_url" />
              <div class="internHeaderContainer">
                {{
                  this.loginInfo.user.firstName +
                    " " +
                    this.loginInfo.user.lastName
                }}
                <select class="selectorState">
                  <option class="firstOption" value="lose"
                    >eu perdi meu pet</option
                  >
                  <option class="secondOption" value="found"
                    >eu encontrei um pet</option
                  >
                  <option class="thirdOption" value="adoption"
                    >tenho um pet para adoção</option
                  >
                </select>
              </div>
            </div>
            <select class="petSelector" id="petList">
              <option value="nu1">escolha um de seus pets:</option>
              <option value="anotherPet">Adicionar um novo pet</option>
            </select>
            <span>Ou adicione um abaixo</span>
          </div>
        </div>
        <div>
          <label class="lblPetName" for="petName">
            Nome do pet:
            <input id="petName" placeholder="ex: Brutus" type="text" />
          </label>
          <label class="lblPostDescription" for="postDescription">
            Descrição:
            <input
              id="postDescription"
              placeholder="ex: encontrado proximo a avenida ..."
              type="text"
            />
          </label>
        </div>
        <footer>
          <label class="lblImagePicker" for="inputImage">
            Adicione uma foto:
            <input id="imagePicker" type="image" />
          </label>
        </footer>
      </div>
    </main>
    <footer></footer>
  </body>
</template>

<script>
import HeaderPets from "../components/headerPets.vue";
import PetsLocalStorage from "../controller/PetsLocalStorage";
// import api from "../services/api";

export default {
  components: {
    HeaderPets,
  },
  name: "NewPost",
  mounted() {
    this.loginInfo = PetsLocalStorage.getItem("loginInfo");
  },
  watch: {},
  data() {
    return {
      loginInfo: { user: {} },
      petState: 0,
    };
  },
  methods: {
    chooseStyle: function() {
      const selector = document.querySelector("#petState");
      selector.classList.replace("secondOption", "firstOption");
    },
  },
};
</script>

<style>
.pageNewPost {
  display: flex;
  flex: 1;
  flex-direction: column;
  place-items: center;
  padding-top: 3rem;
}
.container {
  background-color: white;
  width: 50%;
  border-radius: 2rem;
  place-items: center;
  padding: 2rem;
}
.headerInfo {
  display: flex;
  flex-direction: column;
  text-align: center;
}
.topHeaderInfo {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}
.userImage {
  display: flex;
  border-radius: 50%;
  height: 4rem;
  width: 4rem;
}
.internHeaderContainer {
  display: grid;
  flex-direction: column;
  padding-left: 1rem;
}
.selectorState {
  margin-top: 10px;
  border-radius: 1rem;
  border: 1px solid #292929;
  padding: 3px;
  font-family: "Delius";
}
.firstOption {
  color: red;
}
.secondOption {
  color: rgb(16, 104, 219);
}
.thirdOption {
  color: rgb(55, 136, 9);
}
.petSelector {
  border-radius: 1rem;
  border: 1px solid #292929;
  padding: 3px;
  font-family: "Delius";
  margin-bottom: 10px;
}
.lblPetName {
  display: flex;
  padding-top: 1rem;
  padding-bottom: 1rem;
  color: #292929;
}
#petName {
  display: flex;
  flex: 1;
  border-radius: 1rem;
  font-family: "Delius";
  border: 1px solid #292929;
  padding: 3px;
  padding-left: 0.8rem;
  margin-left: 1rem;
}
.lblPostDescription{
  display: flex;
  padding-top: 1rem;
  padding-bottom: 1rem;
  color: #292929;
}
#postDescription{
  display: flex;
  flex: 1;
  border-radius: 1rem;
  font-family: "Delius";
  border: 1px solid #292929;
  padding: 3px;
  padding-left: 0.8rem;
  margin-left: 1rem;
}
.lblImagePicker{
   display: flex;
  padding-top: 1rem;
  padding-bottom: 1rem;
  color: #292929;
}
#imagePicker{
  display: flex;
  flex: 1;
  border-radius: 1rem;
  font-family: "Delius";
  border: 1px solid #292929;
  padding: 3px;
  padding-left: 0.8rem;
  margin-left: 1rem;
}
</style>
