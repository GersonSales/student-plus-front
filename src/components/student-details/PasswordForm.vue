<template>
  <div>
    <div class="form-group row"><label class="col-sm-2 col-form-label">Old Password</label>
      <div class="col-sm-10"><input type="password" class="form-control" name="password"></div>
    </div>

    <div class="form-group row"><label class="col-sm-2 col-form-label">New Password</label>
      <div class="col-sm-10"><input type="password" class="form-control" name="password"></div>
    </div>

    <div class="form-group row"><label class="col-sm-2 col-form-label">Confirm</label>
      <div class="col-sm-10"><input type="password" class="form-control" name="password"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "PasswordForm",
    props: {
      oldPassword: String,
      password: String,
      confirmation: String
    }
  }
</script>

<style scoped>

</style>
