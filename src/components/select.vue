<template>
	<div class="cpt-select">
		<input type="text" v-model="tkvalue"/>
		<slot></slot>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				tkvalue:this.value
			}
		},
		watch:{
			value(newV){
				this.tkvalue=newV
			}
		},
		props:['value']
	}
</script>

<style>
</style>