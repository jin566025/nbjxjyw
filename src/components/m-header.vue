<template>
	<div>
		<div class="header-welcome">欢迎进入宁波舟山港集团继续教育网！！</div>
		<el-carousel indicator-position="none" arrow="never" :interval="1500" :height="imgHeight">
<!-- 			<el-carousel-item class="banner-img" v-for="item in bannerImg" :key="item" :style="{backgroundImage:'url('+item+')'}"></el-carousel-item> -->
			<el-carousel-item class="banner-img" v-for="item in bannerImg" :key="item">
				<img ref="imgHeights" class="banner-imgs" :src="item" /> 
			</el-carousel-item>
<!-- 			<el-carousel-item class="banner-img">
				<img ref="imgHeights" class="banner-imgs" src="../../static/img/banner1.png" />
			</el-carousel-item>
			<el-carousel-item class="banner-img">
				<img class="banner-imgs" src="../../static/img/banner2.png" />
			</el-carousel-item> -->
		</el-carousel>

	</div>
  
</template>

<script>
	export default{
		props:{
			bannerImg:Array
		},
		data(){
			return {
				//bannerImg:["./static/img/banner1.png","./static/img/banner2.png"],
				imgHeight:'100px'
			}
		},
		mounted(){
			let that = this;
			window.addEventListener('resize', () => {
				that.init()
			}, false)
			this.$nextTick(()=>{
				setTimeout(()=>{
					that.init()
				},500)
			})
			
		},

		methods:{
			init:function(){
				let that = this;
				that.imgHeight = that.$refs.imgHeights[0].height+"px"
			}
		},
	}
</script>

<style lang="less" rel="stylesheet/less" scoped>
	.header-welcome{height: 42px;line-height: 42px;background-color: #0089FF ;font-family: Roboto;font-size: 12px;color: #fff;text-align: right;padding-right: 296px;}
	// .banner-img{background-position: center;background-size: contain;background-repeat: no-repeat;}
	.banner-imgs{width: 100%;display: block;}
	.el-carousel__container:after{clear: both;content: " ";display: block;}
	.el-carousel{height: 100%;}
	.el-carousel__item h3 {
		color: #475669;
		font-size: 18px;
		opacity: 0.75;
		margin: 0;
	}

</style>