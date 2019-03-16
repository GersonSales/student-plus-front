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
            <input type="password" class="form-control" placeholder="Password" required="" v-model="credentials.password">
          </div>
          <button type="submit" class="btn btn-primary block full-width m-b">Login</button>

          <a href="#">
            <small>Forgot password?</small>
          </a>
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
        axios.post('http://localhost:5000/login', this.credentials)
          .then(() => {
            this.$router.push('/student-details');
          })
          .catch((error) => {
            console.log(error)
          })
      }
    }

  }
</script>
