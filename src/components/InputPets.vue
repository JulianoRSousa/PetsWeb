<template>
  <form>
    <input
      v-if="type != 'password'"
      class="InputPets"
      autocomplete="none"
      :type="type"
      :placeholder="placeholder"
    />
    <input
      v-else
      class="InputPets"
      :type="type"
      autocomplete="new-pass"
      :placeholder="placeholder"
    />
  </form>
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
.InputPets {
  background-color: #ffffff;
  border-radius: 14px;
  color: #2c2c2c;
  font-size: 30;
  border-width: 0;
  margin: 0.5px;
  padding: 0.5rem;
  height: 1.5rem;
  width: 20rem;
  margin-top: 2rem;
  outline: none;
  caret-color: #ff8637;
}
</style>
