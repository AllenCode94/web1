<template>
	<div class="box1" style="height: 100%;">
		<!-- <Back></Back> -->
		<div v-if="msg">
			<div class="tips" v-html="msg"></div>
			<Button @click="gologin" :text="'前往登录'" />
		</div>
		<div class="pd" v-else>
			<Loading v-if="list.length===0"></Loading>
			<div v-else  class="follow">
				<h2 style="font-size: 0.4rem;color: orangered;">我的收藏</h2>
				<List :newslist="list" :collectionName="'follow'" :isfollow="isfollow" />
			</div>
		</div>
	</div>

</template>

<script>
	import List from '../components/app-list/app-list.vue'
	import Button from '../components/app-btn/app-btn.vue'
	import Loading from '../components/app-loading/app-loading.vue'
	export default {
		name: 'follow',
		props: {},
		data() {
			return {
				list: [],
				msg: '',
				isfollow:'yes'
			}
		},
		components: {
			List,
			Button,
			Loading
		},
		mounted() {
			if (localStorage.getItem('user')) {
				let user = JSON.parse(localStorage.getItem('user'));
				// console.log(user.token);
				this.$axios({
					url: '/api/follow',
					headers: {
						token: user.token
					}
				}).then(res => {
					// console.log(res);
					this.list = res.data.data;
					// console.log(this.list);
					// this.$root.Bloading=false;
				})
			} else {
				this.msg = '<p>未登录,请前往登录</p>'
			}
		},
		updated() {},
		methods: {
			gologin() {
				this.$router.push('/login')
			}
		}
	}
</script>

<style scoped>
	.box1{
		width: 100%;
		position: relative;
	}
	.tips {
		padding: 0.5rem 0rem;
		color: #333;
		font-size: 0.32rem;
	}
	.pd{
		width: 100%;
		position: absolute;
		overflow: auto;
		height: 100%;
	}

	.follow {
		padding: 0.39rem 0.2rem 2rem;
	}
</style>
