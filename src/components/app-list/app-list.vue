<template>
	<div id="app-list">
		<ul>
			<router-link v-for="(item,index) of newslist" :key="item._id" :to="{name:'detail',params:{_id:item._id},query:{collectionName,isfollow}}"
			 class="item" @click="godetail()">
				<h3>{{item.title}}</h3>
				<p>{{item.des}}</p>
				<span class="up-time">{{item.time|date}}</span><span>{{item.num}}评论</span>
			</router-link>
		</ul>
		
	</div>
</template>

<script>
	
	export default {

		name: 'app-list',
		data: function() {
			return {}
		},
		props: {
			newslist: {
				type: Array,
				required: true
			},
			collectionName: {
				type: String,
				required: true
			},
			isfollow:{
				type:String,
				default:'no'
			}
		},
		components: {},
		mounted() {},
		updated() {},
		methods: {
			godetail() {
				this.$router.push('/detail')
			}
		}
	};
</script>

<style scoped>
	#app-list {
		width: 100%;
	}

	ul {
		width: 92%;
		margin: 0 auto;
	}

	ul .item {
		text-align: left;
		display: block;
		border-bottom: 1px solid #DDD;
		padding-top: 0.1rem;
		padding-bottom: 0.1rem;
	}

	ul .item h3 {
		font: bold 0.24rem/0.4rem "";
		color: #222;
	}

	ul .item p {
		font: 0.20rem/0.3rem "";
		margin-bottom: 0.1rem;
		color: #666;
	}

	ul .item span {
		font: 0.1rem/0.2rem "";
	}

	.up-time {
		padding-right: 0.2rem;
	}
</style>
