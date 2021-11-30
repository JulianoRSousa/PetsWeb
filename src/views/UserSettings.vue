<template>
  <body>
    <header>
      <pets-header :showTitle="false" title="Configurações" />
    </header>
    <main>
    </main>
    <footer></footer>
  </body>
</template>

<script>
import PetsHeader from '../components/PetsHeader.vue';

export default {
  components: {
    PetsHeader
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
