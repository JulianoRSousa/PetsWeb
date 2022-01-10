<template>
  <body>
    <main class="pageNewPost">
      <div v-if="stepController == 2" class="formTitle">Adicionar novo pet</div>
      <div v-else class="formTitle">Criar publicação</div>
      <form class="container">
        <div>
          <div class="headerInfo">
            <label v-if="stepController == 0" for="selectorState"
              >Qual a situação?
            </label>
            <select
              v-if="stepController == 0"
              name="selectorState"
              class="selectorState"
              v-model="petState"
            >
              <option class="firstOption" :value="1">eu perdi meu pet</option>
              <option class="secondOption" :value="2">
                eu encontrei um pet
              </option>
              <option class="thirdOption" :value="3">
                tenho um pet para adoção
              </option>
            </select>
            <label v-show="stepController == 1" for="petSelector">
              Escolha um de seus pets:
              <div id="ContainerPetSelector">
                <select
                  v-model="selectedPet"
                  @click="dropdownList"
                  class="selectorState"
                  id="PetSelector"
                ></select>
              </div>
            </label>

            <create-pet
              v-if="stepController == 2"
              :petState="petState"
              :stepController="stepController"
              :success="successNewPet"
              :failed="failedNewPet"
              @petCreated="setPetInfo"
            />
          </div>
        </div>
        <div>
          <label
            v-if="stepController == 4"
            class="lblPetName"
            for="postDescription"
          >
            Nome do pet: {{ petData.firstName + " " + petData.lastName }}
          </label>

          <label
            v-if="stepController == 4"
            class="lblPostDescription"
            for="postDescription"
          >
            Descrição:
            <input
              id="postDescription"
              placeholder="ex: encontrado proximo a avenida ..."
              type="text"
              maxlength="160"
              v-model="postDescription"
              autofocus
            />
          </label>
        </div>
        <footer>
          <div
            v-if="stepController == 4"
            style="display: flex; place-items: center; width: max-content"
          >
            <label for="PostImageInput"> Adicione uma foto ao post: </label>
            <label for="PostImageInput" class="lblImagePetPicker">
              Escolher foto
              <input
                v-show="false"
                type="file"
                accept="image/*"
                id="PostImageInput"
              />
            </label>
          </div>
        </footer>
      </form>
      <div>
        <button
          v-if="stepController > 0"
          class="stepButton"
          @click="previousStep"
        >
          Anterior
        </button>
        <button v-if="stepController != 2" class="stepButton" @click="nextStep">
          Proximo
        </button>
        <button
          v-if="stepController == 5"
          class="stepButton"
          @click="CreateNewPost"
        >
          Criar Post
        </button>
      </div>
    </main>
  </body>
</template>

<script>
import PetsLocalStorage from "../controller/PetsLocalStorage";
import api from "../services/api";
import CreatePet from "./CreatePet.vue";

export default {
  components: {
    CreatePet,
  },
  name: "CreatePost",
  created: function () {
    this.userInfo = PetsLocalStorage.getItem("loginInfo").user;
    this.loginInfo = PetsLocalStorage.getItem("loginInfo");
    this.petList = PetsLocalStorage.getItem("loginInfo").user.petList;
  },
  data() {
    return {
      newPet: false,
      selectedPet: null,
      pet_id: null,
      loading: false,
      stepController: 0,
      petState: 1,
      petSelector: 0,
      showAddPetName: false,
      petData: null,
      postDescription: "",
      userInfo: {},
      loginInfo: {},
      petList: [],
      imageData: {},
      item: {
        image: null,
        imageUrl: null,
      },
    };
  },
  methods: {
    setPetInfo: function (petInfo) {
      this.petData = petInfo;
    },
    dropdownList: function () {
      var values = [];
      values = this.userInfo.petList;
      var PetSelectorComponent = document.createElement("select");
      PetSelectorComponent.setAttribute("class", "selectorState");
      PetSelectorComponent.setAttribute("v-model", this.selectedPet);
      PetSelectorComponent.id = "PetSelector";
      var lastOption = document.createElement("option");
      lastOption.value = null;
      lastOption.text = "Adicionar um novo pet";
      document.getElementById("PetSelector").innerHTML = "";

      for (const val of values) {
        var option = document.createElement("option");
        option.value = val;
        option.text = val.firstName + " " + val.lastName;
        PetSelectorComponent.appendChild(option);
      }
      PetSelectorComponent.appendChild(lastOption);
      document.getElementById("PetSelector").replaceWith(PetSelectorComponent);
    },
    successNewPet: function () {
      this.stepController = 4;
      console.log("successNewPet");
    },
    failedNewPet: function () {
      this.stepController = 0;
    },
    nextStep: function () {
      if (this.stepController == 0 && this.petState == 2) {
        this.loading = false;
        this.stepController = 2;
        return;
      }
      if (this.stepController == 2) {
        this.loading = false;
      }
      this.stepController++;
    },
    previousStep: function () {
      if (this.stepController == 2 && this.petState == 2) {
        this.loading = false;
        this.stepController = 0;
        return;
      }
      this.stepController--;
    },

    chooseStyle: function () {
      const selector = document.querySelector("#petState");
      selector.classList.replace("secondOption", "firstOption");
    },

    // handleImageSelect: function (e) {
    //   const file = e.target.files[0];

    //   const reader = new FileReader();
    //   reader.readAsDataURL(file);
    //   reader.onload = (e) => {
    //     this.imageData = e.target.result;
    //     console.log(this.imageData);
    //   };
    // },

    CreateNewPost: function () {
      var formData = new FormData();
      var imagefile = document.querySelector("#PostImageInput");
      console.log('imageFile: ',imagefile)
      formData.append("picture", imagefile.files[0]);
      formData.append("description", this.postDescription);

      api
        .post("/createPost", formData, {
          headers: {
            "Content-Type": "image/*",
            pet_id: this.petInfo._id,
            token: this.loginInfo._id,
          },
        })
        .then((response) => {
          console.log("image upload response > ", response);
        })
        .catch((response) => {
          console.log("image upload response > ", response);
        });
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
.internHeaderContainer {
  display: grid;
  flex-direction: column;
  padding-left: 1rem;
}
.selectorState {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  border-radius: 1rem;
  border: 1px solid #292929;
  padding: 3px;
  font-family: "Delius";
  min-width: 8rem;
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
  flex-direction: column;
  line-height: 3rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin-right: 1rem;
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
