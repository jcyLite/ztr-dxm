<template>
	<div :style="{height:`${height}px`}" class="box_area">
		<div @click="$router.push({
			path:'/detail',
			query:{
				zid:item.zid,
				from:$router.currentRoute.path
			}
		})" :style="{'top':`${item.top}px`}" class="img_container" v-for="item of data">
			<div class="shade">
				<div class="works_title">{{item.biaoti}}</div>
				<div class="works_categories">{{item.fenlei}}</div>
				<div class="works_author">
					<div class="user_img"></div>
					<div v-if="$store.state.uname" class="user_name">{{$store.state.uname}}</div>
				</div>
				<div :class="{active:item.medianzhan}" @click.stop="works_likes(item)" class="works_likes"></div>
				
			</div>
			<img style="width:370px;" :src="'http://localhost:3334/'+item.cover" alt="" />
		</div>
	</div>
</template>

<script>
	export default {
		props:['d'],
		data(){
			return {
				data:[],
				top:[0,0,0],
				height:0
			}
		},
		watch:{
			d(){
				this.loadImage();
			}
		},
		methods:{
			works_likes(item){
				this.$http.post('works_likes',{
					uid:this.$store.state.uid,
					zid:item.zid
				}).then(d=>{
					if(d.code==0){
						item.medianzhan=!item.medianzhan
					}
				})
			},
			loadImage(){
				var that=this;
				this.data=[];
				this.top=[0,0,0];
				var d=this.d;
				d.forEach((item) => {
					var img = new Image();
					img.src = 'http://localhost:3334/' + item.cover;
					img.onload = function() {
						item.top = that.top[that.data.length % 3];
						that.top[that.data.length % 3] += this.height / this.width * 370 + 30;
						that.data.push(item);
						//最后一次
						if(that.data.length == d.length) {
							that.height = that.top.sort((a, b) => {
								return a - b
							})[2]
						}
					}
				})
			}
		},
		mounted(){
			var that=this;
			if(!this.d){
				return
			}else if(this.d.length){
				this.loadImage();
			}else{
				console.error('未传入参数d')
			}
			
		}
	}
</script>

<style lang="less" scoped>
/*.box_area>div {
		width: 370px;
		position: absolute;
		overflow: hidden;
		cursor: pointer;
		animation: showBox .5s ease-in;
	}
	@keyframes showBox{
		from{
			transform: scale(0);
		}
		to{
			transform: scale(1);
		}
	}*/
	@keyframes showBox{
		from{
			transform: scale(.5) translateY(90%) translateX(10%);
			opacity: 0;
			
		}
		to{
			transform: scale(1) translateY(0) translateX(0);
			opacity: 1;
		}
	}
	.box_area {
		width: 100%;
		height: 920px;
		background: #FFFFFF;
		position: relative;
		display: flex;
		flex-flow: column wrap;
		justify-content: flex-start;
		align-items: center;
		position: relative;
		>.img_container {
			animation: showBox .8s ease-in-out;
			height: auto;
			cursor: pointer;
			position: absolute;
			overflow: hidden;
			&:nth-child(3n+1) {
				left: 0;
			}
			&:nth-child(3n+2) {
				left: 400px;
			}
			&:nth-child(3n+3) {
				left: 800px;
			}
			&:hover {
				.shade {
					transform: translateY(0%);
				}
			}
			.shade {
				transition: .5s all;
				transform: translateY(101%);
				width: 100%;
				position: absolute;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-flow: column;
				height: 100%;
				background: rgba(0, 0, 0, .5);
				.works_title {
					font-size: 28px;
					color: #fff;
					text-align: center;
					position: relative;
					letter-spacing: 2.5px;
					&::before {
						display: block;
						content: ' ';
						width: 80px;
						height: 1px;
						background: #fff;
						position: absolute;
						top: -10px;
						left: 50%;
						transform: translate(-50%, -50%);
					}
					&::after {
						display: block;
						content: ' ';
						width: 80px;
						height: 1px;
						background: #fff;
						position: absolute;
						bottom: -20px;
						left: 50%;
						transform: translate(-50%, -50%);
					}
				}
				.works_categories {
					font-size: 16px;
					color: rgba(255, 255, 255, 0.8);
					margin-top: 40px;
					letter-spacing: 1.5px;
				}
				.works_author {
					width: 100%;
					position: absolute;
					bottom: 0;
					left: 0;
					display: flex;
					flex-flow: row nowrap;
					align-items: center;
					padding: 20px;
					.user_img {
						width: 32px;
						height: 32px;
						background: rgba(255, 255, 255, 0.1);
						border: 2px #fff solid;
						border-radius: 16px;
						background-size: contain;
					}
					.user_name {
						font-size: 14px;
						color: #fff;
						text-indent: 15px;
					}
				}
				.works_likes {
					width: 27px;
					height: 24px;
					background-image: url(../img/shoucang.png);
					position: absolute;
					top: 20px;
					right: 20px;
					&.active{
						background-image: url(../img/shoucang3.png);
					}
				}
			}
		}
	}
</style>