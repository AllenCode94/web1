<template>
	<div id="search">
		<div class="searchinp">
			<input type="text" placeholder="搜索你喜欢的">
			<span class="iconfont">&#xe69d;</span>
		</div>
		<div class="menu">
			<span class="iconfont">&#xe618;</span>
		</div>
		
	</div>
</template>

<script>
	export default {
		name: 'app-search',
		props: {
			sw:{
				type:String,
			}
		},
		components: {},
		mounted() {},
		updated() {},
		methods: {}
	};
</script>

<style scoped>
	#search{
		
		height: 0.72rem;
		width: 100%;
		background-color: orangered;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;
	}
	#search input{
		height: 0.5rem;
		width: 5rem;
		border-radius: 0.25rem;
		background-color: #fff;
		text-indent: 2em;
		line-height: 0.5rem;
		outline: none;
	}
	#search .searchinp span{
		position: absolute;
		right: 0.2rem;
	}
	#search .searchinp{
		position: relative;
		height: 0.5rem;
		width: 5rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	#search .menu span{
		color: #fff;
	}
</style>
