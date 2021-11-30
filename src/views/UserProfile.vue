<template>
  <body>
    <header>
      <pets-header :showTitle="false" title="Meu Perfil" />
    </header>
    <main></main>
    <footer></footer>
  </body>
</template>

<script>
import PetsHeader from '../components/PetsHeader.vue';

export default {
  components: {
    PetsHeader
  },
  name: "UserProfile",
  mounted() {

  },
  watch: {},
  data() {
    return {
      postsInfo: [],
      petsInfo: [],
    };
  },
  methods: {},
};
</script>

<style></style>
