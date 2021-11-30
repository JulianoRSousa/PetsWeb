<template>
  <body>
    <header>
      <HeaderPets :showTitle="false" title="Meu Perfil" />
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

<style>
</style>
