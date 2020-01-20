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
					<!-- <empty v-if="tabItem.dataList.length==0"></empty> -->
					<view class="list-box">
						<view v-for="(item,index) in photoList" :key="index" :class="{'active':item.active}" :data-index="index" @tap="previewPhoto">
							<image :src="item.url" mode="aspectFill" lazy-load="true"></image>
							<view>第 {{item.index+1}} 张图片</view>
						</view>
					</view>
					<view class="load">{{loadTxt}}</view>
					<uni-load-more :status="tabItem.status"></uni-load-more>
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
						text: '已使用',
						dataList: [],
						status: 'loading',
						load: false
					},
					{
						text: '已过期',
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
		onLoad() {},
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
			}
		}

	}
</script>

<style lang="scss">
	page,
	.content {
		height: 100%;
	}

	.image-bg {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
	}

	.swiper-box {
		height: calc(100% - 40px);
	}

	.list-scroll-content {

		.list-box {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: space-between;
			align-items: flex-start;
			align-content: flex-start;
			padding: 20upx 20upx 0 20upx;
			line-height: 30upx;
			font-size: 28upx;
			color: #333;

			&>view {
				background-color: #fff;
				width: 345upx;
				padding: 20upx;
				margin-bottom: 20upx;
				box-sizing: border-box;
				opacity: 0;
				transform: translateY(40upx);
				transition: all 0.3s ease-in-out 0s;

				&.active {
					opacity: 1;
					transform: translateY(0);
				}
			}

			image {
				width: 100%;
				height: 300upx;
				margin-bottom: 10upx;
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
				color: #038980;

				&:after {
					content: '';
					position: absolute;
					left: 50%;
					bottom: 0;
					transform: translateX(-50%);
					width: 44px;
					height: 0;
					border-bottom: 2px solid #038980;
				}
			}
		}
	}
</style>
