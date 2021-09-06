<template>
  <div id="Cliente">
    <h3>Nome: {{ cliente.nome }}</h3>
    <h3>Idade: {{ cliente.idade }}</h3>
    <hr/>
  </div>
</template>

<script>
export default {
  props: {
    cliente: Object,
  },
};
</script>

<style>
#Cliente {
  height: auto;
  width: auto;
}
</style>
