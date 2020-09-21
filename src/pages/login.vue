<template>
  <div class="login">
	<!-- <Back></Back> -->
	<div class="logreg">
		<p>
			<router-link to="/login" tag="span"  style="padding-right: 0.2rem;font-weight:700;color: orangered;">登录</router-link>
			|
			<router-link to="/reg" tag="span"  style="padding-left: 0.2rem;font-weight:700;color: #333;">注册</router-link>
		</p>
	</div>
	<Inp :text="'账 号'" v-model="username"></Inp>
	<Inp :text="'密 码'" :type="'password'" v-model="password"></Inp>
	<Btn :text="'登 录'" style="margin-top: 0.32rem;" @click="golog"></Btn>
  </div>
</template>

<script>
	import Back from '../components/app-back/app-back.vue'
	import Inp from '../components/app-input/app-inp.vue'
	import Btn from '../components/app-btn/app-btn.vue'
  export default {
    name:'login',
    props:{},
    data(){
      return {
        username:'',
		password:''
      }
    },
    components:{
		Back,Inp,Btn
	},
    mounted(){
	},
    updated(){},
    methods:{
		golog:function(){
			this.$axios({
				url:'/api/login',
				method:'post',
				data:{
					username:this.username,
					password:this.password
				}
			}).then(res=>{
				if(res.data.err===0){
					localStorage.setItem('user',JSON.stringify(res.data));
					if(true){
						
						this.$router.push({
							path:'/user',
							query:{
								user:res,	
							}
						});
					}else{
						this.$router.push(this.$router.query.p);
					}
					
				}
			})
		}
	}
  }
</script>

<style scoped>
	.login{
		width: 100%;
		height: 100%;
	}
  .logreg{
	  height: 1rem;
	  width: 100%;
	  padding-top: 1rem;
  }
  .logreg p{
	  text-align: center;
	  font: 0.32rem/1rem "";		
  }
</style>
