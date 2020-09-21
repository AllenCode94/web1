<template>
  <div id="app">
	 <div class="top">
		 <div class="battery">
			 <p class="icon"></p>
			 <p>100%</p>
		 </div>
	 </div>
	 
	 <AppBtn :text="text" :bgColor="bgColor" @xxx="dosome"></AppBtn>
  </div>
</template>


<script>
import AppBtn from './components/app-btn/app-btn.vue'
export default {
  name: 'app',
  components: {
	AppBtn
  },
  data:function(){
	  return {
		  text:'登 录',
		  bgColor:'#333'
	  }
  },
  methods:{
	  dosome($event){
		  console.log($event);
	  }
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
