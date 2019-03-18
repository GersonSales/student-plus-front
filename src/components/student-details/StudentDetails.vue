<template>
  <div class="container">
    <div class="wrapper wrapper-content animated fadeInRight">
      <div class="col-lg-auto">
        <div class="ibox">
          <div class="ibox-title">
            <h5>Welcome {{student.firstName}}!
              <small>update your student information.</small>
            </h5>

            <router-link to="/login">

              <i class="fa fa-sign-out"></i> Log out
            </router-link>
          </div>
          <div class="ibox-content">


            <form method="get" class="container">

              <div class="row justify-content-center bgimg">

                <div class="profImage">

                  <croppa
                      v-model="profileImageFile"
                      :width="150"
                      :height="150"
                      placeholder="Choose a profile picture."
                      placeholder-color="#fff"
                      :placeholder-font-size="14"
                      remove-button-color="black"
                      :remove-button-size="24"
                      :prevent-white-space="true">
                    <img crossOrigin="anonymous"
                         :src="student.profileImageUrl"
                         slot="initial">
                  </croppa>
                </div>
              </div>

              <div class="hr-line-dashed"></div>

              <div class="">
                <PersonalInfo
                    v-bind:first-name.sync="student.firstName"
                    v-bind:last-name="student.lastName"
                    v-bind:email="student.email"></PersonalInfo>

                <div class="hr-line-dashed"></div>

                <AddressForm v-bind:state.sync="student.state"
                             v-bind:city.sync="student.city"
                             v-bind:street.sync="student.street">

                </AddressForm>

                <div class="hr-line-dashed"></div>
                <PasswordForm v-bind:new-password.sync="student.password"></PasswordForm>

                <div class="hr-line-dashed"></div>

                <div class="row justify-content-center">

                  <button class="btn btn-danger btn-sm col-md-4 mr-3" v-on:click="confirmDeletion">Delete student
                  </button>
                  <button class="btn btn-primary btn-sm col-md-4 form-check" v-on:click="save" :disabled="student.password === '' ">Save</button>

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

  import axios from 'axios';


  export default {
    name: 'StudentDetails',
    components: {
      PasswordForm,
      PersonalInfo,
      AddressForm
    },

    data: function () {
      return {
        firstName: 'g',
        student: JSON.parse(localStorage.getItem('student')),
        profileImageFile: {}

      }

    },

    methods: {

      logg() {
        console.log(this.student.firstName)
      },

      save() {
        const studentId = localStorage.getItem('studentId');
        axios.put('https://student-plus-api.herokuapp.com/students/' + studentId, this.student, {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          }
        })
          .then(() => {
            this.uploadProfileImage()
          })
          .catch((error) => {
            swal("Failed! :(", error.message, "error");
          });
      },

      confirmDeletion() {
        swal({
          title: "Are you sure?",
          text: "You will not be able to recover this imaginary file!",
          icon: "warning",
          dangerMode: true,
          buttons: {
            cancel: true,
            confirm: {
              visible: true,
              text: "Yes, delete it!",
            }
          }
        }).then((willDelete) => {
          if (willDelete)
            this.deleteStudent();
        });
      },

      deleteStudent() {
        const studentId = localStorage.getItem('studentId');
        axios.delete('https://student-plus-api.herokuapp.com/students/' + studentId, {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          }
        })
          .then((res) => {
            swal('Deleted!', 'Student ' + this.student.firstName + ' has been deleted.', 'success');
            this.$router.push('/register');
          })
          .catch((error) => {
            swal("Failed! :(", error.message, "error");
          })
      },

      uploadProfileImage() {
        this.profileImageFile.generateBlob((blob) => {
          const fd = new FormData();
          if (!blob) {
            blob = new Blob([], {type: "image/png"});
          }

          fd.append('file', blob, 'profileImage.png');

          return axios.post('https://student-plus-api.herokuapp.com/students/' + this.student.id + '/profileImage', fd, {
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
          }).then(() => {
            swal({
              title: "Success!",
              text: "Student information successfully updated!",
              icon: "success"
            });
          }).catch((error) => {
            swal("Failed! :(", error.message, "error");
          })
          // write code to upload the cropped image file (a file is a blob)
        }, 'image/png', 0.8) // 80% compressed jpeg file
      }
    }
  }
</script>

<style type="text/css">
  .bgimg {
    background-image: url('../../assets/img/profile_image_bg.jpg');
    padding: 20px;
    border-radius: 10px;
  }

  .profImage {
    background: #f3f3f4;
    padding: 7px;
    border-radius: 10px;
  }
</style>
