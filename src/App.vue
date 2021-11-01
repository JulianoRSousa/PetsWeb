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
.appName {
  font-size: 1rem;
  padding: 1rem;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-decoration:none;
}
</style>
