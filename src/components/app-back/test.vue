<template>
  <div id="app">
	 <div class="top">
		 <div class="battery">
			 <p class="icon"></p>
			 <p>100%</p>
		 </div>
	 </div>
	 <Back></Back>
  </div>
</template>


<script>

import Back from './components/app-back/app-back.vue'
export default {
  name: 'app',
  data:function(){
	  return {
	list:[]
	  }
  },
  mounted(){
    setTimeout(()=>{
      this.list=[
        {_id:1,image:'/images/img_1.jpg',title:'xxx1',sub_title:'xxxx2'},
        {_id:2,image:'/images/img_2.jpg',title:'xxx2',sub_title:'xxxx2'},
        {_id:3,image:'/images/img_3.jpg',title:'xxx3',sub_title:'xxxx2'},
        {_id:4,image:'/images/img_1.jpg',title:'xxx4',sub_title:'xxxx2'},
      ];
    },1000)
  },
  components: {
	Search,Back
  },
  methods:{
	  dosome($event){
		  console.log($event);
	  },
  }
}
</script>

<style>
	
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
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

</style>
