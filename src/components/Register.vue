<template>
  <div class="gray-bg">
    <h1 class="logo-name">Student+</h1>
    <div class="middle-box text-center loginscreen  animated fadeInDown">
      <div>
        <h3>Register to Student+</h3>
        <form class="m-t" role="form" v-on:submit="register">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="First Name" required="" v-model="student.firstName">
          </div>
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Last Name" required="" v-model="student.lastName">
          </div>
          <div class="form-group">
            <input type="email" class="form-control" placeholder="Email" required="" v-model="student.email">
          </div>
          <div class="form-group">
            <input type="password" class="form-control" placeholder="Password" required="" v-model="student.password">
          </div>
          <div class="form-group">
            <div class="checkbox i-checks"><label> <input type="checkbox" required=""><i></i> Agree the terms and policy
            </label>
            </div>
          </div>
          <vue-ladda type="submit" :loading="registerLoading" button-class="btn btn-primary block full-width m-b">
            Register
          </vue-ladda>

          <p class="text-muted text-center">
            <small>Already have an account?</small>
          </p>
          <router-link class="btn btn-sm btn-white btn-block" to="/login">Login</router-link>

        </form>
        <p class="m-t">
          <small>Student+ &copy; 2019</small>
        </p>
      </div>
    </div>

  </div>
</template>

<script>
  import axios from 'axios';
  import swal from 'sweetalert'

  export default {
    name: 'Register',

    data() {
      return {
        registerLoading: false,
        student: {
          firstName: '',
          lastName: '',
          email: '',
          password: ''
        }

      };
    },

    methods: {
      register() {
        this.registerLoading = true;
        axios.post('https://student-plus-api.herokuapp.com/students/sign-up', this.student)
          .then(() => {
            this.registerLoading = false;
            swal({
              title: "Success!",
              text: "Student successfully registered!",
              icon: "success"
            });
            this.$router.push('/login');
          })
          .catch((error) => {
            this.registerLoading = false;
            swal("Failed! :(", error.message, "error");
          });
      }
    }
  }


</script>
