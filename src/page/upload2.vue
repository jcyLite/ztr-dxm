<template>
	<div class="page-upload">
		<top-bar type="b"></top-bar>
		<div class="upload_wrap">
			<div class="container">
				<div class="upload_tab">
					<ul>
						<li class="upload"><a @click="$router.push('./upload')">01</a></li>
						<li class="write"><a @click="$router.push('./upload2')">02</a></li>
					</ul>
				</div>
				<div class="upload_content">
					<div class="xwz">写文章</div>
					<div class="works_info">
						<div class="sm_title">文章信息</div>
						<input type="text" name="works_name" id="" placeholder="mingzi"/>
						<select name="works_fl" id="">
							<option value="ui">UI</option>
							<option value="web">网页</option>
							<option value="illustration">插画</option>
							<option value="animation">动效</option>
							<option value="Photography">摄影</option>
						</select>
						<input type="text" name="works_describe" id="" placeholder="miaoshu"/>
						<input type="text" name="works_describe" id="" placeholder="miaoshu"/>
					</div>
					<div class="upload_article">
						<div class="sm_title">编辑文章</div>
						<div class="edit_area">
							<div class="edit" contenteditable="true">请输入文章内容...</div>
						</div>
					</div>
					<div class="add_tips">
						<div class="sm_title">添加标签</div>
						<div class="tips_area">
							<input type="text" name="tips" id="" placeholder="biaoqian"/>
							<div class="tips_btn">add</div>
						</div>
					</div>
					
					<div class="upload_cover">
						<div class="sm_title">上传封面</div>
						<div class="cover_area">
							<div class="cover_img">
								<p>点击添加封面</p>
							</div>
						</div>
					</div>
					<div class="publish_area">
						<div class="publish">tijiao</div>
						<div class="view">yulan</div>
					</div>
				</div>
			</div>
			
			<div class="clearfix"></div>
		</div>

		<div class="footer">
			<div class="container">
				<div class="logo2">
					<a @click="$router.push('/main')"></a>
				</div>
				<div class="tab2">
					<ul>
						<li>
							<a @click="$router.push('/main')">home</a>
						</li>
						<li>
							<a @click="$router.push('/works')">works</a>
						</li>
						<li>
							<a @click="$router.push('/about_me')">about me</a>
						</li>
						<li>
							<a class="tab2_active" @click="$router.push('/contact')">contact</a>
						</li>
					</ul>
				</div>
				<div class="send">
					<input type="text" placeholder="189@189.com">
					<button type="submit">send</button>
				</div>

				<div class="clearfix"></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {

	}
</script>

<style lang="less" scoped>
	/*导航栏*/
	.top_bar{
		width: 100%;
		position: fixed;
		top: 0;
		z-index: 100000;
	}
	.nav{
		width: 80%;
		height: 110px;
		position: relative;
		margin: 0 auto;
		top: 0;
	}
	.logo{
		width: 83px;
		height: 23px;
		position: absolute;
		left: 0;
		top: 43.5px;
		background: url(../img/logo02.png) no-repeat;
		cursor: pointer;
	}
	.logo a{
		width: 100%;
		height: 100%;
		display: block;
		position: absolute;
	}
	.tab{
		width: 26px;
		height: 23px;
		position: absolute;
		right: 0;
		top: 43.5px;
	}	
	.tab>div{
		width: 26px;
		height: 2px;
		background: #000;
		margin-top: 8px;
	}
	.tab>div:first-child{
		margin-top: 0;
	}
	.tab:hover div:first-child{
		transition: top 100ms ease-out;
		top: -2.5px;
	}
	.tab:hover div:last-child{
		transition: top 100ms ease-out;
		top: 2.5px;
	}	

	/* upload */
	.upload_wrap{
		width: 100%;
		padding-top: 110px;
		background: #f8f8f8;
	}
	.upload_tab{
		width: 20%;
		margin-right: 2%;
		float: left;
		margin-top: 40px
	}
	.upload_tab ul li{
		height: 48px;
		line-height: 48px;
		cursor: pointer;
		letter-spacing: 2.5px;
		margin-bottom: 5px;
	}
	.upload_tab ul li:first-child{
		background: #FFFFFF;
		color: #222;
	}
	.upload_tab ul li:last-child{
		background: #000000;
		color: #FFFFFF;
	}
	.upload_tab ul li a{
		display: block;
		padding: 0 20px;
		width: 100%;
		height: 100%;
		font-size: 14px;
		text-align: center;
	}
	.upload_tab ul li a:hover{
		background: #000000;
		color: #FFFFFF;
	}
	.upload_content{
		width: 78%;
		float: left;
		margin-top: 40px;
	}
	.upload_content>div{
		width: 100%;
		margin-top: 10px;
		background: #FFFFFF;
		padding: 0 30px;
	}
	.upload_content>div:first-child{
		margin-top: 0;
	}
	.xwz{
		height: 66px;
		line-height: 66px;
		font-size: 18px;
		color: #222222;
	}
	.sm_title{
		width: 100%;
		height: 53px;
		color: #222222;
		font-size: 15px;
		border-bottom: 1px #f0f0f0 solid;
		line-height: 53px;
	}
	.works_info input{
		width: 100%;
		height: 42px;
		line-height: 42px;
		background: #f2f2f2;
		padding: 0 20px;
		margin: 30px 0;
		border: 1px #e5e5e5 solid;
	}
	.works_info input:last-child{
		margin-top: 0;
	}
	.works_info select,.works_info option{
		width: 200px;
		height: 42px;
		line-height: 42px;
		background: #f2f2f2;
		padding: 0 20px;
		border: 1px #e5e5e5 solid;
	}
	.edit_area{
		width: 100%;
		min-height: 240px;
		_height:240px;
		padding: 30px 0;
	}
	.edit_area .edit{
		width: 100%;
		min-height:240px;
		max-height: 400px;
		padding: 10px;
		color: #222;
		border: 1px #e5e5e5 solid;
		font-size: 14px;
		line-height: 24px;
		letter-spacing: 1.5px;
		word-wrap: break-word;
		overflow-x: hidden;
		overflow-y: auto;
		_overflow-y: visible;
		outline: 0;
		cursor: text;
	}
	.tips_area{
		display: flex;
	}
	.tips_area input{
		width: 240px;
		height: 42px;
		line-height: 42px;
		background: #f2f2f2;
		padding: 0 20px;
		margin: 30px 0;
		border: 1px #e5e5e5 solid;
	}
	.tips_btn{
		width: 80px;
		height: 42px;
		line-height: 42px;
		background: #000000;
		color: #FFFFFF;
		margin: 30px 15px 0;
		text-align: center;
		font-size: 14px;
		cursor: pointer;
	}
	.cover_area{
		width: 100%;
		height: 240px;
		padding: 30px 0;
	}
	.cover_img{
		width: 240px;
		height: 100%;
		background-color: #f2f2f2;
		background-image: url(../img/add_btn.png);
		background-repeat: no-repeat;
		background-position: center 50px;
		cursor: pointer;
		display: flex;
		flex-flow: column nowrap;
	}
	.cover_img p{
		text-align: center;
		line-height: 28px;
		font-size: 14px;
		color: #999999;
		display: inline-block;
		margin-top: 90px;
		letter-spacing: 1.5px;
		padding: 0 10px;
	}
	.publish_area{
		height: 88px;
		display: flex;
		align-items: center;
		margin-bottom: 40px;
	}
	.publish_area>div{
		width: 160px;
		height: 44px;
		line-height: 44px;
		margin-right: 30px;
		text-align: center;
		font-size: 15px;
		cursor: pointer;
	}
	.publish{
		background: #000000;
		color: #FFFFFF;
	}
	.view{
		background: #f2f2f2;
		color: #999999;
	}
	.publish_area>div:hover.view{
		background: #000;
		color: #FFFFFF;
	}
	
	
	/* footer */
	.footer {
		width: 100%;
		height: 270px;
		background: #FFFFFF;
		border-top: 1px solid #D6D6D6;
		padding: 120px 0;
	}

	.logo2 {
		width: 83px;
		height: 30px;
		background: url(../img/logo02.png) no-repeat 0 center;
		float: left;
		cursor: pointer;
	}

	.logo2 a {
		width: 100%;
		height: 100%;
		display: block;
		z-index: 100;
	}

	.tab2 {
		width: 460px;
		height: 30px;
		float: left;
		margin-left: 298px;

	}

	.tab2 ul {
		display: flex;
	}

	.tab2 ul li {
		padding: 0 32px;
		cursor: pointer;
	}

	.tab2 ul li a {
		font-size: 14px;
		color: #666;
		line-height: 28px;
		text-align: center;
	}

	.tab2 ul li .tab2_active:after {
		content: ' ';
		display: block;
		width: 20px;
		height: 2px;
		background: #000;
		clear: both;
	}

	.tab2 ul li:after {
		content: ' ';
		display: block;
		width: 0;
		height: 2px;
		background: #000;
		clear: both;
		position: relative;
		top: -2px;
		transition: width .3s ease-in;
	}

	.tab2 ul li:hover:after {
		content: ' ';
		display: block;
		width: 30px;
		height: 2px;
		background: #000;
		clear: both;
		transition: width .5s ease-out;
	}

	.tab2 ul li:hover a {
		color: #000;
	}



	.tab2 ul li a.tab2_active {
		color: #000;
	}

	.send {
		width: 262px;
		height: 30px;
		float: right;
	}

	.send input {
		width: 160px;
		height: 30px;
		border-bottom: 1px solid #9b9b9b;
		color: #222;
		font-size: 14px;
		line-height: 30px;
		font-family: '思源宋体';
		margin-right: 16px;
		float: left;
	}

	.send button {
		width: 86px;
		height: 30px;
		background: #000000;
		color: #FFFFFF;
		font-size: 14px;
		line-height: 30px;
		text-align: center;
		font-family: '思源宋体';
		cursor: pointer;
	}

	.send button:hover {
		background: #222222;
	}


	@media screen and (max-width:1440px) {

		/*导航栏*/
		.top_bar {
			width: 100%;
			position: fixed;
			top: 0;
			z-index: 100000;
			background-color: rgba(0, 0, 0, 0);
		}

		.nav {
			min-width: 960px;
			width: 80%;
			height: 80px;
			position: relative;
			margin: 0 auto;
			top: 0;
		}

		.logo {
			width: 83px;
			height: 23px;
			position: absolute;
			left: 0;
			top: 28.5px;
			background-size: contain;
			background-image: url(../img/logo02.png);
			background-repeat: no-repeat;
		}

		.logo a {
			width: 100%;
			height: 100%;
			display: block;
			position: absolute;
			z-index: 100;
			cursor: pointer;
		}

		.tab {
			width: 24px;
			height: 23px;
			position: absolute;
			right: 0;
			top: 28.5px;
			cursor: pointer;
		}

		.tab>div {
			width: 24px;
			height: 2px;
			background: #000;
			margin-top: 8px;
			position: relative;
			transition: top 100ms ease-in;
			top: 0;
			transform-origin: 0 0;
		}

		.tab>div:first-child {
			margin-top: 0;
		}

		.tab:hover div:first-child {
			transition: top 100ms ease-out;
			top: -2.5px;
		}

		.tab:hover div:last-child {
			transition: top 100ms ease-out;
			top: 2.5px;
		}

		/* footer */
		.footer {
			width: 100%;
			height: 270px;
			background: #FFFFFF;
			border-top: 1px solid #D6D6D6;
			padding-top: 120px;
		}

		.logo2 {
			width: 83px;
			height: 30px;
			background-size: contain;
			background-image: url(../img/logo02.png);
			background-repeat: no-repeat;
			background-position: 0 center;
			float: left;
			cursor: pointer;

		}

		.logo2 a {
			width: 100%;
			height: 100%;
			display: block;
			z-index: 100;
		}

		.tab2 {
			width: 460px;
			height: 30px;
			float: left;
			margin-left: 167px;

		}

		.tab2 ul {
			display: flex;
		}

		.tab2 ul li {
			padding: 0 32px;
			cursor: pointer;
		}

		.tab2 ul li a {
			font-size: 14px;
			color: #666;
			line-height: 28px;
			text-align: center;
		}


		.tab2 ul li:after {
			content: ' ';
			display: block;
			width: 0;
			height: 2px;
			background: #000;
			clear: both;
			transition: width .3s ease-in;
		}

		.tab2 ul li:hover:after {
			content: ' ';
			display: block;
			width: 30px;
			height: 2px;
			background: #000;
			clear: both;
			transition: width .5s ease-out;
		}

		.tab2 ul li:hover a {
			color: #000;
		}



		.tab2 ul li a.tab2_active {
			color: #000;
		}

		.send {
			width: 240px;
			height: 30px;
			float: right;
		}

		.send input {
			width: 148px;
			height: 30px;
			border-bottom: 1px solid #9b9b9b;
			color: #222;
			font-size: 14px;
			line-height: 30px;
			font-family: '思源宋体';
			margin-right: 16px;
			float: left;
		}

		.send button {
			width: 76px;
			height: 30px;
			background: #000000;
			color: #FFFFFF;
			font-size: 14px;
			line-height: 30px;
			text-align: center;
			font-family: '思源宋体';
			cursor: pointer;
		}

		.send button:hover {
			background: #222222;
		}
	}
</style>
