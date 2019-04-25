<template>
	<div class="mask">
		<div class="loading"><img src="../img/loading.gif" alt="loading"></div>
	</div>
</template>

<script>
	export default {
		mounted(){
			setTimeout(()=>{
				this.$router.push('/main')
			},1000)
		}
	}
</script>

<style lang="less" scoped>
.mask{
	width: 100%;
	height: 100vh;
	background: #444;
	position: relative;
		.loading{
		width: 170px;
		height: 50px;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
	}
}

</style>