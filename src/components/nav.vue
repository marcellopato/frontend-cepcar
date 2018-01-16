<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="/"><img style="width: 70px;" alt="Brand" src="/images/logo.png"></a>
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
      <!-- @role('superadministrator|administrator|editor|author|contributor') -->
      <li class="nav-item" >
        <a class="nav-link" href="" target="_blank">Administração</a>
      </li>
      <!-- @endif -->
    </ul>
    <ul class="navbar-nav navbar-right">
      <li>
        <li class="nav-item">
          <li class="nav-item">
            <a class="nav-link" href="/login">
              Entrar
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/register">
              Cadastrar
            </a>
          </li>
        </ul>
        <ul class="navbar-nav navbar-right">
          <!-- User Account: style can be found in dropdown.less -->
          <li class="nav-item dropdown user user-menu">
            <a href="#" class="nav-link dropdown-toggle " data-toggle="dropdown">
              <img src="" width="25" class="img-circle" alt="">
              <span class="hidden-xs"></span>
            </a>
            <ul class="dropdown-menu" id="perfil">
              <!-- User image -->
              <li class="user-header">
                <img src="" class="img-circle" alt="">
                <p>
                  Nome<br>
                  <small>Membro desde </small>
                </p>
              </li>
              <!-- Menu Body -->
              <li class="user-body">
                <div class="row">
                  <div class="col-xs-4 text-center">
                    <a href="#">Seguidores</a>
                  </div>
                  <div class="col-xs-4 text-center">
                    <a href="#">Sales</a>
                  </div>
                  <div class="col-xs-4 text-center">
                    <a href="#">Amigos</a>
                  </div>
                </div>
                <!-- /.row -->
              </li>
              <!-- Menu Footer-->
              <li class="user-footer">
                <div class="pull-left">
                  <a href="#" class="btn btn-default btn-flat">Profile</a>
                </div>
                <div class="pull-right">
                  <a href="" @click="logout" class="btn btn-default btn-flat"><i class="fa fa-fw fa-sign-out m-r-5"></i> Sair</a>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
    </template>
    <script>
    // import auth from '../auth.js';
    export default {
      data() {
        return {
          token: [],
          dados: ''
        }
      },
      created() {
        this.getToken();
      },
      methods: {
        getToken() {
          const tokenGravado = localStorage.getItem('token')
          this.token = tokenGravado
        },
        logout() {
          localStorage.removeItem('token')
          this.user.authenticated = false
          this.$router.push('/');
        }
      }
    }
    </script>