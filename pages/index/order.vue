<template>
	<view class="content">
		<view class="navbar">
			<view v-for="(item, index) in navList" :key="index" class="nav-item" :class="{current: tabCurrentIndex == index}"
			 @click="tabClick(index)">
				{{item.text}}
			</view>
		</view>
		<swiper :current="tabCurrentIndex" duration="300" @change="changeTab" class="swiper-box">
			<swiper-item class="tab-content" v-for="(tabItem,tabIndex) in navList" :key="tabIndex">
				<scroll-view class="list-scroll-content" scroll-y @scrolltolower="loadDataMore">
					<empty v-if="tabItem.dataList.length==0 &&tabItem.load"></empty>

					<view class="com-list" @click="gotoDetails">
						<view class="com-list-top">
							<view class="com-list-orderid">
								订单编号 54654654564
							</view>
							<view class="com-list-time">
								2019-14-25
							</view>
						</view>
						<view class="com-list-content">
							<view class="com-list-left">
								<image src="/static/logo.png" mode="scaleToFill"></image>
							</view>
							<view class="com-list-right">
								<view class="com-list-right-one">
									服务类型: <text class="com-list-right-two uni-ellipsis"> 清水</text>
								</view>
								<view class="com-list-right-one">
									下单时间: <text class="com-list-right-two">2019</text>
								</view>
								<view class="com-list-right-address">
									<image src="/static/img/收货地址@2x.png" mode=""></image>
									<view class="com-list-right-two">
										地址
									</view>
								</view>
							</view>
						</view>
						<view class="com-list-status">
							<view class="com-list-pay ft_color">
								预付款
							</view>
							<view class="com-list-btn order-btn">
								支付
							</view>
						</view>
					</view>
					
					
					<view class="com-list">
						<view class="com-list-top">
							<view class="com-list-orderid" @click="gotoPing">
								订单编号 54654654564
							</view>
							<view class="com-list-time">
								待付款
							</view>
						</view>
						<view class="com-list-content">
							<view class="com-list-left">
								<image src="/static/logo.png" mode="scaleToFill"></image>
							</view>
							<view class="com-list-right">
								<view class="com-list-right-one">
									服务类型: <text class="com-list-right-two uni-ellipsis"> 清水</text>
								</view>
								<view class="com-list-right-one">
									下单时间: <text class="com-list-right-two">2019</text>
								</view>
								<view class="com-list-right-address">
									<image src="/static/img/收货地址@2x.png" mode=""></image>
									<view class="com-list-right-two">
										地址
									</view>
								</view>
							</view>
						</view>
						<view class="com-list-status">
							<view class="com-list-pay ft_color">
								<text>预付款</text> <text style="margin-left: 50px;">人工费</text>
							</view>
							<view class="com-list-btn order-btn" @click="gotoSuccess">
								支付
							</view>
							<view class="com-list-btn order-btn" @click="gotoTui">
								tui
							</view>
						</view>
					</view>
					<uni-load-more :status="tabItem.status" v-if="tabItem.dataList.length!=0"></uni-load-more>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	// import  from ""
	import empty from "@/components/empty";
	import uniLoadMore from "@/components/uni-load-more/uni-load-more.vue"
	export default {
		data() {
			return {
				tabCurrentIndex: 0,
				navList: [{
						text: '全部',
						dataList: [],
						status: 'loading',
						load: false
					},
					{
						text: '待接单',
						dataList: [],
						status: 'loading',
						load: false
					},
					{
						text: '已接单',
						dataList: [],
						status: 'loading',
						load: false
					},
					{
						text: '待支付',
						dataList: [],
						status: 'loading',
						load: false
					},
					{
						text: '退款',
						dataList: [],
						status: 'loading',
						load: false
					}
				]
			}
		},
		components: {
			empty,
			uniLoadMore
		},
		onLoad() {
			// this.loadData()
		},
		methods: {
			changeTab(e) {
				this.tabCurrentIndex = e.detail.current;
				this.initData(this.tabCurrentIndex)
			},
			tabClick(index) {
				this.tabCurrentIndex = index;
			},
			loadData() {
				let num = this.tabCurrentIndex;
				if (this.navList[num].load) {
					return;
				} else {
					this.navList[num].load = true;
					// this.navList[num].status = "loading";
					let parmas = {
						uid: getApp().globalData.uid,
						type: num,
						nowPage: this.page
					};
					this._reqw.ipost(parmas, "couponList").then(res => {
						res.result == 0 ? (this.navList[num].load = false, this.totalPage = res.totalPage, res.dataList != undefined &&
							res.dataList.length != 0 ? res.dataList.forEach(item => {
								this.navList[num].dataList.push(item)
							}) : this.navList[num].status = "noMore", res.totalPage == 1 ? this.navList[num].status = "noMore" : this.navList[
								num].status = "more") : this.$api.tip(res.resultNote)
					})
				}
			},
			loadDataMore() {
				let num = this.tabCurrentIndex;
				this.totalPage > this.page ? (this.page += 1, this.loadData()) : setTimeout(() => {
					this.navList[num].status = "noMore"
				}, 30)
			},
			initData(index) {
				this.page = 1;
				this.totalPage = 1;
				// this.navList[index].dataList = [];
				this.navList[index].load = false;
				this.loadData();
			},
			gotoDetails(){
				this.$api.navTo('/pages/pagesC/orderDetails')
			},
			gotoTui(){
				this.$api.navTo('/pages/pagesC/tui')
			},
			gotoSuccess(){
				this.$api.navTo('/pages/pagesC/pay')
			},
			//测试
			gotoPing(){
				this.$api.navTo('/pages/pagesC/elevent')
			}
		}

	}
</script>

<style lang="scss">
	page,
	.content {
		height: 100%;
	}

	.swiper-box {
		height: calc(100% - 40px);
	}

	.list-scroll-content {

		// height: 100%;
		.com-list {
			width: 100%;
			padding: 0 10px;
			border-bottom: 5px solid #E7E7E9;
			margin: 10px auto;
			position: relative;

			.com-list-top {
				display: flex;
				height: 30px;
				justify-content: space-between;
				align-items: center;

				.com-list-time {
					color: #006EE3;
					font-size: 11px;
				}

				.com-list-orderid {
					color: #8F8E8E;
					font-size: 11px;
				}
			}

			.com-list-status {
				display: flex;
				height: 35px;
				justify-content: space-between;
				align-items: center;
			}


			.com-list-content {
				display: flex;
				align-items: center;
				border-bottom: 1px solid #E7E7E9;
				padding: 10px 0;

				.com-list-left {
					margin-right: 5px;

					image {
						width: 61.5px;
						height: 61.5px;
					}
				}


				.com-list-right {
					display: flex;
					height: 61.5px;
					justify-content: space-between;
					flex: 1;
					flex-direction: column;

					.com-list-right-one {
						color: #6D6C6C;
						font-size: 12px;
					}

					.com-list-right-two {
						font-size: 11px;
						color: #8F8E8E;
						margin-left: 5px;
					}

					.com-list-right-address {
						display: flex;
						align-items: center;

						image {
							width: 15px;
							height: 18px;
							margin-right: 5px;
						}
					}
				}

			}

		}
	}

	.navbar {
		display: flex;
		height: 40px;
		padding: 0 5px;
		background: #fff;
		box-shadow: 0 1px 5px rgba(0, 0, 0, .06);
		position: relative;
		z-index: 10;

		.nav-item {
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
			font-size: 15px;
			// color: $font-color-dark;
			position: relative;

			&.current {
				color: #006EE3;

				&:after {
					content: '';
					position: absolute;
					left: 50%;
					bottom: 0;
					transform: translateX(-50%);
					width: 44px;
					height: 0;
					border-bottom: 2px solid #006EE3;
				}
			}
		}
	}
</style>
