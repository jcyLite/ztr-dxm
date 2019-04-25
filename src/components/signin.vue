<template>
	<div class="page-signin">
		<div @click="shadeClick" class="shade">
			
		</div>
			<div class="signin_container">
				<div class="logo"></div>
				<div class="user"><input v-model="uname" type="text" name="" id="" placeholder="请输入用户名"/></div>
				<div class="password"><input v-model="upassword" type="password" name="" id="" placeholder="请输入密码"/></div>
				<div class="signup"><a @click="$emit('shadeClick','openSignUp')">快速注册</a></div>
				<div @click="login" class="login">登录</div>
			</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				uname:'',upassword:''
			}
		},
		methods:{
			shadeClick(){
				this.$emit('shadeClick')
			},
			login(){
				this.$http.post('login',{
					uname:this.uname,
					upassword:this.upassword
				}).then(d=>{
					if(d.code==0){
						this.$store.state.uid=d.uid;
						this.$store.state.uname=d.uname;
						localStorage.setItem('uid',d.uid);
						localStorage.setItem('uname',d.uname);
						this.$emit('shadeClick')
					}
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.page-signin{
		
		width: 100%;
		height: 100vh;
		position: fixed;
		left:0;
		right:0;
		bottom:0;
		top:0;
	}
	.shade{
		width: 100%;
		height: 100vh;
		background: rgba(0,0,0,0.5);
		position: fixed;
		top:0;
	}
	
		.signin_container{
			width: 30%;
			min-width: 500px;
			height: 400px;
			min-height: 300px;
			background: #FFFFFF;
			border-radius: 12px;
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			margin: auto;
			display: flex;
			flex-flow: column wrap;
			align-items: center;
			.logo{
				width: 100px;
				height: 100px;
				background-image: url(../img/logo02.png);
				background-repeat: no-repeat;
				background-position: center center;
				background-size: contain;
			}
			.user,.password{
				width: 80%;
				margin-bottom: 20px;
				
					& input{
					width: 100%;
					height: 56px;
					padding: 0 30px;
					background: #F2F2F2;
					/*border-radius: 8px;*/
					font-size: 14px;
					color: #222222;
				}
			}
			.signup{
				width: 80%;
				height: 36px;
				
				
				a{
					font-size: 14px;
					color: #222222;
					line-height: 36px;
					float: right;
					cursor: pointer;
					&:hover{
						text-decoration: underline #000000;
					}
				}
			}
			.login{
				width: 80%;
				height: 56px;
				background: #000000;
				color: #FFFFFF;
				line-height: 56px;
				text-align: center;
				letter-spacing: 2.5px;
				cursor: pointer;
				margin-top:20px;
				position:absolute; 
				bottom: 40px;
				&:hover{
					background: #222;
				}
			}
			
		}
	
</style>
