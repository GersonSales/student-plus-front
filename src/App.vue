<template>
  <div id="app" class="gray-bg">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  #app {
    text-align: center;
  }

  body {
    background-color: yellow;
  }
</style>
