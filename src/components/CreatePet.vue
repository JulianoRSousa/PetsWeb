<template>
  <body>
    <form v-if="loading" class="containerAddPet">
      <label v-if="!editPetName" class="lblPetName" for="petName">
        Nome do pet:
        <input
          id="petName"
          class="petNameInput"
          placeholder="ex: Brutus"
          type="text"
          v-model="petFullName"
        />
      </label>
      <label class="showPetNameInput" for="checkPetName">
        Eu não sei o nome desse pet:
        <input
          id="checkPetName"
          class="showPetNameInput"
          type="checkbox"
          v-model="editPetName"
          @change="resetPetName"
        />
      </label>
      <label for="petType" class="petType">
        Este pet é um:
        <select class="petTypeSelector" id="petType" v-model="petType">
          <option value="DOG">Cachorro</option>
          <option value="CAT">Gato</option>
          <option value="NONE">Outro</option>
        </select>
      </label>
      <div class="petSexSelector">
        Esse pet é:
        <label class="petSex" for="petSexMaleTrue">
          macho
          <input
            id="petSexMaleTrue"
            :value="true"
            v-model="petMale"
            type="radio"
          />
        </label>
        <label class="petSex" for="petSexMaleFalse">
          fêmea
          <input
            id="petSexMaleFalse"
            :value="false"
            v-model="petMale"
            type="radio"
          />
        </label>
      </div>
      <label class="lblImagePetPicker" for="file-input">
        Adicionar uma foto do pet
        <input
          @change="imageName"
          type="file"
          accept="image/*"
          id="file-input"
        />
      </label>
      <span v-if="selectedImage">{{ selectedImage }}</span>
    </form>
    <div v-else class="modal-containerAlert">
      <div class="modalAlert">
        <h3 v-if="loadingRequest == 'loading'" class="subtitleLoading">
          Adicionando pet . . .
        </h3>
        <div class="loader"/>

        <div v-if="loadingRequest == 'success'">
          <h3 class="subtitleSuccess">Pet adicionado com sucesso!!</h3>
          <button @click="nextStep">Ok</button>
        </div>

        <div v-if="loadingRequest == 'failed'">
          <h3 class="subtitleFailed">Aconteceu um erro!! Tente novamente</h3>
          <button @click="nextStep">Ok</button>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import api from "../services/api";
import PetsLocalStorage from "../controller/PetsLocalStorage";

export default {
  components: {},
  name: "CreatePet",
  created: function() {
    this.loginInfo = PetsLocalStorage.getItem("loginInfo");
  },
  data() {
    return {
      showModal: false,
      petSelector: 0,
      editPetName: false,
      petFirstName: "",
      petLastName: "",
      petFullName: "",
      loginInfo: {},
      petColor: {},
      petMale: true,
      petType: "DOG",
      petCoatSize: "NONE",
      petBirthdate: "NONE",
      selectedImage: "",
      loadingRequest: "loading",
    };
  },
  props: {
    loading: Boolean,
    petState: Number,
    stepController: Number,
    thisStep: Number,
  },
  methods: {
    imageName: function() {
      var image = document.querySelector("#file-input");
      this.selectedImage = image.files[0].name;
    },
    resetPetName: function() {
      this.petFullName = "";
    },
    createNewPet: function() {
      try {
        const name = this.petFullName.split(" ");
        this.petFirstName = name.slice(0, 1).join(" ");
        this.petLastName = name.slice(1, this.petFirstName.length).join(" ");
        var formData = new FormData();
        var imagePetFile = document.querySelector("#file-input");
        formData.append("profilePicture", imagePetFile.files[0]);
        formData.append("firstName", this.petFirstName);
        formData.append("lastName", this.petLastName);
        formData.append("color", this.petColor);
        formData.append("male", this.petMale);
        formData.append("type", this.petType);
        formData.append("state", this.petState);
        formData.append("coatSize", this.petCoatSize);
        formData.append("birthdate", this.petBirthdate);

        api
          .post("/createpet", formData, {
            headers: {
              "Content-Type": "image/*",
              token: this.loginInfo._id,
            },
          })
          .then((response) => {
            if (response.status == 200) {
              alert("Pet adicionado com sucesso");
            } else {
              alert("Erro ao adicionar o pet");
            }
          });
      } catch (error) {
        console.log(error);
        alert(error);
      }
    },
  },
};
</script>

<style>
.containerAddPet {
  display: flex;
  flex-direction: column;
  place-items: start;
  text-align: start;
  background-color: white;
  width: max-content;
}
.lblPetName {
  margin-bottom: 1rem;
}
.showPetNameInput {
  margin-bottom: 1rem;
}
.petType {
  margin-bottom: 1rem;
}
.petTypeSelector {
  border-radius: 1rem;
  padding: 3px;
  font-family: "Delius";
  border: 1px solid #292929;
}
.petSexSelector {
  margin-bottom: 1rem;
  padding: 3px;
  font-family: "Delius";
}
.petSex {
  margin-bottom: 1rem;
  border-radius: 1rem;
  border: 1px solid #292929;
  padding: 3px;
  padding-left: 10px;
  font-family: "Delius";
  margin-left: 0.5rem;
}
#file-input {
  display: none;
}
.lblImagePetPicker {
  display: flex;
  width: 90%;
  height: 3rem;
  place-items: center;
  justify-content: center;
  align-self: center;
  color: white;
  border-radius: 1rem;
  background-color: rgb(86, 125, 255);
  border: 1px solid #292929;
  box-shadow: 0 4px 4px 0 rgb(86, 125, 255, 0.3);
}
.imageName {
  font-family: "Delius";
  font-size: 0.5rem;
}
.loader {
  display: flex;
  border: 9px solid white; /* Light grey */
  border-top: 9px solid #006af5; /* Blue */
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  animation: spin 2s linear infinite;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.modal-containerAlert {
  display: flex;
  top: 0px;
  left: 0px;
  z-index: 2000;
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: transparent;
  justify-content: center;
  align-items: center;
}
.modalAlert {
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: #ff8636;
  max-width: 30%;
  min-width: 320px;
  padding: 40px;
  border: 10px double white;
  box-shadow: 0 0 0 10px white;
  position: relative;
  border-radius: 30px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.3);
  justify-content: center;
  align-items: center;
}
.subtitleLoading {
  word-wrap: break-word;
  color: #292929;
  text-align: center;
  font-family: "Delius";
}
.subtitleSuccess {
  word-wrap: break-word;
  color: #042eb8;
  text-align: center;
  font-family: "Delius";
}
.subtitleFailed {
  word-wrap: break-word;
  color: #d61010;
  text-align: center;
  font-family: "Delius";
}

@keyframes modalAnim {
  from {
    opacity: 0;
    transform: translate3d(0, -60px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
/* 
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
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
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
} */
</style>
