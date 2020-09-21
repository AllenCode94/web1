<template>
	<div class="top">
			 <div class="battery">
				 <p class="icon"></p>
				 <p>100%</p>
			 </div>
	</div>
</template>

<script>
	export default {
		name: 'app-top',
		props: {},
		components: {},
		mounted() {},
		updated() {},
		methods: {}
	};
</script>

<style>
	.top{
		height: 0.4rem;
		width: 100%;
		background-color: orangered;
		display: flex;
		flex-direction: row-reverse;
		align-items: center;
	}
	.top .battery{
		height: 0.2rem;
		width: 1rem;
		color: white;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		margin-right: 0.1rem;
	}
	.top .battery .icon{
		font:0.12rem/0.2rem "";
		height: 0.2rem;
		width: 0.4rem;
		border-radius: 0.038rem;
		border: 1px solid gray;
		background-color: lightgreen;
		margin-right: 0.05rem;
	}
	.top1{
		height: 0.4rem;
		width: 100%;
		background-color: #fff;
		display: flex;
		flex-direction: row-reverse;
		align-items: center;
	}
	.top1 .battery{
		height: 0.2rem;
		width: 1rem;
		color: #333;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		margin-right: 0.1rem;
	}
	.top1 .battery .icon{
		font:0.12rem/0.2rem "";
		height: 0.2rem;
		width: 0.4rem;
		border-radius: 0.038rem;
		border: 1px solid gray;
		background-color: lightgreen;
		margin-right: 0.05rem;
	}
	
</style>
