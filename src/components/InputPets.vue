<template>
  <div>
    <h2>{{ title }}</h2>
    <input id="InputPets" :type="type" :placeholder="placeholder" />
  </div>
</template>

<script>
export default {
  props: {
    placeholder: String,
    email: String,
    pass: String,
    type: String,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
#InputPets {
  background-color: #ffffff;
  border-radius: 14px;
  color: #2c2c2c;
  font-size: 30;
  border-width: 0;
  margin: 0.5px;
  padding: 0.5rem;
  height: 1.5rem;
  width: 20rem;
  box-shadow: 0px 1.5px 1.56px rgba(0, 0, 0, 0.25);
}
</style>
