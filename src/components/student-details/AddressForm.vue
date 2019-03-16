<template>
  <div>
    <div class="form-group  row">
      <label class="col-sm-2 col-form-label">State</label>
      <div class="col-sm-3"><input type="text" class="form-control"></div>

      <label class="col-sm-2 col-form-label">City</label>
      <div class="col-sm-5"><input type="text" class="form-control"></div>
    </div>

    <div class="form-group  row"><label class="col-sm-2 col-form-label">Street</label>
      <div class="col-sm-10"><input type="text" class="form-control"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AddressForm"
  }
</script>

<style scoped>

</style>
