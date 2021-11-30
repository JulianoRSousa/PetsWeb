<template>
  <body>
    <header>
      <HeaderPets :showTitle="false" title="Notifications" />
    </header>
    <main></main>
    <footer></footer>
  </body>
</template>

<script>
import HeaderPets from '../components/HeaderPets.vue';

export default {
  components: {
    HeaderPets,
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
