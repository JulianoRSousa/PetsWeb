<script>
export default {
  name: "Home",
};
</script>

<template>
  <body>
    <header class="headerApp">
      <a class="appName" href="http://localhost:8080/?#/">Pets</a>
      <span class="pageTitle">Home</span>
      <div class="dropdownMenu">
        <button class="dropbtn">Menu</button>
        <div class="dropdown-content">
          <a href="?#/login">Login</a>
          <a href="?#/createaccount">Criar Conta</a>
        </div>
      </div>
    </header>
    <main></main>
  </body>
</template>

<style>
.dropbtn{
  background-color: transparent;
  color: white;
  padding: 1rem;
  font-size: 1.5rem;
  color: white;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: 'Satisfy';
  cursor: pointer;
  border: none;
}
.dropdown-content{
  display: none;
  position: absolute;
  right: 0;
  background-color: #f9f9f9;
  min-width: 10rem;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}
</style>
