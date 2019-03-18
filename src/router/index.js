import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login'
import Register from '../components/Register';
import StudentDetails from '../components/student-details/StudentDetails'
import ForgotPassword from "../components/ForgotPassword";
import PageNotFound from "../components/common/PageNotFound";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/student-details',
      name: 'StudentDetails',
      component: StudentDetails
    },
    {
      path: '/forgot_password',
      name: 'ForgotPassword',
      component: ForgotPassword
    },
    {
      path: '/',
      redirect: '/register'
    },
    {
      path: '*',
      name: 'PageNotFount',
      component: PageNotFound
    }
  ]
})
