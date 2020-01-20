<template>
	<view class="content b-t">
		<view class="list b-b" v-for="(item, index) in addressList" :key="index" @click.stop="checkAddress(item)">
			<view class="wrapper">
				<view class="u-box">
					<view class="name">{{item.name}}</view>
					<view class="mobile">{{item.phone}}</view>
				</view>
				<view class="address-box">
					<view class="default" v-if="index==0">默认</view>
					<view class="address">{{item.province}} {{item.city}}{{item.area}}{{item.details}}</view>
				</view>
			</view>
			<view class="list-footer">
				<view class="list-footer-left">
					<text>设置默认</text>
					<view class="list-footer-left-img">
						<image src="/static/img/默认@2x.png" mode="scaleToFill"></image>
						<!-- <image src="/static/img/默认选择@2x.png" mode="scaleToFill"></image> -->
					</view>
				</view>
				<view class="u-bottom">
					<text class="yticon icon-bianji" @click.stop="addAddress('edit', item)">编辑</text>
					<text class="yticon icon-bianji" @click.stop="delAddress(item.id,k)">删除</text>
				</view>
			</view>


		</view>
		<uni-load-more :status="status"></uni-load-more>
		<view class="add-btn" @click="addAddress('add')" hover-class="btn-hover">添加新地址</view>
	</view>
</template>

<script>
	import uniLoadMore from "@/components/uni-load-more/uni-load-more.vue"
	export default {
		data() {
			return {
				status: 'loading',
				source: 0,
				addressList: [],
				page: 1,
				totalPage: 1
			}
		},
		components: {
			uniLoadMore
		},
		onLoad(options) {
			console.log(options.source);
			this.source = options.source;

		},
		onShow() {
			this.initData();
		},
		onReachBottom() {
			this.status = "loading";
			this.totalPage > this.page ? (this.page += 1, this.loadData()) : setTimeout(() => {
				this.status = "noMore"
			}, 30)
		},
		methods: {
			initData() {
				this.page = 1;
				this.totalPage = 1;
				this.addressList = [];
				this.loadData();
			},
			loadData() {
				let parmas = {
					uid: "30b3b6cfa5f24d5bac754dacb5a3a119",
					newPage: this.page
				}
				this._reqw.ipost(parmas, "addressList").then(res => {
					res.result == 0 ? (this.totalPage = res.totalPage, res.dataList != undefined && res.dataList
						.length != 0 ? res.dataList.forEach(item => {
							this.addressList.push(item)
						}) : this.status = "noMore", res.totalPage == 1 ? this.status = "noMore" : this.status = 'more') : this.$api.tip(
						res.resultNote)
				}).catch(err => {})
			},
			//选择地址
			checkAddress(item) {
				if (this.source == 1) {
					//  上一页实例
					console.log(item)
					item.address = item.province + item.city + item.area + item.details;
					this.$api.prePage().addressData = item;
					this.$api.prePage().addrId = item.id;
					uni.navigateBack();
				}
			},
			addAddress(type, item) {
				this.$api.navTo(`/pages/pagesB/changAddress?type=${type}&id=${JSON.stringify(item)}`)
			},
			delAddress(id, k) {
				let _this = this;
				uni.showModal({
					confirmText: "确定",
					confirmColor: "#00736B",
					content: "确定删除吗？",
					success(res) {

						if (res.confirm) {
							_this._reqw.ipost({
								id: id
							}, "delAddr").then(res => {
								res.result == 0 ? (_this.$api.tip("删除成功"), _this.initData()) : _this.$api.tip(res.resultNote)
							}).catch(err => {})
						} else if (res.cancel) {
							_this.$api.tip('取消')
						}
					}
				})

			},
			initData() {
				this.page = 1;
				this.totalPage = 1;
				this.addressList = [];
				this.loadData()
			}
		}
	}
</script>

<style lang='scss' scoped>
	.list {
		display: flex;
		flex-direction: column;
		padding: 0 40px;
		margin: 10px auto;
		padding: 0 10px;
		background: #fff;
		border-bottom: 2px solid #E7E7E9;
	}

	.list-footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-top: 1px solid #F0F0F0;

		.list-footer-left {
			color: #A4A4A5;
			font-size: 11px;
			display: flex;
			align-items: center;
			.list-footer-left-img{
				width: 15px;
				height: 15px;
				margin-left: 5px;
			}
		}
	}

	.wrapper {
		display: flex;
		flex-direction: column;
		flex: 1;
		padding: 10px 0;
	}

	.address-box {
		display: flex;
		align-items: center;
		margin-top: 10px;

		.address {
			font-size: 13px;
			color: #6D6C6C;
		}

		.default {
			width: 38px;
			height: 15px;
			text-align: center;
			line-height: 15px;
			background: rgb(209, 231, 254);
			border-radius: 4px;
			font-size: 11px;
			font-weight: 500;
			color: rgb(0, 110, 227);
			margin-right: 10px;
		}
	}

	.u-box {
		margin-top: 16upx;
		display: flex;
		align-items: center;
		justify-content: space-between;

		.name {
			color: #6D6C6C;
		}

		.mobile {
			color: #A4A4A5;
			font-size: 11px;
		}
	}

	.add-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 50px;
		background-color: #FFFFFF;
		font-size: 17px;
		color: #424242;
		position: fixed;
		bottom: 0;
		left: 0;
		border-top: 1px solid #E7E7E9;
	}

	.u-bottom {
		display: flex;
		justify-content: flex-end;
		padding: 10px 0;

	}

	.yticon {
		padding: 3px 15px;
		border-radius: 5px;
		border: 1px solid #F0F0F0;
		margin-left: 15px;
		color: #666666;
		font-size: 13px;
	}
</style>
