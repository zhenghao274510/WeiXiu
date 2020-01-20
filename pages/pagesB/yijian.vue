<template>
	<view class="content">
		<textarea value="" placeholder="请留下您宝贵的意见" class="textarea" />
		<view class="footer-btn">
			提 交
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				
			}
		}
	}
</script>

<style scoped>
	.content{
		padding: 10px;
	}
	.footer-btn{
		width:260px;
		height:44px;
		background:rgba(0,110,227,1);
		box-shadow:0px 1px 4px 0px rgba(0,124,255,0.5);
		border-radius:22px;
		margin: 50px auto;
		font-size:17px;
         color: #FFFFFF;
		font-weight:bold;
		text-align: center;
		line-height: 44px;
	}
	.textarea{
		padding: 10px;
		width: 100%;
		height: 140px;
		box-sizing: border-box;
		border-radius: 4px;
		font-size: 11px;
		border:1px solid rgba(231,231,233,1);
		border-radius:2px;
		color: #A4A4A5;
	}
</style>
