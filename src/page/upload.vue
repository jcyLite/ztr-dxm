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
					<div class="sczp">上传作品</div>
					<div class="works_info">
						<div class="sm_title">作品信息</div>
						<input v-model="biaoti" type="text" name="works_name" id="" placeholder="mingzi"/>
						
						<select v-model="fenlei" name="works_fl" id="">
							<option value="ui">UI</option>
							<option value="web">网页</option>
							<option value="illustration">插画</option>
							<option value="animation">动效</option>
							<option value="Photography">摄影</option>
						</select>
						<input v-model="miaoshu" type="text" name="works_describe" id="" placeholder="miaoshu"/>
					</div>
					<div class="upload_img">
						<div class="sm_title">上传图片</div>
						<div :style="{'background-image':`url(${item})`}" v-for="(item,index) of imgs" class="img_container">
							<div @click="imgs.splice(index,1)" class="delete"></div>
						</div>
						<div @click="add_area" class="add_area">
							
							<div class="add_img">
								<div class="add_plus"></div>
								<p>点击添加<br/>支持上传jpg、png、RGB格式文件</p>
								<input ref="uploadImg" type="file" id="file" class="filepath" @change="addaimg" accept="image/jpg,image/jpeg,image/png,image/PNG">
							</div>
							
						</div>
					</div>
					<div class="add_tips">
						<div class="sm_title">添加标签</div>
						<div class="tips_area">
							<input v-model="biaoqian" type="text" name="tips" id="" placeholder="biaoqian"/>
							<div class="tips_btn">add</div>
						</div>
					</div>
					<div class="upload_video">
						<div class="sm_title">上传视频</div>
						<div class="video_area">
							<div class="upload_btn">
								<input ref="uploadVideo" @change="uploadVideo" type="file" value="upload" />upload
							</div>
							
							<!-- <input type="button" value="import" /> -->
						</div>
					</div>
					<div class="upload_cover">
						<div class="sm_title">上传封面</div>
						<div class="cover_area">
							<div :style="{'background-image':`url(${cover})`}" v-if="cover" class="cover_img">
							</div>
							<div v-if="!cover" class="cover_img">
								<div class="add_cover"></div>
								<p>点击添加封面</p>
								
							</div>
							<input ref="uploadCover" type="file" id="file" class="filepath" @change="addaCover" accept="image/jpg,image/jpeg,image/png,image/PNG">
						</div>
					</div>
					<div class="publish_area">
						<div @click="tijiao" class="publish">tijiao</div>
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
		data(){
			return {
				biaoti:'mingzi',
				fenlei:'',
				miaoshu:'',
				imgs:[],
				cover:'',
				videos:[],
				biaoqian:''
			}
		},
		components:{
			'tk-select':()=>import('../components/select.vue')
		},
		methods:{
			add_area(){
				 var reads = new FileReader();
			},
			addaCover(){
				var f=this.$refs.uploadCover.files[0];
				var reads=new FileReader();
				reads.readAsDataURL(f);
				var that=this;
				reads.onload = function(e) {
				 that.cover=this.result;
				 
				};
			},
			addaimg(){
				var f=this.$refs.uploadImg.files[0];
				var reads=new FileReader();
				reads.readAsDataURL(f);
				var that=this;
				reads.onload = function(e) {
				 that.imgs.push(this.result)
				 
				};
			},
			uploadVideo(){
				window.upload=this;
				var that=this;
				var dom=this.$refs.uploadVideo;
				var f=dom.files[0];
				var reads=new FileReader();
				reads.readAsDataURL(f);
				reads.onload = function(e) {
				 that.videos.push(this.result)
				};
			},
			tijiao(){
				if(!this.$store.state.uid){
					return alert('未登录')
				}else if(!this.biaoti){
					return alert('标题不能为空')
				}else if(!this.fenlei){
					return alert('分类不能为空')
				}else if(!this.imgs.length){
					return alert('未添加图片')
				}else if(!this.cover){
					return alert('未添加封面')
				}
				this.$http.post('upload',{
					uid:this.$store.state.uid,
					biaoti:this.biaoti,
					fenlei:this.fenlei,
					miaoshu:this.miaoshu,
					imgs:this.imgs,
					cover:this.cover,
					videos:this.videos,
					biaoqian:this.biaoqian
				}).then((d)=>{
					if(d.code==0){
						alert('上传成功')
					}
				})
			}
		}
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
	.img_container{
		width:240px;
		height:180px;
		background-size:cover;
		float:left;
		margin: 30px 30px 0 0;
		cursor: pointer;
		position: relative;
		.delete{
			width: 20px;
			height: 20px;
			background: red;
			border-radius: 10px;
			position: absolute;
			right: -5px;
			top: -5px;
		}
		
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
	.upload_tab ul li:first-child a{
		background: #000000;
		color: #FFFFFF;
	}
	.upload_tab ul li:last-child a{
		background: #FFFFFF;
		color: #222;
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
	.sczp{
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
	.works_info select,.works_info option{
		width: 200px;
		height: 42px;
		line-height: 42px;
		background: #f2f2f2;
		padding: 0 20px;
		border: 1px #e5e5e5 solid;
	}
	.add_area{
		width: 100%;
		height: 240px;
		padding: 30px 0;
		.add_img{
			width: 240px;
			height: 100%;
			background-color: #f2f2f2;
			background-repeat: no-repeat;
			background-size: cover;
			background-position: center center;
			cursor: pointer;
			display: flex;
			flex-flow: column nowrap;
			position:relative;
			.add_plus{
				width: 32px;
				height: 32px;
				background-image: url(../img/add_btn.png);
				background-repeat: no-repeat;
				position: absolute;
			    top: 0;
			    left: 0;
			    right: 0;
			    bottom: 86px;
			    margin: auto;
			
			}
			p{
				text-align: center;
				line-height: 28px;
				font-size: 14px;
				color: #999999;
				display: inline-block;
				margin: 70px auto 0;
				letter-spacing: 1.5px;
				padding: 0 10px;
				display: block;
				:last-child{
					margin-top: 0;
				}
			}
			input{
				width: 100%;
				height: 100%;
				position:absolute;
				top:0;
				right:0;
				bottom:0;
				left:0;
				display: block;
				opacity: 0;
				cursor: pointer;
			}
		}
		
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
	.video_area{
		padding: 30px 30px 30px 0;
		.upload_btn{
			width: 240px;
			height: 42px;
			text-align: center;
			line-height: 42px;
			font-size: 14px;
			color: #222;
			background: #f2f2f2;
			cursor: pointer;
			position: relative;
			input{
				width: 100%;
				height: 100%;
				position:absolute;
				top:0;
				right:0;
				bottom:0;
				left:0;
				display: block;
				opacity: 0;
				cursor: pointer;
			}
		}
	}
	.video_area input:first-child{
		background: #000;
		color: #FFFFFF;
	}
	.video_area input:hover{
		background: #000;
		color: #FFFFFF;
	}
	.cover_area{
		width: 100%;
		height: 240px;
		padding: 30px 0;
		position: relative;
		.cover_img{
			width: 240px;
			height: 100%;
			background-color: #f2f2f2;
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center center;
			cursor: pointer;
			display: flex;
			flex-flow: column nowrap;
			position: relative;
			.add_cover{
				width: 32px;
				height: 32px;
				background-image: url(../img/add_btn.png);
				background-repeat: no-repeat;
				position: absolute;
			    top: 0;
			    left: 0;
			    right: 0;
			    bottom: 56px;
			    margin: auto;
			}
			p{
				text-align: center;
				line-height: 28px;
				font-size: 14px;
				color: #999999;
				display: inline-block;
				margin-top: 90px;
				letter-spacing: 1.5px;
				padding: 0 10px;
			}
		
	}
		input{
			width: 240px;
			height: 180px;
			position: absolute;
			top: 30px;
			display: block;
			opacity: 0;
			cursor: pointer;
			
		
		}
	}
	
	.publish_area{
		height: 88px;
		display: flex;
		align-items: center;
		margin-bottom: 40px;
		>div{
			width: 160px;
			height: 44px;
			line-height: 44px;
			margin-right: 30px;
			text-align: center;
			font-size: 15px;
			cursor: pointer;
		}
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
