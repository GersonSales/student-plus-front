<template>
  <div>
    <div class="form-group row"><label class="col-sm-2 col-form-label">Old Password</label>
      <div class="col-sm-10">
        <input type="password"
               class="form-control"></div>
    </div>

    <div class="form-group row"><label class="col-sm-2 col-form-label">New Password</label>
      <div class="col-sm-10">
        <input type="password"
               required=""
               class="form-control"
               v-model="updatedPassword"
               @input="$emit('update:newPassword', updatedPassword)">
      </div>
    </div>

    <div class="form-group row"><label class="col-sm-2 col-form-label">Confirm</label>
      <div class="col-sm-10">
        <input type="password"
               class="form-control">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "PasswordForm",
    props: {
      newPassword: String
    },

    data: function () {
      return {
        updatedPassword: this.password
      }
    }

  }
</script>

<style scoped>

</style>
