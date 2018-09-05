<template>
	<div class="list">
		<div class="list-nav">
			<div class="list-nav-content">
				<div class="list-nav-title">{{ title }}</div>
			</div>
		</div>
		<div class="list-content">
			<div class="list clearfix" v-for="(item,index) in newsList" :data-id="item.id" @click="toDetail(item.id)">
				<div class="fl list-l">{{ item.title }}</div>
				<div class="fr list-r">{{ item.time }}</div>
			</div>

			
			<!-- <div class="block">
				<el-pagination
				  @size-change="handleSizeChange"
				  @current-change="handleCurrentChange"
				  :current-page.sync="currentPage3"
				  :page-size="100"
				  layout="prev, pager, next, jumper"
				  :total="1000">
				</el-pagination>
			</div> -->
			<Pagination :params="params" @returnCurrent="changePage"></Pagination>
			
		</div>
	</div>
</template>

<script>
	import Pagination from '@/components/pagination'
  export default {
   
    data() {
      return {
				params:{"total":150,"pageSize":10},
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
				newsList:[
					{"title":"关于做好2018年市领军拔尖人才武汉大学主题研修班和北京成都深圳三地标杆企业“对标学习”研修班报名工作的通知研修班报名工作的通知研修班报名工作的通知","time":"2018-05-15","id":"1"},
					{"title":"关于举办“海洋新兴产业与环境保护”国家级高级研修班的通知 ","time":"2018-05-15","id":"1"},
					{"title":"关于做好2017年市领军拔尖人才浙大“一带一路”主题研修班和青岛深圳两地标杆企业“对标学习”研修班报名工作的通知 ","time":"2018-05-15","id":"1"},
					{"title":"关于举办互联网+制造业企业转型高级研修班的通知","time":"2018-05-15","id":"1"},
					{"title":"关于举办“全球化带给中国企业的启示”知识更新讲座的通知","time":"2018-05-15","id":"1"},
					{"title":"关于做好2017年企业在职人员攻读研究生学费补贴有关工作的通知 ","time":"2018-05-15","id":"1"},
					{"title":"关于印发宁波市2017年市级专业技术人员高级研修班计划的通知","time":"2018-05-15","id":"1"},
					{"title":"关于印发宁波市专技人才知识更新工程2017年紧缺人才培训项目计划的通知","time":"2018-05-15","id":"1"},
					{"title":"关于举办2016年专业技术人员知识更新讲座的通知（第11期）","time":"2018-05-15","id":"1"},
					{"title":"关于举办宁波市群众文化系列专业技术人员知识更新讲座的通知","time":"2018-05-15","id":"1"},
				],
				title:""
      };
    },
		components:{
			Pagination
		},
		methods: {

			getPrams:function(){
				let _params = window.location.href.split("?params=")[1];
				let params = _params.split("&")
				let _title = decodeURI(params[0]);
				let _url = params[1];
				this.title = _title
			},
			toDetail:function(id){
				let _title =encodeURI(this.title) ;
				this.$router.push({'path':'/newsDetail?params='+id+'&'+_title})
			},
			changePage:function(val){
				console.log(val)
			}
		},
		mounted:function(){
			let that = this;
			this.$nextTick(function(){
				that.getPrams()
			})
		}
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
			width: 920px;height: 600px;border: 1px solid #dcdcdc;margin: 0 auto;margin-bottom: 22px;padding: 10px;
			.list{
				height: 52px;line-height: 52px;border-bottom: 1px dashed #4F4F4F ;font-size: 12px;color: #323232 ;
				&:hover{cursor: pointer;background-color: #F5F6F7;}
				.list-l{width: 650px;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;}
				.list-r{text-align: right;width: 70px;}
			}
		}
	}
</style>