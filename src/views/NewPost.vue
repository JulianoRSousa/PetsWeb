<template>
  <!-- AINDA ESTOU COM PROBLEMAS NO ENVIO DA IMAGEM AO SERVIDOR

  FUNCIONALIDADES NÃO ACABADAS -->

  <body>
    <header>
      <header-pets title="Criar Post" />
    </header>

    <main class="pageNewPost">
      <div class="formTitle">Criar publicação</div>
      <form class="container">
        <div>
          <div class="headerInfo">
            <label for="selectorState">Qual a situação?</label>

            <select name="selectorState" class="selectorState">
              <option class="firstOption" value="1">eu perdi meu pet</option>
              <option class="secondOption" value="2"
                >eu encontrei um pet</option
              >
              <option class="thirdOption" value="3"
                >tenho um pet para adoção</option
              >
            </select>
            <label v-if="petList.length > 0" for="petSelector">
              Escolha um de seus pets:
              <select
                class="petSelector"
                id="petListSelector"
                v-model="petSelector"
              >
              </select>
            </label>
            <span>Adicione um novo pet abaixo:</span>
          </div>
        </div>
        <div>
          <label class="lblPetName" for="petName">
            Nome do pet:
            <input
              class="petNameInput"
              v-if="petSelector == 1"
              placeholder="ex: Brutus"
              type="text"
              v-model="petName"
              disabled
            />
            <input
              v-else
              class="petNameInput"
              placeholder="ex: Brutus"
              type="text"
              v-model="petName"
            />
          </label>
          <label class="lblPostDescription" for="postDescription">
            Descrição:
            <input
              id="postDescription"
              placeholder="ex: encontrado proximo a avenida ..."
              type="text"
              maxlength="160"
              v-model="postDescription"
            />
          </label>
        </div>
        <footer>
          <label class="lblImagePicker" for="inputImage">
            Adicione uma foto:
            <input
              type="file"
              accept="image/*"
              @change="handleImageSelect($event)"
              id="file-input"
            />
            <!-- <input
              id="files"
              type="file"
              accept=".png, .jpg, .jpeg"
              @change="handleFileSelect"
            /> -->
          </label>
        </footer>
      </form>

      <button type="submit" @click="createNewPost">Função</button>
    </main>
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
  </body>
</template>

<script>
import HeaderPets from "../components/headerPets.vue";
import PetsLocalStorage from "../controller/PetsLocalStorage";
import api from "../services/api";

export default {
  components: {
    HeaderPets,
  },
  name: "NewPost",
  created: function() {
    this.userInfo = PetsLocalStorage.getItem("loginInfo").user;
    this.loginInfo = PetsLocalStorage.getItem("loginInfo");
    this.petList = PetsLocalStorage.getItem("loginInfo").user.petList;
  },
  data() {
    return {
      petSelector: 0,
      petName: "",
      postDescription: "",
      userInfo: {},
      loginInfo: {},
      petList: [],
      petState: 0,
      imageData: {},
      item: {
        //...
        image: null,
        imageUrl: null,
      },
    };
  },
  methods: {
    // handleFileSelect: function(evt) {
    //   var files = evt.target.files[0];
    //   var reader = new FileReader();
    //   reader.onload = (function() {
    //     return function(e) {
    //       this.imageData = e.target.result;
    //       console.log(this.imageData);
    //     };
    //   })(files);
    //   reader.readAsDataURL(files);
    // },
    execFunc: function() {
      this.imageData = document.querySelector("#imagePicker");
      document
        .querySelector("#list")
        .innerHTML(
          <img src="e.target.result" title="theFile.name" width="50" />
        );
    },
    chooseStyle: function() {
      const selector = document.querySelector("#petState");
      selector.classList.replace("secondOption", "firstOption");
    },

    handleImageSelect: function(e) {
      const file = e.target.files[0];
      // this.imageData = file;
      // this.item.imageUrl = URL.createObjectURL(file);

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        this.imageData = e.target.result;
        console.log(this.imageData);
      };
    },
    createNewPost: function() {
      // const img = {
      //   type: this.imageData.type,
      //   name: this.imageData.name || "",
      // };
      // console.log("IMG: ", img);

      // let formData = new FormData();
      // formData.append("picture", this.imageData);
      // formData.append("state", this.petState);
      // formData.append("description", this.postDescription);
      // let data = new FormData();
      // formData.append("name", "my-picture");
      // data.append("file", event.target.files[0]);
      // api
      //   .post("/createPost", formData, {
      //     headers: {
      //       "Content-Type": "image/*",
      //       pet_id: "6019c07aa2fe3e001707508c",
      //       token: this.loginInfo._id,
      //     },
      //   })
      //   .then((response) => {
      //     console.log("image upload response > ", response);
      //   });
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
  width: max-content;
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
  margin-bottom: 1rem;
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
.petNameInput {
  display: flex;
  flex: 1;
  border-radius: 1rem;
  font-family: "Delius";
  font-size: 1rem;
  border: 1px solid #292929;
  padding: 3px;
  padding-left: 0.8rem;
  margin-left: 1rem;
}
.lblPostDescription {
  display: flex;
  padding-top: 1rem;
  padding-bottom: 1rem;
  color: #292929;
}
#postDescription {
  display: flex;
  flex: 1;
  height: 4rem;
  border-radius: 1rem;
  font-family: "Delius";
  border: 1px solid #292929;
  padding: 3px;
  padding-left: 0.8rem;
  margin-left: 1rem;
}
.lblImagePicker {
  display: flex;
  padding-top: 1rem;
  padding-bottom: 1rem;
  color: #292929;
}
#imagePicker {
  display: flex;
  flex: 1;
  border-radius: 1rem;
  font-family: "Delius";
  border: 1px solid #292929;
  padding: 3px;
  padding-left: 0.8rem;
  margin-left: 1rem;
}

.optionIconExample {
  display: grid;
  padding: 0.5rem;
  place-items: flex-start;
}
</style>
