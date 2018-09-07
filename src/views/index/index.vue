<template>
	<div class="content">

		<div class="section clearfix section">
			<div class="fl section-small section-div">
				<iframe src="http://web.chinahrt.com/ningbojjlogin.html" width="300" height="340" frameborder="0" ></iframe>

				
			</div>
			<div class="fr section-big section-div">
				<More :moreList="more[0]"></More>
				
				<div class="section-news-content">
					<div class="news-top clearfix" >
						<div class="news-top-left fl">
							<img class="news-img" :src="newslist[0].imgUrl" />
						</div>
						<div class="news-top-right fr">
							<p class="news-title">{{ newslist[0].nm }}</p>
							<p class="news-text"  v-html="newslist[0].cont" style="height: 80px;"></p>
							<p class="fr"><span class="detail" @click="toDetail(newslist[0].sysNewsPk,newslist[0].catNm,'aa')">[详情]</span></p>
						</div>
					</div>
					<div class="news-list">
						<div class="news clearfix" v-for="(item,index) in newslist" v-if="index!==0" :key="index" @click="toDetail(item.sysNewsPk,item.catNm,'aa')">
							<div class="fl news-l">{{ item.nm }}</div>
							<div class="fr news-r">{{ (item.updTm).substring(0,10) }}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		

		<div class="section clearfix section">
			<!-- 	通知公告 -->
			<div class="fl section-big section-div">
				<More :moreList="more[1]"></More>
				<div class="tz clearfix" v-for="(item,index) in tzgglist" :key="index" @click="toDetail(item.infoPk,item.catNm)">
					<div class="tz-l fl">
						<img class="tz-img" :src="item.imgUrl" />
					</div>
					<div class="tz-r fr">
						<p class="tz-r-title">{{ item.nm }}</p>
						<p class="tz-content" v-html="item.cont"></p>
					</div>
				</div>
			</div>
			
			<!-- 	政策法规 -->
			<div class="fr section-small section-div">
				<More :moreList="more[2]"></More>
				<div class="raws">
					<div class="raw clearfix" v-for="(item,index) in zcfglist" :key="index" @click="toDetail(item.infoPk,item.catNm)">
						<div class="raw-l fl">{{ item.nm }}</div>
						<div class="raw-r fr">{{ (item.updTm).substring(0,10) }}</div>
					</div>
				
				</div>
			</div>
		</div>
		
		<div class="section clearfix section">
			<!-- 	内部通知 -->
			<div class="fl section-big section-div">
				<More :moreList="more[3]"></More>
				<div class="tz clearfix" style="border-bottom: 1px solid #dcdcdc;margin-bottom: 15px;"  @click="toDetail(nbgglist[0].infoPk,nbgglist[0].catNm)">
					<div class="tz-l fl">
						<img class="tz-img" :src="nbgglist[0].imgUrl" />
					</div>
					<div class="tz-r fr">
						<p class="tz-r-title">{{ nbgglist[0].nm }}</p>
						<p class="tz-content" v-html="nbgglist[0].cont"></p>
					</div>
				</div>
				<div class="news-list">
					<div class="news clearfix" v-for="(item,index) in nbgglist" v-if="index!==0" :key="index" @click="toDetail(item.infoPk,item.catNm)">
						<div class="fl news-l">{{ item.nm }}</div>
						<div class="fr news-r">{{ (item.updTm).substring(0,10) }}</div>
					</div>

				</div>
			</div>
			
			<!-- 	公司制度 -->
			<div class="fr section-small section-div">
				<More :moreList="more[4]"></More>
				<div class="raws">
					<div class="raw clearfix" v-for="(item,index) in gszdlist" :key="index" @click="toDetail(item.infoPk,item.catNm)">
						<div class="raw-l fl">{{ item.nm }}</div>
						<div class="raw-r fr">{{ (item.updTm).substring(0,10) }}</div>
					</div>

				</div>
			</div>
		</div>
	
	
	
	</div>
</template>

<script>
  import { gszdList,nbggList,tzggList,zcfgList,newsList,login,pageList } from '@/api/api'
	import More from '@/components/more'
  export default {
		components:{
			More
		},
  	data(){
  		return{
  			loginFlag:true,
				textDetail:"",
				more:[
					{"name":"新闻热点","img":"./static/img/icon2.png","url":"1"},
					{"name":"通知公告","img":"./static/img/icon3.png","url":"2"},
					{"name":"政策法规","img":"./static/img/icon4.png","url":"3"},
					{"name":"内部通知","img":"./static/img/icon5.png","url":"4"},
					{"name":"公司制度","img":"./static/img/icon6.png","url":"5"}
				],
				gszdlist:[{"nm":"","updTm":"","imgUrl":"","cont":""}],
				nbgglist:[{"nm":"","updTm":"","imgUrl":"","cont":""}],
				tzgglist:[{"nm":"","updTm":"","imgUrl":"","cont":""}],
				zcfglist:[{"nm":"","updTm":"","imgUrl":"","cont":""}],
				newslist:[{"nm":"","updTm":"","imgUrl":"","cont":""}]
  		}
  	},
		created(){
		 this.spliceStr();
		 this.login();
		},

		mounted(){
			this.$nextTick(()=>{
				this.newsList();
				this.tzggList();
				this.zcfgList();
				this.nbggList();
				this.gszdList();
				
				
			})
			
		},
// 		filters:{
// 			cont:function(message){
// 				message = message.substring(0,80)+"......";
// 			}
// 		},
		methods:{
				changeFlag:function(){
					this.loginFlag = !this.loginFlag
				},
				spliceStr:function(){
					let _str = "为贯彻落实局党委4+人社要求，深入推进中心继续教育网络平台建设，近日，市人才培训中心副主任杨义清、继续教育部负责人范正斌一行赴浙江海港集团教培中心范正斌一行赴浙江海港集团教培中心";
					_str = _str.substring(0,80);
					this.textDetail = _str+"......"
				},
				
				toDetail:function(arg1,arg2,arg3){
					arg2 = encodeURI(arg2);
					if(arg3){
						this.$router.push({'path':'/newsDetail?params='+arg1+'&'+arg2+'&'+arg3})
					}else{
						this.$router.push({'path':'/newsDetail?params='+arg1+'&'+arg2})
					}
					
				},
// 				getList:function(url,pageSize,target){
// 				//	let url = "/jj/info/gszdPage";
// 					let query ={"w":[],"o":[],"p":{"n":1,"s":pageSize}};
// 					query = JSON.stringify(query)
// 					query = encodeURI(query);
// 					url = url+"?query="+query;
// 					let _target = target
// 					pageList(url).then((res)=>{
// 						console.log(res)
// 						if(res.status=="200"){
// 							console.log
// 							_target = res.data.data.items;
// 						}
// 					})
// 				},
				gszdList:function(){
					let url = "/jj/info/gszdPage";
					let query ={"w":[],"o":[],"p":{"n":1,"s":10}};
					query = JSON.stringify(query)
					query = encodeURI(query);
					url = url+"?query="+query;
					pageList(url).then((res)=>{
						if(res.status=="200"){
							this.gszdlist = res.data.data.items;
						}
					})
				},
				nbggList:function(){
					let url = "/jj/info/nbggPage";
					let query ={"w":[],"o":[],"p":{"n":1,"s":4}};
					query = JSON.stringify(query)
					query = encodeURI(query);
					url = url+"?query="+query;
					pageList(url).then((res)=>{
						if(res.status=="200"){
							this.nbgglist = res.data.data.items;
						}
					})
				},

				tzggList:function(){
					let url = "/jj/info/tzggPage";
					let query ={"w":[],"o":[],"p":{"n":1,"s":2}};
					query = JSON.stringify(query)
					query = encodeURI(query);
					url = url+"?query="+query;
					pageList(url).then((res)=>{
						console.log(res)
						if(res.status=="200"){
							this.tzgglist = res.data.data.items;
						}
					})
				},
				zcfgList:function(){
					let url = "/jj/info/zcfgPage";
					let query ={"w":[],"o":[],"p":{"n":1,"s":10}};
					query = JSON.stringify(query)
					query = encodeURI(query);
					url = url+"?query="+query;
					pageList(url).then((res)=>{
						if(res.status=="200"){
							this.zcfglist = res.data.data.items;
						}
					})

				},
				newsList:function(){
					newsList().then((res)=>{
						let url = "/sys/news/page";
						let query ={"w":[],"o":[],"p":{"n":1,"s":4}};
						query = JSON.stringify(query)
						query = encodeURI(query);
						url = url+"?query="+query;
						pageList(url).then((res)=>{
							console.log(res)
							if(res.status=="200"){
								this.newslist = res.data.data.items.slice(0,4);
							}
						})

					})
				},
				login:function(){
					let params = {
						username:"admin",
						password:"1124"
					}
					let cookie_name = "zsgjj-token"
					let allcookies = document.cookie.split(";");
					let cookie = "";
					
					for(var i=0;i<allcookies.length;i++){
						let arr = allcookies[i].split("=");
						if(arr[0]==cookie_name){
							cookie = allcookies[i]
						}
					}
					if(cookie){
						
					}else{
						login(params).then((res)=>{
							console.log(res)
						})
					}
					
				}
		}
  }
</script>
<style lang="less" rel="stylesheet/less" scoped>
.content{
	padding-bottom:10px;
	.section{
		width:940px;margin:0 auto;margin-top:10px;
		.section-div{
			height: 340px;border: 1px solid #DCDCDC;border-radius: 5px;font-family: Roboto;background-color: #fff;
			.section-header{
				.section-header-left{
					width: 120px;height: 40px;background-color: #F03C07 ;color: #fff;font-size: 13px;line-height: 40px;text-align: center;border-top-left-radius: 5px;border-bottom-right-radius: 5px;
					.section-header-left-icon{vertical-align: middle;width: 16px;height: 16px;}
					.section-header-left-text{vertical-align: middle;margin-left: 10px;}
				}
				.section-header-left2{width:180px;}
				.section-header-right{
					.login-img{height: 48px;height: 48px;cursor: pointer;margin-top: 5px;margin-right: 5px;}
				}
				.more{
					color: #323232;font-size: 12px;margin-right: 10px;cursor: pointer;margin-top: 10px;
					.more-img{vertical-align: middle;width: 10px;height: 10px;}
					.more-text{vertical-align: middle;}
				}
			}
			.section-content{
				color: #323232 ;font-size: 12px;width: 261px;margin: 0 auto;
				.ewm{width: 142px;height: 142px;display: block;margin: 40px auto 10px auto;}
				.scan{
					width: 142px;margin: 0 auto;
					.scan-left{width: 30px;display: block;margin-top: 5px;}
					.scan-right{
						width: 105px;
						p{height: 20px;line-height: 20px;}
					}
				}
				.section-content-title{margin-top: 10px;}
				.inputs{
					height: 40px;background-color:#E6E6E6 ;border-radius:5px;margin-top: 8px;
					.inputs-left{width: 40px;height: 40px;background-repeat: no-repeat;background-position: center;background-size:20px;border-right: 1px solid #DCDCDC;}
					.username{background-image: url(../../../static/img/username.png);}
					.password{background-image: url(../../../static/img/password.png);}
					.inputs-right{
						input{border: none;background-color: transparent;height: 30px;margin-top: 5px;width:170px;padding-right: 40px;}
						.password2{background-image:url(../../../static/img/keyboard.png) ;background-position: 180px;background-size: 20px;background-repeat: no-repeat;}
					}
				}
				.login{background-color: #0089FF;color: #fff;width: 100%;height: 36px;line-height: 36px;font-size: 14px;text-align: center;margin-top: 26px;border-radius: 5px;cursor: pointer;}
				.forget-register{
					margin-top: 36px;font-size: 12px;font-family: Microsoft Yahei;
					.forget-register-div{cursor: pointer;}
					.register{color: #0089FF;}
				}
				.forget-register2{margin-top: 16px;}
			}
			.section-news-content{
				width: 608px;margin:0 auto;
				.news-top{
					margin-top: 10px;
					.news-top-left{
						.news-img{width: 240px;height: 160px;}
						
					}
					.news-top-right{
						width:350px;color: #101010;font-family: Roboto;
						.news-title{font-size: 16px;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;}
						.news-text{
							font-size: 14px;margin-top: 14px;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp:4;overflow: hidden;text-indent: 2em;line-height: 20px;
							
						}
						.detail{font-size: 14px;cursor: pointer;color: #0089FF;}
					}
				}
				.news-list{
					color: #101010;font-size: 12px;
					.news{
						padding-bottom: 8px;border-bottom: 1px dotted #DCDCDC;margin-top: 5px;height: 20px;line-height: 20px;
						&:hover{cursor: pointer;border-bottom: 1px dashed #dcdcdc;}
						.news-l{
							width: 500px;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;padding-left:15px;position: relative;
							&:before{position: absolute;border-top: 7px solid transparent;border-bottom: 7px solid transparent;border-left: 10px solid #DB3807 ;content: " ";display: block;left: 0;top: 3px;}
						}
						.news-r{text-align: right;width: 80px;}
					}
				}
			}
			.tz{
				width: 600px;margin: 0 auto;margin-top: 15px;border-bottom: 1px dashed #DCDCDC;padding-bottom: 10px;
				&:hover{cursor: pointer;}
				.tz-l{
					width: 180px;
					

					.tz-img{width: 180px;height: 120px;border-radius: 5px;}
				}
				.tz-r{
					width: 410px;height: 120px;overflow: hidden;
					.tz-r-title{font-size: 14px;color: #1E1E1E;font-family: Roboto;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;}
					.tz-content{margin-top: 20px;color: #787878 ;font-size: 12px;line-height:20px;overflow: hidden;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 4;}
				}
			}
			.news-list{
				color: #101010;font-size: 12px;width: 600px;margin: 0 auto;
				.news{
					padding-bottom: 8px;border-bottom: 1px dotted #DCDCDC;margin-top: 5px;height: 20px;line-height: 20px;
					&:hover{cursor: pointer;border-bottom: 1px dashed #dcdcdc;}
					.news-l{
						width: 500px;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;padding-left:15px;position: relative;
						&:before{position: absolute;border-top: 7px solid transparent;border-bottom: 7px solid transparent;border-left: 10px solid #DB3807 ;content: " ";display: block;left: 0;top: 3px;}
					}
					.news-r{text-align: right;width: 80px;}
				}
			}
			.tz:last-child{border-bottom: none;}
			
			.raws{
				width: 280px;margin: 0 auto;
				.raw{
					height:20px;line-height:20px;color:#787878;font-size:12px;margin-top:8px;
					&:hover{cursor: pointer;border-bottom: 1px dashed #dcdcdc;}
					.raw-l{width: 200px;text-align: left;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
					.raw-r{width: 70px;text-align: right;}
				}
			}
		}
		.section-small{width: 300px;}
		.section-big{width: 630px;}
	}
}

</style>