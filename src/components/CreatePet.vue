<template>
  <body>
    <form class="containerAddPet">
      <div>
        <label for="checkPetName">
          Eu sei o nome desse pet:
          <input
            name="checkPetName"
            class="showPetNameInput"
            placeholder="ex: Brutus"
            type="checkbox"
            v-model="editPetName"
          />
          <label v-if="editPetName" class="lblPetName" for="petName">
            Nome do pet:
            <input
              name="petName"
              class="petNameInput"
              placeholder="ex: Brutus"
              type="text"
              v-model="petFullName"
            />
          </label>
        </label>
        <!-- <label class="colorSelector" for="colorSelector">
          Escolha a cor mais semelhante a do pet:
          <input type="image" />
        </label> -->
        <label for="petType" class="petType">
          Este pet é um:
          <select name="petType" v-model="petType">
            <option value="DOG">Cachorro</option>
            <option value="CAT">Gato</option>
            <option value="NONE">Outro</option>
          </select>
        </label>
        <div class="petSex">
          Esse pet é:
          <label for="petSex">
            Macho
            <input :value="true" v-model="petMale" type="radio" />
          </label>
          <label for="petSex">
            Fêmea
            <input :value="false" v-model="petMale" type="radio" />
          </label>
        </div>
        <label class="lblImagePetPicker" for="inputImage">
          Adicione uma foto do pet:
          <input type="file" accept="image/*" id="file-input" />
        </label>
      </div>
    </form>
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
      petSelector: 0,
      editPetName: true,
      petFirstName: "",
      petLastName: "",
      petFullName: "",
      loginInfo: {},
      petColor: {},
      petMale: true,
      petType: "NONE",
      petCoatSize: 'NONE',
      petBirthdate: 'NONE'
    };
  },
  props: {
    petState: Number,
    stepController: Number,
    thisStep: Number,
  },
  methods: {
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
  text-align: start;
  background-color: white;
  width: max-content;
  place-items: center;
}
.showPetNameInput {
  margin-bottom: 1rem;
}
.lblPetName {
  margin-bottom: 1rem;
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
}
</style>
