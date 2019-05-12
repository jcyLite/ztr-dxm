<template>
	<div class="page-works">

		<top-bar type="b"></top-bar>
		<div class="mine_banner">

		</div>
		<div class="container">
			<div class="user_info">
				<div @click="avatarChange" :style="{'background-image':`url(http://localhost:3334/${avatar})`}" class="user_img">
					{{avatar?'':'上传头像'}}
					<!--<input ref="avatarChange" type="file" @change="avatarChange" accept="image/jpg,image/jpeg,image/png,image/PNG" />-->
				</div>
				<div v-if="$store.state.uname" class="user_name">{{$store.state.uname}}</div>
				<div class="user_job">
					<input ref="user_job" :disabled="disableda" v-model="user_job" type="text" />
					<span :class="{active:!disableda}" @click="edit('disableda','user_job')" class="edit"></span>
				</div>
				<div class="user_zym">
					<input ref="user_zym" :disabled="disabledb" v-model="user_zym" type="text" />
					<span :class="{active:!disabledb}" @click="edit('disabledb','user_zym')" class="edit"></span>
				</div>
			</div>
		</div>

		<div class="clearfix"></div>
		<div class="works_wrap">
			<div class="container">
				<div class="wdzp">
					<div class="categories">
						<div @click="qiehuan('all',true)" class="all fl_active">全部</div>
						<div @click="qiehuan('ui',true)" class="ui">UI</div>
						<div @click="qiehuan('web',true)" class="web">网页</div>
						<div @click="qiehuan('illustration',true)" class="illustration">插画</div>
						<div @click="qiehuan('animation',true)" class="animation">动效</div>
						<div @click="qiehuan('Photography',true)" class="Photography">摄影</div>
					</div>
				</div>

				<div class="box_area">
					<div v-for="item of data">
						<div class="cover-box">
							<div :style="{'background-image':`url(http://localhost:3334/${item.cover})`}" class="cover"></div>
						</div>
						<div class="cover_info">
							<p class="works_name">{{item.biaoti}}</p>
							<p class="works_fenlei">{{item.fenlei}}</p>
							<div><i class="views_img"></i><span>{{item.yulan||0}}</span></div>
							<div><i class="likes_img"></i><span>{{item.dianzhanshu}}</span></div>
						</div>
						<div class="upload_date">{{zhuanhuanshijian(item.timestamp)}}</div>
					</div>

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
		<div v-show="active" class="tailoring-container">
			<div class="black-cloth" @click="active=false"></div>
			<div class="tailoring-content">
				<div class="tailoring-content-one">
					<label title="上传图片" for="chooseImg" class="l-btn choose-btn">
		                    <input ref="file" type="file" accept="image/jpg,image/jpeg,image/png" name="file" id="chooseImg" class="hidden" @change="selectImg">
		                    	选择图片
		                </label>
					<div class="close-tailoring" @click="active=false">×</div>
				</div>
				<div class="tailoring-content-two">
					<div class="tailoring-box-parcel">
						<img id="tailoringImg">
					</div>
					<div class="preview-box-parcel">
						<p>图片预览：</p>
						<div class="square previewImg"></div>
						<div class="circular previewImg"></div>
					</div>
				</div>
				<div class="tailoring-content-three">
					<button @click="a" class="l-btn cropper-reset-btn">复位</button>
					<button @click="b" class="l-btn cropper-rotate-btn">旋转</button>
					<button @click="c" class="l-btn cropper-scaleX-btn">换向</button>
					<button @click="d" class="l-btn sureCut" id="sureCut">确定</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				scrollTop: 0,
				data: [],
				type: 'all',
				avatar: '',
				active: false,
				flagX: true,
				base64url: '',
				user_job: '暂无数据',
				user_zym: '暂无数据',
				disableda: true,
				disabledb: true
			}
		},
		watch: {
			base64url(newV) {
				var that = this;
				that.$http.post('/changeAvatar', {
					uid: that.$store.state.uid,
					avatar: newV
				}).then(d => {
					that.avatar = d.data;
					that.$store.state.avatar = d.data;
					localStorage.setItem('avatar', d.data);
				})
			}
		},
		components: {
			'box': () =>
				import('../components/box.vue')
		},
		methods: {
			edit(disabled, oname) {

				this[disabled] = !this[disabled];
				if(this[disabled]) {
					this.$http.post('/addUser', {
						okey: oname,
						ovalue: this[oname],
						uid: this.$store.state.uid
					}).then(d => {
						localStorage.setItem(oname, this[oname])
					})
				}

			},
			a() {
				$('#tailoringImg').cropper("reset");
			},
			b() {
				$('#tailoringImg').cropper("rotate", 45);
			},
			c() {
				var flagX = this.flagX
				if(flagX) {
					$('#tailoringImg').cropper("scaleX", -1);
					this.flagX = false;
				} else {
					$('#tailoringImg').cropper("scaleX", 1);
					this.flagX = true;
				}
			},
			d() {
				if($("#tailoringImg").attr("src") == null) {
					return false;
				} else {
					var cas = $('#tailoringImg').cropper('getCroppedCanvas'); //获取被裁剪后的canvas
					var base64url = cas.toDataURL('image/png'); //转换为base64地址形式
					this.base64url = base64url;
					//关闭裁剪框
					this.active = false;
				}
			},
			selectImg() {
				var file = this.$refs.file;
				console.log(file.files)
				if(!file.files || !file.files[0]) {
					return;
				}
				var reader = new FileReader();
				reader.onload = function(evt) {
					var replaceSrc = evt.target.result;
					//更换cropper的图片

					$('#tailoringImg').cropper('replace', replaceSrc, false); //默认false，适应高度，不失真
				}
				reader.readAsDataURL(file.files[0]);
			},
			zhuanhuanshijian(timestamp) {
				var a = parseInt((new Date().getTime() - timestamp) / 86400000);
				return a > 365 ? (parseInt(a / 365) + '年' + (a % 365) + '天前') : a ? (a + '天前') : '今天';
			},
			qiehuan(type, isqbz) {
				var isme = true;
				this.$http.post('zuoping', {
					uid: this.$store.state.uid,
					type,
					isqbz,
					isme
				}).then(d => {
					this.data = d;
					this.type = type;
				})
			},
			avatarChange() {
				this.active = true;
				//cropper图片裁剪
				$('#tailoringImg').cropper({
					aspectRatio: 1 / 1, //默认比例
					preview: '.previewImg', //预览视图
					guides: false, //裁剪框的虚线(九宫格)
					autoCropArea: 0.5, //0-1之间的数值，定义自动剪裁区域的大小，默认0.8
					movable: false, //是否允许移动图片
					dragCrop: true, //是否允许移除当前的剪裁框，并通过拖动来新建一个剪裁框区域
					movable: true, //是否允许移动剪裁框
					resizable: true, //是否允许改变裁剪框的大小
					zoomable: false, //是否允许缩放图片大小
					mouseWheelZoom: false, //是否允许通过鼠标滚轮来缩放图片
					touchDragZoom: true, //是否允许通过触摸移动来缩放图片
					rotatable: true, //是否允许旋转图片
					crop: function(e) {
						// 输出结果数据裁剪图像。
					}
				});
				//				var f=this.$refs.avatarChange.files[0];
				//				var reads=new FileReader();
				//				reads.readAsDataURL(f);
				//				var that=this;
				//				reads.onload = function(e) {
				//					that.$http.post('/changeAvatar',{
				//						uid:that.$store.state.uid,
				//						avatar:this.result
				//					}).then(d=>{
				//						console.log('d'+d.data)
				//						that.avatar=d.data;
				//						that.$store.state.avatar=d.data;
				//						localStorage.setItem('avatar',d.data);
				//					})
				//				};
			}
		},
		computed: {
			opt() {
				return this.scrollTop / 300
			}
		},
		mounted() {
			new  this.Rellax('.rellax');
			this.$http.post('/user_info', {
				uid: this.$store.state.uid
			}).then(d => {
				this.user_job = d.data.user_job || '暂无数据';
				this.user_zym = d.data.user_zym || '暂无数据';
			})
			this.avatar = localStorage.getItem('avatar');
			this.qiehuan('all', false);

		}
	}
</script>

<style lang="less" scoped>
	.page-works {
		.mine_banner {
			width: 100%;
			height: 400px;
			background: #eaeaea;
		}
		.works_wrap {
			width: 100%;
			position: relative;
		}
		.user_info {
			max-height: 320px;
			display: flex;
			flex-flow: column nowrap;
			align-items: center;
			position: relative;
			top: -63px;
		}
		.user_img {
			background-size: cover;
			width: 126px;
			height: 126px;
			border-radius: 63px;
			border: 6px #FFFFFF solid;
			overflow: hidden;
			text-align: center;
			line-height: 114px;
			position: relative;
			input {
				width: 100%;
				height: 100%;
				display: block;
				opacity: 0;
				cursor: pointer;
				position: absolute;
				top: 0;
				left: 0;
				border-radius: 50%;
			}
		}
		.user_name {
			font-size: 24px;
			margin-top: 20px;
			color: #222222;
		}
		.user_job {
			font-size: 14px;
			color: #E5E5E5;
			margin-top: 10px;
			position: relative;
			span {
				display: inline-block;
				width: 16px;
				height: 16px;
				background: url(../img/edit.png) no-repeat;
				background-size: cover;
				position: absolute;
				right: -28px;
				cursor: pointer;
				&.active {
					background-image: url(../img/save.png);
				}
				&:hover {
					opacity: 0.6;
				}
			}
		}
		.user_zym {
			font-size: 18px;
			color: #222222;
			margin-top: 14px;
			position: relative;
			span {
				display: inline-block;
				width: 16px;
				height: 16px;
				&.active {
					background-image: url(../img/save.png);
				}
				background: url(../img/edit.png) no-repeat;
				background-size: cover;
				position: absolute;
				right: -28px;
				top: 4px;
				cursor: pointer;
				&:hover {
					opacity: 0.6;
				}
			}
		}
		.cover-box {
			width: 100%;
			height: 210px;
			overflow: hidden;
			.cover {
				width: 100%;
				height: 210px;
				background-size: cover;
				background-position: center center;
				background-repeat: no-repeat;
				overflow: hidden;
				transition: .3s all;
				cursor: pointer;
				transform: scale(1);
				&:hover {
					transform: scale(1.2);
					/*background-size: 120%;*/
				}
			}
		}
		.cover_info {
			width: 100%;
			height: 100px;
			/*background: rgba(0,0,0,0.1);*/
			padding: 15px;
			border-bottom: 1px #E5E5E5 solid;
		}
		.cover_info>div {
			height: 28px;
			float: left;
			margin-right: 20px;
			margin-top: 10px;
		}
		.works_name {
			font-size: 14px;
			color: #222222;
			line-height: 24px;
		}
		.works_fenlei {
			font-size: 12px;
			height: 20px;
			color: #999999;
			line-height: 20px;
		}
		.views_img {
			width: 16px;
			height: 12px;
			display: inline-block;
			background: url(../img/liulan.png) no-repeat center center;
			background-size: contain;
			margin-right: 6px;
		}
		.likes_img {
			width: 12px;
			height: 12px;
			display: inline-block;
			background: url(../img/shoucang2.png) no-repeat center center;
			background-size: contain;
			margin-right: 6px;
		}
		/* 内容区 */
		.wrap {
			width: 100%;
			background: #fff;
			top: 0;
			position: relative;
		}
		.container {
			width: 1170px;
			margin: 0 auto;
		}
		.wdzp {
			width: 100%;
			background: #FFFFFF;
			padding-bottom: 66px;
		}
		.box_area {
			width: 100%;
			max-height: 1140px;
			background: #FFFFFF;
			margin-bottom: 100px;
			/*display: flex;
	flex-flow: row wrap;
	align-items: flex-start;*/
			position: relative;
			overflow: hidden;
			>div {
				width: 270px;
				height: 350px;
				background: #F8F8F8;
				margin: 0 30px 30px 0;
				cursor: pointer;
				position: relative;
				overflow: hidden;
				float: left;
				.upload_date {
					width: 100%;
					padding: 0 15px;
					line-height: 40px;
					text-align: right;
					letter-spacing: 1.5px;
					font-size: 14px;
					color: #222222;
				}
				&:nth-child(4n) {
					margin-right: 0;
				}
			}
		}
		.categories {
			height: 30px;
			width: 570px;
			margin: 0 auto;
			display: flex;
			div {
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
				.more {
					color: #FFFFFF;
				}
			}
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
	}
</style>