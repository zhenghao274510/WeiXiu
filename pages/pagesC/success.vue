<template>
	<view class="pay-content">
		<view class="icon">
			<image src="/static/img/支付成功@2x.png"></image>
		</view>
		<view class="tis">
			支付成功
		</view>
		<view class="back">
			<view class="btn one" @tap="toOrder">去评价</view>
			<view class="btn" @tap="toOrder">完成</view>
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
	.pay-content{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.icon {
		margin-top: 10vw;

		image {
			width: 25vw;
			height: 25vw;
		}
	}

	.tis {
		margin-top: 20upx;
		color: #424242;
	}

	.pay-amount {
		width: 100%;
		margin-top: 10upx;
		font-size: 32upx;
	}

	.back {
		width: 100%;
		.btn {
			width:250px;
			height:42px;
			text-align: center;
			line-height: 42px;
			font-size: 17px;
			color: #FFFFFF;
			background:rgba(0,110,227,1);
			box-shadow:0px 1px 4px 0px rgba(0,124,255,0.5);
			border-radius:22px;
			margin: 0 auto;
		}
		.one{
			margin: 30px auto 15px auto;
		}
	}
</style>
