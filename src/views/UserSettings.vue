<template>
  <body>
    <header>
      <HeaderPets :showTitle="false" title="Configurações" />
    </header>
    <main>
    </main>
    <footer></footer>
  </body>
</template>

<script>
import HeaderPets from "../components/HeaderPets.vue";

export default {
  components: {
    HeaderPets,
  },
  name: "UserSettings",
  mounted() {},
  watch: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
</style>
