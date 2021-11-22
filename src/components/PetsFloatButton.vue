<template>
  <footer class="buttonPetsContainer">
    <button class="buttonPets">
      {{ title }}
    </button>
  </footer>
</template>

<script>
export default {
  name: "PetsFloatButton",
  props: {
    title: String,
  },
  methods: {},
};
</script>

<style>
.buttonPetsContainer {
  box-shadow: 0px 3px 2px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
  overflow: auto;
  padding: 1px;
  width: fit-content;
  background-color: #f2e3d9;
}
.buttonPets {
  font-family: "Satisfy";
  font-size: 1rem;
  color: #f2e3d9;
  border-width: 0px;
  padding: 0.4rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  text-align: center;
  background: linear-gradient(180deg, #fc6464 0%, #f86d56 77.6%, #ee653a 100%);
  border-radius: 25px;
  cursor: pointer;
}
</style>
