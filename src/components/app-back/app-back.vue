<template>
	<div id="back">
		<p class="back" @click="$router.go(-1)"><</p>
		<p class="iconfont search">&#xe69d;</p>
	</div>
</template>

<script>
	export default {
		name: 'app-back',
		props: {},
		components: {},
		mounted() {},
		updated() {},
		methods: {
			
		}
	};
</script>

<style scoped>
	#back{
		height: 0.72rem;
		width: 100%;
		background: wheat;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		color: #fff;
		background-color: orangered;
	}
	#back .back{
		padding-left: 0.5rem;
		font-size: 0.32rem;
	}
	#back .search{
		padding-right: 0.5rem;
	}
</style>
