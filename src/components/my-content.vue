<template>
	<div class="content">

		<div class="content-main">
			<div class="content-title">
				<p class="content-title-p1">{{ title }}</p>
			</div>
			<div class="content-container">
				<p class="content-container-p1">公需科目是指全体专业技术人员必须掌握的政策法律法规、基本理论、技术、信息等方面的普及型知识。公需科目由自治区人力资源和社会保障部门会同有关行政部门、行业组织确定，县级以上人力资源和社会保障部门负责组织实施。</p>
				<img src="../../static/img/content-bg.jpg" class="content-bg" />
			</div>
			<div class="content-title">
				<p class="content-title-p1">{{ title2 }}</p>
			</div>
			<video class="video" src="http://nbzj.chinahrt.com/uploads/media/161031/1-161031142244.mp4" controls="controls"></video>
		</div>
	</div>
</template>

<script>
	export default{
		props:{
			title:{
				type:String,
				default:"专业技术人员课程介绍22"
			},
			title2:{
				type:String,
				default:"专业技术人员课程介绍22"
			}
		}
	}
</script>

<style lang="less" rel="stylesheet/less" scoped>
.content{
	.content-top{height: 70px;border-bottom: 1px solid #DCDCDC;}
	.content-main{
		width: 920px;margin: 0 auto;text-align: center;font-family: Roboto;background-color: #fff;padding-bottom: 20px;
		.content-title{
			padding:34px 0 14px 0;
			.content-title-p1{color: #1E1E1E;font-size: 24px;margin-bottom: 14px;}
			.content-title-p2{color: #969696;font-size: 14px;}
		}
		.content-container{
			padding: 20px 0;border-top: 1px dashed #dcdcdc;
			.content-container-p1{color: #646464;font-size: 14px;width: 840px;margin: 0 auto;text-indent: 2em;text-align: left;}
			.content-bg{width: 920px;height: 138px;margin-top: 40px;}
		}
		.video{width: 100%;}
	}
}
</style>