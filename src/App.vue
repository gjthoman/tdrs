<template>
  <div id="app">
    <h1>TDRS Interactive Console</h1>
    <console></console>
  </div>
</template>

<script>
import Console from './components/Console'

export default {
  name: 'app',
  components: {
    Console
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
