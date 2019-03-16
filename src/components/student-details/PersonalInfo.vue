<template>
  <div>
    <div class="form-group  row"><label class="col-sm-2 col-form-label">First Name</label>
      <div class="col-sm-10"><input type="text" class="form-control" v-model="firstName"></div>
    </div>
    <div class="form-group  row"><label class="col-sm-2 col-form-label">Last Name</label>
      <div class="col-sm-10"><input type="text" class="form-control" v-model="lastName"></div>
    </div>

    <div class="form-group row"><label class="col-sm-2 col-form-label">Email</label>
      <div class="col-sm-10"><input type="email" class="form-control" v-model="email"></div>
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
    }
  }
</script>

<style scoped>

</style>
