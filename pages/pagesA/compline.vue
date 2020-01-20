<template>
	<view class="content">
		
		
		
		<view class="com-list-con">
			<empty v-if="dataList.length==0"></empty>
			<block v-else v-for="(v,k) in dataList" :key="k">
				<view class="com-list" @click="getCompline(v,k)">

					<!-- <view class="com-list-info"> -->
					<view class="com-list-left">
						<view class="f_color"><text style="font-size: 9px;">￥</text> <text style="font-weight:bold;">{{v.value}}</text></view>
						<text class="f_color">
							{{v.name}}
						</text>
						<text class="com-list-btn">
							去使用
						</text>
					</view>
					<view class="com-list-right">
						<!-- <view class="com-list-right-info"> -->
						<view class="com-list-right-one">满{{v.value}}元可用</view>
						<view class="com-list-right-two">{{v.expireDate}}到期</view>
						<!-- </view> -->
					</view>
				</view>
			</block>



			<!-- </view> -->
		</view>
		<uni-load-more :status="status"></uni-load-more>
	</view>
</template>

<script>
	import uniLoadMore from "@/components/uni-load-more/uni-load-more.vue"
	import empty from "@/components/empty.vue"
	export default {
		data() {
			return {
				page: 1,
				totalPage: 1,
				status: "loading",
				dataList: [],
				image: '',
				cid: ''
			}
		},
		onLoad() {},
		onShow() {
			this.initData()
		},
		components: {
			uniLoadMore,
			empty
		},
		onReachBottom() {
			this.status = "loading";
			this.totalPage > this.page ? (this.page += 1, this.loadData()) : setTimeout(() => {
				this.status = "noMore"
			}, 30)
		},
		methods: {
			loadData() {
				let parmas = {
					cid: getApp().globalData.cid
				};

				this._reqw.ipost(parmas, "coupon/list").then(res => {
					res.success == 0 ? (this.totalPage = res.totalPage, this.status = "more", res.dataList != undefined && res.dataList
						.length != 0 ?
						res.dataList.forEach(item => {
							this.dataList.push(item)
						}) : this.status = "noMore") : this.$api.tip(res.resultNote)
				})
			},
			auother() {
				this.$api.navTo('/pagesB/author/index')
			},
			canle() {
				this.$api.tip("取消")
			},
			initData() {
				this.dataList = [];
				this.page = 1;
				this.totalPage = 1;
				this.status = "loading";
				this.loadData();
			},
			getCompline(v, k) {

				if (this.uid == "") {
					this.$api.loginTip(this.auother, this.canle)
				} else {
					let parmas = {
						uid: this.uid,
						cid: v.id
					};
					v.isCollar == 1 ? this.$api.tip("该劵已领取!") : this._reqw.ipost(parmas, "collarCoupon").then(res => {
						res.result == 0 ? (this.$api.tip("领取成功"), this.dataList[k].isCollar = 1) : this.$api.tip(res.resultNote)
					}).catch(err => {})
				}

			},
			changDel() {
				this.$api.navTo(`/pagesA/homenav/servce?type=1&name=领劵说明`)
			}
		}
	}
</script>

<style scoped lang="scss">
	.f_color {
		color: #FFFFFF;
		text-align: center;
		margin-top: 10px;
	}

	page,
	.content {
		width: 100%;
	}

	.cart-top {
		height: 60px;
		line-height: 60px;
		padding: 0 15px;
		text-align: right;
		font-size: 15px;
		color: #00736B;
	}


	.com-top {
		width: 100%;
		height: 125px;

		image {
			width: 100%;
			height: 100%;
		}
	}

	.com-list {
		width: 90%;
		height: 120px;
		margin: 10px auto;
		position: relative;
		color: #FFFFFF;

		.image-bg {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: -1;
		}

		.com-list-left {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			.com-list-btn {
				font-size: 12px;
				height: 20px;
				width: 60px;
				text-align: center;
				line-height: 20px;
				background: rgba(255, 181, 52, 1);
				border-radius: 10px;
				margin: 5px 0;
			}

		}



		.com-list-right {
			display: flex;
			padding: 0 21px;
			justify-content: space-between;
			align-items: center;

			.com-list-right-one {
				font-size: 11px;
			}

			.com-list-right-two {
				font-size: 11px;
			}
		}
	}
</style>
