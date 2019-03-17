<template>
  <div>
    <croppa v-model="myCroppa"></croppa>
  </div>
</template>

<script>

  export default {
    name: "ImageLoader",
    props: {
      myCroppa: {}
    }
  }
</script>

<style scoped>

</style>
