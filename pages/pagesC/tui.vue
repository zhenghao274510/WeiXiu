<template>
	<view class="content">
		<view class="tui-title">
			申请原因
		</view>
		<textarea value="" placeholder="请输入退款原因" class="textarea" />
		<view class="tui-image">
			<view class="tui-title">
				上传图片<text class="one">(可选)</text>
			</view>
			<view class="img-list">
				<view class="img-item">
					<image src="../../static/icon/addImg.png" mode="scaleToFill"></image>
				</view>
				<view class="img-item">
					<image src="../../static/icon/addImg.png" mode="scaleToFill"></image>
				</view>
			
			</view>
		</view>
		<view class="footer-btn">
			提 交 申 请
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

<style scoped lang="scss">
	.content{
		padding: 10px;
	}
	.tui-title{
		font-size:13px;
		font-weight:500;
		color:#424242;
		padding: 15px 0;
		.one{
			color: #A4A4A5;
			font-size: 12px;
			margin-left: 10px;
		}
	}
	.img-list {
		padding: 10px 0;
		display: flex;
		.img-item {
			width: 78.5px;
			height: 78.5px;
			 margin-right: 10px;
		}
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
