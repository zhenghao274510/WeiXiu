<template>
	<view class="content">
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
		<view class="server-val">
			<text class="server-class">订单评价</text>  <sx-rate :value="orderVal"></sx-rate>
		</view>
		<view class="server-val">
			<text class="server-class">员工评价</text>  <sx-rate :value="personVal"></sx-rate>
		</view>
		<textarea value="" placeholder="请输入您的评价" class="textarea" />
		<view class="footer-btn" hover-class="btn-hover">
			提 交
		</view>
		
		
	</view>
</template>

<script>
	import sxRate from "@/components/sx-rate/index.vue"
	export default{
		data(){
			return {
				orderVal:5,
				personVal:5
			}
		},
		components:{
			sxRate
		}
	}
</script>

<style scoped lang="scss">
	.content{
		padding: 15px;
	}
	.server-val{
		display: flex;
		align-items: center;
		padding: 10px 0;
	}
	.server-class{
		color: #6D6C6C;
		font-size: 12px;
		margin-right: 10px;
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
	.footer-btn{
		width:260px;
		height:44px;
		background:rgba(0,110,227,1);
		box-shadow:0px 1px 4px 0px rgba(0,124,255,0.5);
		border-radius:22px;
		margin: 50px auto;
		font-size:17px;
	     color: #FFFFFF;
		font-weight:bold;
		text-align: center;
		line-height: 44px;
	}
	.textarea{
		padding: 10px;
		width: 100%;
		height: 100px;
		box-sizing: border-box;
		border-radius: 4px;
		font-size: 11px;
		border:1px solid rgba(231,231,233,1);
		border-radius:2px;
		color: #A4A4A5;
	}
</style>
