<template>
  <div>
    <h2>{{title}}</h2>
    <input id="InputPets" type="text" />
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    email: String,
    pass: String,
    secureText: Boolean,
  },
  data() {
    return {
      nome: "a",
      numero: "",
      idade: 0,
      descricao: "Olá, Brasil",
    };
  },
};
</script>

<style scoped>
#Cliente {
  background-color: #aaf;
  height: auto;
  width: auto;
  padding: 2%;
}
#InputPets {
  background-color: #eee;
  color: #2c2c2c;
  font-size: 20px;
  font-family: Delius;
  width: 10em;
  height: fit-content;
  border-radius: 10px;
  border-width: 0;
  margin: 0px;
  padding: 1%;
}
.h2 {
  color: red;
}
</style>
