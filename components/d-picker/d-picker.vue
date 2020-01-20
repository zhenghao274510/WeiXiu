<template>
	<view class="w-picker">
		<view class="mask" :class="{'show':showPicker}" @tap="maskTap" @touchmove.stop.prevent catchtouchmove="true"></view>
		<view class="w-picker-cnt" :class="{'show':showPicker}">
			<view class="w-picker-hd" @touchmove.stop.prevent catchtouchmove="true">
				<view class="w-picker-btn" @tap="pickerCancel">取消</view>
				<view class="w-picker-btn" :style="{'color':themeColor}" @tap="pickerConfirm">确认</view>
			</view>
			<view class="w-picker-view" v-if="mode=='date'">
				<picker-view :indicator-style="itemHeight" :value="pickVal" @change="bindChange" @touchstart="touchStart" @touchend="touchEnd">
					<picker-view-column>
						<view class="w-picker-item"v-for="(item,index) in data">
							<view class="w-picker-item" v-for="(item,index) in nearDay" :key="index">{{item}}</view>
						</view>
						<view class="">
							
						</view>
						
					</picker-view-column>
					
						<picker-view-column>
							<view class="w-picker-item" v-for="(item,index) in data.months" :key="index">{{item}}月</view>
						</picker-view-column>
						<picker-view-column>
							<view class="w-picker-item" v-for="(item,index) in data.days" :key="index">{{item}}日</view>
						</picker-view-column>
				</picker-view>
			</view>
		</view>
	</view>
</template>
<script>
	export default{
		props:{
			timeout: {
				type: Boolean,
				default: false
			},
			getDayNum: { //获取天数（day模式可用）
				type: Number,
				default () {
					return 7
				}
			},
		},
		data(){
			return{
				showPicker:false,
			    date:new Date()
			}
		},
		computed:{
			formDate(){
				let data=new Date();
				let m=data.getMonth()*1+1;
				let d=data.getDate();
			}
		}
		methods:{
			show(){
				this.showPicker=true
			},
			touchStart(){
				if (this.timeout) {
					this.confirmFlag = false;
				}
			},
			touchEnd() {
				if (this.timeout) {
					setTimeout(() => {
						this.confirmFlag = true;
					}, 500)
				}
			}
		}
	}
</script>
<style lang="scss" scoped>
	
	.w-picker {
		position: relative;
		z-index: 99;
	
		.mask {
			position: fixed;
			z-index: 99;
			top: 0;
			right: 0;
			left: 0;
			bottom: 0;
			background: rgba(0, 0, 0, 0.6);
			visibility: hidden;
			opacity: 0;
			transition: all 0.3s ease;
		}
	
		.mask.show {
			visibility: visible;
			opacity: 1;
		}
	
		.w-picker-cnt {
			position: fixed;
			bottom: 0;
			left: 0;
			width: 100%;
			transition: all 0.3s ease;
			transform: translateY(100%);
			z-index: 9999;
		}
	
		.w-picker-cnt.show {
			transform: translateY(0);
		}
	
		.w-picker-hd {
			display: flex;
			align-items: center;
			padding: 0 30upx;
			height: 88upx;
			background-color: #fff;
			position: relative;
			text-align: center;
			font-size: 32upx;
			justify-content: space-between;
	
			.w-picker-btn {
				font-size: 30upx;
			}
		}
	
		.w-picker-hd:after {
			content: ' ';
			position: absolute;
			left: 0;
			bottom: 0;
			right: 0;
			height: 1px;
			border-bottom: 1px solid #e5e5e5;
			color: #e5e5e5;
			transform-origin: 0 100%;
			transform: scaleY(0.5);
		}
	
		.w-picker-item {
			text-align: center;
			width: 50%;
			height: 88upx;
			line-height: 88upx;
			text-overflow: ellipsis;
			white-space: nowrap;
			font-size: 30upx;
		}
	
		.w-picker-view {
			width: 100%;
			height: 476upx;
			overflow: hidden;
			background-color: rgba(255, 255, 255, 1);
			z-index: 666;
		}
	
		picker-view {
			height: 100%;
		}
	}
</style>
