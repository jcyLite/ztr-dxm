<template>
	<div class="page-signup">
		<div @click="$emit('shadeupClick')" class="shade">
			
		</div>
		<div class="signin_wrapper">
			<div class="signin_container">
				<div class="logo"></div>
				<div class="user"><input v-model="yhm" type="text" name="" id="" placeholder="请输入用户名"/></div>
				<div class="password"><input v-model="mima" type="password" name="" id="" placeholder="请输入密码"/></div>
				<div class="password"><input v-model="mimahd" type="password" name="" id="" placeholder="请再次输入密码"/></div>
				
				<div @click="zc" class="login">注册</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				yhm:'',
				mima:'',
				mimahd:''
			}
		},
		methods:{
			zc(){
				if(!(this.yhm&&this.mima&&this.mimahd)){
					return alert('不能有一个input为空')
				}else if(this.mima!=this.mimahd){
					return alert('密码要一致')
				}
				this.$http.post('regist',{
					uname:this.yhm,
					upassword:this.mima
				}).then(d=>{
					if(d.code==0){
						this.yhm='';
						this.mima='';
						this.mimahd=''
						this.$emit('shadeupClick','openSignIn')
					}else{
						alert(d.msg)
					}
				})
				
			}
		}
	}
</script>

<style lang="less" scoped>
	.page-signup{
			
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
			height: 45%;
			min-height: 400px;
			background: #FFFFFF;
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			margin: auto;
			/*border-radius: 16px;*/
			display: flex;
			flex-flow: column nowrap;
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
				bottom: -10px;
				&:hover{
					background: #222;
				}
			}
			
		}

</style>
