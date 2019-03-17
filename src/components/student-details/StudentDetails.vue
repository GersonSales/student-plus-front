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

              <croppa v-model="profileImageFile">
                <img crossOrigin="anonymous"
                     :src="student.profileImageUrl"
                     slot="initial">
              </croppa>

              <div class="hr-line-dashed"></div>

              <PersonalInfo v-bind:firstName.sync="student.firstName"
                            v-bind:lastName.sync="student.lastName"
                            v-bind:email.sync="student.email"></PersonalInfo>

              <div class="hr-line-dashed"></div>


              <AddressForm v-bind:state.sync="student.state"
                           v-bind:city.sync="student.city"
                           v-bind:street.sync="student.street">

              </AddressForm>

              <div class="hr-line-dashed"></div>

              <PasswordForm v-bind:newPassword.sync="student.password"></PasswordForm>

              <div class="hr-line-dashed"></div>

              <div class="col-lg-6 h-100 p-lg">
                <button class="btn btn-danger btn-sm demo4" v-on:click="confirmDeletion">Run example</button>
                <button class="btn btn-primary btn-sm demo2" v-on:click="save">Save</button>
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

    created: function () {
      this.fetchData();
    },

    data: function () {
      return {
        student: {
          id: '',
          firstName: '',
          lastName: '',
          email: '',
          inputPassword: '',
          newPassword: '',
          confirmation: '',
          profileImageUrl: ''
        },
        profileImageFile: {}
      }

    },

    methods: {

      save() {
        const studentId = localStorage.getItem('studentId');
        axios.put('http://localhost:5000/students/' + studentId, this.student, {
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
        axios.delete('http://localhost:5000/students/' + studentId, {
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

      fetchData() {
        const studentId = localStorage.getItem('studentId');
        axios.get('http://localhost:5000/students/' + studentId, {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          }
        })
          .then((res) => {
            this.student = res.data;
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

          return axios.post('http://localhost:5000/students/' + this.student.id + '/profileImage', fd, {
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
