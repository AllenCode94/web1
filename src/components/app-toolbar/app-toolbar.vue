<template>
	<div id="toolbar">
	        <li :class="activeC=='p'?'active':''">
	            <a href="javascript:">
	                <i class="iconfont">&#xe664; <span class="num" v-show="num>0">{{num>99?'+99':num}}</span></i>
	            </a>
	        </li>
	        <li :class="activeC=='z'?'active':''">
	            <a href="javascript:">
	                <i class="iconfont">&#xe719;</i>
	            </a>
	        </li>
	        <li :class="activeC=='s'?'active':''">
	            <a href="javascript:">
	                <i :class="'iconfont '+isfollow">&#xe621;</i>
	            </a>
	        </li>
	        <li :class="activeC=='f'?'active':''">
	            <a href="javascript:">
	                <i class="iconfont">&#xe62d;</i>
	            </a>
	        </li>
	    </div>
</template>

<script>
	import './assets/font_20/iconfont.css'
	export default {
		name: 'app-toolbar',
		props: {
			activeC:{
				type:String,
				default:''
			},
			num:{
				type:Number,
				default:0
			},
			isfollow:{
				type:String,
				default:''
			}
		},
		components: {},
		mounted() {},
		updated() {},
		methods: {}
	};
</script>

<style scoped>
	/* 页脚  */
	#toolbar{
	    height: 0.8rem;
	    width: 100%;
	    position: fixed;
	    bottom: 0;
	    background: #fff;
	    display: flex;
		border-top: 1px solid #ddd;
	}
	#toolbar li{
	    flex-grow: 1;
	    height: 100%;
	}
	#toolbar li a{
	    display: flex;
	    height: 100%;
	    display: flex;
	    flex-direction: column;
	    justify-content: center;
	    align-items: center;
	    color: #777;
	}
	#toolbar li a i{
	    font-size: 0.4rem;
		position: relative;
	}
	/* #toolbar li a span{
	    font-size: 0.16rem;
	} */
	#toolbar .active a {
	    color: #ff502e;
	}
	#toolbar li a .num{
		line-height: 0.24rem;
		position: absolute;
		color: #fff;
		display: block;
		height: 0.24rem;
		width: auto;
		padding: 0rem 0.06rem;
		border-radius: 0.15rem;
		background-color: orangered;
		font-size: 0.1rem;
		top:-15%;
		right: 0;
		transform: translateX(50%);
	}
	.yes{
		color: orangered;
	}
</style>
