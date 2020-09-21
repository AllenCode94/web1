<template>
	<div class="reg">
		<!-- <Back></Back> -->
		<div class="logreg">
			<p>
				<router-link to="/login" tag="span" style="padding-right: 0.2rem;font-weight:700;color: #333;">登录</router-link>
				|
				<router-link to="/reg" tag="span" style="padding-left: 0.2rem;font-weight:700;color: orangered;">注册</router-link>
			</p>
		</div>
		<Inp :text="'账 号'" v-model="username"></Inp>
		<Inp :text="'密 码'" :type="'password'" v-model="password"></Inp>
		<Inp :text="'确 认'" :type="'password'" v-model="password2"></Inp>
		<p>{{msg}}</p>
		<Btn :text="'注 册'" style="margin-top: 0.32rem;" @click="register"></Btn>
	</div>
</template>

<script>
	import Back from '../components/app-back/app-back.vue'
	import Inp from '../components/app-input/app-inp.vue'
	import Btn from '../components/app-btn/app-btn.vue'
	export default {
		name: 'reg',
		props: {},
		data() {
			return {
				username: '',
				password: '',
				password2: '',
				msg: ''
			}
		},
		components: {
			Back,
			Inp,
			Btn
		},
		mounted() {},
		updated() {},
		methods: {
			register: function() {
				this.msg='';
				if (!this.username || !this.password || !this.password2) {
					this.msg = '输入完整信息';
				} else {
					if (this.password !== this.password2) {
						this.msg = '密码不一致';
					} else {
						this.$axios({
							url: '/api/reg',
							method:'post',
							data: {
								username: this.username,
								password: this.password
							}
						}).then(res => {
							let d=res.data;
							if(d.err===0){
								this.msg='注册成功!--前往登录';
								setTimeout(()=>{
									this.$router.push('/login');
								},1000)
								
							}else{
								this.msg='该用户已存在!'
							}
						})
					}
				}
			}
		},

	}
</script>

<style scoped>
	.reg {
		width: 100%;
		height: 100%;
	}

	.logreg {
		height: 1rem;
		width: 100%;
		padding-top: 1rem;
	}

	.logreg p {
		text-align: center;
		font: 0.32rem/1rem "";
	}
</style>
