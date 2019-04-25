<template>
	<div class="page-works">
		
		<top-bar type="b"></top-bar>
		<div class="works_banner">
			<div class="container">
				 <p>我是标题，我是标题。</p>
				<p>Study hard, improve every day.</p> 
			</div>
		</div>
		<div class="wrap">
			<div class="sjx sjx1 rellax" data-rellax-speed="5"></div>
			<div class="yq yq1 rellax" data-rellax-speed="4"></div>
			<div class="zfx zfx1 rellax" data-rellax-speed="3"></div>
			<div class="sjx sjx2 rellax" data-rellax-speed="5"></div>
			<div class="yq yq2 rellax" data-rellax-speed="-2"></div>
			<div class="zfx zfx2 rellax" data-rellax-speed="2"></div>
			<div class="sjx sjx3 rellax" data-rellax-speed="3.5"></div>
			<div class="yq yq3 rellax" data-rellax-speed="-3"></div>
			<div class="zfx zfx3 rellax" data-rellax-speed="-5"></div>
			<div class="zfx zfx4 rellax" data-rellax-speed="5"></div>
			<div class="zfx zfx5 rellax" data-rellax-speed="3"></div>
			<div class="container">
				<div class="wdzp">
					<h4>作品集</h4>
					<div class="categories">
						<div @click="qiehuan('all',true)" class="all fl_active">全部</div>
						<div @click="qiehuan('ui',true)" class="ui">UI</div>
						<div @click="qiehuan('web',true)" class="web">网页</div>
						<div @click="qiehuan('illustration',true)" class="illustration">插画</div>
						<div @click="qiehuan('animation',true)" class="animation">动效</div>
						<div @click="qiehuan('Photography',true)" class="Photography">摄影</div>
					</div>
				</div>
				<box :d=data></box>
				<div @click="qiehuan(type)" class="more">进入更多</div>
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
							<a class="tab2_active" @click="$router.push('/works')">works</a>
						</li>
						<li>
							<a @click="$router.push('/about_me')">about me</a>
						</li>
						<li>
							<a @click="$router.push('/contact')">contact</a>
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
		data(){
			return {
				scrollTop:0,
				data:[],
				type:'all'
			}
		},
		components:{
			'box':()=>import('../components/box.vue')
		},
		methods:{
			qiehuan(type,isqbz){
				this.$http.post('zuoping',{
					uid:this.$store.state.uid,
					type,isqbz}).then(d=>{
					this.data=d;
					this.type=type;
				})
			}
		},
		computed:{
			opt(){
				return this.scrollTop/300
			}
		},
		mounted(){
			new this.Rellax('.rellax');
			var that=this;
			this.qiehuan('all',true)
		}
	}
</script>

<style lang="less" scoped>
	/*导航栏*/
	.top_bar {
		width: 100%;
		position: fixed;
		top: 0;
		z-index: 100000;
	}

	.nav {
		width: 80%;
		height: 110px;
		position: relative;
		margin: 0 auto;
		top: 0;
	}

	.logo {
		width: 83px;
		height: 23px;
		position: absolute;
		left: 0;
		top: 43.5px;
		background: url(../img/logo02.png) no-repeat;
		cursor: pointer;
	}

	.logo a {
		width: 100%;
		height: 100%;
		display: block;
		position: absolute;
	}

	.tab {
		width: 26px;
		height: 23px;
		position: absolute;
		right: 0;
		top: 43.5px;
	}

	.tab>div {
		width: 26px;
		height: 2px;
		background: #000;
		margin-top: 8px;
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
	.works_banner {
		width: 100%;
		height: 474px;
		background: #fbfbfb;
		padding: 186px 0 76px 0;
	}

	.works_banner p {
		font-size: 52px;
		color: #222222;
		letter-spacing: 22px;
		text-align: center;
	}

	.works_banner p:first-child {
		background: url(../img/tianzige.png) no-repeat 203px center;
		position: relative;
		animation: moveTop_p1 2s ease-out;
	}

	@keyframes moveTop_p1 {
		from {
			top: 160px;
			opacity: 0;
		}

		to {
			top: 0;
			opacity: 1;
		}
	}

	@-webkit-keyframes moveTop_p1 {
		from {
			top: 160px;
			opacity: 0;
		}

		to {
			top: 0;
			opacity: 1;
		}
	}

	.works_banner p:last-child {
		color: #9B9B9B;
		margin-top: 18px;
		letter-spacing: 8.5px;
		position: relative;
		animation: moveTop_p2 2.2s ease-out;
	}

	@keyframes moveTop_p2 {
		from {
			top: 100px;
			opacity: 0;
		}

		to {
			top: 0;
			opacity: 1;
		}
	}

	@-webkit-keyframes moveTop_p1 {
		from {
			top: 100px;
			opacity: 0;
		}

		to {
			top: 0;
			opacity: 1;
		}
	}

	/* 内容区 */
	.wrap {
		width: 100%;
		background: #fff;
		top: 0;
		position: relative;
	}

	.wdzp {
		width: 100%;
		height: 240px;
		background: #FFFFFF;
		padding: 55px 0 66px 0;
	}

	.wdzp h4 {
		font-size: 22px;
		color: #222222;
		line-height: 50px;
		margin-bottom: 38px;
		text-align: center;
		letter-spacing: 3px;
	}

	.wdzp h4:after {
		content: ' ';
		width: 34px;
		height: 1px;
		background: #000000;
		display: block;
		clear: both;
		margin: 0 auto;
	}

	.categories {
		height: 30px;
		width: 570px;
		margin: 0 auto;
		display: flex;
			div{
				min-width: 70px;
				height: 30px;
				border: 1px solid #000000;
				margin-left: 30px;
				font-size: 14px;
				float: left;
				line-height: 29px;
				letter-spacing: 2px;
				text-align: center;
				color: #222222;
				position: relative;
				cursor: pointer;
				box-sizing: border-box;
				&.fl_active {
					background: #000000;
					color: #FFFFFF;
					border: none;
				}
				&:nth-child(1) {
					margin-left: 0;
				}
				&:before {
					content: ' ';
					display: block;
					clear: both;
					width: 0;
					height: 0;
					opacity: 0;
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					background: #000000;
					z-index: -1;
					/* transition: width .2s, height .2s, opacity .2s ease-in-out ; */
				}
				&:hover {
					color: #FFFFFF;
					background: #000;
						:before {
						width: 100%;
						height: 100%;
						opacity: 1;
					}
				}

		}
	}

	.more {
		width: 154px;
		height: 44px;
		border: 1px solid #d6d6d6;
		margin: 30px auto 75px;
		cursor: pointer;
		line-height: 42px;
		text-align: center;
		color: #222222;
		position: relative;
		font-size: 14px;
			&:before {
				content: ' ';
				display: block;
				clear: both;
				width: 0;
				height: 0;
				opacity: 0;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				background: #000000;
				/*z-index: 11;*/
				transition: all 0.3s ease-in-out;
			}
			&:hover:before {
				width: 100%;
				height: 100%;
				opacity: 1;
				.more{
					color: #FFFFFF;
				}
			}
	}
	
	.sjx {

		width: 26px;
		height: 22px;
		background: url(../img/sanjiaoxing.png) no-repeat;
		position: absolute;
		z-index: 99999;
	}

	.zfx {
		width: 26px;
		height: 26px;
		background: url(../img/zhengfangxing.png) no-repeat;
		position: absolute;

		z-index: 99999;
	}

	.yq {
		width: 22px;
		height: 22px;
		background: url(../img/yuan.png) no-repeat;
		position: absolute;
		z-index: 99999;
	}

	/* 三角形、圆圈、正方形 */
	.sjx1 {
		left: 200px;
		top: 192px;
		transform: rotateZ(30deg);
	}

	.zfx1 {
		left: 300px;
		top: 478px;
	}

	.yq1 {
		left: 100px;
		top: 720px;
	}

	.sjx2 {
		left: 270px;
		top: 992px;
	}

	.zfx2 {
		left: -2px;
		top: 1157px;
		transform: rotateZ(60deg);
	}

	.yq2 {
		left: 644px;
		top: 626px;
	}

	.sjx3 {
		right: 454px;
		top: 233px;
		transform: rotateZ(5deg);
	}

	.zfx3 {
		right: 145px;
		top: 265px;
		transform: rotateZ(15deg);
	}

	.yq3 {
		right: 138px;
		top: 850px;
	}

	.zfx4 {
		right: 275px;
		top: 1137px;
		transform: rotateZ(18deg);
	}

	.zfx5 {
		right: 768px;
		top: 788px;
		transform: rotateZ(10deg);
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
		.works_banner {
			width: 100%;
			height: 410px;
			background: #fbfbfb;
			padding: 162px 0 123px 0;
		}

		.works_banner p {
			color: #222222;
			letter-spacing: 22px;
			text-align: center;
		}

		.works_banner p:first-child {
			font-size: 42px;
			background: url(../img/tianzige.png) no-repeat 47% center;
			background-size: contain;
			position: relative;
			animation: moveTop_p1 2s ease-out;
		}

		@keyframes moveTop_p1 {
			from {
				top: 160px;
				opacity: 0;
			}

			to {
				top: 0;
				opacity: 1;
			}
		}

		@-webkit-keyframes moveTop_p1 {
			from {
				top: 160px;
				opacity: 0;
			}

			to {
				top: 0;
				opacity: 1;
			}
		}

		.works_banner p:last-child {
			font-size: 32px;
			color: #9B9B9B;
			margin-top: 18px;
			letter-spacing: 8.5px;
			position: relative;
			animation: moveTop_p2 2.2s ease-out;
		}

		@keyframes moveTop_p2 {
			from {
				top: 100px;
				opacity: 0;
			}

			to {
				top: 0;
				opacity: 1;
			}
		}

		@-webkit-keyframes moveTop_p1 {
			from {
				top: 100px;
				opacity: 0;
			}

			to {
				top: 0;
				opacity: 1;
			}
		}

		/* 内容区 */
		.wrap {
			width: 100%;
			background: #fff;
			top: 0;
			position: relative;
		}

		.wdzp {
			width: 100%;
			height: 200px;
			background: #FFFFFF;
			padding: 42px 0 49px 0;
		}

		.wdzp h4 {
			font-size: 20px;
			color: #222222;
			line-height: 40px;
			margin-bottom: 38px;
			text-align: center;
			letter-spacing: 3px;
		}

		.wdzp h4:after {
			content: ' ';
			width: 34px;
			height: 1px;
			background: #000000;
			display: block;
			clear: both;
			margin: 0 auto;
		}

		.categories {
			height: 30px;
			width: 570px;
			margin: 0 auto;
			display: flex;
		}

		.categories div {
			min-width: 70px;
			height: 30px;
			border: 1px solid #000000;
			margin-left: 30px;
			font-size: 14px;
			float: left;
			cursor: pointer;
			box-sizing: border-box;
		}

		.categories div a {
			width: 100%;
			height: 100%;
			font-size: 14px;
			display: block;
			line-height: 29px;
			letter-spacing: 2px;
			text-align: center;
			color: #222222;
			position: relative;
			z-index: 10;
		}

		.categories div a:before {
			content: ' ';
			display: block;
			clear: both;
			width: 0;
			height: 0;
			opacity: 0;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			background: #000000;
			z-index: -1;
			/* transition: width .2s, height .2s, opacity .2s ease-in-out ; */
		}

		.categories a:hover:before {
			width: 100%;
			height: 100%;
			opacity: 1;
		}

		.categories a:hover {
			color: #FFFFFF;
		}

		.categories div:first-child {
			margin-left: 0;
		}

		.categories .fl_active {
			background: #000000;
			color: #FFFFFF;
			border: none;
		}

		.box_area {
			width: 100%;
			height: 761px;
			background: #FFFFFF;
			position: relative;
		}

		.box_area>div {
			width: 304px;
			position: absolute;
			overflow: hidden;
			cursor: pointer;
		}

		.box_area>div:after {
			content: ' ';
			width: 100%;
			height: 100%;
			display: block;
			clear: both;
			position: absolute;
			left: 0;
			bottom: -100%;
			transition: all 400ms ease;
		}

		.box_area>div:hover::after {
			left: 0;
			bottom: 0;
			background: rgba(0, 0, 0, 0.8);
			transition: bottom 600ms ease;
		}

		.box_area>div a {
			width: 100%;
			height: 100%;
			display: block;
			position: absolute;
			z-index: 100;
		}

		.box1 {
			height: 300px;
			background: #f6f6f6;
			top: 0;
			left: 0;
		}

		.box2 {
			height: 250px;
			background: #f6f6f6;
			top: 0;
			left: 328px;
		}

		.box3 {
			height: 300px;
			background: #f6f6f6;
			top: 0;
			left: 656px;
		}

		.box4 {
			height: 416px;
			background: #f6f6f6;
			top: 324px;
			left: 0;
		}

		.box5 {
			height: 205px;
			background: #f6f6f6;
			top: 274px;
			left: 328px;
		}

		.box6 {
			height: 208px;
			background: #f6f6f6;
			top: 324px;
			left: 656px;
		}

		.box7 {
			height: 205px;
			background: #f6f6f6;
			top: 503px;
			left: 328px;
		}

		.box8 {
			height: 208px;
			background: #f6f6f6;
			top: 553px;
			left: 656px;
		}

		.more {
			width: 154px;
			height: 44px;
			border: 1px solid #d6d6d6;
			margin: 30px auto 75px;
		}

		.more a {
			font-size: 14px;
			display: block;
			line-height: 42px;
			text-align: center;
			color: #222222;
			position: relative;
			z-index: 10;
		}

		.more a:before {
			content: ' ';
			display: block;
			clear: both;
			width: 0;
			height: 0;
			opacity: 0;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			background: #000000;
			z-index: -1;
			transition: all 0.3s ease-in-out;
		}

		.more a:hover:before {
			width: 100%;
			height: 100%;
			opacity: 1;
		}

		.more a:hover {
			color: #FFFFFF;
		}

		.sjx {
			width: 26px;
			height: 22px;
			background: url(../img/sanjiaoxing.png) no-repeat;
			position: absolute;
			z-index: 99999;
		}

		.zfx {
			width: 26px;
			height: 26px;
			background: url(../img/zhengfangxing.png) no-repeat;
			position: absolute;

			z-index: 99999;
		}

		.yq {
			width: 22px;
			height: 22px;
			background: url(../img/yuan.png) no-repeat;
			position: absolute;
			z-index: 99999;
		}

		/* 三角形、圆圈、正方形 */
		.sjx1 {
			left: 200px;
			top: 192px;
			transform: rotateZ(30deg);
		}

		.zfx1 {
			left: 300px;
			top: 478px;
		}

		.yq1 {
			left: 100px;
			top: 720px;
		}

		.sjx2 {
			left: 270px;
			top: 992px;
		}

		.zfx2 {
			left: -2px;
			top: 1157px;
			transform: rotateZ(60deg);
		}

		.yq2 {
			left: 644px;
			top: 626px;
		}

		.sjx3 {
			right: 454px;
			top: 233px;
			transform: rotateZ(5deg);
		}

		.zfx3 {
			right: 145px;
			top: 265px;
			transform: rotateZ(15deg);
		}

		.yq3 {
			right: 138px;
			top: 850px;
		}

		.zfx4 {
			right: 275px;
			top: 1137px;
			transform: rotateZ(18deg);
		}

		.zfx5 {
			right: 768px;
			top: 788px;
			transform: rotateZ(10deg);
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
