<template>
  <div id="app">

	<app-nav :keyWords="keyWords"></app-nav>

  </div>
</template>

<script>

import AppNav from './components/app-nav/app-nav.vue';

export default {
  name: 'app',
  components: {
	AppNav
  },
  data:function(){
	  return {
		keyWords:['服装','服装','服装','服装','服装','服装','服装','服装','服装','服装','服装','服装','服装','服装','服装'],
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
