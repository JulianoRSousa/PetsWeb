<template>
  <body>
    <form v-if="loadingStatus == 'non-loading'" class="containerAddPet">
      <div class="containerInfoPet">
        <div id="petTypeContainer">
          <div style="display: flex; width: max-content">
            <label for="petType" class="petType">
              Este pet é um?
              <select class="petTypeSelector" id="petType" v-model="petType">
                <option value="DOG">Cachorro</option>
                <option value="CAT">Gato</option>
                <option value="OTHER">Outro</option>
              </select>
            </label>
          </div>
          <div style="width: max-content">
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
        </div>

        <div id="petNameContainer">
          <label class="showPetNameInput" for="checkPetName">
            Eu sei o nome desse pet?
            <p></p>
            <div id="petNameContainerIntern">
              <label class="petSex" for="petSexMaleTrue">
                sim
                <input
                  id="petSexMaleTrue"
                  :value="true"
                  v-model="editPetName"
                  type="radio"
                  @change="resetPetName"
                />
              </label>
              <label class="petSex" for="petSexMaleFalse">
                não
                <input
                  id="petSexMaleFalse"
                  :value="false"
                  v-model="editPetName"
                  type="radio"
                  @change="resetPetName"
                />
              </label>
            </div>
          </label>
        </div>
      </div>
      <div id="petNameContainerBottom">
        <label v-if="editPetName" class="lblPetName" for="petName">
          Nome do pet:
          <input
            id="petName"
            class="petNameInput"
            placeholder="ex: Brutus"
            type="text"
            v-model="petFullName"
            minlength="2"
          />
        </label>
      </div>
      <div style="display:flex; place-items: center; width: max-content;">
        <label for="file-input"> Adicionar uma foto do pet: </label>
        <label for="PetImageInput" class="lblImagePetPicker">
          Escolher foto
          <input
            v-show="false"
            type="file"
            accept="image/*"
            id="PetImageInput"
          />
        </label>
      </div>
      <div @click="createNewPet" class="petButtonsContainer" id="btnCreatePet">
        Adicionar Pet
      </div>
    </form>

    <!-- <form
      v-show="false"
      v-if="loadingStatus == 'non-loading'"
      class="containerAddPet"
    >
      <label for="petType" class="petType">
        Este pet é um:
        <select class="petTypeSelector" id="petType" v-model="petType">
          <option value="DOG">Cachorro</option>
          <option value="CAT">Gato</option>
          <option value="OTHER">Outro</option>
        </select>
      </label>
      <label class="showPetNameInput" for="checkPetName">
        Eu sei o nome desse pet:
        <label class="petSex" for="petSexMaleTrue">
          sim
          <input
            id="petSexMaleTrue"
            :value="true"
            v-model="editPetName"
            type="radio"
            @change="resetPetName"
          />
        </label>
        <label class="petSex" for="petSexMaleFalse">
          não
          <input
            id="petSexMaleFalse"
            :value="false"
            v-model="editPetName"
            type="radio"
            @change="resetPetName"
          />
        </label>
      </label>
      <label v-if="editPetName" class="lblPetName" for="petName">
        Nome do pet:
        <input
          id="petName"
          class="petNameInput"
          placeholder="ex: Brutus"
          type="text"
          v-model="petFullName"
          minlength="2"
        />
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
      <div class="petButtonsContainer">
        <label class="lblImagePetPicker" for="file-input">
          Adicionar uma foto do pet
          <input type="file" accept="image/*" id="PetImageInput" />
        </label>
      </div>
      <div @click="createNewPet" class="petButtonsContainer" id="btnCreatePet">
        Adicionar Pet
      </div>

    </form> -->
    <div v-else class="modal-containerAlert">
      <div v-if="loadingStatus == 'loading'" class="modalAlert">
        <h3 class="subtitleLoading">Adicionando pet . . .</h3>
        <div class="loader" />
      </div>

      <div v-if="loadingStatus == 'success'" class="modalAlert">
        <h3 class="subtitleSuccess">Pet adicionado com sucesso!!</h3>
        <button @click="success">Ok</button>
      </div>

      <div v-if="loadingStatus == 'failed'" class="modalAlert">
        <h3 class="subtitleFailed">Aconteceu um erro!! Tente novamente</h3>
        <button @click="failed">Ok</button>
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
  created: function () {
    this.loginInfo = PetsLocalStorage.getItem("loginInfo");
  },
  watch: {
    petFullName: function () {
      const PetName = this.petFullName.split(" ");
      this.petFirstName = PetName.slice(0, 1).join(" ");
      this.petLastName = PetName.slice(1, this.petFirstName.length).join(" ");
    },
  },
  data() {
    return {
      petSelector: 0,
      editPetName: false,
      petFullName: "",
      petFirstName: "",
      petLastName: "",
      loginInfo: {},
      petMale: true,
      petType: "DOG",
      petCoatSize: "NONE",
      petBirthdate: Date.now(),
      loadingStatus: "non-loading",
    };
  },
  props: {
    petState: Number,
    stepController: Number,
    failed: Function,
    success: Function,
  },
  methods: {
    resetPetName: function () {
      this.petFullName = "";
    },
    updateLocalData: function () {
      console.log("Token> ", this.loginInfo._id);
      try {
        api
          .get(
            "/getdata",
            {},
            {
              headers: {
                token: String(this.loginInfo._id),
              },
            }
          )
          .then((res) => {
            if (res.status === 201) {
              PetsLocalStorage.setItem("loginInfo", res.data);
            }
          });
      } catch (error) {
        console.log("Error: ", error);
      }
    },

    createNewPet: function () {
      this.loadingStatus = "loading";
      var formData = new FormData();
      var imagefile = document.querySelector("#PetImageInput");
      formData.append("profilePicture", imagefile.files[0]);
      formData.append("firstName", this.petFirstName);
      formData.append("lastName", this.petLastName);
      formData.append("color", this.petColor || "brown");
      formData.append("coatSize", this.petCoatSize || "short");
      formData.append("birthdate", this.petBirthdate);
      formData.append("male", this.petMale);
      formData.append("type", this.petType);
      api
        .post("/createpet", formData, {
          headers: {
            "Content-Type": "image/*",
            token: this.loginInfo._id,
          },
        })
        .then((response) => {
          if (response.status == 201) {
            this.updateLocalData();
            this.loadingStatus = "success";
          } else {
            this.loadingStatus = "Failed";
            alert(response.statusText);
          }
          console.log("CreatePetResponse > ", response);
        });
    },

    // createNewPet: function () {
    //   console.log("create");
    //   this.showModal = true;
    //   console.log("created");

    // try {
    //   const name = this.petFullName.split(" ");
    //   this.petFirstName = name.slice(0, 1).join(" ");
    //   this.petLastName = name.slice(1, this.petFirstName.length).join(" ");
    //   var formData = new FormData();
    //   var imagePetFile = document.querySelector("#file-input");
    //   formData.append("profilePicture", imagePetFile.files[0]);
    //   formData.append("firstName", this.petFirstName);
    //   formData.append("lastName", this.petLastName);
    //   formData.append("color", this.petColor);
    //   formData.append("male", this.petMale);
    //   formData.append("type", this.petType);
    //   formData.append("state", this.petState);
    //   formData.append("coatSize", this.petCoatSize);
    //   formData.append("birthdate", this.petBirthdate);

    //   api
    //     .post("/createpet", formData, {
    //       headers: {
    //         "Content-Type": "image/*",
    //         token: this.loginInfo._id,
    //       },
    //     })
    //     .then((response) => {
    //       if (response.status == 200) {
    //         alert("Pet adicionado com sucesso");
    //       } else {
    //         alert("Erro ao adicionar o pet");
    //       }
    //     });
    // } catch (error) {
    //   console.log(error);
    //   alert(error);
    // }
    // },
  },
};
</script>

<style>
.containerAddPet {
  display: flex;
  flex-direction: column;
  place-items: center;
  text-align: center;
  background-color: white;
}
.containerInfoPet {
  display: flex;
  align-self: center;
  border-style: solid;
  padding-top: 10px;
  border-width: 0px 0px 0px 0px;
  border-color: #29292950;
}
#petTypeContainer {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px;
}
#petNameContainer {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px;
  border-style: solid;
  border-width: 0px 0px 0px 1px;
  border-color: #29292950;
}
#petNameContainerIntern {
  width: max-content;
}
#petNameContainerBottom {
  width: 90%;
  place-items: center;
  padding-inline: 10px;
  margin: 10px;
  border-style: solid;
  border-width: 1px 0px 1px 0px;
  border-color: #29292950;
}
#petSexContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
}
#petImageContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
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
.petButtonsContainer {
  display: flex;
  justify-content: center;
}
.lblImagePetPicker {
  display: flex;
  flex-direction: column;
  width: fit-content;
  max-width: 40%;
  padding: 10px;
  margin-left: 10px;
  place-items: center;
  color: rgb(86, 125, 255);
  border-radius: 1rem;
  border: 2px solid rgb(86, 125, 255);
  cursor: pointer;
}
#btnCreatePet {
  width: fit-content;
  max-width: 40%;
  height: fit-content;
  min-height: 3rem;
  padding: 10px;
  margin-top: 1rem;
  place-items: center;
  justify-content: center;
  align-self: center;
  color: white;
  border-radius: 1rem;
  background-color: rgb(0, 197, 0);
  border: 1px solid rgb(241, 241, 241);
  box-shadow: 0 4px 4px 0 rgb(100, 255, 86);
  cursor: pointer;
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
  background-color: #ff8636;
  max-width: 30%;
  min-width: 320px;
  padding: 40px;
  border: 10px double white;
  position: relative;
  border-radius: 30px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.3);
  place-items: center;
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
</style>
