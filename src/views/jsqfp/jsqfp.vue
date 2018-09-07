<template>
	<div class="content ">
		<MyContent :title="title" :title2="title2"></MyContent>
	</div>
</template>

<script>
	import MyContent from '@/components/my-content'
	export default{
		components:{
			MyContent
		},
		data(){
			return {
				title:"岗位安全资格取证人员课程介绍",
				title2:"岗位安全资格取证人员演示课件"
			}
		}
	}
</script>

<style lang="less" rel="stylesheet/less" scoped>

</style>