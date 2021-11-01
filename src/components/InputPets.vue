<template>
  <div>
    <span class="placeholderPets">{{ placeholder }}</span>
    <div class="inputPetsContainer">
      <input
        :minlength="minlength || 8"
        class="inputPets"
        :autocomplete="autocomplete || 'none'"
        :placeholder="example ? 'ex:  ' + example : ''"
        :type="type || 'text'"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    example: String,
    placeholder: String,
    type: String,
    autocomplete: String,
    minlength: Number,
  },
};
</script>

<style scoped>
.inputPetsContainer {
  font-family: "Satisfy";
  background-color: #ffffff;
  border-radius: 14px;
  font-size: 1rem;
  border-width: 0;
  margin: 0.5px;
  padding: 0.2rem;
  padding-left: 3rem;
  padding-right: 3rem;
  outline: none;
  mix-blend-mode: normal;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
}
.placeholderPets {
  color: #505050;
  font-size: 0.8rem;
  background-color: white;
  float: left;
  z-index: -10rem;
  margin-top: -1rem;
  margin-left: 1rem;
  border-width: 1px;
  border-radius: 15px;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  mix-blend-mode: normal;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
}
.inputPets {
  font-family: "Satisfy";
  background-color: #ffffff;
  color: #505050;
  font-size: 1rem;
  border-color: #808080;
  border-width: 0px 0px 1px;
  margin: 0.5px;
  height: 1.5rem;
  width: 13rem;
  outline: none;
  caret-color: #808080;
  text-align: center;
}
::placeholder {
  color: #505050;
}
</style>
