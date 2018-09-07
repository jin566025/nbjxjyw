<template>
	<div class="list">
			<div class="list-nav">
				<div class="list-nav-content">
					<div class="list-nav-title">{{ title }}</div>
				</div>
			</div>
			<div class="list-content">
				<p class="title">{{ detail.nm }}</p>
				<p class="desc">时间:&nbsp;&nbsp;{{ detail.updTm }}&nbsp;&nbsp;&nbsp;&nbsp;作者:&nbsp;&nbsp;{{ detail.updTm }}&nbsp;&nbsp;&nbsp;&nbsp;点击:&nbsp;&nbsp;{{ detail.readQty || 0}}次</p>
				<div class="detail">
					<p v-html="detail.cont"></p>
					<img :src="detail.imgUrl" class="news-img" />
				</div>

			</div>
		</div>
</template>

<script>
	import { detail } from '@/api/api'
	export default{
		data(){
			return {
				title:"",
				detail:"",
				news:false
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
				let url
				if(params.length==3){
					url = "/sys/news/info/"+id;
					this.news = true
				}else{
					url = "/jj/info/info/"+id;
				}
				
				
				detail(url).then((res)=>{
					if(res.status==200){
						this.detail = res.data.data
					}
				})
			}
		},
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
			width: 920px;margin: 0 auto;padding: 10px;background-color: #fff;
			.title{color: #1E1E1E;font-size: 24px;margin: 30px auto 16px auto;text-align:  center;}
			.desc{color: #969696 ;font-size: 14px;text-align: center;margin-bottom: 20px;}
			.detail{
				width: 840px;margin: 0 auto;padding: 20px 40px;border-top: 1px dashed #646464;border-bottom: 1px dashed #646464 ;color: #646464;font-size: 14px;
				p{margin-bottom: 8px;text-indent: 2em;}
				.news-img{display: block;margin: 0 auto;width: 840px;}
			}
			.end{width: 840px;margin:25px auto;font-size: 14px;color: #646464;}
			.end p{height: 24px;line-height: 24px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;cursor: pointer;}
		}
	}
</style>