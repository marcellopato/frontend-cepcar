<template>
	<div id="single-post">
		<loader v-show="loader"></loader>
		<section class="container">
			<div class="row">
				<div class="col">
					<h1>{{ post.title }}</h1><br>
					<span class="badge badge-pill badge-warning m-b-20">{{ post.created_at }}</span><br>
					<img class="img-fluid img-thumbnail m-b-50" :src="'/images/' + post.image"><br>
					<span v-html="post.body"></span>
					<hr class="m-t-50">
					<div id="disqus_thread"></div>
				</div>
			</div>
		</section>
	</div>
</template>
<script>
/**
*  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
*  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/

var disqus_config = function () { 
this.page.url = this.$route;  // Replace PAGE_URL with your page's canonical URL variable
// this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
};

(function() { // DON'T EDIT BELOW THIS LINE
var d = document, s = d.createElement('script');
s.src = 'https://cepcar.disqus.com/embed.js';
s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();
	export default{
		data() {
			return {
				slug: this.$route.params.slug,
				post: []
			}
		},
		created() {
			this.loader = true
			axios.post('/post', {
					slug : this.slug
			}).
			then(response => {
				this.loader = false
				this.post = response.data
			})
		}
	}
</script>