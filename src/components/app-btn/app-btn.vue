<template>
	<div id="btn">
		<button :style="{backgroundColor:bgColor}" @click="$emit('click',$event)">
			<template v-if="text !== '按 钮'">{{text}}</template>
			<slot v-if="text === '按 钮'">按 钮</slot>
		</button>
	</div>
</template>

<script>
	export default {
		name: 'app-btn',
		props: {
			text:{
				type:String,
				default:'按 钮'
			},
			bgColor:{
				type:String,
				default:'orangered'
			}
		},
		components: {},
		mounted() {},
		updated() {},
		methods: {}
	};
</script>

<style scoped>
	#btn {
		width: 4rem;
		margin: 0 auto;
	}
	#btn button{
		height: 0.72rem;
		width: 3rem;
		/* border-radius: 0.2rem; */
		border: none;
		outline: none;
		color: #fff;
	
		/* background-color: orangered; */
	}
	
	
</style>
