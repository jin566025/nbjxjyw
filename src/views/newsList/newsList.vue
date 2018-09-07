<template>
	<div class="list">
		<div class="list-nav">
			<div class="list-nav-content">
				<div class="list-nav-title">{{ title }}</div>
			</div>
		</div>
		<div class="list-content">
			<div class="list clearfix" v-for="(item,index) in newsList" :data-id="item.id" @click="toDetail(item.infoPk)">
				<div class="fl list-l">{{ item.nm }}</div>
				<div class="fr list-r">{{ (item.updTm).substring(0,10) }}</div>
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
			<Pagination :total="total" :pageSize="pageSize" @returnCurrent="changePage"></Pagination>
			
		</div>
	</div>
</template>

<script>
	import Pagination from '@/components/pagination'
	import { detailList } from '@/api/api'
  export default {
   
    data() {
      return {
				total:0,
				pageSize:10,
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
				newsList:[],
				title:"",
				currentIndex:1,
				url:""
      };
    },
		components:{
			Pagination
		},
		methods: {

			getPrams:function(){

				let _params = window.location.href.split("?params=")[1];
				let params = _params.split("&")
				let _title = decodeURI(params[1]);
				let _url = params[0];
				let url = "";
				this.title = _title;
				if(_url==1){//新闻热点
					url = "/sys/news/page"
				}else if(_url==2){//通知公告
					url = "/jj/info/tzggPage"
				}else if(_url==3){//政策法规
					url = "/jj/info/zcfgPage"
				}else if(_url==4){//内部通知
					url = "/jj/info/nbggPage"
				}else if(_url==5){//公司制度
					url = "/jj/info/gszdPage"
				}
				this.url = url;
				let query ={"w":[],"o":[],"p":{"n":this.currentIndex,"s":this.pageSize}};
				query = JSON.stringify(query)
				query = encodeURI(query);
				url = url+"?query="+query;
				
				detailList(url).then((res)=>{
					//console.log(res)
					if(res.status==200){
						this.newsList = res.data.data.items
						this.total = res.data.page.total
					}
				})
			},
			toDetail:function(id){
				let _title =encodeURI(this.title) ;
				this.$router.push({'path':'/newsDetail?params='+id+'&'+_title})
			},
			changePage:function(val){
				let query ={"w":[],"o":[],"p":{"n":val,"s":this.pageSize}};
				query = JSON.stringify(query)
				query = encodeURI(query);
				let url = this.url;
				url = url+"?query="+query;
				detailList(url).then((res)=>{
					//console.log(res)
					if(res.status==200){
						this.newsList = res.data.data.items
						this.total = res.data.page.total
					}
				})
			}
		},
		mounted:function(){
			let that = this;
			that.getPrams()
		}
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
	.list{
		width: 100%;font-family: Roboto;
		.list-nav{
			width: 100%;border-bottom: 1px solid #DCDCDC;height: 70px;background-color: #fff;
			.list-nav-content{
				width: 940px;margin: 0 auto;
				.list-nav-title{color: #101010;font-size: 12px;text-align: center;width: 90px;height: 68px;line-height: 68px;border-bottom: 3px solid #F03C07;}
			}
		}
		.list-content{
			width: 920px;height: 600px;border: 1px solid #dcdcdc;margin: 0 auto;margin-bottom: 22px;padding: 10px;background-color: #fff;
			.list{
				height: 52px;line-height: 52px;border-bottom: 1px dashed #4F4F4F ;font-size: 12px;color: #323232 ;
				&:hover{cursor: pointer;background-color: #F5F6F7;}
				.list-l{width: 650px;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;}
				.list-r{text-align: right;width: 70px;}
			}
		}
	}
</style>