<template>
	<div class="page-detail">
		<top-bar type="b"></top-bar>
		<div class="detail_banner">
			<div class="container">
				<p>{{data.biaoti}}</p>
				<span>Study hard, improve every day.</span>
				<ul class="num">
					<li class="views">{{data.yulan}}</li>
					<li class="likes">{{data.dianzhan}}</li>
				</ul>
			</div>
		</div>
		<div class="work_info">
			<div class="container">
				<p>
					Study hard, improve every day.Study hard, improve every day.Study hard, improve every day.Study hard, improve every day. Study hard, improve every day.Study hard, improve every day.Study hard, improve every day.Study hard, improve every day.

				</p>
				<div class="publish_time">发布于：<span class="upload_date">{{changeTime(data.timestamp)}}</span></div>
			</div>
		</div>
		<div class="work_img">
			<div class="container">
				<ul>
					<li v-for="item of data.imgs" :style="{'background-image':`url(http://localhost:3334/${item})`}"></li>
				</ul>
			</div>
		</div>
		<div class="time_line" style="display: none;">
			<div class="line1"></div>
			<div class="line2 time_active"></div>
			<div class="line3"></div>
			<div class="line4"></div>
		</div>
		<div :class="{active:data.medianzhan}" @click="dianzan" class="dianzan">
			<div class="corner1"></div>
			<div class="corner2"></div>
			<div class="corner3"></div>
			<div class="corner4"></div>
			<div class="dianzan_icon"></div>
		</div>
		<div class="dianzan_num">
			已赞<span class="likes_num">{{data.dianzhan}}</span>次
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
		data() {
			return {
				data: {}
			}
		},
		mounted() {
			this.$http.post('detail', {
				uid: this.$store.state.uid,
				zid: this.$route.query.zid
			}).then(d => {
				this.data = d.detail
			})
		},
		methods: {
			changeTime(a) {
				var b = new Date(a);
				return b.getFullYear() + '年' + (b.getMonth() + 1) + '月' + b.getDate() + '日'
			},
			dianzan() {
				this.$http.post('works_likes', {
					uid: this.$store.state.uid,
					zid: this.data.zid
				}).then(d => {
					if(d.code == 0) {
						this.data.medianzhan = !this.data.medianzhan
						if(this.data.medianzhan) {
							this.data.dianzhan++
						} else {
							this.data.dianzhan--
						}
					}
				})
			}
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
	
	.detail_banner {
		width: 100%;
		height: 474px;
		background: #fbfbfb;
		padding-top: 186px;
	}
	
	.detail_banner p {
		font-size: 68px;
		color: #515769;
		letter-spacing: 1.5px;
		text-align: left;
		line-height: 120px;
		position: absolute;
		top: 186px;
		animation: moveTop_p 2s ease-out;
	}
	
	@keyframes moveTop_p {
		from {
			top: 300px;
			opacity: 0;
		}
		to {
			top: 186px;
			opacity: 1;
		}
	}
	
	@-webkit-keyframes moveTop_p {
		from {
			top: 300px;
			opacity: 0;
		}
		to {
			top: 186px;
			opacity: 1;
		}
	}
	
	.detail_banner span {
		color: rgba(34, 34, 34, 0.6);
		font-size: 28px;
		letter-spacing: 1.5px;
		line-height: 62px;
		position: absolute;
		top: 306px;
		animation: moveTop_span 2s ease-out;
	}
	
	@keyframes moveTop_span {
		from {
			top: 400px;
			opacity: 0;
		}
		to {
			top: 306px;
			opacity: 1;
		}
	}
	
	@-webkit-keyframes moveTop_span {
		from {
			top: 400px;
			opacity: 0;
		}
		to {
			top: 306px;
			opacity: 1;
		}
	}
	
	.num {
		width: 100%;
		height: 30px;
		position: absolute;
		top: 400px;
		animation: moveTop_num 2s ease-out;
	}
	
	@keyframes moveTop_num {
		from {
			top: 450px;
			opacity: 0;
		}
		to {
			top: 400px;
			opacity: 1;
		}
	}
	
	@-webkit-keyframes moveTop_num {
		from {
			top: 450px;
			opacity: 0;
		}
		to {
			top: 400px;
			opacity: 1;
		}
	}
	
	.num li {
		width: 150px;
		height: 30px;
		font-size: 14px;
		color: #999999;
		line-height: 30px;
		float: left;
		text-indent: 26px;
		letter-spacing: 1.5px;
	}
	
	.num li:first-child {
		background: url(../img/liulan.png) no-repeat 0 center;
	}
	
	.num li:last-child {
		background: url(../img/shoucang2.png) no-repeat 0 center;
	}
	/* describe */
	
	.work_info {
		width: 100%;
		min-height: 180px;
		max-height: 300px;
		padding: 46px 0 20px 0;
		p {
			display: block;
			max-height: 180px;
			width: 100%;
			font-size: 15px;
			color: #515769;
			line-height: 36px;
			letter-spacing: 2.5px;
			word-wrap: break-word;
			word-break: break-all;
			// white-space: nowrap;
			// text-overflow: ellipsis;
			overflow: hidden;
		}
		.publish_time {
			color: #515769;
			font-size: 14px;
			width: 100%;
			height: 20px;
			margin-top: 30px;
			letter-spacing: 2.5px;
		}
		span {
			color: #515769;
			font-size: 14px;
		}
	}
	/* pic */
	
	.work_img {
		width: 100%;
		ul li {
			width: 100%;
			height: 855px;
			background: #f8f8f8;
			margin-bottom: 28px;
			background-size: contain;
			background-repeat: no-repeat;
			background-position: center center;
		}
	}
	/*点赞*/
	
	.dianzan {
		width: 88px;
		height: 88px;
		background: #000000;
		margin: 100px auto 40px;
		position: relative;
		cursor: pointer;
		transform: rotateZ(0deg);
		transition: .3s all;
		.dianzan_icon {
			width: 30px;
			height: 32px;
			background: url(../img/dianzan.png) no-repeat;
			position: absolute;
			left: 29px;
			top: 28px;
			transform: rotateZ(0deg);
		}
		&.active {
			transform: rotateZ(45deg);
			.dianzan_icon {
				transform: rotateZ(-45deg);
			}
		}
	}
	
	.dianzan:hover .dianzan_icon {
		-webkit-animation: Shake .8s both;
		-moz-animation: Shake .8s both;
		-ms-animation: Shake .8s both;
		animation: Shake .8s both
	}
	
	@-moz-keyframes Shake {
		0% {
			transform: scale(1);
			transform: scale(1)
		}
		10%,
		20% {
			transform: scale(0.9) rotate(-3deg);
			transform: scale(0.9) rotate(-3deg)
		}
		40%,
		80% {
			transform: scale(1.1) rotate(3deg);
			transform: scale(1.1) rotate(3deg)
		}
		60% {
			transform: scale(1.1) rotate(-3deg);
			transform: scale(1.1) rotate(-3deg)
		}
		100% {
			transform: scale(1) rotate(0);
			transform: scale(1) rotate(0)
		}
	}
	
	@-ms-keyframes Shake {
		0% {
			transform: scale(1);
			transform: scale(1)
		}
		10%,
		20% {
			transform: scale(0.9) rotate(-3deg);
			transform: scale(0.9) rotate(-3deg)
		}
		40%,
		80% {
			transform: scale(1.1) rotate(3deg);
			transform: scale(1.1) rotate(3deg)
		}
		60% {
			transform: scale(1.1) rotate(-3deg);
			transform: scale(1.1) rotate(-3deg)
		}
		100% {
			transform: scale(1) rotate(0);
			transform: scale(1) rotate(0)
		}
	}
	
	@-webkit-keyframes Shake {
		0% {
			transform: scale(1);
			transform: scale(1)
		}
		10%,
		20% {
			transform: scale(0.9) rotate(-3deg);
			transform: scale(0.9) rotate(-3deg)
		}
		40%,
		80% {
			transform: scale(1.1) rotate(3deg);
			transform: scale(1.1) rotate(3deg)
		}
		60% {
			transform: scale(1.1) rotate(-3deg);
			transform: scale(1.1) rotate(-3deg)
		}
		100% {
			transform: scale(1) rotate(0);
			transform: scale(1) rotate(0)
		}
	}
	
	@keyframes Shake {
		0% {
			transform: scale(1);
			transform: scale(1)
		}
		10%,
		20% {
			transform: scale(0.9) rotate(-3deg);
			transform: scale(0.9) rotate(-3deg)
		}
		40%,
		80% {
			transform: scale(1.1) rotate(3deg);
			transform: scale(1.1) rotate(3deg)
		}
		60% {
			transform: scale(1.1) rotate(-3deg);
			transform: scale(1.1) rotate(-3deg)
		}
		100% {
			transform: scale(1) rotate(0);
			transform: scale(1) rotate(0)
		}
	}
	
	.corner1,
	.corner2,
	.corner3,
	.corner4 {
		width: 20px;
		height: 20px;
		position: absolute;
	}
	
	.corner1 {
		border-top: 1px solid #000000;
		border-left: 1px solid #000000;
		left: 0;
		top: 0;
		transition: all .2s ease-in;
	}
	
	.corner2 {
		border-top: 1px solid #000000;
		border-right: 1px solid #000000;
		right: 0;
		top: 0;
		transition: all .2s ease-in;
	}
	
	.corner3 {
		border-bottom: 1px solid #000000;
		border-left: 1px solid #000000;
		left: 0;
		bottom: 0;
		transition: all .2s ease-in;
	}
	
	.corner4 {
		border-right: 1px solid #000000;
		border-bottom: 1px solid #000000;
		right: 0;
		bottom: 0;
		transition: all .2s ease-in;
	}
	
	.dianzan:hover .corner1 {
		left: -20px;
		top: -20px;
		transition: all .3s ease-out;
	}
	
	.dianzan:hover .corner2 {
		right: -20px;
		top: -20px;
		transition: all .3s ease-out;
	}
	
	.dianzan:hover .corner3 {
		left: -20px;
		bottom: -20px;
		transition: all .3s ease-out;
	}
	
	.dianzan:hover .corner4 {
		right: -20px;
		bottom: -20px;
		transition: all .3s ease-out;
	}
	
	.dianzan_num {
		width: 200px;
		height: 48px;
		margin: 0 auto 80px;
		text-align: center;
		letter-spacing: 2.5px;
		font-size: 14px;
		color: #222;
	}
	
	.dianzan_num span {
		font-size: 16px;
		font-weight: bold;
	}
	/*页码*/
	
	.time_line {
		width: 108px;
		height: 7px;
		margin: 120px auto;
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
		.detail_banner {
			width: 100%;
			height: 474px;
			background: #fbfbfb;
			padding-top: 186px;
		}
		.detail_banner p {
			font-size: 68px;
			color: #515769;
			letter-spacing: 1.5px;
			text-align: left;
			line-height: 120px;
			position: absolute;
			top: 186px;
			animation: moveTop_p 2s ease-out;
		}
		@keyframes moveTop_p {
			from {
				top: 300px;
				opacity: 0;
			}
			to {
				top: 186px;
				opacity: 1;
			}
		}
		@-webkit-keyframes moveTop_p {
			from {
				top: 300px;
				opacity: 0;
			}
			to {
				top: 186px;
				opacity: 1;
			}
		}
		.detail_banner span {
			color: rgba(34, 34, 34, 0.6);
			font-size: 28px;
			letter-spacing: 1.5px;
			line-height: 62px;
			position: absolute;
			top: 306px;
			animation: moveTop_span 2s ease-out;
		}
		@keyframes moveTop_span {
			from {
				top: 400px;
				opacity: 0;
			}
			to {
				top: 306px;
				opacity: 1;
			}
		}
		@-webkit-keyframes moveTop_span {
			from {
				top: 400px;
				opacity: 0;
			}
			to {
				top: 306px;
				opacity: 1;
			}
		}
		.num {
			width: 100%;
			height: 30px;
			position: absolute;
			top: 400px;
			animation: moveTop_num 2s ease-out;
		}
		@keyframes moveTop_num {
			from {
				top: 450px;
				opacity: 0;
			}
			to {
				top: 400px;
				opacity: 1;
			}
		}
		@-webkit-keyframes moveTop_num {
			from {
				top: 450px;
				opacity: 0;
			}
			to {
				top: 400px;
				opacity: 1;
			}
		}
		.num li {
			width: 150px;
			height: 30px;
			font-size: 14px;
			color: #999999;
			line-height: 30px;
			float: left;
			text-indent: 26px;
			letter-spacing: 1.5px;
		}
		.num li:first-child {
			background: url(../img/liulan.png) no-repeat 0 center;
		}
		.num li:last-child {
			background: url(../img/shoucang2.png) no-repeat 0 center;
		}
		/* describe */
		.work_info {
			width: 100%;
			min-height: 160px;
			padding: 46px 0;
		}
		.work_info p {
			width: 100%;
			font-size: 15px;
			color: #515769;
			line-height: 36px;
			letter-spacing: 2.5px;
			word-wrap: break-word;
			word-break: break-all;
		}
		/* pic */
		.work_img {
			width: 100%;
		}
		.work_img ul li {
			width: 100%;
			height: 705px;
			background: #f8f8f8;
			margin-bottom: 28px;
		}
		/*点赞*/
		.dianzan {
			width: 88px;
			height: 88px;
			background: #000000;
			margin: 100px auto 40px;
			position: relative;
			cursor: pointer;
		}
		.dianzan_icon {
			width: 30px;
			height: 32px;
			background: url(../img/dianzan.png) no-repeat;
			position: absolute;
			left: 29px;
			top: 28px;
		}
		.dianzan:hover .dianzan_icon {
			-webkit-animation: Shake .8s both;
			-moz-animation: Shake .8s both;
			-ms-animation: Shake .8s both;
			animation: Shake .8s both
		}
		@-moz-keyframes Shake {
			0% {
				transform: scale(1);
				transform: scale(1)
			}
			10%,
			20% {
				transform: scale(0.9) rotate(-3deg);
				transform: scale(0.9) rotate(-3deg)
			}
			40%,
			80% {
				transform: scale(1.1) rotate(3deg);
				transform: scale(1.1) rotate(3deg)
			}
			60% {
				transform: scale(1.1) rotate(-3deg);
				transform: scale(1.1) rotate(-3deg)
			}
			100% {
				transform: scale(1) rotate(0);
				transform: scale(1) rotate(0)
			}
		}
		@-ms-keyframes Shake {
			0% {
				transform: scale(1);
				transform: scale(1)
			}
			10%,
			20% {
				transform: scale(0.9) rotate(-3deg);
				transform: scale(0.9) rotate(-3deg)
			}
			40%,
			80% {
				transform: scale(1.1) rotate(3deg);
				transform: scale(1.1) rotate(3deg)
			}
			60% {
				transform: scale(1.1) rotate(-3deg);
				transform: scale(1.1) rotate(-3deg)
			}
			100% {
				transform: scale(1) rotate(0);
				transform: scale(1) rotate(0)
			}
		}
		@-webkit-keyframes Shake {
			0% {
				transform: scale(1);
				transform: scale(1)
			}
			10%,
			20% {
				transform: scale(0.9) rotate(-3deg);
				transform: scale(0.9) rotate(-3deg)
			}
			40%,
			80% {
				transform: scale(1.1) rotate(3deg);
				transform: scale(1.1) rotate(3deg)
			}
			60% {
				transform: scale(1.1) rotate(-3deg);
				transform: scale(1.1) rotate(-3deg)
			}
			100% {
				transform: scale(1) rotate(0);
				transform: scale(1) rotate(0)
			}
		}
		@keyframes Shake {
			0% {
				transform: scale(1);
				transform: scale(1)
			}
			10%,
			20% {
				transform: scale(0.9) rotate(-3deg);
				transform: scale(0.9) rotate(-3deg)
			}
			40%,
			80% {
				transform: scale(1.1) rotate(3deg);
				transform: scale(1.1) rotate(3deg)
			}
			60% {
				transform: scale(1.1) rotate(-3deg);
				transform: scale(1.1) rotate(-3deg)
			}
			100% {
				transform: scale(1) rotate(0);
				transform: scale(1) rotate(0)
			}
		}
		.corner1,
		.corner2,
		.corner3,
		.corner4 {
			width: 20px;
			height: 20px;
			position: absolute;
		}
		.corner1 {
			border-top: 1px solid #000000;
			border-left: 1px solid #000000;
			left: 0;
			top: 0;
			transition: all .2s ease-in;
		}
		.corner2 {
			border-top: 1px solid #000000;
			border-right: 1px solid #000000;
			right: 0;
			top: 0;
			transition: all .2s ease-in;
		}
		.corner3 {
			border-bottom: 1px solid #000000;
			border-left: 1px solid #000000;
			left: 0;
			bottom: 0;
			transition: all .2s ease-in;
		}
		.corner4 {
			border-right: 1px solid #000000;
			border-bottom: 1px solid #000000;
			right: 0;
			bottom: 0;
			transition: all .2s ease-in;
		}
		.dianzan:hover .corner1 {
			left: -20px;
			top: -20px;
			transition: all .3s ease-out;
		}
		.dianzan:hover .corner2 {
			right: -20px;
			top: -20px;
			transition: all .3s ease-out;
		}
		.dianzan:hover .corner3 {
			left: -20px;
			bottom: -20px;
			transition: all .3s ease-out;
		}
		.dianzan:hover .corner4 {
			right: -20px;
			bottom: -20px;
			transition: all .3s ease-out;
		}
		/*进度条*/
		.time_line {
			width: 108px;
			height: 7px;
			margin: 120px auto;
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
			cursor: pointer;
		}
		.send button:hover {
			background: #222222;
		}
	}
</style>