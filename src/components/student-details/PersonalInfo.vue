<template>
  <div>
    <div class="form-group  row"><label class="col-sm-2 col-form-label">First Name</label>
      <div class="col-sm-10">
        <input class="form-control"
               type="text"
               v-model="updatedFirstName"
               @input="$emit('update:firstName', updatedFirstName)">
      </div>
    </div>
    <div class="form-group  row"><label class="col-sm-2 col-form-label">Last Name</label>
      <div class="col-sm-10">
        <input type="text"
               class="form-control"
               v-model="updatedLastName"
               @input="$emit('update:lastName', updatedLastName)">
      </div>
    </div>

    <div class="form-group row"><label class="col-sm-2 col-form-label">Email</label>
      <div class="col-sm-10">
        <input type="email"
               class="form-control"
               v-model="updatedEmail"
               @input="$emit('update:email', updatedEmail)">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "PersonalInfo",
    props: {
      firstName: String,
      lastName: String,
      email: String
    },

    data: function() {
      return {
        updatedFirstName: this.firstName,
        updatedLastName: this.lastName,
        updatedEmail: this.email
      }
    },

  }
</script>

<style scoped>

</style>
