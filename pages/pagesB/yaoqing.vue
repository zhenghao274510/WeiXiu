<template>
	<view class="content">
		<view class="yaoqing-top">
			<text></text>
			分享此页面给好友，好友通过分享进入小程序下单，即可
			获得优惠券哦~
			<view class="share-btn">
				分享给好友
			</view>
		</view>
		<view class="yaoqing-list">
			<view class="yaoqing-list-title">
				邀请列表
			</view>
			<view class="yaoqing-list-item">
				<view class="yaoqing-list-info">
					<view class="yaoqing-list-img">
						<image src="../../static/icon/avatar.png" mode="scaleToFill"></image>
					</view>
					<view class="name">
						name
					</view>
				</view>
				<view class="yaoqing-list-status">
					weixia
				</view>
			</view>
			<view class="yaoqing-list-item">
				<view class="yaoqing-list-info">
					<view class="yaoqing-list-img">
						<image src="../../static/icon/avatar.png" mode="scaleToFill"></image>
					</view>
					<view class="name">
						name
					</view>
				</view>
				<view class="yaoqing-list-status">
					weixia
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		}
	}
</script>

<style scoped lang="less">
	.yaoqing-top {
		padding: 10px 40px;
		font-size: 12px;
		font-weight: 500;
		color: rgb(141, 141, 141);
		line-height: 17px;

		.share-btn {
			width: 150px;
			height: 30px;
			border: 1px solid rgb(231, 231, 233);
			border-radius: 5px;
			font-weight: 500;
			color: rgb(0, 110, 227);
			line-height: 30px;
			margin: 30px auto;
			text-align: center;
		}
	}

	.yaoqing-list {
		border-top: 2px solid #E7E7E9;
		padding: 30px 30px 0 30px;

		.yaoqing-list-title {
			text-align: center;
			font-size: 15px;
			font-weight: 500;
			color: rgb(109, 108, 108);
			margin-bottom: 30px;
		}
		.yaoqing-list-item{
			font-size:13px;
			font-family:PingFang SC;
			font-weight:500;
			color:rgb(131,130,131);
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 20px;
			.yaoqing-list-info{
				display: flex;
				align-items: center;
				
				.yaoqing-list-img{
					width: 40px;
					height: 40px;
					margin-right: 10px;
				}
			}
		}
	}
</style>
