<template>
	<view class="content">
		<!-- 服务地址 -->
		<view class="address-info">
			<view class="order-info-title">
				服务地址
			</view>
			<view class="address-info-content">
				<view class="address">
					<view class="address-top">
						<view class="">
							xingming
						</view>
						<view class="">
							dianhua
						</view>
					</view>
					<view class="address-details uni-two-cut">
						dffhhhhhhhggggggggggfggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggh
					</view>

				</view>
				<view class="address-image">
					<image src="/static/img/返回拷贝2@2x.png" mode="scaleToFill"></image>
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
		<view class="order-info">
			<view class="order-info-title">
				选择服务类型
			</view>
			<view class="servce-info-list">
				<text class="tag" v-for="(v,k) in servceList" :key="k">{{v}}</text>
			</view>
			<view class="servce-info-list">
				<text class="servce-chose">故障类型</text>
				<xfl-select :list="serveChose" :clearable="false" :listShow="false" :isCanInput="false" :placeholder="'placeholder'"
				 initValue="除臭" :listTop="30" :selectHideType="'hideAll'">
				</xfl-select>
			</view>
			<view class="servce-info-list">
				<text class="servce-chose">
					上门时间
				</text>
				<text class="order-info-title" @click="choseTime">请选择</text>
			</view>
			<textarea class="textarea" placeholder="备注：可详细描述您的故障" placeholder-style="font-size:11px;color:#6D6C6C" />
			</view>
		
		<view class="footer">
			<view class="price">
				<view class="yu-price">
					预付款:<text class="one">￥100</text>
				</view>
				<view class="all-price">
                  总服务款￥100.0
				</view>
			</view>
			<view class="footer-btn">
				提交订单
			</view>
		</view>
		<d-picker mode="selector" :startYear="startYear"  :current="true" @confirm="onConfirm"
		 :disabledAfter="false" ref="date" themeColor="#f00"></d-picker>
		<long-date ></long-date>

	</view>
</template>

<script>
	import xflSelect from "@/components/xfl-select.vue"
	import dPicker from "@/components/w-picker/w-picker.vue"
	import longData  from "@/components/long-date/long-date.vue"
	export default {
		data() {
			return {
				dataList: [],
				page: 1,
				servceList: ['保养滤芯', '故障维修', '上门安装'],
				serveChose:[],
				doorTime:'',
				startYear:new Date()
			}
		},
		components: {
			xflSelect,
			dPicker,
			longData
		},
		onLoad() {
			this.loadData()
		},
		methods: {
			loadData() {

			},
			goto(e) {

			},
			choseTime(){
				this.$refs.date.show()
			},
			onConfirm(e){
				this.doorTime=e.result
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		
		//  底部
		
		
		.footer{
			display: flex;
			width: 100%;
			position: fixed;
			padding:10px;
			box-sizing: border-box;
			justify-content: space-between;
			align-items: center;
			bottom: 0;
			z-index: 99;
			.price{
				.yu-price{
					font-size: 12px;
					color: #6D6C6C;
					.one{
						color: #FF0000;
						font-size: 17px;
						font-weight: bold;
					}
				}
				.all-price{
					color: #6D6C6C;
					font-size: 11px;
				}
			}
			.footer-btn{
				width:130px;
				height:32px;
				line-height: 32px;
				text-align: center;
				background:rgba(0,110,227,1);
				border-radius:19px 0px 0px 19px;
				color: #FFFFFF;
				font-size: 16px;
				font-weight: bold;
			}
		}
		.address-info {
			padding: 10px;
		}
		.textarea{
			border: 1px solid #E7E7E9;
			height: 100px;
			padding: 10px;
			width: 100%;
			box-sizing: border-box;
		}

		.servce-chose {
			font-size: 13px;
			color: #6D6C6C;
		}

		.servce-info-list {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 10px;

			.tag {
				padding: 7px 14px;
				font-size: 13px;
				color: #6D6C6C;
				border: 1px solid #E7E7E9;
				border-radius: 4px;
			}

			.on {
				border: 1px solid #007AFF
			}
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
				flex: 1;
				margin-right: 10px;

				.address-top {
					display: flex;
					justify-content: space-between;
					align-items: center;
				}

				.address-details {
					margin-top: 10px;
					word-break: break-all;
					display: -webkit-box;
					overflow: hidden;
					line-height: 1.5;
					text-overflow: ellipsis;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
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
		}

	}
</style>
