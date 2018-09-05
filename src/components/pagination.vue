<template>
	<div class="content clearfix">
		<div class="content-l fl clearfix">
			<div class="first tags fl" @click="changePage(1)">首页</div>
			<div class="prev tags fl" @click="changePage(currentPage-1)">上一页</div>
			<div class="tags fl" v-if="totalPage>5 && currentPage>totalPage-4">...</div>
			<div class="tags fl" v-for="(item,index) in list" :class="currentPage==item ?'tages-active':''" @click="changePage(item)">{{ item }}</div>
			<div class="tags fl" v-if="totalPage>5 && (currentPage<totalPage-4 || currentPage==totalPage-4)">...</div>
			<div class="next tags fl" @click="changePage(currentPage+1)">下一页</div>
			<div class="last tags fl"  @click="changePage(totalPage)">尾页</div>
		</div>
		<div class="content-r fr">
			<span>当前第&nbsp;&nbsp;{{ currentPage }}&nbsp;&nbsp;页&nbsp;&nbsp;/&nbsp;&nbsp;共&nbsp;&nbsp;{{ totalPage }}&nbsp;&nbsp;页 转到</span>
			<input type="number" class="pages" v-model="currentPage2" />
			<span>页</span>
		</div>
	</div>
</template>

<script>
	export default{
		props:{
			params:Object
		},
		data(){
			return {
				total:100,
				pageSize:10,
				currentPage:1,
				totalPage:0,
				currentPage2:1
			}
		},
		mounted(){
			let that = this;
			this.$nextTick(function(){
				that.init()
			})
		},
		watch:{
			currentPage2:function(n,o){
				n = parseInt(n)
				this.currentPage2<this.totalPage ? this.currentPage=n : "";
				this.$emit('returnCurrent', this.currentPage)
			}
		},
		computed:{
			page: function () { // 总页数
				return Math.ceil(this.total / this.pageSize);
		    },
			list:function(){
				let arr;
				let totalPage = this.totalPage;
				let currentPage = this.currentPage
		
				if(totalPage>5){
					if(currentPage>totalPage-5){
						if(currentPage==totalPage-4){
							arr = [currentPage-2,currentPage-1,currentPage,currentPage+1,currentPage+2]
						}else{
							arr = [totalPage-4,totalPage-3,totalPage-2,totalPage-1,totalPage]
						}
						
					}else if(currentPage>2){
						arr = [currentPage-2,currentPage-1,currentPage,currentPage+1,currentPage+2]
					}else if(currentPage<2 ){
						arr = [currentPage,currentPage+1,currentPage+2,currentPage+3,currentPage+4]
					}else if(currentPage==2){
						arr = [currentPage-1,currentPage,currentPage+1,currentPage+2,currentPage+3]
					}
					
				}else{
					arr = totalPage
				}
				return arr
			}
		},
		methods:{
			init:function(){
				
				this.total = this.params.total;
				this.pageSize = this.params.pageSize;
				this.totalPage = Math.ceil(this.params.total / this.params.pageSize);
			},
			changePage:function(index){
				let _index = index;
				if(_index>0 && _index<this.totalPage+1 ){
					this.currentPage = _index;
					this.$emit('returnCurrent', this.currentPage)
				}
				
			},
// 			prev:function(){
// 				let _currentPage = this.currentPage;
// 				_currentPage>1 ? this.currentPage = _currentPage-1:''
// 
// 			},
// 			next:function(){
// 				let _currentPage = this.currentPage;
// 				let _totalPage = this.totalPage;
// 				_currentPage<_totalPage ? this.currentPage = _currentPage+1:''
// 			},
// 			first:function(){
// 				this.currentPage = 1;
// 			},
// 			last:function(){
// 				this.currentPage = this.totalPage;
// 			},

		},
	}
</script>

<style lang="less" rel="stylesheet/less" scoped>
	.content{
		margin-top:26px;
		.content-l{
			width: 550px;
			.tags{padding: 3px 8px;color: #969696;border: 1px solid #969696;font-size: 12px;border-radius: 5px;margin-right: 10px;cursor: pointer;}
			.tages-active{background-color: #F03C07;color: #fff;border: 1px solid #F03C07;}
		}
		.content-r{
			width: 350px;color: #787878 ;font-size: 12px;vertical-align: middle;text-align: right;
			.pages{width: 36px;height: 24px;border: 1px solid #BBBBBB;border-radius: 5px;text-align: center;margin: 0 10px;font-size: 12px;}
		}
	}
	
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button{
	-webkit-appearance: none !important;
	margin: 0;
}
</style>