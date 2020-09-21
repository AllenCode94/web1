<template>
	<div id="app-nav">
		<ul>
			<li :class="active" v-for="(val,index) of keyWords" :key="index">{{val}} <p></p></li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'app-nav',
			
		data:function(){
			return{}
		},
		props: {
			keyWords:{
				type:Array,
				required:true,
			},
			active:{
				type:String,
				default:'',
			}
		},
		components: {},
		mounted() {},
		updated() {},
		methods: {}
	};
</script>

<style>
	#app-nav{
		width: 100%;
		height: 0.8rem;
		background-color: #f6f6f6;
	}
	#app-nav ul{
		height: 0.8rem;
		width: 100%;
		display: flex;
		flex-direction: row;
		/* flex-shrink: 0; */
		flex-grow: 1;
		overflow-x: auto;
	}
	#app-nav ul li{
		height: 0.74rem;
		width: 0.8rem;
		display: block;
		font: 0.24rem/0.74rem "";
		flex: 1 0 auto;
		
	}
	#app-nav ul li p{
		height: 0.06rem;
		width: 0.4rem;
		border-radius: 0.03rem;
		margin: 0 auto;
	}
	.active{
		color: orangered;
	}
	.active p{
		background-color: orangered;
	}
</style>
