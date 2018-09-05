<template>
	<div class="section-header clearfix">
		<div class="section-header-left fl">
			<img :src="moreList.img" class="section-header-left-icon" />
			<span class="section-header-left-text">{{ moreList.name }}</span>
		</div>
		<div class="section-header-right more fr"  @click="toList(moreList.name,moreList.url)">
			<span class="more-text">查看更多</span>
			<img src="../../static/img/more.png" class="more-img" />
		</div>
	</div>



</template>

<script>
	export default{
		props:{
			moreList:Object
		},
		methods:{
			toList:function(name,url){
				let _name = encodeURI(name);
				this.$router.push({'path':'/newsList?params='+_name+'&'+url})
			}
		},
	}

</script>

<style lang="less" rel="stylesheet/less" scoped>
.section-header{
	.section-header-left{
		width: 120px;height: 40px;background-color: #F03C07 ;color: #fff;font-size: 13px;line-height: 40px;text-align: center;border-top-left-radius: 5px;border-bottom-right-radius: 5px;
		.section-header-left-icon{vertical-align: middle;width: 16px;height: 16px;}
		.section-header-left-text{vertical-align: middle;margin-left: 10px;}
	}
	.section-header-right{
		.login-img{height: 48px;height: 48px;cursor: pointer;margin-top: 5px;margin-right: 5px;}
	}
	.more{
		color: #323232;font-size: 12px;margin-right: 10px;cursor: pointer;margin-top: 10px;
		.more-img{vertical-align: middle;width: 10px;height: 10px;}
		.more-text{vertical-align: middle;}
	}
}
</style>