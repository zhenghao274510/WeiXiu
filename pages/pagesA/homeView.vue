<template>
	<view class="">
		<!-- <rich-text :nodes=""></rich-text> -->
		<web-view :src="url"></web-view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				url:''
			}
		},
		onLoad(options){
			this.url=options.url
		}
	}
</script>

<style>
</style>
