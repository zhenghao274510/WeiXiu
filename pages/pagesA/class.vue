<template>
	<view>
		<!-- 状态栏 -->
		<mehaotian-search @search="search($event,0)"></mehaotian-search>
		<!-- 占位 -->
		<view class="category-list">
			<!-- 左侧分类导航 -->
			<scroll-view scroll-y="true" class="left">
				<view class="row" v-for="(v,k) in leftDataList" :key="k" :class="[k==showCategoryIndex?'on':'']" @tap="showCategory(v.id,k)">
					<view class="text">
						{{v.name}}
					</view>
				</view>

			</scroll-view>
			<!-- 右侧子导航 -->
			<scroll-view scroll-y="true" class="right">
				<view class="category">
					<empty v-if="rightDataList.length==0"></empty>
					<view class="list" v-else>
						<view class="box" v-for="(v,k) in rightDataList" :key="k" @tap="toCategory(v)" :class="[{'active':v.active},{'borderOne':k%2==1},{'borderTwo':k%2==0}]">
							<image :src="v.icon"></image>
							<view class="text">{{v.name}}</view>
						</view>
					</view>
					<text class="noBind" v-if="rightDataList.length!=0">没有我的设备型号</text>
				</view>
			</scroll-view>
		</view>
	</view>
</template>
<script>
	import mehaotianSearch from "@/components/mehaotian-search/mehaotian-search.vue"
	import empty from "@/components/empty.vue"
	export default {
		data() {
			return {
				tabarA: 1,
				showCategoryIndex: 0,
				categoryId: '',
				image: '',
				leftDataList: [],
				//分类列表
				rightDataList: [],
				rows: 10,
				page: 1,
				isGet: false,
				id: '',
				keyWords:''
			}
		},
		components: {
			mehaotianSearch,
			empty
			
		},
		onLoad(options) {

			if (options.id != undefined) {
				this.id = options.id;
			}
			this.LoadData()
		},
		methods: {
			LoadData() {
				let parmas = {
					cid: getApp().globalData.cid
				}
				this._reqw.ipost(parmas, 'brand').then(res => {
					res.success ? (this.classify = res.body.list, res.body.list.forEach((item, index) => {
						this.id != '' && this.id == item.id ? (this.active == index, this.loadRightData(this.id)) : (this.active = 0,
							this.id = res.body.list[0].id,this.loadRightData(this.id))
					})) : console.log("失败")
				}).catch(err => {})
			},
			loadRightData(id) {
				let parmas = {
					cid: getApp().globalData.cid,
					bid: id,
					name: this.keyWords
				}
				this._reqw.ipost(parmas, 'brandType').then(res => {
					res.success ? (this.rightDataList = res.dataList, this.showImages()) : this.$tip.tip(res.errorCode)
				}).catch(err=>{})
			},
			//分类切换显示
			showCategory(id, k) {
				this.showCategoryIndex = k;
				this.loadRightData(id);
			},
			showImages() {
				let index = (this.page - 1) * this.rows;
				let show = () => {
					if (index < this.rightDataList.length) {
						this.$set(this.rightDataList[index], "active", true);
						index++;
					} else {

					}
				}
				let interval = setInterval(() => {
					show();
				}, 100);
			},
			toCategory(e) {
				this.$api.navTo('/pages/pagesC/firstOrder')
			},
			//搜索跳转
			search() {

			}
		}
	}
</script>
<style lang="scss" scoped>
	.status {
		width: 100%;
		height: 0;
		position: fixed;
		z-index: 10;
		background-color: #fff;
		top: 0;
	}
	.noBind{
		color: #007AFF;
		font-size: 12px;
		margin-top: 30px;
		text-align: center;
		line-height: 25px;
	}

	.category-list {
		width: 100%;
		background-color: #fff;
		display: flex;


		.left,
		.right {
			position: absolute;

			top: 100upx;
			/*  #ifdef  APP-PLUS  */
			top: calc(100upx + var(--status-bar-height));
			/*  #endif  */
			bottom: 0upx;
		}

		.left {
			width: 24%;
			left: 0upx;
			background-color: #f2f2f2;
			padding-bottom: 50px;

			.row {
				width: 100%;
				height: 90upx;
				display: flex;
				align-items: center;

				.text {
					width: 100%;
					position: relative;
					font-size: 28upx;
					display: flex;
					justify-content: center;
					color: #3c3c3c;

					.block {
						position: absolute;
						width: 0upx;
						left: 0;
					}
				}

				&.on {
					height: 100upx;
					background-color: #006EE3;

					.text {
						font-size: 30upx;
						font-weight: 600;
						color: #FFFFFF;
					}
				}
			}
		}

		.right {
			width: 76%;
			left: 24%;
			background: #ffffff;

			.category {
				width: 100%;

				.list {
					margin-top: 40upx;
					width: 100%;
					display: flex;
					flex-wrap: wrap;
					padding-bottom: 50px;

					.borderOne {
						margin: 20upx 20upx 0 0;
					}

					.borderTwo {
						margin: 20upx 20upx 0 20upx;
					}

					.box {
						width: 44%;
						display: flex;
						align-items: center;
						flex-wrap: wrap;
						box-shadow: 0px 3px 7px 0px rgba(214, 213, 213, 0.4);
						border-radius: 4px;
						opacity: 0;
						transform: translateY(40upx);
						transition: all 0.3s ease-in-out 0s;

						&.active {
							opacity: 1;
							transform: translateY(0);
						}

						image {
							width: 100%;
							height: calc(71.44vw / 3);
						}

						.text {
							padding: 10upx;
							text-align: left;
							font-size: 24upx;
							color: #6D6C6C;
						}
					}
				}
			}
		}
	}
</style>
