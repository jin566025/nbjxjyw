<template>
	<div class="content">
		<div class="nav-list clearfix">
			<router-link tag="div" :to="item.url" class="nav fl" v-for="(item,index) in navList" :key="index">{{ item.name }}</router-link>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				navList:[
					{"name":"首页","url":"/index"},
					{"name":"专业技术人员","url":"/ptp"},
					{"name":"技能人员","url":"/sp"},
					{"name":"岗位安全资格取证人员","url":"/jsqfp"},
					{"name":"基础课程","url":"/bc"}
				]
			}
		}
	}
</script>

<style lang="less" rel="stylesheet/less" scoped>
	.content{
		background-color: #F03C07;color: #FFBCAD;height: 40px;line-height: 40px;font-family: Roboto;font-size: 14px;
		.nav-list{
			width: 940px;margin:0 auto;
			.nav{width: 150px;height: 100%;text-align: center;cursor: pointer;}
			.router-link-active{color: #fff;}
		}
	}
	
</style>