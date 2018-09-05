<template>
	<div class="content">
		
		<div class="section clearfix section">
			<div class="fl section-small section-div">
				<div class="section-header clearfix" v-if="loginFlag" @click="changeFlag">
					<div class="section-header-left fl">
						<img src="../../../static/img/icon1.png" class="section-header-left-icon" />
						<span class="section-header-left-text">欢迎登录</span>
					</div>
					<div class="section-header-right fr">
						<img src="../../../static/img/login1.png" class="login-img" />
					</div>
				</div>
				<div class="section-header clearfix" v-else="loginFlag"  @click="changeFlag">
					<div class="section-header-left section-header-left2 fl">
						<img src="../../../static/img/icon1.png" class="section-header-left-icon" />
						<span class="section-header-left-text">手机扫码，安全登录</span>
					</div>
					<div class="section-header-right fr">
						<img src="../../../static/img/login2.png" class="login-img" />
					</div>
				</div>
				
				<div class="section-content"  v-if="loginFlag">
					<p class="section-content-title">用户名</p>
					<div class="inputs clearfix">
						<div class="inputs-left fl username"></div>
						<div class="inputs-right fr"><input  autocomplete="off" type="text"  /></div>
					</div>
					<p class="section-content-title">密码</p>
					<div class="inputs clearfix">
						<div class="inputs-left fl password"></div>
						<div class="inputs-right fr"><input class="password2" autocomplete="off" type="text"  /></div>
					</div>
					
					<div class="login">登录</div>
					
					<div class="clearfix forget-register">
						<div class="fr forget-register-div register">免费注册</div>
						<div class="fr forget-register-div ">忘记密码？</div>
						
					</div>
				</div>
								
				<div class="section-content" v-else>
					<img class="ewm" src="../../../static/img/ewm.png" />
					
					<div class="scan clearfix">
						<img src="../../../static/img/scan.png" class="scan-left fl" />
						<div class="scan-right fr">
							<p>打开手机APP</p>
							<p>扫一扫登录</p>
						</div>
					</div>
					
					<div class="clearfix forget-register forget-register2">
						<div class="fr forget-register-div register">免费注册</div>
						<div class="fr forget-register-div ">忘记密码？</div>
						
					</div>
				</div>
				
			</div>
			<div class="fr section-big section-div">
				<More :moreList="more[0]"></More>
				
				<div class="section-news-content">
					<div class="news-top clearfix">
						<div class="news-top-left fl">
							<img class="news-img" src="../../../static/img/news.png" />
						</div>
						<div class="news-top-right fr">
							<p class="news-title">以案说税：一则虚开增值税专用发票案揭示煤炭行业涉税风险</p>
							<p class="news-text">{{ textDetail }}<span class="detail">[详情]</span></p>
						</div>
					</div>
					<div class="news-list">
						<div class="news clearfix">
							<div class="fl news-l">关于举办互联网关于举办互联网关于举办互联网关于举办互联网+制造业企业转型高级研修班的通知</div>
							<div class="fr news-r">2018-05-14</div>
						</div>
						<div class="news clearfix">
							<div class="fl news-l">关于举办互联网关于举办互联网关于举办互联网关于举办互联网+制造业企业转型高级研修班的通知</div>
							<div class="fr news-r">2018-05-14</div>
						</div>
						<div class="news clearfix">
							<div class="fl news-l">关于举办互联网关于举办互联网关于举办互联网关于举办互联网+制造业企业转型高级研修班的通知</div>
							<div class="fr news-r">2018-05-14</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div class="section clearfix section">
			<div class="fl section-big section-div">
				<More :moreList="more[1]"></More>
				<div class="tz clearfix">
					<div class="tz-l fl">
						<img class="tz-img" src="../../../static/img/news.png" />
					</div>
					<div class="tz-r fr">
						<p class="tz-r-title">贯彻实施《专业技术人员继续教育规定》的通知</p>
						<p class="tz-content">各省、自治区、直辖市及新疆生产建设兵团人力资源社会保障厅（局），国务院各部委、各直属机构人事部门，有关单位：专业技术人员继续教育规定》（人力资源社会保障部令第25号，以下简称《规定》），于2015年8月13日公布，自2015年10月1日起施行。</p>
					</div>
				</div>
				
				<div class="tz clearfix">
					<div class="tz-l fl">
						<img class="tz-img" src="../../../static/img/news.png" />
					</div>
					<div class="tz-r fr">
						<p class="tz-r-title">广西壮族自治区专业技术人才队伍建设中长期规划</p>
						<p class="tz-content">各省、自治区、直辖市及新疆生产建设兵团人力资源社会保障厅（局），国务院各部委、各直属机构人事部门，有关单位：专业技术人员继续教育规定》（人力资源社会保障部令第25号，以下简称《规定》），于2015年8月13日公布，自2015年10月1日起施行。</p>
					</div>
				</div>
			</div>
			<div class="fr section-small section-div">
				<More :moreList="more[2]"></More>
				<div class="raws">
					<div class="raw clearfix">
						<div class="raw-l fl">关于进一步推进专业技术人员继续专业技术人员继续</div>
						<div class="raw-r fr">2018-05-10</div>
					</div>
					<div class="raw clearfix">
						<div class="raw-l fl">关于进一步推进专业技术人员继续专业技术人员继续</div>
						<div class="raw-r fr">2018-05-10</div>
					</div>
					<div class="raw clearfix">
						<div class="raw-l fl">关于进一步推进专业技术人员继续专业技术人员继续</div>
						<div class="raw-r fr">2018-05-10</div>
					</div>
					<div class="raw clearfix">
						<div class="raw-l fl">关于进一步推进专业技术人员继续专业技术人员继续</div>
						<div class="raw-r fr">2018-05-10</div>
					</div>
					<div class="raw clearfix">
						<div class="raw-l fl">关于进一步推进专业技术人员继续专业技术人员继续</div>
						<div class="raw-r fr">2018-05-10</div>
					</div>
					<div class="raw clearfix">
						<div class="raw-l fl">关于进一步推进专业技术人员继续专业技术人员继续</div>
						<div class="raw-r fr">2018-05-10</div>
					</div>
					<div class="raw clearfix">
						<div class="raw-l fl">关于进一步推进专业技术人员继续专业技术人员继续</div>
						<div class="raw-r fr">2018-05-10</div>
					</div>
					<div class="raw clearfix">
						<div class="raw-l fl">关于进一步推进专业技术人员继续专业技术人员继续</div>
						<div class="raw-r fr">2018-05-10</div>
					</div>
					<div class="raw clearfix">
						<div class="raw-l fl">关于进一步推进专业技术人员继续专业技术人员继续</div>
						<div class="raw-r fr">2018-05-10</div>
					</div>
				</div>
			</div>
		</div>
		
		<div class="section clearfix section">
			<div class="fl section-big section-div">
				<More :moreList="more[3]"></More>
				<div class="tz clearfix" style="border-bottom: 1px solid #dcdcdc;margin-bottom: 15px;">
					<div class="tz-l fl">
						<img class="tz-img" src="../../../static/img/news.png" />
					</div>
					<div class="tz-r fr">
						<p class="tz-r-title">贯彻实施《专业技术人员继续教育规定》的通知</p>
						<p class="tz-content">各省、自治区、直辖市及新疆生产建设兵团人力资源社会保障厅（局），国务院各部委、各直属机构人事部门，有关单位：专业技术人员继续教育规定》（人力资源社会保障部令第25号，以下简称《规定》），于2015年8月13日公布，自2015年10月1日起施行。</p>
					</div>
				</div>
				<div class="news-list">
					<div class="news clearfix">
						<div class="fl news-l">关于举办互联网关于举办互联网关于举办互联网关于举办互联网+制造业企业转型高级研修班的通知</div>
						<div class="fr news-r">2018-05-14</div>
					</div>
					<div class="news clearfix">
						<div class="fl news-l">关于举办互联网关于举办互联网关于举办互联网关于举办互联网+制造业企业转型高级研修班的通知</div>
						<div class="fr news-r">2018-05-14</div>
					</div>
					<div class="news clearfix">
						<div class="fl news-l">关于举办互联网关于举办互联网关于举办互联网关于举办互联网+制造业企业转型高级研修班的通知</div>
						<div class="fr news-r">2018-05-14</div>
					</div>
				</div>
			</div>
			<div class="fr section-small section-div">
				<More :moreList="more[4]"></More>
				<div class="raws">
					<div class="raw clearfix">
						<div class="raw-l fl">关于进一步推进专业技术人员继续专业技术人员继续</div>
						<div class="raw-r fr">2018-05-10</div>
					</div>
					<div class="raw clearfix">
						<div class="raw-l fl">关于进一步推进专业技术人员继续专业技术人员继续</div>
						<div class="raw-r fr">2018-05-10</div>
					</div>
					<div class="raw clearfix">
						<div class="raw-l fl">关于进一步推进专业技术人员继续专业技术人员继续</div>
						<div class="raw-r fr">2018-05-10</div>
					</div>
					<div class="raw clearfix">
						<div class="raw-l fl">关于进一步推进专业技术人员继续专业技术人员继续</div>
						<div class="raw-r fr">2018-05-10</div>
					</div>
					<div class="raw clearfix">
						<div class="raw-l fl">关于进一步推进专业技术人员继续专业技术人员继续</div>
						<div class="raw-r fr">2018-05-10</div>
					</div>
					<div class="raw clearfix">
						<div class="raw-l fl">关于进一步推进专业技术人员继续专业技术人员继续</div>
						<div class="raw-r fr">2018-05-10</div>
					</div>
					<div class="raw clearfix">
						<div class="raw-l fl">关于进一步推进专业技术人员继续专业技术人员继续</div>
						<div class="raw-r fr">2018-05-10</div>
					</div>
					<div class="raw clearfix">
						<div class="raw-l fl">关于进一步推进专业技术人员继续专业技术人员继续</div>
						<div class="raw-r fr">2018-05-10</div>
					</div>
					<div class="raw clearfix">
						<div class="raw-l fl">关于进一步推进专业技术人员继续专业技术人员继续</div>
						<div class="raw-r fr">2018-05-10</div>
					</div>
				</div>
			</div>
		</div>
	
	
	
	</div>
</template>

<script>
  import { goodAll } from '@/api/blog'
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
					{"name":"新闻热点","img":"../../static/img/icon2.png","url":"aaa"},
					{"name":"通知公告","img":"../../static/img/icon3.png","url":"aaa"},
					{"name":"政策法规","img":"../../static/img/icon4.png","url":"aaa"},
					{"name":"内部通知","img":"../../static/img/icon5.png","url":"aaa"},
					{"name":"公司制度","img":"../../static/img/icon6.png","url":"aaa"}
				]
  		}
  	},
		created(){
		 

		},
		mounted(){
			this.spliceStr()
		},
		methods:{
				changeFlag:function(){
					this.loginFlag = !this.loginFlag
				},
				spliceStr:function(){
					let _str = "为贯彻落实局党委4+人社要求，深入推进中心继续教育网络平台建设，近日，市人才培训中心副主任杨义清、继续教育部负责人范正斌一行赴浙江海港集团教培中心范正斌一行赴浙江海港集团教培中心";
					_str = _str.substring(0,80);
					this.textDetail = _str+"......"
				}
		}
  }
</script>
<style lang="less" rel="stylesheet/less" scoped>
.content{
	.section{
		width:940px;margin:0 auto;margin-top:10px;
		.section-div{
			height: 340px;border: 1px solid #DCDCDC;border-radius: 5px;font-family: Roboto;
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
							.detail{cursor: pointer;color: #0089FF;}
						}
					}
				}
				.news-list{
					color: #101010;font-size: 12px;
					.news{
						padding-bottom: 8px;border-bottom: 1px dotted #DCDCDC;margin-top: 5px;height: 20px;line-height: 20px;
						.news-l{
							width: 500px;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;padding-left:15px;position: relative;
							&:before{position: absolute;border-top: 7px solid transparent;border-bottom: 7px solid transparent;border-left: 10px solid #DB3807 ;content: " ";display: block;left: 0;top: 3px;}
						}
						.news-r{text-align: right;width: 80px;}
					}
				}
			}
			.tz{
				width: 600px;margin: 0 auto;margin-top: 15px;border-bottom: 1px dashed #DCDCDC;padding-bottom: 10px;;
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
					height:20px;line-height:20px;color:#787878;font-size:12px;margin-top:10px;
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