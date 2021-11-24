<template>
  <footer class="PetsFloatButtonContainer">
    {{ title }}
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
.PetsFloatButtonContainer {
  position: absolute;
  display: flex;
  bottom: 2rem;
  right: 5rem;
  padding: 1rem;
  padding-top: 5px;
  padding-bottom: 5px;
  width: fit-content;
  border-radius: 2rem;
  border: 1px solid white;
  background: linear-gradient(180deg, #fa4e4e 0%, #f86d56 77.6%, #ee5e3a 100%);
  box-shadow: -2px 5px 10px rgba(0, 0, 0, 0.5);

  font-family: "Satisfy";
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
}
</style>
