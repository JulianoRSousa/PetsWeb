<template>
  <body>
    <router-view />
  </body>
</template>

<script>
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Satisfy&display=swap");
html,
body {
  margin: 0;
  height: 100%;
  min-height: 100%;
}

body {
  display: flex;
  background-color: #ffb464;
  flex-direction: column;
  font-family: "Satisfy";
}

header,
footer {
  flex: none;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

main {
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  flex: auto;
}
.headerApp {
  display: flex;
  padding-left: 1rem;
  padding-right: 1rem;
  background-image: linear-gradient(180deg, #ff8637, #fdb05d);
}
.appName {
  flex: 1;
  text-align: center;
  font-size: 1.5rem;
  color: white;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-decoration: none;
}
.pageTitle {
  flex: 1;
  text-align: center;
  font-size: 1.5rem;
  color: white;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.dropdownMenu {
  flex: 1;
  text-align: end;
  font-size: 1.5rem;
  color: white;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.formTitle {
  font-size: 1.5rem;
  color: white;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 2rem;
}
</style>
