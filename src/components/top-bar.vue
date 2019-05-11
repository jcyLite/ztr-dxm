<template>
	<div :style="type=='b'?{'box-shadow':`5px 5px 10px rgba(0,0,0,${shadeOpt})`,'background-color':`rgba(255,255,255,${opt})`}:{'background-color':`rgba(40,40,40,${opt})`}" class="top_bar" :class="[type]">
		<div :class="{topactive}" class="nav">
			<div class="logo">
				<a @click="$router.push('/main')"></a>
			</div>
			<div :class="{active:tabactive}" @click="tabactive=!tabactive" class="tab">
				<div class="hx_1"></div>
				<div class="hx_2"></div>
				<div class="hx_3"></div>
			</div>
			<div class="menu">
				<ul :class="{active:tabactive}">
					<li :class="{active:index==0}">
						<a @click="$router.push('/main')">home</a>
					</li>
					<li :class="{active:index==1}">
						<a @click="$router.push('/works')">works</a>
					</li>
					<li :class="{active:index==2}">
						<a @click="$router.push('/about_me')">about me</a>
					</li>
					<li :class="{active:index==3}">
						<a @click="$router.push('/contact')">contact</a>
					</li>
					<li v-show="!$store.state.uid" :class="{active:index==4}">
						<a @click="bindex=index,index=4,signinShow=true">signin</a>
					</li>
					<li v-show="!$store.state.uid" :class="{active:index==5}">
						<a @click="bindex=index,index=5,signupShow=true">signup</a>
					</li>
				</ul>
			</div>
			<div @click="$router.push('/mine')" class="user_info">
				<div :style="{'background-image':`url(http://localhost:3334/${$store.state.avatar})`}" v-if="$store.state.uname" class="user_img"></div>
				<div v-if="$store.state.uname" class="user_id">
					{{$store.state.uname}}
				</div>
			</div>
			<div @mouseover="hoverActive=true" :class="{active:$store.state.uid&&hoverActive}" class="sign_list">
				<div @click="sign_out">sign out</div>
			</div>
		</div>
		<div v-show="opt>5" class="backtop">
			<a href="#">TOP</a>
		</div>
		<signin @shadeClick="shadeClick" v-show="signinShow"></signin>
		<signup @shadeupClick="shadeupClick" v-show="signupShow"></signup>
	</div>
</template>

<script>
	import signin from './signin.vue'
	import signup from './signup.vue'
	var tabactive = false;
	export default {
		props: ['type'],
		components: {
			signin,
			signup
		},
		data() {
			return {
				hoverActive:false,
				tabactive: tabactive,
				scrollTop: 0,
				signinShow: false,
				signupShow: false,
				bindex: 0,
				index: 0
			}
		},
		watch: {
			signinShow(newV) {
				!newV && (this.index = this.bindex)
			},
			signupShow(newV) {
				!newV && (this.index = this.bindex)
			}
		},
		methods: {
			sign_out() {
				this.$store.state.uid = '';
				this.$store.state.uname = '';
				localStorage.removeItem('uid');
				localStorage.removeItem('uname');
				localStorage.removeItem('avatar');
				window.location.reload();
			},
			shadeClick(type) {
				if(type == 'openSignUp') {
					this.signupShow = true;
				}
				this.signinShow = false;
			},
			shadeupClick(type) {
				if(type == 'openSignIn') {
					this.signinShow = true;
				}
				this.signupShow = false;
			},
			signin() {

			},
			signup() {}
		},
		computed: {
			opt() {
				return this.scrollTop / 100
			},
			shadeOpt() {
				if(this.opt < 1) {
					return this.opt / 5
				} else {
					return 0.2
				}
			},
			topactive() {
				return this.scrollTop / 100 > 1
			}
		},
		beforeDestroy() {
			tabactive = this.tabactive;
		},
		mounted() {
			var that = this;
			var uid = localStorage.getItem('uid')
			var uname = localStorage.getItem('uname')
			this.$store.state.avatar = localStorage.getItem('avatar') || this.$store.state.avatar;
			this.$store.state.uid = uid || '';
			this.$store.state.uname = uname || '';
			var arr = ['/main', '/works', '/about_me', '/contact'];
			console.log(this.$router.currentRoute.path)
			if(this.$router.currentRoute.path == '/detail') {
				if(this.$route.query.from == '/works') {
					this.index = 1
				} else {
					this.index = 0
				}
			} else {
				this.index = arr.indexOf(this.$router.currentRoute.path);
			}
			window.onscroll = function() {
				that.scrollTop = window.scrollY;
			}
		}
	}
</script>

<style lang="less">
	.top_bar {
		background: rgba(0, 0, 0, 0);
		width: 100%;
		position: fixed;
		top: 0;
		z-index: 100000;
		.nav {
			width: 80%;
			height: 110px;
			position: relative;
			margin: 0 auto;
			top: 0;
		}
		.logo a {
			width: 100%;
			height: 100%;
			display: block;
			position: absolute;
			cursor: pointer;
		}
		.tab {
			width: 26px;
			height: 23px;
			position: absolute;
			right: 0;
			top: 43.5px;
			cursor: pointer;
			>div {
				opacity: 1;
				transition: .3s all;
				transform: translateY(0px) rotateZ(0deg);
			}
			&.active {
				>div:nth-child(1) {
					transform: translateY(10px) rotateZ(135deg);
				}
				>div:nth-child(2) {
					transform: rotateZ(45deg);
				}
				>div:nth-child(3) {
					opacity: 0;
					transform: translateY(-10px) rotateZ(135deg);
				}
			}
		}
		.tab>div:first-child {
			margin-top: 0;
		}
		.tab:hover:not(.active) div:first-child {
			top: -2.5px;
		}
		.tab:hover:not(.active) div:last-child {
			transition: top 100ms ease-out;
			top: 2.5px;
		}
		.backtop {
			width: 56px;
			height: 56px;
			background-color: #f2f2f2;
			background-image: url(../img/backtop.png);
			background-repeat: no-repeat;
			background-position: center 4px;
			position: fixed;
			right: 60px;
			bottom: 120px;
			cursor: pointer;
			z-index: 10001;
		}
		.backtop a {
			display: block;
			width: 100%;
			height: 100%;
			color: #9b9b9b;
			font-size: 14px;
			text-align: center;
			line-height: 76px;
		}
		.logo {
			width: 83px;
			height: 23px;
			position: absolute;
			left: 0;
			top: 43.5px;
		}
		.tab>div {
			width: 28px;
			height: 2px;
			margin-top: 8px;
			position: relative;
			top: 0;
		}
		.menu {
			position: absolute;
			right: 230px;
			height: 100%;
			overflow: hidden;
			ul {
				&.active {
					transform: translateX(0);
				}
				transition:.3s all;
				display:flex;
				transform:translateX(101%);
				justify-content: center;
				align-items: center;
				flex-flow: row nowrap;
				li {
					padding: 0 30px;
					line-height: 110px;
					font-size: 15px;
					cursor: pointer;
				}
			}
		}
		.user_info {
			position: absolute;
			right: 50px;
			top: 25px;
			display: flex;
			justify-content: center;
			align-items: center;
			.user_img {
				background-size:cover;
				width: 32px;
				height: 32px;
				border-radius: 16px;
				margin-right: 10px;
				cursor: pointer;
			}
			.user_id {
				width: 80px;
				font-size: 14px;
				line-height: 60px;
				word-wrap: break-word;
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
				cursor: pointer;
			}
			
		}
		.sign_list {
				width: 140px;
				display: flex;
				min-height: 80px;
				opacity: 0;
				justify-content: space-around;
				align-items: center;
				flex-flow: column nowrap;
				background: #444;
				position: absolute;
				top: 85px;
				right: 0;
				z-index: 10;
				transition:.3s all;
				&.active{
					opacity: 1;
				}
				>div {
					width: 100%;
					line-height: 56px;
					font-size: 14px;
					display: flex;
					flex-flow: column nowrap;
					justify-content: center;
					flex: 1;
					text-align: center;
					color: #fff;
					&:hover {
						background: rgba(0, 0, 0, 0.2);
					}
				}
			}
		&.a {
			.user_id {
				color: #FFFFFF;
			}
			.menu ul li {
				color: #fff;
				&.a {
					display: block;
					width: 100%;
					height: 100%;
				}
				&:hover a {
					color: #FFFFFF;
				}
				&:after {
					content: ' ';
					display: block;
					width: 0;
					height: 2px;
					background: #FFFFFF;
					clear: both;
					position: relative;
					top: -40px;
					transition: width .3s ease-in;
				}
				&:hover:after {
					content: ' ';
					display: block;
					width: 30px;
					height: 2px;
					background: #FFFFFF;
					clear: both;
					transition: width .5s ease-out;
				}
				&.active:after {
					content: ' ';
					display: block;
					width: 20px;
					height: 2px;
					background: #FFFFFF;
					clear: both;
				}
			}
			.logo {
				background: url(../img/logo01.png) no-repeat;
			}
			.tab>div {
				background: #FFFFFF;
			}
		}
		&.b {
			.user_id {
				color: #222;
			}
			box-shadow:5px 5px 10px rgba(0, 0, 0, 0.2);
			.menu ul li {
				color: #000;
				&.a {
					display: block;
					width: 100%;
					height: 100%;
				}
				&:hover a {
					color: #000;
				}
				&:after {
					content: ' ';
					display: block;
					width: 0;
					height: 2px;
					background: #000;
					clear: both;
					position: relative;
					top: -40px;
					transition: width .3s ease-in;
				}
				&:hover:after {
					content: ' ';
					display: block;
					width: 30px;
					height: 2px;
					background: #000;
					clear: both;
					transition: width .5s ease-out;
				}
				&.active:after {
					content: ' ';
					display: block;
					width: 20px;
					height: 2px;
					background: #000;
					clear: both;
				}
			}
			.logo {
				background: url(../img/logo02.png) no-repeat;
			}
			.tab>div {
				background: #000000;
			}
		}
	}
</style>