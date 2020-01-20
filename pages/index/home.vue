<template>
	<view class="container">

		<!--banner-->
		<view class="tui-banner-box">
			<swiper :indicator-dots="true" :autoplay="true" :interval="5000" :duration="150" class="tui-banner-swiper" :circular="true"
			 @change="change">
				<swiper-item v-for="(item,index) in banner" :key="index" class="tui-banner-item">
					<image :src="item.image" class="tui-slide-image" :class="[current!=index?'tui-banner-scale':'']"
					 mode="scaleToFill" @tap="detail(item)" />
				</swiper-item>
			</swiper>
		</view>
		<!--banner-->
		<!--headlines-->
		<view class="tui-rolling-news list-item">
			<tui-icon name="news" :size='22' color='#555'></tui-icon>
			<swiper :vertical="true" :autoplay="true" :circular="true" :interval="4000" class="tui-swiper">
				<swiper-item v-for="(item,index) in headlines" :key="index" class="tui-swiper-item">
					<view class="tui-news-item">{{item}}</view>
				</swiper-item>
			</swiper>
		</view>
		<!--headlines-->
		<!--classify-->
		<scroll-view scroll-x="true">
			<view class="tui-classify-box">
				<view class="tui-classify-box-one">
					<view class="tui-classify-item" v-for="(item,index) in classify" :key="index" @tap="more" :data-key="item.name"
					 v-if="index<=9">
						<image :src="'/static/images/classify/'+item.img+'.png'" class="tui-classify-img" />
						<view class="tui-classify-name">{{item.name}}</view>
					</view>
				</view>
				<view class="tui-classify-box-one" v-if="classify.length>10">
					<view class="tui-classify-item" v-for="(item,index) in classify" :key="index" @tap="more" :data-key="item.name"
					 v-if="index>9">
						<image :src="'/static/images/classify/'+item.img+'.png'" class="tui-classify-img" />
						<view class="tui-classify-name">{{item.name}}</view>
					</view>
				</view>
			</view>
		</scroll-view>


		<!-- 服务 -->
		<view class="nav_list">
			<view class="nav_list_item" v-for="(v,k) in keywordList" :key="k" @click="detail(v)">
				<image src="/static/img/急速退款@2x.png" mode="" class="keyWordImg" v-if="k==0"></image>
				<image src="/static/img/专业团队@2x.png" mode="" class="keyWordImg" v-if="k==1"></image>
				<image src="/static/img/保障@2x.png" mode="" class="keyWordImg" v-if="k==2"></image>
				<image src="/static/img/service-全国联保@2x.png" mode="" class="keyWordImg" v-if="k==3"></image>
				<text class="content" :class="{noBorder:k==keywordList.length-1}">{{v.title}}</text>
			</view>

		</view>

		<!-- 服务 -->


		<!-- 列表 -->
		<view class="footer-list">
			<view class="footer-list-item" v-for="(item,index) in footerList" :key="index" :class="[{footer_list_one:index==0||index==3},{footer_list_two:index==1||index==2},{end:index==4},{marginR:index%2==1}]"
			 @click="pinPaiList(item)">
				<image :src="item.image" mode="scaleToFill" class="footer-list-item-image">
				</image>
			</view>
		</view>
		<!-- 列表 -->
		<view class="footer-icon" @click="gotoFinished">
			<image src="/static/img/我要预约@2x.png" mode="scaleToFill"></image>
		</view>
	</view>

</template>

<script>
	import tuiIcon from "@/components/icon/icon"
	export default {
		components: {
			tuiIcon
		},
		data() {
			return {
				banner: [
					"1.jpg",
					"2.jpg",
					"3.jpg",
					"4.jpg",
					"5.jpg"
				],
				footerList: ["1.jpg",
					"2.jpg",
					"3.jpg",
					"4.jpg",
					"5.jpg"
				],
				keywordList: [{
						title: '急速服务'
					},
					{
						title: '急速服务'
					},
					{
						title: '急速服务'
					},
					{
						title: '急速服务'
					}
				],
				classify: [{
						img: "kongtiao",
						name: "空调"
					},
					{
						img: "Icewash",
						name: "冰洗"
					},
					{
						img: "heater",
						name: "热水器"
					},
					{
						img: "bed",
						name: "床"
					},
					{
						img: "boutique",
						name: "精品"
					},
					{
						img: "kongtiao",
						name: "空调"
					},
					{
						img: "Icewash",
						name: "冰洗"
					},
					{
						img: "heater",
						name: "热水器"
					},
					{
						img: "bed",
						name: "床"
					},
					{
						img: "boutique",
						name: "精品"
					}


				],
				current: 0,
				headlines: [
					"苹果XR对比华为Mate20你会选择谁",
					"格兰仕暗示拜访拼多多后遭天猫打压，拼多多高层赞其有勇气",
					"耐克没进前十，今年Q1全球受欢迎品牌榜"
				],
			}

		},
		onLoad(){
			this.carousel();
		},
		methods: {
			//  轮播图
			carousel() {
				let parmas = {
					cid: getApp().globalData.cid
				}
				this._reqw.ipost(parmas, 'carousel').then(res => {
					res.success ? (this.banner = res.body.list) : console.log("失败")
				}).catch(err => {})
			},
			// 公告
			notice() {
				let parmas = {
					cid: getApp().globalData.cid
				}
				this._reqw.ipost(parmas, 'notice').then(res => {
					res.success ? (this.headlines = res.body.list) : console.log("失败")
				}).catch(err => {})

			},
			//品牌
			brand() {
				let parmas = {
					cid: getApp().globalData.cid
				}
				this._reqw.ipost(parmas, 'brand').then(res => {
					res.success ? (this.classify = res.body.list,uni.setStorageSync('brand',res.body.list)) : console.log("失败")
				}).catch(err => {})
			},
			//   底部 
			FooterList() {
				let parmas = {
					cid: getApp().globalData.cid
				}
				this._reqw.ipost(parmas, 'home').then(res => {
					res.success ? (this.footerList = res.body.list) : console.log("失败")
				}).catch(err => {})
			},
			change(e) {
				this.current = e.detail.current
			},
			detail(e) {
				uni.navigateTo({
					url: `/pages/pagesA/homeView?url=${e.url}`
				})
			},
			pinPaiList(e){
				uni.navigateTo({
					url: `/pages/pagesA/pinpai?id=${e.id}`
				})
			},
			gotoFinished() {
				uni.navigateTo({
					url: '/pages/pagesC/finishedOrder'
				})
			}
		}
	}
</script>

<style lang="scss">
	.container {
		box-sizing: border-box;
	}

	// 底部
	.footer-icon {
		position: fixed;
		bottom: 10px;
		right: 38px;
		width: 44px;
		height: 44px;
	}

	.footer-list {
		display: flex;
		flex-wrap: wrap;
		padding: 0 15px;
	}

	.footer-list-item-image {
		border-radius: 3px;
	}

	.footer-list-item {
		margin-top: 15px;
		border-radius: 3px;
	}

	.marginR {
		margin-left: 3%;
	}

	.footer_list_one {
		width: 67%;
		height: 115px;
	}

	.footer_list_two {
		width: 30%;
		height: 115px;
	}

	.end {
		width: 100%;
		height: 215px;
	}

	/* servce */
	.keyWordImg {
		width: 14px;
		height: 14px;
		margin-right: 5px;
	}

	.nav_list_item {
		display: flex;
		align-items: center;
	}

	.nav_list {
		width: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;

		.noBorder {
			border-right: none !important;
		}

		.content {
			flex: 1;
			text-align: left;
			color: #6D6C6C;
			font-size: 11px;
			padding-right: 10px;
			border-right: 1px solid #7D7D7D;

		}
	}

	/*banner*/

	.tui-banner-box {
		width: 100%;
		box-sizing: border-box;
		background: #fff;
	}

	.tui-banner-swiper {
		width: 100%;
		height: 240rpx;
	}

	.tui-banner-item {
		box-sizing: border-box;
	}

	.tui-slide-image {
		width: 100%;
		height: 240rpx;
		display: block;
		/* transition: all 0.1s linear; */
	}

	.tui-banner-scale {
		transform: scaleY(0.9);
		transform-origin: center center;
	}

	/* #ifdef APP-PLUS || MP */
	.tui-banner-swiper .wx-swiper-dot {
		width: 8rpx;
		height: 8rpx;
		display: inline-flex;
		background: none;
		justify-content: space-between;
	}

	.tui-banner-swiper .wx-swiper-dot::before {
		content: '';
		flex-grow: 1;
		background: rgba(255, 255, 255, 0.8);
		border-radius: 16rpx;
		overflow: hidden;
	}

	.tui-banner-swiper .wx-swiper-dot-active::before {
		background: #fff;
	}

	.tui-banner-swiper .wx-swiper-dot.wx-swiper-dot-active {
		width: 16rpx;
	}

	/* #endif */

	/* #ifdef H5 */
	>>>.tui-banner-swiper .uni-swiper-dot {
		width: 8rpx;
		height: 8rpx;
		display: inline-flex;
		background: none;
		justify-content: space-between;
	}

	>>>.tui-banner-swiper .uni-swiper-dot::before {
		content: '';
		flex-grow: 1;
		background: rgba(255, 255, 255, 0.8);
		border-radius: 16rpx;
		overflow: hidden;
	}

	>>>.tui-banner-swiper .uni-swiper-dot-active::before {
		background: #fff;
	}

	>>>.tui-banner-swiper .uni-swiper-dot.uni-swiper-dot-active {
		width: 16rpx;
	}

	/* #endif */
	/*banner*/

	/*headlines*/

	.tui-rolling-news {
		width: 100%;
		padding: 0 30rpx;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: nowrap;
		background: #fff;
	}

	.tui-rolling-news::after {
		left: 0;
	}

	.tui-swiper {
		margin-left: 8rpx;
		font-size: 28rpx;
		height: 80rpx;
		flex: 1;
	}

	.tui-swiper-item {
		display: flex;
		align-items: center;
	}

	.tui-news-item {
		line-height: 28rpx;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		color: #555;
	}

	/*headlines*/

	/*classify*/

	.tui-classify-box {
		width: 200%;
		display: flex;
		flex-wrap: wrap;
		padding: 28rpx 0;
		background-color: #fff;
	}

	.tui-classify-box-one {
		width: 50%;
		display: flex;
		flex-wrap: wrap;
	}

	.tui-classify-item {
		width: 20%;
		text-align: center;
	}

	.tui-classify-img {
		width: 88rpx;
		height: 88rpx;
	}

	.tui-classify-name {
		font-size: 26rpx;
		line-height: 26rpx;
		padding-top: 8rpx;
		color: #555;
		white-space: nowrap;
	}
</style>
