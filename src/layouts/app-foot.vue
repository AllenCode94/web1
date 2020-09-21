<template>
	<div id="foot">
		<router-link tag="li" active-class="active" to="/home">
			<a href="javascript:">
				<i class="iconfont">&#xe62e;</i>
				<span>主页</span>
			</a>
		</router-link>
		<router-link tag="li" active-class="active" to="/column">
			<a href="javascript:">
				<i class="iconfont">&#xe604;</i>
				<span>分类</span>
			</a>
		</router-link>
		<router-link tag="li" active-class="active" to="/follow">
			<a href="javascript:">
				<i class="iconfont">&#xe60b;</i>
				<span>收藏</span>
			</a>
		</router-link>
		<router-link tag="li" active-class="active" to="/user">
			<a href="javascript:">
				<i class="iconfont">&#xe627;</i>
				<span>我的</span>
			</a>
		</router-link>
	</div>
</template>

<script>
	export default {
		name: '',
		props: {},
		components: {},
		mounted() {},
		updated() {},
		methods: {}
	};
</script>

<style scoped>
	/* 页脚  */
	#foot {
		height: 0.8rem;
		width: 100%;
		position: fixed;
		bottom: 0;
		background: #fff;
		display: flex;
		border-top: 1px solid #ddd;
	}

	#foot li {
		flex-grow: 1;
		height: 100%;
	}

	#foot li a {
		display: flex;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: #777;
	}

	#foot li a i {
		font-size: 0.4rem;
	}

	#foot li a span {
		font-size: 0.16rem;
	}

	#foot .active a {
		color: #ff502e;
	}
</style>
