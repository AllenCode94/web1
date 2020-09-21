<template>
	<div class="classify">
		<Search></Search>
		<Loading v-if="classes.length===0"></Loading>
		<div class="classes" v-else>
			<div class="screen">
				<div class="item" v-for='(item,index) of classes' :key="item._id">
					<div class="img">
						<img :src="item.img" alt="">
					</div>
					<h3>{{item.title}}</h3>
				</div>
			</div>
		</div>
	</div>
	</div>
</template>

<script>
	import Search from '../components/app-search/app-search.vue'
	import Loading from '../components/app-loading/app-loading2.vue'
	export default {
		name: 'column',
		props: {},
		data() {
			return {
				classes: []
			}
		},
		components: {
			Search,
			Loading
		},
		mounted() {
			this.$axios({
				url: '/api/classify',
			}).then(res => {
				this.classes = res.data.data;
			})
		},
		updated() {},
		methods: {}
	}
</script>

<style scoped>
	.classify,.classes{
		height: 100%;
		width: 100%;
	}

	.classify {
		position: relative;
		padding-bottom: 0.8rem;
	}
	.classes{
		overflow: auto;
	}
	.screen {
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-grow: 1;
		flex-wrap: wrap;
		justify-content: space-evenly;
		padding: 0.2rem 0rem 1.8rem;
	}

	.item {
		padding-bottom: 0.2rem;
	}
</style>
