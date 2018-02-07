<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <router-link to="/" class="navbar-brand"><img style="width: 70px;" alt="Brand" src="/images/logo.png"></router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link to="/" exact class="nav-link">Início</router-link>
      </li>
      <li class="nav-item ">
        <router-link to="/posts" class="nav-link">Revista</router-link>
      </li>
    </ul>
  </div>
</nav>
</template>
<script>
// import auth from '../auth.js';
// export default {
//   data() {
//     return {
//       token: [],
//       dados: ''
//   }
// },
//   created() {
//     this.getToken();
// },
//   methods: {
//     getToken() {
//       const tokenGravado = localStorage.getItem('token')
//       this.token = tokenGravado
//   },
//     // logout() {
//     //   localStorage.removeItem('token')
//     //   this.user.authenticated = false
//     //   this.$router.push('/');
//     // }
//   }
// }
</script>