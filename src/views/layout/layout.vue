<template>
	<div id="content">
		<MHeader ></MHeader>
		<HeaderNav></HeaderNav>
		<router-view></router-view>
		<MFooter></MFooter>
	</div>
	
</template>

<script>
	import MHeader from '@/components/m-header'
	import HeaderNav from '@/components/header-nav'
	import MFooter from '@/components/m-footer'
	export default{
		components:{
			MHeader,
			HeaderNav,
			MFooter
		},
		data(){
			return {
				bannerImg:["./static/img/banner1.png","./static/img/banner2.png"]
			}
		},
		methods:{
			
		}
		
	}
</script>

<style lang="less" rel="stylesheet/less" scoped>
#content{
	width: 100%;min-width: 1440px;margin: 0 auto;background-color: #F5F5F5;
}
</style>