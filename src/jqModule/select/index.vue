<template>
	<div class="selectBox">
    	<div class="inputCase">
			<input class="imitationSelect" type="text" oulName="" oulId="" value="橘子" readonly/>
			<i class="fa fa-caret-down"></i>
		</div>
		<ul class="selectUl">
			<li oliName="橘子" oliId="1" class="actived_li">橘子</li>
			<li oliName="苹果" oliId="2">苹果</li>
			<li oliName="桃子" oliId="3">桃子</li>
		</ul>
    </div>
</template>

<script>
	export default {
		
	}
</script>

<style>
	.selectBox{
		width: 400px;
		height: 36px;
		line-height: 36px;
		background: #f72323;
	}
	.inputCase{
		position: relative;
		width: 100%;
		height: 100%;
		box-sizing: border-box;
	}
	.inputCase input.imitationSelect{
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		border: 1px solid #ccc;
		display: block;
		text-indent: 20px;
		cursor: default;
	}
	.inputCase i.fa{
		position: absolute;
		right: 10px;
		top: 10px;
		color: #007AFF;
	}
	.selectUl{
		display: none;
		padding: 0;
		margin: 0;
		border-bottom: 1px solid #ccc;
		border-left: 1px solid #ccc;
		border-right: 1px solid #ccc;
	}
	.selectUl li{
		height: 36px;
		line-height: 36px;
		list-style: none;
		text-indent: 20px;
		border-bottom: 1px solid #ccc;transition: all .5s ease 0s;

	}
	.selectUl li:hover{
		background: #ddd;
	}
	.selectUl li:last-child{
		border-bottom: 0 none;
	}
</style>