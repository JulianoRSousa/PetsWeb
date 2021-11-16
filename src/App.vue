<template>
  <body>
    <router-view />
  </body>
</template>

<script>
export default {
  mounted(){
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Delius&display=swap");
html,
body {
  margin: 0;
  height: 100%;
  min-height: 100%;
}

body {
  display: flex;
  background-color: #F9A862;
  flex-direction: column;
  font-family: "Delius";
}

main {
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  flex: auto;
}

.formTitle {
  font-size: 1.5rem;
  color: white;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 2rem;
}
</style>
