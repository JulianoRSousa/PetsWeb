<template>
  <div>
    <button id="SignButton">{{ title }}</button>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
#SignButton {
  background-color: #f9a862;
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25));
  border: 1px solid #ffffff;
  border-radius: 16px;
  height: 2.8rem;
  width: 8rem;
  margin-top: 3vh;
  font-size: 20px;
  color: #ffffff;
}
</style>
