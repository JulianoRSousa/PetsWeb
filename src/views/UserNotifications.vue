<template>
  <body>
    <header>
      <pets-header :showTitle="false" title="Notificações" />
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
  name: "UserNotifications",
  mounted() {},
  watch: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style></style>
