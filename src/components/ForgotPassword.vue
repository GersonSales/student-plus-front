<template>
  <div class="gray-bg">

  <div class="passwordBox animated fadeInDown">
    <div class="row">

      <div class="col-md-12">
        <div class="ibox-content">

          <h2 class="font-bold">Forgot password</h2>

          <p>
            Enter your email address and your password will be reset and emailed to you.
          </p>

          <div class="row">

            <div class="col-lg-12">
              <form class="m-t" role="form" action="index.html">
                <div class="form-group">
                  <input type="email" class="form-control" placeholder="Email address" required="">
                </div>

                <router-link to="/login" type="submit" class="btn btn-primary block full-width m-b">Send new password</router-link>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr/>
    <div class="row">
      <div class="col-md-6">
        <small>Student+ &copy; 2019</small>
      </div>
      <div class="col-md-6 text-right">
        <small>© 2014-2015</small>
      </div>
    </div>
  </div>

  </div>

</template>

<script>
  export default {
    name: "ForgotPassword"
  }
</script>

<style scoped>

</style>
