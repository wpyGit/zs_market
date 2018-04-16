<template>
	<div>
		商品列表也
		<button @click="jump">跳到添加页面</button>
	</div>
</template>

<script>
	export default{
		data(){
			return {

			}
		},
		methods:{
			jump(){
				this.$router.push({
					name:'addCommodity',
					params:{"id":6}
				})
			}
		}
	}
</script>