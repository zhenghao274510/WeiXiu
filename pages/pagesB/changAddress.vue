<template>
	<view class="content">
		<view class="one-info">
			<view class="one-info-top">
				<text class="tit">姓名:</text>
				<input class="input" type="text" v-model="addressData.name" placeholder="请输入您的姓名" placeholder-style="font-size:11px;color:#A4A4A5" />
			</view>
		</view>
		<view class="row b-b">
			<text class="tit">电 话:</text>
			<input class="input" type="number" v-model="addressData.phone" placeholder="请输入您的联系电话" placeholder-style="font-size:11px;color:#A4A4A5"
			 maxlength="11" />
		</view>
		<view class="row b-b">
			<text class="tit">地 址:</text>
			<view class="" style="flex: 1;">
				<xfl-select :list="province" :clearable="false" :listShow="false" :isCanInput="false" :placeholder="'placeholder'"
				 initValue="省" :listTop="30" :selectHideType="'hideAll'" @change="changeProvice">
				</xfl-select>
				<xfl-select :list="city" :clearable="false" :listShow="false" :isCanInput="false" :disabled="first" :placeholder="'placeholder'"
				 initValue="市" :listTop="30" :selectHideType="'hideAll'" @change="changeCity">
				</xfl-select>
				<xfl-select :list="area" :clearable="false" :listShow="false" :isCanInput="false" :disabled="two" :placeholder="'placeholder'"
				 initValue="区" :listTop="30" :selectHideType="'hideAll'" @change="changeArea">
				</xfl-select>
			</view>

			<!-- <text @click="chooseLocation" class="input" v-if="type==0">
				{{addressData.province}}{{addressData.city}}{{addressData.area}}
			</text>
			<text @click="chooseLocation" class="input" v-else>
				{{address}}
			</text> -->

		</view>
		<view class="b-b b-details">
			<text class="tit">详细地址:</text>
			<textarea v-model="addressData.details" placeholder="请输入详细地址，如门牌号" class="textarea" placeholder-style="font-size:13px;" />
			</view>
		<view class="tit-info">
			如未找到您所在城市，则代表该城市尚未开通，请耐心等待，也可提交反 馈给客服人员
		</view>
		<view class="default-row" @click="choseDefault">
			<view class="tit" style="color: #007AFF;">设为默认</view>
			<view class="list-footer-left-img">
				<image src="/static/img/默认@2x.png" mode="scaleToFill"></image>
				<!-- <image src="/static/img/默认选择@2x.png" mode="scaleToFill"></image> -->
			</view>
		</view>
		<button class="add-btn" @click="confirm">保存</button>
	</view>
</template>

<script>
	import xflSelect from "@/components/xfl-select.vue"
	export default {
		data() {
			return {
				addressData: {
					name: '',
					phone: '',
					province: '',
					city: '',
					area: '',
					details: '',
					id: '',
					isDefault: 0
				},
				province: [],
				city: [],
				area:[],
				choseProvice:'',
				choseCity:'',
				choseArea:'',
				first:true,
				two:true,
				identityNum: '',
				showPicker: false,
				type: 0, // 0  修改   1  添加
				icard: ''
			}
		},
		components: {
			xflSelect
		},
		onLoad(options) {
			let title = ""
			options.type == "edit" ? (title = "修改地址", this.addressData = JSON.parse(options.id), this.type = 0, uni.getStorageSync(
				'cardNumber') ? this.identityNum = uni.getStorageSync(
				'cardNumber') : this.identityNum = "") : (title =
				"添加地址", this.type = 1);
			console.log(title, options)
			this.$api.setNav(title);
		},
		methods: {
			initData(){
				
			},
			getProvice(){
				let parmas={
					cid:getApp().globalData.cid,
				}
				this._reqw.ipost(parmas,"district/province").then(res=>{
					res.success?(this.province=res.body.list):console.log("失败")
				}).catch(err=>{})
			},
			getCity(id){
				let parmas={
					cid:getApp().globalData.cid,
					id:id
				}
				this._reqw.ipost(parmas,"district/province").then(res=>{
					res.success?(this.city=res.body.list,this.first=false):console.log("失败")
				}).catch(err=>{})
			},
			getArea(id){
				let parmas={
					cid:getApp().globalData.cid,
					id:id
				}
				this._reqw.ipost(parmas,"district/county").then(res=>{
					res.success?(this.province=res.body.list,this.two=false):console.log("失败")
				}).catch(err=>{})
			},
			//选择地址
			changeProvice(e){
				this.choseCity=e.orignItem.id
				let id=e.orignItem.id;
				this.getCity(id);
			},
			changeCity(e){
				this.choseProvice=e.orignItem.id
				let id=e.orignItem.id;
				this.getArea(id);
			},
			changeArea(e){
				this.choseArea=e.orignItem.id
				// let id=e.orignItem.id;
			},
			choseDefault() {
				this.addressData.isDefault == 0 ? this.addressData.isDefault = 1 : this.addressData.isDefault = 0;
			},

			//提交
			confirm() {
				let data = this.addressData;
				if (!data.name) {
					this.$api.tip('请填写收货人姓名');
					return;
				}
				if (!this.$api.regPhone(data.phone)) {
					this.$api.tip('请输入正确的手机号码');
					return;
				}
				if (!data.province || !data.city || !data.area) {
					this.$api.tip('请在选择所在省市');
					return;
				}
				if (!data.details) {
					this.$api.tip('请填写门牌号信息');
					return;
				} else if (this.identityNum == "") {
					this.$api.tip("请输入身份证号");
				} else if (this.$api.formCard(this.identityNum)) {
					this.$api.tip("身份证号格式不对请重新输入")
				} else {
					let parmas = {
						id: data.id,
						uid: getApp().globalData.uid,
						name: data.name,
						phone: data.phone,
						province: data.province,
						city: data.city,
						area: data.area,
						details: data.details,
						isDefault: data.isDefault,
						identityNum: this.identityNum
					};
					console.log(parmas)
					this._reqw.ipost(parmas, "addOrUpdateAddr").then(res => {
						res.result == 0 ? (this.$api.tip('提交成功!'), uni.setStorageSync('cardNumber', this.identityNum), setTimeout(() => {
							this.$api.back()
						}, 300)) : this.$api.tip(res.resultNote)
					}).catch(err => {})

				}
			},
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		padding: 10px;
	}
	.textarea{
		width:250px;
		height:80px;
		border:1px solid rgb(231,231,233);
		border-radius:2px;
		padding: 5px;
	}
	.tit-info{
		font-size: 11px;
		color: #6D6C6C;
			margin: 10px 0;
	}
	.tit {
		width: 152upx;
		font-size: 26upx;
		color: #6D6C6C;
	}
	.b-details{
		display: flex;
		justify-content: space-between;
	}

	.default-row {
		display: flex;
		align-items: center;
	
	}

	.list-footer-left-img {
		width: 15px;
		height: 15px;
	}

	.one-tip {
		width: 100%;
		height: 30px;
		background: rgb(68, 188, 180);
		border-radius: 10px;
		color: #fff;
		line-height: 30px;
		font-size: 12px;
		text-align: center;
		margin-top: 10px;
	}

	.row {
		height: 110upx;
	}

	.one-info {
		padding: 10px 0;
	}

	.iconfont {
		font-size: 20px;
		margin-left: 10px;
	}

	.row,
	.one-info-top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: relative;
		.input {
			flex: 1;
			font-size: 30upx;
			height: 25px;
			color: #999999;
			border: 1px solid rgba(231, 231, 233, 1);
			border-radius: 2px;
		    padding-left: 10px;
		}

	}

	.add-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 200px;
		border-radius: 22px;
		height: 40px;
		margin: 50px auto;
		color: #fff;
		background: rgba(0, 110, 227, 1);
		box-shadow: 0px 2px 8px 0px rgba(0, 124, 255, 0.5);
	}

	.placeholder {
		font-size: 11px;
		color: #A4A4A5;

	}
</style>
