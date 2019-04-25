<template>
	<div class="open_container">
		<div class="dot1"></div>
		<div class="dot2"></div>
		<div class="dot3"></div>
		<div class="line"></div>
	</div>
</template>

<script>
	export default {
		mounted(){
			setTimeout(()=>{
				this.$router.push('/main')
			},4400)
		}
	}
</script>

<style lang="less" scoped>
.open_container{
	width: 100%;
	height: 100vh;
	position: relative;
	.dot1{
	width: 18px;
	height: 18px;
	background: #000000;
	border-radius: 14px;
	position: absolute;
	z-index: 10;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: auto;
	animation: open 3s ease;
}
.dot2{
	width: 44px;
	height: 44px;
	border: 1px #000000 solid;
	border-radius: 28px;
	position: absolute;
	z-index: 10;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: auto;
	animation: open2 3s infinite ease;
}
.dot3{
	width: 66px;
	height: 66px;
	border: 1px #000000 solid;
	border-radius: 38px;
	position: absolute;
	z-index: 10;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: auto;
	animation: open3 3s infinite ease;
}
@keyframes open{
	0%{
		transform: scale(0);
		opacity: 1;
		
	}
	100%{
		transform: scale(1);
		opacity: 1;
		
	}
}
@keyframes open2{
	0%{
		transform: scale(0);
		opacity: 1;
		
	}
	100%{
		transform: scale(1);
		opacity: 0;
		
	}
}
@keyframes open3{
	0%{
		transform: scale(0);
		opacity: 1;
		
	}
	20%{
		transform: scale(0);
		opacity: 1;
		
	}
	100%{
		transform: scale(1);
		opacity: 0;
		
	}
}
.line{
	width: 0;
	height: 1px;
	background: #000;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: auto;
	animation: line 2s ease-in-out 2.5s;
	z-index: 20;
}
@keyframes line{
	0%{
		width: 0;
		height: 1px;
	}
	40%{
		width: 100%;
		height: 1px;
	}
	100%{
		width: 100%;
		height: 100%;
	}
}
}

</style>