<template>
	<div class="list">
			<div class="list-nav">
				<div class="list-nav-content">
					<div class="list-nav-title">{{ title }}</div>
				</div>
			</div>
			<div class="list-content">
				<p class="title">市人才培训中心领导赴浙江海港集团开展继续教育需求调研</p>
				<p class="desc">时间:2018-05-04 17:02   作者:nbgly   点击: 32次</p>
				<div class="detail">
					<p>为贯彻落实局党委“4+人社”要求，深入推进中心继续教育网络平台建设，近日，市人才培训中心副主任杨义清、继续教育部负责人范正斌一行赴浙江海港集团教培中心开展继续教育需求调研。集团教培中心副主任顾挺、教研室主任陈新乔热情接待了调研组一行。</p>
					<p>会上，杨义清副主任与顾挺副主任就海港集团继续教育网络学院平台构建、集团经济类和工程类专业课课件订制、高技能人才继续教育公需课学习、线下培训报名系统研发等相关内容展开了深入交流，双方还就计划在“宁波市专业技术人员继续教育网上定制浙江海港集团继续教育专业课模块”等内容达成了共识。</p>
					<p>最后，中心杨义清副主任等一行来到集团教培中心模拟培训室参观调研，详细了解教培中心起重装卸操作人员岗前培训、模拟培训等情况。</p>
					
					<img src="../../../build/logo.png" class="news-img" />
				</div>
				<div class="end">
					<p>上一篇：交通工程技术知识更新讲座</p>
					<p>下一篇：关于做好2018年度省级专业技术人员  高级研修班项目申报工作的通知</p>
				</div>
			</div>
		</div>
</template>

<script>
	export default{
		data(){
			return {
				title:""
			}
		},
		mounted:function(){
			let that = this;
			this.$nextTick(function(){
				that.getParams();
			})
		},
		methods:{
			getParams:function(){
				let _parmas = window.location.href.split("?params=")[1];
				let params = _parmas.split("&");
				let id = params[0];
				let title = params[1];
				this.title = decodeURI(title) ;
			}
		},
	}
</script>

<style lang="less" rel="stylesheet/less" scoped>
	.list{
		width: 100%;font-family: Roboto;
		.list-nav{
			width: 100%;border-bottom: 1px solid #DCDCDC;height: 70px;
			.list-nav-content{
				width: 940px;margin: 0 auto;
				.list-nav-title{color: #101010;font-size: 12px;text-align: center;width: 90px;height: 68px;line-height: 68px;border-bottom: 3px solid #F03C07;}
			}
		}
		.list-content{
			width: 920px;height: 600px;margin: 0 auto;margin-bottom: 22px;padding: 10px;
			.title{color: #1E1E1E;font-size: 24px;margin: 30px auto 16px auto;text-align:  center;}
			.desc{color: #969696 ;font-size: 14px;text-align: center;margin-bottom: 20px;}
			.detail{
				width: 840px;margin: 0 auto;padding: 20px 40px;border-top: 1px dashed #646464;border-bottom: 1px dashed #646464 ;color: #646464;font-size: 14px;
				p{margin-bottom: 8px;text-indent: 2em;}
				.news-img{display: block;margin: 0 auto;}
			}
			.end{width: 840px;margin:25px auto;font-size: 14px;color: #646464;}
			.end p{height: 24px;line-height: 24px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
		}
	}
</style>