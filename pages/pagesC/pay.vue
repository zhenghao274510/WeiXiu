<template>
	<view class="pay-content">
		<view class="icon">
			<!-- <view class=""> -->
			<text class="smople">￥</text><text class="price">2000</text>
			<!-- </view> -->

		</view>
		<view class="tis">
			<view class="tis-left">
				代金券
			</view>
			<view class="tis-right">
				<view>有2张可用</view>
				<image src="/static/img/返回拷贝2@2x.png" class="tis-right-con"></image>
			</view>
		</view>
		<view class="back">
			<view class="btn" @tap="toOrder">立即支付</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {};
		},
		onLoad() {

		},
		methods: {
			toOrder() {
				this.$api.navTo(`/pagesD/order/order?id=1`)
			}
		},
	}
</script>

<style lang="scss" scoped>
	.pay-content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.icon {

		line-height: 100px;

		.smople {
			font-size: 15px;
			color: #6D6C6C;
		}

		.price {
			font-size: 30px;
			font-weight: 500;
			color: rgb(109, 108, 108);
			font-weight: bold;
		}
	}

	.tis {
		margin: 10px auto;
		color: #424242;
		width: 90%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 13px;

		.tis-right {
			color: #007AFF;
			display: flex;
			align-items: center;
			font-size: 0;

			.tis-right-con {
				width: 9px;
				height: 12px;
				margin-left: 10px;

			}
		}
	}

	.pay-amount {
		width: 100%;
		margin-top: 10upx;
		font-size: 32upx;
	}

	.back {
		width: 100%;
		margin-top: 40px;

		.btn {
			width: 250px;
			height: 42px;
			text-align: center;
			line-height: 42px;
			font-size: 17px;
			color: #FFFFFF;
			background: rgba(0, 110, 227, 1);
			box-shadow: 0px 1px 4px 0px rgba(0, 124, 255, 0.5);
			border-radius: 22px;
			margin: 0 auto;
		}
	}
</style>
