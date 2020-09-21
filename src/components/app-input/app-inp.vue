<template>
<div id="inp">
	<label for="">{{text}}</label><input :type="type" :value="value" @input="$emit('input',$event.target.value)"/><br>
</div>
</template>

<script>
	export default {
		name: '',
		props: {
			text:{
				type:String,
				default:'输 入'
			},
			type:{
				type:String,
				default:'text'
			},
			value:{
				type:String,
				default:'张三'
			}
		},
		components: {},
		mounted() {},
		updated() {},
		methods: {}
	};
</script>

<style scoped>
	#inp{
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin: 0 auto;
		height: 0.6rem;
		width: 4rem;
		border-bottom: 1px solid #ccc;
		margin-bottom: 0.1rem;
	}
	#inp label{
		display: block;
		height: 0.32rem;
		font:0.24rem/0.32rem "";
		border-right: 1px solid #333;
		padding: 0px 0.1rem;
	}
	#inp input{
		height: 0.32rem;
		font:0.24rem/0.32rem "";
		margin-left: 0.2rem;
		border: none;
		outline: none;
	}
</style>
