<template>
  <div>
    <div class="form-group  row">
      <label class="col-sm-2 col-form-label">State</label>
      <div class="col-sm-3"><input type="text" class="form-control" v-model="state"></div>

      <label class="col-sm-2 col-form-label">City</label>
      <div class="col-sm-5"><input type="text" class="form-control" v-model="city"></div>
    </div>

    <div class="form-group  row"><label class="col-sm-2 col-form-label">Street</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" v-model="street">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AddressForm",

    props: {
      state: String,
      city: String,
      street: String
    },

    data: function () {
      return {
        address: {
          state: this.state,
          city: this.city,
          street: this.street
        }
      }

    }
  }
</script>

<style scoped>

</style>
