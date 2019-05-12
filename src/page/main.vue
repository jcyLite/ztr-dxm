<template>
	<div class="page-main">
		<top-bar type="a"></top-bar>
		<div class="home_banner">
			<div class="lx01"></div>
			<div class="lx02"></div>
			<div class="lx03"></div>
			 <div class="mb"></div>
			<div class="mb1"></div>
			<div class="mb2"></div> 
			 <div class="title_area">
				<div class="zs"></div>
				<div class="yx"></div>
				<div class="zpj_z">数</div>
				<div class="zpj_p">据</div>
				<div class="zpj_j">库</div>
				<div class="zpj2">MY WORKS</div>
				<div class="yq_img"></div>
			</div> 
			<div class="enter">
				<a @click="djjr">点击进入</a>
			</div>
			<div class="sb">
				<div class="sb_sx"></div>
			</div>
		</div>
		<div :style="{transform:`translateY(${wheight}px)`}" @scroll="wrapperscroll" ref="wrapper" class="wrapper">
			<div class="scroller">
				<div class="wrap">
					<div class="sjx sjx1"></div>
					<div class="yq yq1"></div>
					<div class="zfx zfx1"></div>
					<div class="sjx sjx2"></div>
					<div class="yq yq2"></div>
					<div class="zfx zfx2"></div>
					<div class="sjx sjx3"></div>
					<div class="yq yq3"></div>
					<div class="zfx zfx3"></div>
					<div class="zfx zfx4"></div>
					<div class="zfx zfx5"></div>
					<div class="container">
						<div class="wdzp">这是标题</div>
						<!--<div :style="{height:`${height}px`}" class="box_area">
							<div :style="{'top':`${item.top}px`}" class="img_container" v-for="item of data">
								<div class="shade">
									<div class="works_title">{{item.biaoti}}</div>
									<div class="works_categories">{{item.fenlei}}</div>
									<div class="works_author">
										<div class="user_img"></div>
										<div class="user_name">adfa</div>
									</div>
									<div class="works_likes"></div>
								</div>
								<img style="width:370px;" :src="'http://localhost:3334/'+item.cover" alt="" />
							</div>
						</div>-->
						<box :d="data"></box>
						<div class="more">
							<a @click="$router.push('/works')">进入更多</a>
						</div>
						<div class="clearfix"></div>
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
									<a class="tab2_active" @click="$router.push('/main')">home</a>
								</li>
								<li>
									<a @click="$router.push('/works')">works</a>
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
		</div>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				data: [],
				top: [0, 0, 0],
				height: 0,
				scrollTop:0,
				wheight:0
			}
		},
		computed:{
			opt(){
				return this.scrollTop/600
			}
		},
		components:{
			'box':()=>import('../components/box.vue')
		},
		mounted() {
			window.main = this;
			var that = this;
			this.wheight=window.innerHeight;
			this.$http.post('zuoping', {
				type:'all',
				uid:this.$store.state.uid,
				isqbz:true
			}).then(d => {
				this.data=d;
			})
			
		},
		methods: {
			djjr() {

			},
			wrapperscroll(){
				this.scrollTop=this.$refs.wrapper.scrollTop;
			}
		}
	}
</script>

<style lang="less" scoped>
	
	.wrapper {
		position:absolute;
		width:100%;
		/*position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;*/
		z-index: 101;
		/*overflow-y: scroll;*/
	}
	
	
	.home_banner {
		width: 100%;
		height: 1080px;
		background: url(../img/home_bg.jpg) no-repeat;
		/*background: #f8f8f8;*/
		position: fixed;
		top: 0;
		left: 0;
		z-index: 100;
	}
	
	.lx01 {
		width: 88px;
		height: 69px;
		background: url(../img/lx.png) no-repeat;
		position: absolute;
		left: 1300px;
		top: -100px;
		z-index: 1000;
		animation: lx 40s ease-in-out -30s infinite;
		opacity: 0
	}
	
	@keyframes lx {
		0% {
			top: -100px;
			left: 1300px;
			opacity: 0;
		}
		80% {
			top: -100px;
			left: 1300px;
			opacity: 1;
		}
		100% {
			top: 800px;
			left: 400px;
			opacity: 0;
		}
	}
	
	.lx02 {
		width: 44px;
		height: 34.5px;
		background: url(../img/lx.png) no-repeat;
		background-size: contain;
		position: absolute;
		left: 600px;
		top: 200px;
		z-index: 1000;
		animation: lx02 12s linear 4s infinite;
		opacity: 0
	}
	
	@keyframes lx02 {
		0% {
			left: 600px;
			top: 400px;
			opacity: 0;
		}
		80% {
			left: 600px;
			top: 400px;
			opacity: 0;
		}
		90% {
			left: 500px;
			top: 500px;
			opacity: 1;
		}
		100% {
			left: 400px;
			top: 600px;
			opacity: 0;
		}
	}
	
	.lx03 {
		width: 44px;
		height: 34.5px;
		background: url(../img/lx.png) no-repeat;
		background-size: contain;
		position: absolute;
		left: 1500px;
		top: 600px;
		z-index: 1000;
		animation: lx03 15s linear 4s infinite;
		opacity: 0
	}
	
	@keyframes lx03 {
		0% {
			left: 1500px;
			top: 600px;
			opacity: 0;
		}
		80% {
			left: 1500px;
			top: 600px;
			opacity: 0;
		}
		90% {
			left: 1400px;
			top: 700px;
			opacity: 1;
		}
		100% {
			left: 1300px;
			top: 800px;
			opacity: 0;
		}
	}
	
	.mb {
		width: 100%;
		height: 1080px;
		background: url(../img/home_img01.jpg) no-repeat;
		position: absolute;
		top: 0;
		left: 0;
		mix-blend-mode: soft-light;
	}
	
	.mb1 {
		width: 100%;
		height: 1080px;
		background: rgba(0, 0, 0, 0.5);
		position: absolute;
		z-index: 10;
		top: 0;
		left: 0;
	}
	
	.mb2 {
		width: 100%;
		height: 1080px;
		background: url(../img/home_img02.png) no-repeat;
		position: absolute;
		top: 0;
		left: 0;
		mix-blend-mode: color-dodge;
	}
	
	.title_area {
		width: 112px;
		height: 322px;
		position: absolute;
		top: 36%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 30;
	}
	
	.zs {
		width: 36px;
		height: 36px;
		border-top: 1px solid #FFFFFF;
		border-left: 1px solid #FFFFFF;
		position: absolute;
		left: -1px;
		top: -1px;
		animation: moveTop_zs ease-in-out 2.5s 1;
	}
	
	@keyframes moveTop_zs {
		from {
			top: 200px;
			opacity: .5;
		}
		to {
			top: 0;
			opacity: 1;
		}
	}
	
	@-webkit-keyframes moveTop_zs {
		from {
			top: 200px;
			opacity: .5;
		}
		to {
			top: 0;
			opacity: 1;
		}
	}
	
	.yx {
		width: 36px;
		height: 36px;
		border-bottom: 1px solid #FFFFFF;
		border-right: 1px solid #FFFFFF;
		position: absolute;
		right: -1px;
		bottom: -1px;
		animation: moveTop_yx ease-in-out 3.8s 1;
	}
	
	@keyframes moveTop_yx {
		from {
			top: 560px;
			opacity: .5;
		}
		to {
			top: 287px;
			opacity: 1;
		}
	}
	
	@-webkit-keyframes moveTop_yx {
		from {
			top: 560px;
			opacity: .5;
		}
		to {
			top: 287px;
			opacity: 1;
		}
	}
	
	.zpj_z {
		width: 36px;
		color: #fff;
		font-size: 38px;
		text-align: inherit;
		position: absolute;
		z-index: 20;
		top: 22%;
		left: 45%;
		transform: translate(-50%, -50%);
		line-height: 74px;
		animation: moveTop_zpj_s ease-in-out 2.5s 1;
	}
	
	@keyframes moveTop_zpj_s {
		from {
			top: 280px;
			opacity: .5;
		}
		to {
			top: 70.8333px;
			opacity: 1;
		}
	}
	
	@-webkit-keyframes moveTop_zpj_s {
		from {
			top: 280px;
			opacity: .5;
		}
		to {
			top: 70.8333px;
			opacity: 1;
		}
	}
	
	.zpj_p {
		width: 36px;
		color: #fff;
		font-size: 38px;
		text-align: inherit;
		position: absolute;
		z-index: 20;
		top: 42%;
		left: 45%;
		transform: translate(-50%, -50%);
		line-height: 74px;
		animation: moveTop_zpj_j ease-in-out 3s 1;
	}
	
	@keyframes moveTop_zpj_j {
		from {
			top: 350px;
			opacity: .5;
		}
		to {
			top: 135.233px;
			opacity: 1;
		}
	}
	
	@-webkit-keyframes moveTop_zpj_j {
		from {
			top: 350px;
			opacity: .5;
		}
		to {
			top: 135.233px;
			opacity: 1;
		}
	}
	
	.zpj_j {
		width: 36px;
		color: #fff;
		font-size: 38px;
		text-align: inherit;
		position: absolute;
		z-index: 20;
		top: 62%;
		left: 45%;
		transform: translate(-50%, -50%);
		line-height: 74px;
		animation: moveTop_zpj_k ease-in-out 3.5s 1;
	}
	
	@keyframes moveTop_zpj_k {
		from {
			top: 450px;
			opacity: .5;
		}
		to {
			top: 199.633px;
			opacity: 1;
		}
	}
	
	@-webkit-keyframes moveTop_zpj_k {
		from {
			top: 450px;
			opacity: .5;
		}
		to {
			top: 199.633px;
			opacity: 1;
		}
	}
	
	.zpj2 {
		width: 132px;
		color: #fff;
		font-size: 14px;
		text-align: center;
		position: absolute;
		z-index: 20;
		top: 83%;
		left: 17%;
		line-height: 20px;
		transform: rotateZ(90deg) translate(-50%, -50%);
		word-spacing: 10px;
		letter-spacing: 4.4px;
		text-decoration: line-through;
		animation: moveTop_zpj2 ease-in-out 3s 1;
	}
	
	@keyframes moveTop_zpj2 {
		from {
			top: 500px;
			opacity: .5;
		}
		to {
			top: 267.25px;
			opacity: 1;
		}
	}
	
	@-webkit-keyframes moveTop_zpj2 {
		from {
			top: 500px;
			opacity: .5;
		}
		to {
			top: 267.25px;
			opacity: 1;
		}
	}
	
	.yq_img {
		width: 26px;
		height: 26px;
		background: url(../img/hongquan.png) no-repeat center center;
		position: absolute;
		top: 80%;
		left: 35%;
		animation: moveTop_yq_img ease-in-out 3.5s 1;
	}
	
	@keyframes moveTop_yq_img {
		from {
			top: 550px;
			opacity: .5;
		}
		to {
			top: 257.6px;
			opacity: 1;
		}
	}
	
	@-webkit-keyframes moveTop_yq_img {
		from {
			top: 550px;
			opacity: .5;
		}
		to {
			top: 257.6px;
			opacity: 1;
		}
	}
	
	.enter {
		width: 200px;
		height: 54px;
		border: 1px solid rgba(255, 255, 255, 0.5);
		position: absolute;
		cursor: pointer;
		top: 61%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 30;
		animation: moveTop_enter ease-in-out 3.5s 1;
	}
	
	@keyframes moveTop_enter {
		from {
			top: 900px;
			opacity: .5;
		}
		to {
			top: 658.8px;
			opacity: 1;
		}
	}
	
	@-webkit-keyframes moveTop_enter {
		from {
			top: 900px;
			opacity: .5;
		}
		to {
			top: 658.8px;
			opacity: 1;
		}
	}
	
	.enter a {
		font-size: 18px;
		color: #FFFFFF;
		text-align: center;
		line-height: 52px;
		display: block;
		letter-spacing: 2px;
	}
	
	.enter:hover {
		border: 1px solid rgba(255, 255, 255, 1);
	}
	
	.sb {
		width: 22px;
		height: 32px;
		border: 1px solid #FFFFFF;
		border-radius: 10px;
		position: absolute;
		top: 70%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 30;
		animation: moveTop_sb ease-in-out 4s 1;
	}
	
	@keyframes moveTop_sb {
		from {
			top: 980px;
			opacity: .5;
		}
		to {
			top: 756px;
			opacity: 1;
		}
	}
	
	@-webkit-keyframes moveTop_sb {
		from {
			top: 980px;
			opacity: .5;
		}
		to {
			top: 756px;
			opacity: 1;
		}
	}
	
	.sb_sx {
		width: 2px;
		height: 7px;
		background: #FFFFFF;
		border: 1px;
		position: absolute;
		top: 6px;
		left: 49%;
		transform: translate(-50%, -50%);
		-webkit-animation: shubiao 2s ease-out infinite;
		-moz-animation: shubiao 2s ease-out infinite;
		-ms-animation: shubiao 2s ease-out infinite;
		animation: shubiao 2s ease-out infinite;
	}
	
	@keyframes shubiao {
		0% {
			transform: translateY(0);
		}
		75% {
			transform: translateY(5px);
		}
		100% {
			transform: translateY(5px);
		}
	}
	
	@-webkit-keyframes shubiao
	/*Safari and Chrome*/
	
	{
		0% {
			transform: translateY(0);
		}
		75% {
			transform: translateY(5px);
		}
		100% {
			transform: translateY(5px);
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
		font-size: 28px;
		color: #222;
		line-height: 240px;
	}
	
	
	
	.box_area>img::after {
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
		height: 360px;
		background: #f6f6f6;
		top: 0;
		left: 0;
	}
	
	.box2 {
		height: 300px;
		background: #f6f6f6;
		top: 0;
		left: 400px;
	}
	
	.box3 {
		height: 360px;
		background: #f6f6f6;
		top: 0;
		left: 800px;
	}
	
	.box4 {
		height: 500px;
		background: #f6f6f6;
		top: 390px;
		left: 0;
	}
	
	.box5 {
		height: 246px;
		background: #f6f6f6;
		top: 330px;
		left: 400px;
	}
	
	.box6 {
		height: 250px;
		background: #f6f6f6;
		top: 390px;
		left: 800px;
	}
	
	.box7 {
		height: 246px;
		background: #f6f6f6;
		top: 606px;
		left: 400px;
	}
	
	.box8 {
		height: 250px;
		background: #f6f6f6;
		top: 670px;
		left: 800px;
	}
	
	.more {
		width: 154px;
		height: 44px;
		border: 1px solid #d6d6d6;
		margin: 30px auto 75px;
		cursor: pointer;
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
		cursor: pointer;
	}
	
	.send button:hover {
		background: #222222;
	}
</style>