import home from './components/home.vue'
import Posts from'./components/posts.vue'
import Carro from'./components/carro.vue'
import Post from'./components/post.vue'
import PageNotFound from './components/PageNotFound.vue'


export const routes = [ 
		{
			path: '/',
			component: home
		},
		{
			path: '/posts',
			component: Posts
		},
		{
			path: '/post/:slug',
			component: Post
		},
		{
			path: '/carro-escolhido/:vid',
			component: Carro
		},
		{
			path: '*',
			component: PageNotFound
		},
	]
