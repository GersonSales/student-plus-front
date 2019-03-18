<template>
  <div>
    <div class="form-group  row">
      <label class="col-sm-2 col-form-label">State</label>
      <div class="col-sm-3">
        <input type="text"
               placeholder="Ex.: Alabama"
               class="form-control"
               v-model="updatedState"
               @input="$emit('update:state', updatedState)">
      </div>

      <label class="col-sm-2 col-form-label">City</label>
      <div class="col-sm-5">
        <input type="text"
               class="form-control"
               placeholder="Ex.: Dothan"
               v-model="updatedCity"
               @input="$emit('update:city', updatedCity)">
      </div>
    </div>

    <div class="form-group  row"><label class="col-sm-2 col-form-label">Street</label>
      <div class="col-sm-10">
        <input type="text"
               placeholder="Ex.: E Lafayette St"
               class="form-control"
               v-model="updatedStreet"
               @input="$emit('update:street', updatedStreet)">
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
          updatedState: this.state,
          updatedCity: this.city,
          updatedStreet: this.state
        }
    }
  }
</script>

<style scoped>

</style>
