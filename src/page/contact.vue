<template>
	<div class="page-contact">
		<top-bar type="b"></top-bar>
		<div class="contact_banner">
			<div class="container">
				<p>我是标题。</p>
				<span>雨果对感兴趣的话，雨果对感兴趣的话，雨果对感兴趣的话，雨果对感兴趣的话，
					雨果对感兴趣的话，雨果对感兴趣的话，雨果对感兴趣的话，雨果对感兴趣的话，
				</span>
			</div>
		</div>
		<div class="contact_wrap">
			<div class="container">
				<div class="left_part">
					<div class="lxfs numb">
						<p>网址</p>
						<span><a @click="$router.push('/upload')">www.dxm.com</a></span>
					</div>
					<div class="lxfs qq">
						<p>网址</p>
						<span><a @click="$router.push('/upload')">www.dxm.com</a></span>
					</div>
				</div>
				<div class="card">
					<p>留言板</p>
					<input type="text" name="name" placeholder="姓名" />
					<input type="text" name="phone" placeholder="联系方式" />
					<textarea name="msg" placeholder="您的留言"></textarea>
					<button type="submit">发送<i></i></button>
				</div>
				<div class="right_part">
					<div class="lxfs web">
						<p>网址</p>
						<span><a @click="$router.push('/upload')">www.dxm.com</a></span>
					</div>
					<div class="lxfs email">
						<p>网址</p>
						<span><a @click="$router.push('/upload')">www.dxm.com</a></span>
					</div>
				</div>


			</div>
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

	/*banner*/
	.contact_banner {
		width: 100%;
		background: #FFFFFF;
		padding: 162px 0 60px 0;
	}

	.contact_banner p {
		font-size: 52px;
		color: #222222;
		letter-spacing: 9px;
		text-align: center;
		line-height: 75px;
		position: relative;
		animation: moveTop_p 2s ease-out;
	}

	@keyframes moveTop_p {
		from {
			right: 160px;
			opacity: 0;
		}

		to {
			right: 0;
			opacity: 1;
		}
	}

	@-webkit-keyframes moveTop_p {
		from {
			right: 160px;
			opacity: 0;
		}

		to {
			right: 0;
			opacity: 1;
		}
	}

	.contact_banner span {
		display: block;
		width: 750px;
		height: 48px;
		font-size: 14px;
		line-height: 24px;
		color: #9B9B9B;
		margin-top: 28px;
		margin-left: auto;
		margin-right: auto;
		overflow: hidden;
		letter-spacing: 2.5px;
		text-align: center;
		position: relative;
		animation: moveTop_span 2.2s ease-out;
	}

	@keyframes moveTop_span {
		from {
			right: 100px;
			opacity: 0;
		}

		to {
			right: 0;
			opacity: 1;
		}
	}

	@-webkit-keyframes moveTop_span {
		from {
			right: 100px;
			opacity: 0;
		}

		to {
			right: 0;
			opacity: 1;
		}
	}

	/*联系信息*/
	.contact_wrap {
		width: 100%;
		height: 530px;
		position: relative;
		padding-bottom: 110px;

	}

	.contact_wrap>div {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.left_part,
	.right_part {
		height: 240px;
		display: flex;
		flex-flow: column nowrap;
		flex: 1;
		justify-content: space-between;
		align-items: center;
	}

	.lxfs {
		width: 200px;
		text-align: center;
		line-height: 25px;
		letter-spacing: 2.5px;
		flex: 1;
	}

	.lxfs p {
		font-size: 14px;
		color: #222222;
		line-height: 60px;
	}

	.lxfs span a {
		display: block;
		font-size: 14px;
		color: #9B9B9B;
	}

	.lxfs span a:hover {
		color: #222;
		text-decoration: underline;
	}

	// .numb{
	// 	top: 142px;
	// 	left: 19%;
	// }
	// .qq{
	// 	top: 254px;
	// 	left: 19%;
	// }
	// .web{
	// 	top: 142px;
	// 	right: 19%;
	// }
	// .email{
	// 	top: 254px;
	// 	right: 19%;
	// }

	/*留言板*/
	.card {
		// width: 666px;
		height: 420px;
		background: #FFFFFF;
		box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
		margin: 0 auto;
		padding-top: 45px;
		flex: 3;
	}

	.card p {
		font-size: 18px;
		color: #222222;
		text-align: center;
		line-height: 26px;
		margin-bottom: 20px;
	}

	.card input {
		width: 466px;
		height: 48px;
		line-height: 48px;
		color: #222222;
		font-size: 14px;
		letter-spacing: 1.5px;
		margin: 0 auto;
		border-bottom: 1px solid #D8D8D8;
		display: block;
	}

	.card textarea {
		width: 466px;
		line-height: 48px;
		color: #222222;
		font-size: 14px;
		letter-spacing: 2.5px;
		margin: 0 auto;
		border-bottom: 1px solid #D8D8D8;
		display: block;
	}

	.card button {
		width: 110px;
		height: 40px;
		background: #000000;
		text-align: center;
		line-height: 40px;
		color: #FFFFFF;
		margin: 45px auto 0;
		display: block;
		position: relative;
		cursor: pointer;
	}

	.card button i {
		width: 13px;
		height: 12px;
		background: url(../img/send.png) no-repeat;
		position: absolute;
		display: block;
		top: 5px;
		right: 5px;
	}

	.card button:hover {
		background: #222222;
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


		/*banner*/
		.contact_banner {
			width: 100%;
			background: #FFFFFF;
			padding: 162px 0 60px 0;
		}

		.contact_banner p {
			font-size: 52px;
			color: #222222;
			letter-spacing: 9px;
			text-align: center;
			line-height: 75px;
			position: relative;
			animation: moveTop_p 2s ease-out;
		}

		@keyframes moveTop_p {
			from {
				right: 160px;
				opacity: 0;
			}

			to {
				right: 0;
				opacity: 1;
			}
		}

		@-webkit-keyframes moveTop_p {
			from {
				right: 160px;
				opacity: 0;
			}

			to {
				right: 0;
				opacity: 1;
			}
		}

		.contact_banner span {
			display: block;
			width: 750px;
			height: 48px;
			font-size: 14px;
			line-height: 24px;
			color: #9B9B9B;
			margin-top: 28px;
			margin-left: auto;
			margin-right: auto;
			overflow: hidden;
			letter-spacing: 2.5px;
			text-align: center;
			position: relative;
			animation: moveTop_span 2.2s ease-out;
		}

		@keyframes moveTop_span {
			from {
				right: 100px;
				opacity: 0;
			}

			to {
				right: 0;
				opacity: 1;
			}
		}

		@-webkit-keyframes moveTop_span {
			from {
				right: 100px;
				opacity: 0;
			}

			to {
				right: 0;
				opacity: 1;
			}
		}

		/*联系信息*/
		.contact_wrap {
			width: 100%;
			height: 500px;
			position: relative;
			padding-bottom: 110px;

		}

		.contact_wrap>div {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

		.left_part,
		.right_part {
			height: 240px;
			display: flex;
			flex-flow: column nowrap;
			flex: 1;
			justify-content: space-between;
			align-items: center;
		}

		.lxfs {
			width: 190px;
			text-align: center;
			line-height: 25px;
			letter-spacing: 2.5px;
			flex: 1;
		}

		.lxfs p {
			font-size: 14px;
			color: #222222;
			line-height: 40px;
		}

		.lxfs span a {
			display: block;
			font-size: 14px;
			color: #9B9B9B;
		}

		.lxfs span a:hover {
			color: #222;
			text-decoration: underline;
		}

		// .numb{
		// 	top: 142px;
		// 	left: 19%;
		// }
		// .qq{
		// 	top: 254px;
		// 	left: 19%;
		// }
		// .web{
		// 	top: 142px;
		// 	right: 19%;
		// }
		// .email{
		// 	top: 254px;
		// 	right: 19%;
		// }

		/*留言板*/
		.card {
			// width: 666px;
			height: 400px;
			background: #FFFFFF;
			box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
			margin: 0 auto;
			padding-top: 45px;
			flex: 4;
		}

		.card p {
			font-size: 18px;
			color: #222222;
			text-align: center;
			line-height: 26px;
			margin-bottom: 20px;
		}

		.card input {
			width: 400px;
			height: 48px;
			line-height: 48px;
			color: #222222;
			font-size: 14px;
			letter-spacing: 1.5px;
			margin: 0 auto;
			border-bottom: 1px solid #D8D8D8;
			display: block;
		}

		.card textarea {
			width: 400px;
			line-height: 48px;
			color: #222222;
			font-size: 14px;
			letter-spacing: 2.5px;
			margin: 0 auto;
			border-bottom: 1px solid #D8D8D8;
			display: block;
		}

		.card button {
			width: 100px;
			height: 36px;
			background: #000000;
			text-align: center;
			line-height: 36px;
			color: #FFFFFF;
			margin: 35px auto 0;
			display: block;
			position: relative;
			cursor: pointer;
		}

		.card button i {
			width: 13px;
			height: 12px;
			background: url(../img/send.png) no-repeat;
			position: absolute;
			display: block;
			top: 5px;
			right: 5px;
		}

		.card button:hover {
			background: #222222;
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
