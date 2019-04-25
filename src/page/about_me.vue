<template>
	<div class="page-about_me">
		<div>
			<top-bar type="b"></top-bar>
			<div class="about_banner">
				<!-- <p>我是标题。</p>
				<p>我是标题。</p>a
				<span> ST&学习&天天上</span> -->
			</div>
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
				<div class="intro">
					<div class="container">
						<div class="me_img"></div>
						<div class="intro_txt">
							<div class="info">
								<div class="name_area">
									<div class="name">大家好,</div>
									<div class="name">我是标题。</div>
								</div>
								<div class="birth">
									<ul>
										<li>
											<p>标题</p><span>2000</span>
										</li>
										<li>
											<p>标题</p><span>2000</span>
										</li>
										<li>
											<p>标题</p><span>2000</span>
										</li>
									</ul>
								</div>
							</div>
							<div class="info2">
								我是标题。我是标题。我是标题。我是标题。我是标题。我是标题。我是标题。我是标题。我是标题。 我是标题。我是标题。我是标题。我是标题。我是标题。我是标题。我是标题。我是标题。我是标题。
							</div>
							<div class="info3">
								我是标题。我是标题。我是标题。我是标题。我是标题。我是标题。我是标题。我是标题。我是标题。 我是标题。我是标题。我是标题。我是标题。我是标题。我是标题。我是标题。我是标题。我是标题。
							</div>
						</div>
					</div>
				</div>
				<div class="skill">
					<div class="container">
						<h6>这里是标题</h6>
						<div class="skill_list">
							<div class="ps">
								<div class="skill_icon ps_icon"></div>
								<p>我是标题。</p>
								<span>我是标题。我是标题。我是标题。我是标题。</span>
							</div>
							<div class="ai">
								<div class="skill_icon ai_icon"></div>
								<p>我是标题。</p>
								<span>我是标题。我是标题。我是标题。我是标题。</span>
							</div>
							<div class="ae">
								<div class="skill_icon ae_icon"></div>
								<p>我是标题。</p>
								<span>我是标题。我是标题。我是标题。我是标题。</span>
							</div>
							<div class="dw">
								<div class="skill_icon dw_icon"></div>
								<p>我是标题。</p>
								<span>我是标题。我是标题。我是标题。我是标题。</span>
							</div>
						</div>
						<div class="time_line">
							<div class="line1"></div>
							<div class="line2 time_active"></div>
							<div class="line3"></div>
							<div class="line4"></div>
						</div>
					</div>
				</div>

				<div class="experience">
					<div class="time_line2">
						<div class="time_title">时间轴</div>
						<ul>
							<li><i></i>
								<a href="">2015</a>
							</li>
							<li class="time_active2"><i></i>
								<a href="">2015</a>
							</li>
							<li><i></i>
								<a href="">2015</a>
							</li>
							<li><i></i>
								<a href="">2015</a>
							</li>
						</ul>
					</div>
					<div class="container">
						<h6>这里是标题</h6>
						<div class="ex_list">
							<div class="time">2015.6~2016.6</div>
							<div class="gs_info">
								<p>这里是标题</p>
								<span> 这里是描述。这里是描述。这里是描述。这里是描述。这里是描述。
									这里是描述。这里是描述。这里是描述。这里是描述。这里是描述。
								</span>
							</div>
							<div class="time">2015.6~2016.6</div>
							<div class="gs_info">
								<p>这里是标题</p>
								<span> 这里是描述。这里是描述。这里是描述。这里是描述。这里是描述。
									这里是描述。这里是描述。这里是描述。这里是描述。这里是描述。
								</span>
							</div>
							<div class="time">2015.6~2016.6</div>
							<div class="gs_info">
								<p>这里是标题</p>
								<span> 这里是描述。这里是描述。这里是描述。这里是描述。这里是描述。
									这里是描述。这里是描述。这里是描述。这里是描述。这里是描述。
								</span>
							</div>
						</div>
					</div>
					<div class="clearfix"></div>
				</div>
			</div>
			<div class="contact">
				<div class="container">
					<div class="contact_info">
						<h5>这里是标题</h5>
						<div class="ms">这里是文字。这里是文字。这里是文字。这里是文字。这里是文字。这里是文字。 这里是文字。这里是文字。这里是文字。这里是文字。这里是文字。
						</div>
						<ul>
							<li>
								<p>这里是标题</p><span>这里是文字。</span>
							</li>
							<li>
								<p>这里是标题</p><span>这里是文字。</span>
							</li>
							<li>
								<p>这里是标题</p><span>这里是文字。</span>
							</li>
							<li>
								<p>这里是标题</p><span>这里是文字。</span>
							</li>
						</ul>
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
							<a class="tab2_active" @click="$router.push('/about_me')">about me</a>
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
	/* banner */
	.about_banner {
		width: 100%;
		height: 1080px;
		// background: url(../img/about_bg.png) no-repeat;
		background: #f8f8f8;
	}

	.about_banner p {
		width: 730px;
		color: #222222;
		text-align: left;
		font-weight: lighter;
		font-size: 88px;
		line-height: 120px;
		letter-spacing: 15px;
	}

	.about_banner p:nth-child(1) {
		position: absolute;
		top: 228px;
		left: 10%;
		animation: moveTop_p1 2s ease-out;
	}

	@keyframes moveTop_p1 {
		from {
			top: 400px;
			opacity: 0;
		}

		to {
			top: 228px;
			opacity: 1;
		}
	}

	@-webkit-keyframes moveTop_p1 {
		from {
			top: 400px;
			opacity: 0;
		}

		to {
			top: 228px;
			opacity: 1;
		}
	}

	.about_banner p:nth-child(2) {
		position: absolute;
		top: 348px;
		left: 10%;
		animation: moveTop_p2 2s ease-out;
	}

	@keyframes moveTop_p2 {
		from {
			top: 550px;
			opacity: 0;
		}

		to {
			top: 348px;
			opacity: 1;
		}
	}

	@-webkit-keyframes moveTop_p2 {
		from {
			top: 550px;
			opacity: 0;
		}

		to {
			top: 348px;
			opacity: 1;
		}
	}

	.about_banner span {
		color: rgba(34, 34, 34, 0.6);
		font-size: 28px;
		letter-spacing: 5px;
		position: absolute;
		top: 540px;
		left: 10%;
		animation: moveTop_span 2s ease-out;
	}

	@keyframes moveTop_span {
		from {
			top: 700px;
			opacity: 0;
		}

		to {
			top: 540px;
			opacity: 1;
		}
	}

	@-webkit-keyframes moveTop_span {
		from {
			top: 700px;
			opacity: 0;
		}

		to {
			top: 540px;
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

	/* 简介 */

	.intro {
		width: 100%;
		height: 865px;
		background: #FFFFFF;
		padding: 130px 0;
	}

	.me_img {
		width: 500px;
		height: 605px;
		background: #F6F6F6;
		float: left;
		margin-right: 70px;
	}

	.intro_txt {
		width: 600px;
		height: 605px;
		float: left;
	}

	.info {
		width: 100%;
		height: 170px;
		padding: 35px 0;
	}

	.name_area {
		width: 322px;
		height: 100%;
		float: left;
	}

	.name {
		width: 322px;
		height: 50px;
		font-size: 30px;
		line-height: 50px;
		color: #222222;
		letter-spacing: 5px;
	}

	.info .name:nth-child(2) {
		text-indent: 30px;
	}

	.birth {
		width: 278px;
		height: 100%;
		float: left;
	}

	.birth ul li {
		width: 100%;
		height: 33px;
		line-height: 33px;
	}

	.birth p {
		width: 96px;
		text-align: left;
		font-size: 18px;
		color: #222222;
		float: left;
		letter-spacing: 3px;
	}

	.birth span {
		width: 182px;
		font-size: 14px;
		color: #515769;
		float: left;
		padding-left: 40px;
		letter-spacing: 2.5px;
	}

	.birth span:before {
		content: ' ';
		width: 26px;
		height: 1px;
		background: #9B9B9B;
		display: block;
		clear: both;
		position: relative;
		left: -40px;
		top: 18px;
	}

	.info2 {
		width: 100%;
		height: 140px;
		padding: 14px 0;
		line-height: 38px;
		font-size: 16px;
		letter-spacing: 2.5px;
		color: #515769;
	}

	.info3 {
		width: 100%;
		height: 295px;
		padding: 50px 0 30px 0;
		line-height: 38px;
		font-size: 16px;
		letter-spacing: 2.5px;
		color: #515769;
	}

	/* 技能 */

	.skill {
		width: 100%;
		height: 410px;
		background: #F6F6F6;
		padding-top: 58px;
	}

	h6 {
		font-size: 16px;
		color: #515769;
		line-height: 49px;
		margin-bottom: 70px;
		text-align: center;
		letter-spacing: 2.8px;
	}

	h6:after {
		content: ' ';
		width: 34px;
		height: 1px;
		background: #d8d8d8;
		display: block;
		clear: both;
		margin: 0 auto;
	}

	.skill_list {
		width: 100%;
		height: 130px;
		padding: 0 85px;
		display: flex;
	}

	.skill_list>div {
		width: 250px;
		height: 100%;
		float: left;
		padding: 0 30px;
	}

	.skill_icon {
		width: 40px;
		height: 40px;
		margin: 0 auto;
		background: #e5e5e5;
	}

	.skill_list p {
		font-size: 16px;
		text-align: center;
		color: #222222;
		margin-top: 10px;
		line-height: 40px;
		letter-spacing: 2.8px;
	}

	.skill_list span {
		display: block;
		font-size: 12px;
		text-align: center;
		color: #999999;
		line-height: 20px;
		letter-spacing: 1.5px;
	}

	/*进度条*/

	.time_line {
		width: 108px;
		height: 7px;
		margin: 50px auto 0;
		padding-top: 5px;
	}

	.time_line>div {
		width: 34px;
		height: 1px;
		background: #999;
		float: left;
		cursor: pointer;
		position: relative;
		transition: height .2s ease-in;
	}

	.time_line>div:first-child,
	.time_line>div:last-child {
		width: 20px;
	}

	.time_line>div:first-child:after {
		display: none;
	}

	.time_line>div:after {
		content: ' ';
		display: block;
		clear: both;
		width: 1px;
		height: 7px;
		background: #000000;
		position: relative;
		bottom: 5px;
	}

	.time_line>div:hover {
		background: #000000;
		height: 7px;
		transition: height .2s ease-out;
	}

	.time_line .time_active {
		background: #000000;
		height: 4px;
	}

	/* experience */

	.experience {
		width: 100%;
		background: #FFFFFF;
		padding: 58px 0 75px 0;
		position: relative;
		overflow: hidden;
	}

	/*左侧时间轴*/

	.time_line2 {
		width: 115px;
		position: absolute;
		left: 200px;
		top: 200px;
	}

	.time_title {
		width: 86px;
		height: 30px;
		background: #000000;
		color: #FFFFFF;
		font-size: 14px;
		letter-spacing: 1.5px;
		line-height: 30px;
		text-align: center;
	}

	.time_line2 ul li {
		height: 24px;
		margin-top: 20px;
		padding-left: 10px;
	}

	.time_line2 ul li i {
		display: block;
		width: 7px;
		height: 1px;
		background: #000000;
		float: left;
		margin-top: 12px;
		position: relative;
		z-index: 10;
		transition: width 0.2s ease-in;
	}

	.time_line2 ul li a {
		font-size: 14px;
		color: #9B9B9B;
		line-height: 24px;
		text-align: center;
		display: block;
		float: left;
		margin-left: 20px;
		letter-spacing: 1.5px;
	}

	.time_line2 ul li:before {
		content: ' ';
		display: block;
		clear: both;
		width: 1px;
		height: 44px;
		background: #D8D8D8;
		position: absolute;
		left: 12px;
		z-index: 1;
	}

	.time_line2 ul li:hover a {
		color: #222222;
	}

	.time_line2 ul li:hover i {
		width: 30px;
		transition: width 0.2s ease-out;
	}

	.time_line2 .time_active2 i {
		width: 30px;
	}

	.time_line2 .time_active2 a {
		color: #222222;
	}

	/*经历轴*/

	.ex_list {
		width: 100%;
		padding: 0 76px;
	}

	.time {
		height: 149px;
		font-size: 24px;
		color: #222222;
		line-height: 36px;
		letter-spacing: 2.6px;
		float: left;
		position: relative;
	}

	.gs_info {
		width: 704px;
		height: 149px;
		float: right;
	}

	.gs_info p {
		font-size: 24px;
		color: #222222;
		line-height: 36px;
		letter-spacing: 2.6px;
	}

	.gs_info span {
		font-size: 15px;
		color: #515769;
		line-height: 24px;
		letter-spacing: 1.6px;
		display: block;
	}

	.time:before {
		content: ' ';
		display: block;
		clear: both;
		width: 15px;
		height: 1px;
		background: #D8D8D8;
		position: absolute;
		right: -70px;
		top: 18px;
	}

	.time:after {
		content: ' ';
		display: block;
		clear: both;
		width: 1px;
		height: 149px;
		background: #D8D8D8;
		position: absolute;
		right: -70px;
		top: 18px;
	}

	.time:nth-last-child(2):after {
		content: ' ';
		display: block;
		clear: both;
		width: 1px;
		height: 55px;
		background: #D8D8D8;
		position: absolute;
		right: -70px;
		top: 18px;
	}

	/* 联系方式 */

	.contact {
		width: 100%;
		height: 355px;
		background: #F6F6F6;
		padding: 54px 0;
	}

	.contact_info {
		width: 100%;
		height: 100%;
		padding: 0 96px;
	}

	.contact h5 {
		font-size: 28px;
		color: #222222;
		line-height: 53px;
		letter-spacing: 2.5px;
	}

	.contact h5:after {
		content: ' ';
		display: block;
		clear: both;
		width: 56px;
		height: 1px;
		background: #9B9B9B;
	}

	.contact .ms {
		width: 600px;
		height: 40px;
		line-height: 20px;
		color: #9B9B9B;
		font-size: 14px;
		margin-top: 22px;
		letter-spacing: 1.5px;
	}

	.contact ul {
		width: 100%;
		height: 80px;
		margin-top: 51px;
		display: flex;
	}

	.contact ul li {
		width: 251px;
		height: 100%;
	}

	.contact p {
		font-size: 20px;
		line-height: 32px;
		letter-spacing: 2.5px;
		color: #515769;
	}

	.contact span {
		font-size: 14px;
		line-height: 48px;
		letter-spacing: 1.5px;
		color: #9B9B9B;
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

		/* banner */
		.about_banner {
			width: 100%;
			height: 900px;
			background: url(../img/about_bg2.jpg) no-repeat;
		}

		.about_banner p {
			width: 730px;
			color: #222222;
			text-align: left;
			font-weight: lighter;
			font-size: 66px;
			line-height: 88px;
			letter-spacing: 15px;
		}

		.about_banner p:nth-child(1) {
			position: absolute;
			top: 198px;
			left: 10%;
			animation: moveTop_p1 2s ease-out;
		}

		@keyframes moveTop_p1 {
			from {
				top: 400px;
				opacity: 0;
			}

			to {
				top: 228px;
				opacity: 1;
			}
		}

		@-webkit-keyframes moveTop_p1 {
			from {
				top: 400px;
				opacity: 0;
			}

			to {
				top: 228px;
				opacity: 1;
			}
		}

		.about_banner p:nth-child(2) {
			position: absolute;
			top: 286px;
			left: 10%;
			animation: moveTop_p2 2s ease-out;
		}

		@keyframes moveTop_p2 {
			from {
				top: 550px;
				opacity: 0;
			}

			to {
				top: 348px;
				opacity: 1;
			}
		}

		@-webkit-keyframes moveTop_p2 {
			from {
				top: 550px;
				opacity: 0;
			}

			to {
				top: 348px;
				opacity: 1;
			}
		}

		.about_banner span {
			color: rgba(34, 34, 34, 0.6);
			font-size: 28px;
			letter-spacing: 5px;
			position: absolute;
			top: 430px;
			left: 10%;
			animation: moveTop_span 2s ease-out;
		}

		@keyframes moveTop_span {
			from {
				top: 700px;
				opacity: 0;
			}

			to {
				top: 540px;
				opacity: 1;
			}
		}

		@-webkit-keyframes moveTop_span {
			from {
				top: 700px;
				opacity: 0;
			}

			to {
				top: 540px;
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

		/* 简介 */

		.intro {
			width: 100%;
			height: 650px;
			background: #FFFFFF;
			padding: 92px 0;
		}

		.me_img {
			width: 380px;
			height: 466px;
			background: #F6F6F6;
			float: left;
			margin-right: 80px;
		}

		.intro_txt {
			width: 500px;
			height: 466px;
			float: left;
		}

		.info {
			width: 100%;
			height: 130px;
			padding: 29px 0;
		}

		.name_area {
			width: 275px;
			height: 100%;
			float: left;
		}

		.name {
			width: 275px;
			height: 36px;
			font-size: 26px;
			line-height: 36px;
			color: #222222;
			letter-spacing: 5px;
		}

		.info .name:nth-child(2) {
			text-indent: 22px;
		}

		.birth {
			width: 225px;
			height: 100%;
			float: left;
		}

		.birth ul li {
			width: 100%;
			height: 25px;
			line-height: 25px;
		}

		.birth p {
			width: 70px;
			text-align: left;
			font-size: 16px;
			color: #222222;
			float: left;
			letter-spacing: 3px;
		}

		.birth span {
			width: 155px;
			font-size: 14px;
			color: #515769;
			float: left;
			padding-left: 36px;
			letter-spacing: 2.5px;
		}

		.birth span:before {
			content: ' ';
			width: 20px;
			height: 1px;
			background: #9B9B9B;
			display: block;
			clear: both;
			position: relative;
			left: -36px;
			top: 12px;
		}

		.info2 {
			width: 100%;
			height: 104px;
			padding: 14px 0;
			line-height: 28px;
			font-size: 15px;
			letter-spacing: 2.5px;
			color: #515769;
			overflow: hidden;
		}

		.info3 {
			width: 100%;
			height: 232px;
			padding: 30px 0 30px 0;
			line-height: 28px;
			font-size: 15px;
			letter-spacing: 2.5px;
			color: #515769;
		}

		/* 技能 */

		.skill {
			width: 100%;
			height: 360px;
			background: #F6F6F6;
			padding-top: 42px;
		}

		h6 {
			font-size: 16px;
			color: #515769;
			line-height: 36px;
			margin-bottom: 52px;
			text-align: center;
			letter-spacing: 2.8px;
		}

		h6:after {
			content: ' ';
			width: 34px;
			height: 1px;
			background: #d8d8d8;
			display: block;
			clear: both;
			margin: 0 auto;
		}

		.skill_list {
			width: 100%;
			height: 130px;
			padding: 0 30px;
			display: flex;
		}

		.skill_list>div {
			flex: 1;
			height: 100%;
			float: left;
			padding: 0 30px;
		}

		.skill_icon {
			width: 40px;
			height: 40px;
			margin: 0 auto;
			background: #e5e5e5;
		}

		.skill_list p {
			font-size: 16px;
			text-align: center;
			color: #222222;
			margin-top: 10px;
			line-height: 40px;
			letter-spacing: 2.8px;
		}

		.skill_list span {
			display: block;
			font-size: 12px;
			text-align: center;
			color: #999999;
			line-height: 20px;
			letter-spacing: 1.5px;
		}

		/*进度条*/

		.time_line {
			width: 108px;
			height: 7px;
			margin: 50px auto 0;
			padding-top: 5px;
		}

		.time_line>div {
			width: 34px;
			height: 1px;
			background: #999;
			float: left;
			cursor: pointer;
			position: relative;
			transition: height .2s ease-in;
		}

		.time_line>div:first-child,
		.time_line>div:last-child {
			width: 20px;
		}

		.time_line>div:first-child:after {
			display: none;
		}

		.time_line>div:after {
			content: ' ';
			display: block;
			clear: both;
			width: 1px;
			height: 7px;
			background: #000000;
			position: relative;
			bottom: 5px;
		}

		.time_line>div:hover {
			background: #000000;
			height: 7px;
			transition: height .2s ease-out;
		}

		.time_line .time_active {
			background: #000000;
			height: 4px;
		}

		/* experience */

		.experience {
			width: 100%;
			background: #FFFFFF;
			padding: 42px 0 56px 0;
			position: relative;
			overflow: hidden;
		}

		/*左侧时间轴*/

		.time_line2 {
			width: 115px;
			position: absolute;
			left: 200px;
			top: 200px;
		}

		.time_title {
			width: 86px;
			height: 30px;
			background: #000000;
			color: #FFFFFF;
			font-size: 14px;
			letter-spacing: 1.5px;
			line-height: 30px;
			text-align: center;
		}

		.time_line2 ul li {
			height: 24px;
			margin-top: 20px;
			padding-left: 10px;
		}

		.time_line2 ul li i {
			display: block;
			width: 7px;
			height: 1px;
			background: #000000;
			float: left;
			margin-top: 12px;
			position: relative;
			z-index: 10;
			transition: width 0.2s ease-in;
		}

		.time_line2 ul li a {
			font-size: 14px;
			color: #9B9B9B;
			line-height: 24px;
			text-align: center;
			display: block;
			float: left;
			margin-left: 20px;
			letter-spacing: 1.5px;
		}

		.time_line2 ul li:before {
			content: ' ';
			display: block;
			clear: both;
			width: 1px;
			height: 44px;
			background: #D8D8D8;
			position: absolute;
			left: 12px;
			z-index: 1;
		}

		.time_line2 ul li:hover a {
			color: #222222;
		}

		.time_line2 ul li:hover i {
			width: 30px;
			transition: width 0.2s ease-out;
		}

		.time_line2 .time_active2 i {
			width: 30px;
		}

		.time_line2 .time_active2 a {
			color: #222222;
		}

		/*经历轴*/

		.ex_list {
			width: 100%;
			padding: 0 120px;
		}

		.time {
			height: 149px;
			font-size: 20px;
			color: #222222;
			line-height: 36px;
			letter-spacing: 2.6px;
			float: left;
			position: relative;
		}

		.gs_info {
			width: 436px;
			height: 149px;
			float: right;
		}

		.gs_info p {
			font-size: 20px;
			color: #222222;
			line-height: 36px;
			letter-spacing: 2.6px;
		}

		.gs_info span {
			font-size: 14px;
			color: #515769;
			line-height: 24px;
			letter-spacing: 1.6px;
			display: block;
		}

		.time:before {
			content: ' ';
			display: block;
			clear: both;
			width: 15px;
			height: 1px;
			background: #D8D8D8;
			position: absolute;
			right: -70px;
			top: 18px;
		}

		.time:after {
			content: ' ';
			display: block;
			clear: both;
			width: 1px;
			height: 149px;
			background: #D8D8D8;
			position: absolute;
			right: -70px;
			top: 18px;
		}

		.time:nth-last-child(2):after {
			content: ' ';
			display: block;
			clear: both;
			width: 1px;
			height: 55px;
			background: #D8D8D8;
			position: absolute;
			right: -70px;
			top: 18px;
		}

		/* 联系方式 */

		.contact {
			width: 100%;
			height: 330px;
			background: #F6F6F6;
			padding: 42px 0;
		}

		.contact_info {
			width: 100%;
			height: 100%;
			padding: 0 96px;
		}

		.contact h5 {
			font-size: 22px;
			color: #222222;
			line-height: 53px;
			letter-spacing: 2.5px;
		}

		.contact h5:after {
			content: ' ';
			display: block;
			clear: both;
			width: 56px;
			height: 1px;
			background: #9B9B9B;
		}

		.contact .ms {
			width: 600px;
			height: 40px;
			line-height: 20px;
			color: #9B9B9B;
			font-size: 14px;
			margin-top: 22px;
			letter-spacing: 1.5px;
		}

		.contact ul {
			width: 100%;
			height: 80px;
			margin-top: 50px;
			display: flex;
		}

		.contact ul li {
			width: 251px;
			height: 100%;
		}

		.contact p {
			font-size: 18px;
			line-height: 32px;
			letter-spacing: 2.5px;
			color: #515769;
		}

		.contact span {
			font-size: 14px;
			line-height: 48px;
			letter-spacing: 1.5px;
			color: #9B9B9B;
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
