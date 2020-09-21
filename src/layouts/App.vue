<template>
	<div id="app">
		<Top></Top>
		<!-- <Loading v-show="$root.Bloading"></Loading> -->
		<Back v-show="$root.Bback"></Back>
		<router-view></router-view>
		<Footer v-show="$root.Bfoot"></Footer>
	</div>
</template>
<script>
	import Top from './app-top.vue'
	import Footer from './app-foot.vue'
	import Back from '../components/app-back/app-back.vue'
	// import Loading from '../components/app-loading/app-loading.vue'
	export default {
		name: 'app',
		data: function() {
			return {
			}
		},
		mounted() {},
		components: {
			Top,
			Footer,
			// Loading,
			Back
		},
		methods: {},
		watch: {
			$route: {
				handler(newVal) {
					let path = newVal.path;
					if (/home|user/.test(path)) {
						// this.$root.Bloading = true;
						this.$root.Bfoot = true;
						this.$root.Bback = false;
					}
					if (/detail/.test(path)) {
						this.$root.Bfoot = false;
						this.$root.Bback = true;
					}
					if(/follow/.test(path)){
						this.$root.Bfoot=true;
						this.$root.Bback=true;
					}
					if (/login|reg/.test(path)) {
						this.$root.Bloading = false;
						this.$root.Bfoot = true;
						this.$root.Bback = false;
					}
					// console.log(path,'loading:'+this.$root.Bloading,'back:'+this.$root.Bback,'foot:'+this.$root.Bfoot);
				},
				immediate: true
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
		height: 100%;
		width: 100%;
		overflow: hidden;
	}
</style>
