<template>
	<view class="content">
		<!-- 服务地址 -->
		<view class="address-info">
			<view class="order-info-title">
				服务地址
			</view>
			<view class="address-info-content">
				<view class="address">
					dffhhhhhhhgggggggggg
				</view>
				<view class="address-image">
					<image src="/static/img/返回拷贝2@2x.png" mode="scaleToFill"></image>
				</view>
			</view>
		</view>
		<!-- 维修员信息 -->
		<view class="order-info">
			<view class="order-info-title">
				维修员信息
			</view>
			<view class="order-info-person">
				<view class="product-image">
					<image src="../../static/img/维修员@2x.png" mode="scaleToFill"></image>
				</view>
				<view class="person-info">
					<view class="person-info-name">
						wangshifu
					</view>
					<view class="person-info-tel">
						<image src="/static/img/电话@2x.png" mode="scaleToFill"></image>
					</view>
				</view>
			</view>
		</view>
		<!-- 产品类型 -->
		<view class="order-info">
			<view class="order-info-title">
				产品类型
			</view>
			<view class="order-info-product">
				<view class="product-image">
					<image src="../../static/icon/addImg.png" mode=""></image>
				</view>
				<view class="info-product">
					<view class="info-title">
						安吉尔SA-UFS系列净水器 2500升
					</view>
				</view>
			</view>
		</view>

		<!-- 订单详情 -->
		<view class="order-info">
			<view class="order-info-title">
				订单详情
			</view>
			<view class="help-list">
				<text class="uni-ellipsis">订单号</text>
				<view class="businessListYou">

				</view>
			</view>
			<view class="help-list">
				<text class="uni-ellipsis">下单时间</text>
				<view class="businessListYou">

				</view>
			</view>
			<view class="help-list">
				<text class="uni-ellipsis">服务类型</text>
				<view class="businessListYou">

				</view>
			</view>
			<view class="help-list">
				<text class="uni-ellipsis">保养类型</text>
				<view class="businessListYou">

				</view>
			</view>
			<view class="help-list">
				<text class="uni-ellipsis">上门时间</text>
				<view class="businessListYou">

				</view>
			</view>
			<view class="help-list">
				<text class="uni-ellipsis">备注</text>
				<view class="businessListYou">

				</view>
			</view>
			<view class="help-list">
				<text class="uni-ellipsis">预付款</text>
				<view class="businessListYou">

				</view>
			</view>
			<view class="help-list">
				<text class="uni-ellipsis">优惠</text>
				<view class="businessListYou">

				</view>
			</view>
			<view class="help-list">
				<text class="uni-ellipsis">总价</text>
				<view class="businessListYou">

				</view>
			</view>
			<view class="help-list">
				<text class="uni-ellipsis">申请退款</text>
				<view class="businessListYou">

				</view>
			</view>
			<view class="help-list">
				<text class="uni-ellipsis">退款原因</text>
				<view class="businessListYou">

				</view>

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
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataList: [],
				page: 1
			}
		},
		components: {},
		onLoad() {
			this.loadData()
		},
		methods: {
			loadData() {

			},
			goto(e) {

			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		.address-info {
			padding: 10px;
		}

		.person-info {
			display: flex;
			flex: 1;
			justify-content: space-between;
			margin-left: 5px;
			align-items: center;

			.person-info-name {
				color: #6D6C6C;
				font-size: 13px;
			}

			.person-info-tel {
				width: 22px;
				height: 23px;
			}
		}

		.address-info-content {
			display: flex;
			align-items: center;
			justify-content: space-between;
			border: 1px solid #E7E7E9;
			border-radius: 2px;
			padding: 0 14px;
			height: 88px;

			.address-image {
				width: 9px;
				height: 11px;
			}

			.address {
				color: #6D6C6C;
				font-size: 13px;
			}
		}

		.order-info-person {
			display: flex;
			padding: 7px 14px;

			.product-image {
				width: 60px;
				height: 68px;

				image {
					width: 100%;
					height: 100%;
				}
			}
		}

		// padding: 10px;
		.order-info-title {
			color: #006EE3;
			font-size: 12px;
			padding-bottom: 5px;
		}

		.order-info-product {
			display: flex;
			align-items: center;
			border: 1px solid #E7E7E9;
			border-radius: 2px;
			padding: 7px 14px;

			.product-image {
				width: 60px;
				height: 68px;

				image {
					width: 100%;
					height: 100%;
				}
			}

			.info-product {
				flex: 1;
				justify-content: center;
				align-items: center;
				margin-left: 10px;

				.info-title {
					color: #6D6C6C;
					font-size: 13px;
					text-align: center;
					height: 100%;
					line-height: 100%;
				}
			}

		}

		.order-info {
			border-top: 2px solid #E7E7E9;
			padding: 10px;

			.img-list {
				padding: 10px 0;
				display: flex;
				.img-item {
					width: 78.5px;
					height: 78.5px;
					 margin-right: 10px;
				}
			}

			.help-list {
				height: 30px;
				display: flex;
				justify-content: space-between;
				align-items: center;

				text {
					color: #6D6C6C;
					font-size: 13px;
				}

				.color {
					color: #FF4B27;
				}

				.businessListYou {
					color: #8F8E8E;
					font-size: 12px;
				}

			}
		}

	}
</style>
