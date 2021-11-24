<template>
  <body>
    <router-view />
  </body>
</template>

<script>
export default {
  mounted() {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Delius&display=swap");
html,
body {
  margin: 0;
  height: 100%;
  min-height: 100%;
  color: #292929;
}
body {
  display: flex;
  background-color: #f9a862;
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
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 2rem;
}
.pets-float-button {
  position: absolute;
  display: flex;
  bottom: 2rem;
  right: 5rem;
  padding: 1rem;
  padding-top: 5px;
  padding-bottom: 5px;
  align-items: center;
  width: fit-content;
  border-radius: 2rem;
  border: 1px solid white;
  background: linear-gradient(180deg, #FC6464 0%, #f86d56 77.6%, #F07556 100%);
  box-shadow: -2px 5px 10px rgba(0, 0, 0, 0.5);
  font-family: "Satisfy";
  font-size: 1.5rem;
  color: black;
  cursor: pointer;
}
</style>