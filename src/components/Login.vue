<template>
  <div class="gray-bg">
    <h1 class="logo-name">Student+</h1>
    <div class="middle-box text-center loginscreen animated fadeInDown">
      <div>
        <h3>Welcome to Student+</h3>
        <form class="m-t" role="form" v-on:submit="login">
          <div class="form-group">
            <input type="email" class="form-control" placeholder="Username" required="" v-model="credentials.email">
          </div>
          <div class="form-group">
            <input type="password" class="form-control" placeholder="Password" required=""
                   v-model="credentials.password">
          </div>
          <button type="submit" class="btn btn-primary block full-width m-b">Login</button>

          <router-link to="/forgot_password">
            <small>Forgot password?</small>
          </router-link>
          <p class="text-muted text-center">
            <small>Do not have an account?</small>
          </p>
          <router-link class="btn btn-sm btn-white btn-block" to="/register">Create an account</router-link>
        </form>
        <p class="m-t">
          <small>Student+ &copy; 2019</small>
        </p>
      </div>
    </div>
  </div>

</template>

<script>
  import axios from 'axios'
  import jwtDecodee from 'vue-jwt-decode'
  import swal from 'sweetalert'

  export default {
    name: 'Login',

    data: function () {
      return {
        credentials: {
          email: "",
          password: ""
        }
      }
    },

    methods: {
      login() {
        axios.post('https://student-plus-api.herokuapp.com/login', this.credentials)
          .then((res) => {
            const token = res.headers.pragma;
            const decodedToken = jwtDecodee.decode(token);
            localStorage.setItem('token', token);
            localStorage.setItem('studentId', decodedToken.id);
            this.fetchStudentData(decodedToken.id);
          })
          .catch((error) => {
            swal("Failed! :(", error.message, "error");
          })
      },

      fetchStudentData(studentId) {
        axios.get('https://student-plus-api.herokuapp.com/students/' + studentId, {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          }
        })
          .then((res) => {
            localStorage.setItem('student', JSON.stringify(res.data));
            this.$router.push('/student-details');
          })
          .catch((error) => {
            swal("Failed! :(", error.message, "error");
          })

      }
    }

  }
</script>
