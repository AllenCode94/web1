
<template>
  <div class="home">
	<Search></Search>
	<Loading v-if="newslist.length===0"></Loading>
	<div class="sreen" v-else>
		<div class="cov">
			<Banner :data="banner" collectionName="home_banner"/>
			<List :newslist="newslist" collectionName="home_list"></List>
		</div>
	</div>
  </div>
</template>

<script>
	
  import Banner from '../components/app-banner/app-banner.vue'
  import Search from '../components/app-search/app-search.vue'
  import List from '../components/app-list/app-list.vue'
  import Loading from '../components/app-loading/app-loading2.vue'
  export default {
    name:'home',
    props:{},
    data(){
      return {
        banner:[],
        newslist:[]
      }
    },
    components:{
			Banner,Search,List,Loading
		},
    mounted(){
		this.$axios({
			url:'/api/banner',
			params:{_limit:4,_page:2}
		}).then(res=>{
			this.banner=res.data.data;
		});
		this.$axios({
			url:'/api/home',
			params:{_limit:20,_page:2}
		}).then(res=>{
			this.newslist=res.data.data;
		})
	},
    updated(){
		
	},
    methods:{}
  }
</script>

<style scoped>
	.home{
		width: 100%;
		height: 100%;
		position: relative;
	}
.sreen{
	width: 100%;
	position: absolute;
	top: 0.72rem;
	bottom: 1.2rem;
	overflow: auto;
}

</style>
