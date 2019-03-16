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

              <PersonalInfo v-bind:first-name="student.firstName"
                            v-bind:last-name="student.lastName"
                            v-bind:email="student.email"
              ></PersonalInfo>

              <div class="hr-line-dashed"></div>


              <AddressForm v-bind:state="student.state"
                           v-bind:city="student.city"
                           v-bind:street="student.street">

              </AddressForm>

              <div class="hr-line-dashed"></div>

              <PasswordForm></PasswordForm>

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
          firstName: '',
          lastName: ''
        }
      }

    },

    methods: {
      log() {
        console.log(this.student);
        swal({
          title: "Success!",
          text: "Student information successfully updated!",
          icon: "success"
        });
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
            console.log(error);
          })
      },
    }
  }
</script>
