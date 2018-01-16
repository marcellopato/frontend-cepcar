<template>
<div class="container">
	<div class="col-md-4 col-md-offset-4 m-t-50">
		<div class="well">
			<h1>Entrar</h1>
			<form action="" method="POST" role="form">
				<div class="form-group">
					<label for="email">Email</label>
					<input class="form-control" type="text" placeholder="name@example.com" v-model="email">
				</div>
				<div class="form-group">
					<label for="password">Senha</label>
					<input class="form-control " type="password" v-model="password">
				</div>
				<div class="checkbox">
					<label><input type="checkbox">Manter-me conectado</label>
				</div>
				<button class="btn btn-success btn-block m-t-30" @click.prevent="entrar">Entrar</button>
			</form>
			<a href="" class="btn btn-primary btn-block m-t-5"><i class="fa fa-facebook-official" aria-hidden="true"></i> Entrar com o Facebook</a>
			<a href="" class="btn btn-danger btn-block"><i class="fa fa-google-plus-square" aria-hidden="true"></i> Entrar com o Google+</a>
			</div> <!-- end of .card -->
			<h5 class="m-t-20 text-center"><a href="" class="is-muted">Esqueceu sua senha?</a></h5>
		</div>
	</div>
	</template>
<script>
	export default {
		data() {
			return {
				email: '',
				password: '',
				user: {
			        authenticated: false,
			        profile: null
			    },
			}
		},
		methods: {
				entrar() {
					axios.post('/api/user/signin', {
							email: this.email,
							password: this.password
					},
					{
						headers: {'Content-Type' : 'application/json'},
						headers: {'X-Requested-With' : 'XMLHttpRequest'}
					})
					.then(response => {
						this.user.authenticated = true
						const token = response.data.token;
						// const base64Url = token.split('.')[1];
						// const base64 = base64Url.replace('-', '+').replace('_', '/');
						// const dados = (JSON.parse(window.atob(base64)));
						localStorage.setItem('token', token);
						this.$router.push('/');
					}
					)
					.catch(
						(error) => console.log(error)
						);
				}
		}	
	}
</script>