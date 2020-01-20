<template>
	<view class="content">
		<view class="yaoqing-top">
			第一次下单 请完善相关信息
		</view>
		<view class="content-info">
			<view class="one-info">
				<!-- <view class="one-info-top"> -->
				<text class="tit">
					绑定手机号
				</text>
				<input class="input" type="text" v-model="phone" placeholder="请输入手机号" placeholder-style="font-size:11px;color:#A4A4A5" />
				<!-- </view> -->
			</view>
			<view class="one-info">
				<text class="tit">验证码</text>
				<input class="oneinput" type="number" v-model="YZM" placeholder="验证码" placeholder-style="font-size:11px;color:#A4A4A5"
				 maxlength="11" />
				<view class="btn">
					获取验证码
				</view>
			</view>

			<view class="one-info end">
				<!-- <view class="one-info-top"> -->
				<text class="tit">购买时间</text>
				<view class="one-info-right" @click="choseTime(0)" v-if="buyTime==''">
					请选择
				</view>
				<view class="one-info-right" @click="choseTime(0)" v-else>
					{{buyTime}}
				</view>
				<!-- </view> -->
			</view>
			<view class="one-info end">
				<text class="perseve">
					上次更换滤芯时间
				</text>
				<view class="one-info-right" @click="choseTime(1)" v-if="changeTime==''">
					请选择
				</view>
				<view class="one-info-right" @click="choseTime(1)" v-else>
					{{changeTime}}
				</view>
			</view>
		</view>
		<view class="confirmBtn" @click="subOrder">
			提 交
		</view>
		<w-picker mode="date" startYear="1970" :endYear="endYear" :defaultVal="endYear" :current="true" @confirm="onConfirm"
		 :disabledAfter="true" ref="date" themeColor="#f00"></w-picker>

	</view>
</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue"
	export default {
		data() {
			return {
				endYear: new Date(),
				current: 0,
				buyTime: '',
				changeTime: '',
				YZM:'',
				phone:''
			}
		},
		components: {
			wPicker
		},
		onLoad() {

		},
		methods: {
			choseTime(n) {
				this.current = n;
				this.$refs.date.show()
			},
			onConfirm(e) {
				let n = this.current;
				console.log(e)
				n == 0 ? this.buyTime = e.result : this.changeTime = e.result;
			},
			subOrder(){
				this.$api.navTo("/pages/pagesC/finishedOrder")
			}
		}
	}
</script>

<style scoped lang="scss">
	.yaoqing-top {
		padding: 10px 40px;
		font-size: 12px;
		font-weight: 500;
		color: #006EE3;
		line-height: 17px;
		text-align: center;
	}

	.end {
		justify-content: space-between;
		line-height: 25px;
	}

	.tit {
		width: 62px;
		color: #6D6C6C;
		font-size: 13px;
	}

	.perseve {
		width: 120px;
		color: #6D6C6C;
		font-size: 13px;
	}

	.one-info-right {
		color: #006EE3;
		font-size: 12px;
	}

	.content-info {
		padding: 0 30px;

		.one-info {
			display: flex;
			align-items: center;
			margin: 5px 0;

			.input {
				flex: 1;
				border: 1px solid #E7E7E9;
				padding-left: 10px;
			}

			.oneinput {
				width: 40%;
				border: 1px solid #E7E7E9;
				padding-left: 10px;
			}

			.btn {
				width: 90px;
				height: 27px;
				background: rgba(0, 110, 227, 1);
				border-radius: 2px;
				color: #FFFFFF;
				font-size: 12px;
				font-weight: 500;
				line-height: 27px;
				text-align: center;
				margin-left: 10px;
			}

		}
	}

	.confirmBtn {
		width: 260px;
		height: 42px;
		margin: 40px auto;
		background: rgba(0, 110, 227, 1);
		box-shadow: 0px 2px 8px 0px rgba(0, 124, 255, 0.5);
		border-radius: 22px;
		font-size: 17px;
		font-weight: bold;
		color: rgba(255, 255, 255, 1);
		line-height: 42px;
		text-align: center;
	}
</style>
