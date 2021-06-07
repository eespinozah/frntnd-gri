<template>
  <div id="app">
    <app-init></app-init>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
#app {
  @import url('https://fonts.googleapis.com/css?family=Lato');
  @import url('https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined');

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  align-items: center;
  background-size: auto;
  display: flex;
  font-family: 'Lato', sans-serif;
  height: 100vh;
  justify-content: center;
  margin: 0;
  overflow: hidden;
  padding: 0;
  width: 100vw;
}
</style>
