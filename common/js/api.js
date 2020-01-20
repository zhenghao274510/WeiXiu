import unireq from './request.js'
const api = {
	tip(a) {
		uni.showToast({
			title: a,
			icon: "none",
			duration: 1500
		})
	},
	get(k) {
		return uni.getStorageSync(k)
	},
	getLocaltion() {
		uni.getLocation({
			type: "gcj02",
			success(res) {

			}
		})
	},
	navTo(url) {
		uni.navigateTo({
			url: url
		})
	},
	back() {
		setTimeout(() => {
			uni.navigateBack()
		}, 500)

	},
	setNav(e) {
		uni.setNavigationBarTitle({
			title: e
		})
	},
	prePage() {
		let pages = getCurrentPages();
		let prePage = pages[pages.length - 2];
		return prePage.$vm;
	},
	loading(e) {
		uni.showLoading({
			mask: false,
			title: e
		})
	},
	hideLoading() {
		uni.hideLoading()
	},
	regPhone(v) {
		var re = new RegExp(/^[1][3456789]\d{9}$/)
		if (re.test(v)) {
			return true;
		} else {
			return false;
		}
	},
	loginTip(cfb, ccb) {
		uni.showModal({
			title: "需要你的授权",
			content: "你还没有登录,请先登录!",
			cancelColor: "#CCCCCC",
			confirmText: "前往登录",
			cancelText: "取消",
			confirmColor: "#038980",
			success: function(res) {
				if (res.confirm) {
					cfb()
					// uni.redirectTo({
					// 	url: "/pagesB/author/index"
					// })
				} else if (res.cancel) {
					ccb()
					console.log("取消")

				}

			}

		})
	},
	modeltip(cfb, ccb) {
		uni.showModal({
			title: "设置支付密码",
			content: "你还没有设置支付密码,是否前往设置?取消将视为放弃该商品",
			cancelColor: "#cccccc",
			confirmText: "确定",
			cancelText: "取消",
			confirmColor: "#038980",
			success: function(res) {
				if (res.confirm) {
					cfb()
				} else if (res.cancel) {
					ccb()
				}

			}

		})
	},
	getMineOrderTypeList() {
		return [{
				name: '待付款',
				icon: 'daifukuan@2x.png',
				width: 34,
				height: 28
			},
			{
				name: '待发货',
				icon: 'daifahuo@2x.png',
				width: 29,
				height: 30
			},
			{
				name: '待收货',
				icon: 'daishouhuo@2x.png',
				width: 33,
				height: 27
			},
			{
				name: '退换货',
				icon: 'shouhou@2x.png',
				width: 29,
				height: 29
			}
		]

	},
	getMineServceTypeList() {
		return [{
				name: '我的优惠券',
				icon: 'wodeyouhuijuan@2x.png',
				width: 33,
				height: 33
			},
			{
				name: '我的收益',
				icon: 'wodeshouyi@2x.png',
				width: 30,
				height: 30
			},
			{
				name: '地址管理',
				icon: 'dizhiguanli@2x.png',
				width: 25,
				height: 31
			},
			{
				name: '我的收藏',
				icon: 'wodeshoucang@2x.png',
				width: 30,
				height: 28
			},
			{
				name: '联系客服',
				icon: 'lianxikefu@2x.png',
				width: 28,
				height: 27
			},
			{
				name: '邀请有礼',
				icon: 'yaoqingyouli@2x.png',
				width: 29,
				height: 28
			},
			{
				name: '我的粉丝',
				icon: 'wodefensi@2x.png',
				width: 33,
				height: 29
			},
			{
				name: '我的积分',
				icon: 'wodejiufen@2x.png',
				width: 31,
				height: 31
			},
			{
				name: '招商加盟',
				icon: 'zhaoshanglianmeng@2x.png',
				width: 30,
				height: 30
			},
			{
				name: '帮助中心',
				icon: 'bangzhuzhongxin@2x.png',
				width: 24,
				height: 30
			}
		]
	},
	shareList() {
		return [{
				type: 1,
				icon: '/static/image/weixin@2x.png',
				text: '发送给朋友'
			},
			{
				type: 2,
				icon: '/static/image/haibao@2x.png',
				text: '生成海报'
			}
		]
	},
	PayBywx(data) {
		uni.requestPayment({
			timeStamp: data.timestamp,
			nonceStr: data.nonceStr,
			package: data.prepayid,
			signType: data.signType,
			paySign: data.paySign,
			success(res) {
				uni.redirectTo({
					url: '/pagesD/order/order?id=2'
				});
				console.log("支付成功!");
			},
			fail(res) {
				uni.redirectTo({
					url: '/pagesD/order/order?id=1'
				});
			}
		});
	},
	callPhone(num) {
		uni.makePhoneCall({
			phoneNumber: num
		})
	},
	formText(str) {
		var s = "";
		s = str.replace(/&amp;/g, "&");
		s = s.replace(/&lt;/g, "<");
		s = s.replace(/&gt;/g, ">");
		s = s.replace(/&nbsp;/g, " ");
		s = s.replace(/&#39;/g, "'");
		s = s.replace(/&quot;/g, '"');
		s = s.replace(/<br\/>/g, "\n");
		s=s.replace(/\<img/gi,   '<img class="rich-img" ' );
		return s;
	},
	parsePrice(money) {
		var n = 2;
		money = parseFloat((money + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
		var l = money.split(".")[0].split("");
		var r = money.split(".")[1];
		var t = "";
		for (let i = 0; i < l.length; i++) {
			t += l[i];
		}
		return t + "." + r;
	},
	formTime(val) {
		return val.split('')[0]
	}
}
export default api;
