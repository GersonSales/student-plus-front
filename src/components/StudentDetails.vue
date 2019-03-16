<template>
  <div class="wrapper wrapper-content animated fadeInRight">
    <div class="row">
      <div class="col-lg-6">
        <div class="ibox ">
          <div class="ibox-title">
            <h5>Student information
              <small>update student information.</small>
            </h5>
          </div>
          <div class="ibox-content">
            <form method="get">
              <div class="form-group  row"><label class="col-sm-2 col-form-label">First Name</label>
                <div class="col-sm-10"><input type="text" class="form-control"></div>
              </div>
              <div class="form-group  row"><label class="col-sm-2 col-form-label">Last Name</label>
                <div class="col-sm-10"><input type="text" class="form-control"></div>
              </div>

              <div class="form-group row"><label class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10"><input type="email" class="form-control"></div>
              </div>

              <div class="hr-line-dashed"></div>

              <div class="form-group row"><label class="col-sm-2 col-form-label">Old Password</label>
                <div class="col-sm-10"><input type="password" class="form-control" name="password"></div>
              </div>

              <div class="form-group row"><label class="col-sm-2 col-form-label">New Password</label>
                <div class="col-sm-10"><input type="password" class="form-control" name="password"></div>
              </div>

              <div class="form-group row"><label class="col-sm-2 col-form-label">Confirm</label>
                <div class="col-sm-10"><input type="password" class="form-control" name="password"></div>
              </div>

              <div class="hr-line-dashed"></div>

              <div class="form-group  row">
                <label class="col-sm-2 col-form-label">State</label>
                <div class="col-sm-3"><input type="text" class="form-control"></div>

                <label class="col-sm-2 col-form-label">City</label>
                <div class="col-sm-5"><input type="text" class="form-control"></div>
              </div>

              <div class="form-group  row"><label class="col-sm-2 col-form-label">Street</label>
                <div class="col-sm-10"><input type="text" class="form-control"></div>
              </div>


              <div class="row text-center">

                <div class="col-lg-6 h-100 p-lg">
                  <button class="btn btn-success btn-sm demo2" v-on:click="log">Run example</button>
                </div>

              </div>


            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import swal from 'sweetalert/dist/sweetalert.min'

  export default {
    name: 'StudentDetails',
    methods: {
      log() {
        swal({
          title: "Success!",
          text: "Student information successfully updated!",
          icon: "success"
        });
      }
    }
  }
</script>
