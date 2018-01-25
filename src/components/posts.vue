<template>
<div>
	<loader v-show="loader"></loader>
	<section class="container">
		<h1 style="font-weight: 100;margin-bottom: 10px;" class="text-center">Leia Sobre</h1>
		<h4 class="text-center leia-mais">Por <a href="http://www.carsite.com.br/" target="_blank"><img src="https://cep5.dev/images/logo-carsite.png" width="50" alt=""></a></h4>
		<div class="col m-t-50">
			<div class="media m-b-50" v-for="post in posts">
				<div class="media-left">
					<a :href="'/post/' + post.slug">
						<img class="media-object img-thumbnail" :src="'/https://cep5.dev/images/' + post.image" :alt="post.title" width="200">
					</a>
				</div>
				<div class="media-body">
					<h4 class="media-heading">{{ post.title }}</h4>
					<span class="badge badge-pill badge-warning">Publicado: {{ post.created_at }} </span>
					<p style="font-weight: 300">{{ post.body | truncate(400, '...') }}</p>
					<a :href="'/post/' + post.slug" class="">Leia mais</a>
				</div><br>
				<hr>
			</div>
		</div>
	</section>
	<div class="col">
		<div class="text-center">
			Paginação
			<!-- {!! $posts->links() !!} -->
		</div>
	</div>
</div>
</template>
<script>
export default {
		data() {
			return {
				posts : [],
				loader: false
			}
	},
	created() {
		this.montaPosts();
		// console.log('TESTE');
	},
	methods: {
		montaPosts() {
			this.loader = true
			axios.get('https://cep5.dev/api/blog')
				.then(response => {
					this.posts = response.data
					this.loader = false
			})
		}
	}
}
</script>