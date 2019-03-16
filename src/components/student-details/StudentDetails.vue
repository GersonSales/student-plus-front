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

              <PersonalInfo></PersonalInfo>

              <div class="hr-line-dashed"></div>

              <PasswordForm></PasswordForm>

              <div class="hr-line-dashed"></div>

              <AddressForm></AddressForm>

              <div class="hr-line-dashed"></div>

              <div class="row text-center">

                <div class="col-md-10 h-100 p-lg">
                  <button class="btn btn-primary btn-sm demo2" v-on:click="log">Save</button>
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
  import PersonalInfo from './PersonalInfo'
  import PasswordForm from "./PasswordForm";
  import AddressForm from "./AddressForm";

  export default {
    name: 'StudentDetails',
    components: {
      PasswordForm,
      PersonalInfo,
      AddressForm
    },
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
