<template>
	<view>

		<!--主体-->
		<view class="meMain">
			<image src="../../static/icon/meBg.png"></image>
			<view class="mePosition">
				<view class="meMainBox">

					<!--头部-->
					<view class="meHead">
						<view class="" style="display: flex;align-items: center;" @click="gotoOther(5)">
							<view class="meHeadAvatar">
								<image :src="avatarUrl" mode="aspectFill"></image>
							</view>
							<view class="meHeadName">
								<view class="useInfo" @click="BindGetUserInfo()">{{ nickName }}</view>
								<view class="useInfo">
									1564
								</view>
							</view>
						</view>
						<view class="kefuIcon">
							<image src="../../static/img/客服@2x.png" mode="scaleToFill"></image>
						</view>

					</view>
					<!--头部-->

					<!--模板-->
					<view class="meOverBg">
						<view class="meVisitor">

							<view class="meVisitorLt" @click="gotoOther(6)">
								<view class="imageConOne">
									<image src="../../static/img/订单列表@2x.png" mode="scaleToFill"></image>
								</view>
								<view class="" style="margin-right: 10px;">
									<view class="meVisitorTxt_02">订单列表</view>
									<view class="meVisitorTxt_01">查看订单详情</view>
								</view>

							</view>
							<view class="meVisitorLt" @click="gotoOther(7)">
								<view class="imageConTwo">
									<image src="../../static/img/钱包@2x.png" mode="scaleToFill"></image>
								</view>
								<view class="" style="margin-right: 10px;">
									<view class="meVisitorTxt_02">我的券包</view>
									<view class="meVisitorTxt_01">已有0张</view>
								</view>

							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="meOverBgOne">
				<view class="businessList top" @click="gotoOther(0)">
					<view class="businessListTxt">
						<image src="../../static/img/地址@2x.png"></image>地址管理
					</view>
					<view class="businessListYou">
						<image src="../../static/img/you.png"></image>
					</view>
				</view>
				<view class="businessList" @click="gotoOther(1)">
					<view class="businessListTxt">
						<image src="../../static/img/个人中心-邀请好友@2x.png"></image>邀请好友
					</view>
					<view class="businessListYou">
						<image src="../../static/img/you.png"></image>
					</view>
				</view>
				<view class="businessList" @click="gotoOther(2)">
					<view class="businessListTxt">
						<image src="../../static/img/服务@2x.png"></image>服务条文
					</view>
					<view class="businessListYou">
						<image src="../../static/img/you.png"></image>
					</view>
				</view>
				<view class="businessList" @click="gotoOther(3)">
					<view class="businessListTxt">
						<image src="../../static/img/常见问题@2x.png"></image>常见问题
					</view>
					<view class="businessListYou">
						<image src="../../static/img/you.png"></image>
					</view>
				</view>
				<view class="businessList" @click="gotoOther(4)">
					<view class="businessListTxt">
						<image src="../../static/img/意见反馈@2x.png"></image>意见反馈
					</view>
					<view class="businessListYou">
						<image src="../../static/img/you.png"></image>
					</view>
				</view>
			</view>
		</view>
		<!--主体-->

	</view>
</template>

<script>
	export default {
		data() {
			return {
				avatarUrl: '../../static/icon/avatar.png', //头像
				nickName: '点击登录',
				token: '',
				loginState: '',
			}
		},
		onLoad() {

		},
		onShow() {

			this.token = uni.getStorageSync('token');

		},
		methods: {
			gotoOther(num) {
				switch (num) {
					case 0:
						this.$api.navTo('/pages/pagesB/address');
						break;
					case 1:
						this.$api.navTo('/pages/pagesB/yaoqing');
						break;
					case 2:
						this.$api.navTo('/pages/pagesB/server');
						break;
					case 3:
						this.$api.navTo('/pages/pagesB/promble');
						break;
					case 4:
						this.$api.navTo('/pages/pagesB/yijian');
						break;
						//  个人资料
					case 5:
						this.$api.navTo('/pages/pagesB/person_msg')
						break;
					case 6:
						uni.reLaunch({
							url: "/pages/index/order"
						});
						break;
						//  优惠券
					case 7:
						this.$api.navTo('/pages/pagesA/compline')
						break;
				}
			},

			//点击登录
			BindGetUserInfo: function() {
				if (this.loginState == 1) {

				} else {
					let that = this;
					wx.getUserInfo({
						success: function(res) {
							//获取到的微信头像 昵称 性别
							that.nickName = res.userInfo.nickName;
							that.avatarUrl = res.userInfo.avatarUrl;
							that.loginState = 1;
						}
					});
				}
			},

		}
	}
</script>

<style scoped>
	.top {
		margin-top: 30px;
	}

	.kefuIcon {
		width: 25px;
		height: 22px;
	}

	.kefuIcon>image {
		width: 100%;
	}

	page {
		background: #F8F9FB;
	}
	.useInfo{
		text-align: left;
	}

	.imageConOne {
		width: 28px;
		height: 34px;
		margin-right: 5px;
	}

	.imageConTwo {
		width: 30px;
		height: 26px;
		margin-right: 5px;
	}

	.imageConOne>image {
		width: 100%;
		height: 100%;
	}

	.imageConTwo>image {
		width: 100%;
		height: 100%;
	}

	.meMain {
		width: 100%;
		position: relative;
	}

	.meMain>image {
		width: 100%;
		height: 280upx;
		display: block;
	}

	.meMainBox {
		width: 92%;
		margin: 0 auto;
	}

	.mePosition {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
	}

	.meHead {
		overflow: hidden;
		position: relative;
		padding: 20px 0 0 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.meHeadAvatar {
		margin-top: 10upx;
	}

	.meHeadAvatar image {
		width: 110upx;
		height: 110upx;
		display: block;
		border-radius: 50%;
	}

	.meHeadName {
		color: #FFFFFF;
		font-size: 28upx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		display: flex;
		flex-direction: column;
		/* justify-content: center; */
		align-items: center;
		margin-left: 10px;
	}

	.meOverBgOne {
		overflow: hidden;
		margin-top: 30px;
		padding: 0 30upx;
	}

	.meOverBg {
		background: #FFFFFF;
		overflow: hidden;
		border-radius: 10upx;
		margin-top: 30upx;
		box-shadow: 0px 2px 8px 0px rgba(213, 213, 213, 0.4);
		padding: 15px 0;
	}

	.meVisitor {
		display: flex;
		flex-direction: row;
	}

	.meVisitorLt {
		width: 50%;
		text-align: center;
		margin: 30upx 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.meVisitorLt:nth-child(1) {
		border-left: 1px #E7E7E9 solid;
		border-right: 1px #E7E7E9 solid;
	}

	.meVisitorTxt_01 {
		font-size: 20upx;
		color: #A4A4A5;
		text-align: left;
	}

	.meVisitorTxt_01 image {
		width: 35upx;
		height: 35upx;
		vertical-align: middle;
		margin: 0 10upx 4upx 0;
	}

	.meVisitorTxt_02 {
		font-size: 28upx;
		color: #6D6C6C;
		text-align: left;
	}

	.meVisitorTitle {
		font-size: 30upx;
		color: #333333;
		border-bottom: 1px #E7E7E9 solid;
		padding: 20upx 30upx;
	}

	.meOrderLt {
		width: 25%;
		text-align: center;
		padding: 30upx 0;
		transition: all 0.4s;
	}

	.meOrderLt:active {
		background: #E2E2E2;
	}

	.meOrderTxt_01 {}

	.meOrderTxt_01 image {
		width: 40upx;
		height: 40upx;
		display: block;
		margin: 0 auto 6upx;
	}

	.meOrderTxt_02 {
		font-size: 24upx;
		color: #666666;
	}

	.businessList {
		overflow: hidden;
		padding: 30upx 0;
		border-bottom: 1px #E7E7E9 solid;
		transition: all 0.4s;
	}

	.businessList:active {
		background: #E2E2E2;
	}

	.businessList:last-child {
		border-bottom: none;
	}

	.businessListTxt {
		float: left;
		font-size: 28upx;
		color: #333333;
	}

	.businessListTxt image {
		width: 35upx;
		height: 35upx;
		vertical-align: middle;
		margin: 0 10upx 4upx 0;
	}

	.businessListYou {
		float: right;
		font-size: 28upx;
		color: #333333;
	}

	.businessListYou image {
		width: 20upx;
		height: 20upx;
		vertical-align: middle;
		margin: 0 0 4upx 10upx;
	}
</style>
