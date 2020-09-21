<template>
	<div class="content">
		<!-- <Back></Back> -->
		<div v-if="!item.title">
			<!-- <Loading></Loading> -->
		</div>
		<div class="main" v-else>
			<div class="header clear">
				<h2><img :src="item.detail.auth_icon" alt="" /></h2>
				<p>{{item.detail.auth}}</p>
			</div>
			<div class="cont">
				<h3>China:{{item.title}}</h3>
				<div class="time">
					<p>{{item.time|date}}<span><img src="../assets/img/zan.png" alt="" /></span></p>
				</div>
				<div class="text-box" v-html="item.detail.content">
				</div>
			</div>
		</div>

		<Toolbar :num="item.num" :isfollow="isfollow"></Toolbar>
	</div>

</template>

<script>
	import Back from '../components/app-back/app-back.vue'
	import Toolbar from '../components/app-toolbar/app-toolbar.vue'
	import Loading from '../components/app-loading/app-loading.vue'
	export default {
		name: 'detail',
		props: {},
		data() {
			return {
				item: {},
				isfollow:''
			}
		},
		components: {
			Back,
			Toolbar,
			Loading
		},
		mounted() {
			
			let _id=this.$route.params._id
			this.$axios({
				url:'/api/detail',
				params:{
					_id:_id
				}
			}).then(res=>{
				this.item=res.data.data[0];
				// console.log(this);
				this.isfollow=this.$route.query.isfollow
			})
		},
		updated() {},
		methods: {}
	}
</script>

<style>
	.content {
		max-width: 6.4rem;
		margin: 0 auto;
		background: #f2f4f5;
		height: 100%;
		width: 100%;
		position: relative;
	}

	.content .header {
		padding: 0.39rem 0.28rem 0.15rem 0.28rem;
		height: auto;
		background: none
	}

	.main {
		overflow: auto;
		position: absolute;
		top: 0rem;
		bottom: 1.2rem;
		padding-bottom: 0.8rem;
	}

	.header h2 {
		float: left;
		margin-right: 0.18rem;

	}


	.header p {
		float: left;
		margin-top: 0.18rem;
		font-size: 0.3rem;
	}

	.content .cont {
		padding: 0 0.38rem;
		color: #494d4d;
	}

	.cont h3 {
		font-size: 0.4rem;
		line-height: 0.6rem;
		padding-bottom: 0.25rem;
		border-bottom: 1px solid #494d4d;
		text-align: left;
	}

	.cont .time {
		height: 0.24rem;
		line-height: 0.24rem;
		margin: 0.26rem 0;
	}

	.time p {
		float: left;
		position: relative;
	}

	.time span {
		width: 0.33rem;
		height: 0.32rem;
		position: absolute;
		top: -0.02rem;
		right: -0.35rem;
	}

	.time span img {
		width: 100%;
		height: 100%;
	}

	.cont .text-box {
		font-size: 0.25rem;
		text-align: left;
		text-indent: 2em;
	}

	.text-box p {
		line-height: 0.45rem;
		margin-bottom: 0.1rem;
	}
</style>
