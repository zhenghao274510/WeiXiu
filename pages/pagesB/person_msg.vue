<template>
	<div class="contain">
		<div class="box">
			<ul>
				<li style="height:70px;">
					<span>修改头像</span>
					<div class="modify_right">
						<img :src="icon" alt style="border-radius: 50%;" v-if="icon!=''" />
						<img src="/static/img/头像@2x.png" alt v-else />
						<img src="../../static/img/you.png" alt class="right" />
					</div>
				</li>
				<li>
					<span>昵称</span>
					<div class="modify_right">
						<input type="text" placeholder="请输入昵称" v-model="nickname" placeholder-style="font-size:13px" @blur="changeName" />
						<img src="../../static/img/you.png" alt class="right" />
					</div>
				</li>
				<li @click="changePwd">
					<span>手机号</span>
					<div class="modify_right">
						<img src="../../static/img/you.png" alt class="right" />
					</div>
				</li>
			</ul>
			<!-- <div class="btn" @click="loginOut">提交</div> -->
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				text: "个人资料",
				imgs: "",
				url: "",
				type: "",
				uid: "",
				nickname: "",
				icon: "",
				account: ""
			};
		},
		components: {},
		onLoad() {},
		methods: {
			getuser() {
				this.$api.post({
					uid: this.uid
				}, "userInfo").then(res => {
					if (res.result == 0) {
						this.nickname = res.nickname;
						this.icon = res.icon;
						this.account = res.account;
					} else {
						this.$toast(res.resultNote);
					}
				});
			},
			Upfiles() {

			},
			save(url) {
				let parmas = {
					uid: this.uid,
					icon: url
				};
				this.$api
					.post(parmas, "updateIcon")
					.then(res => {
						console.log(res);
						this.$toast(res.resultNote);
						if (res.result == 0) {
							this.getuser();
						}
					})
					.catch(res => {});
			},
			loginOut() {},
			changePwd() {
				this.$router.push({
					path: "/changepsw",
					query: {
						id: this.type
					}
				});
			},
			changeName() {
				let parmas = {
					uid: this.uid,
					nickname: this.nickname
				};
				this.$api
					.post(parmas, "updateNickname")
					.then(res => {
						console.log(res);
						if (res.result == 0) {
							Toast("修改成功!");
						} else {
							Toast(res.resultNote);
						}
					})
					.catch(res => {
						Toast("请求超时!");
					});
			}
		}
	};
</script>

<style scoped lang="less">
	.contain {
		height: 100%;
		background: #fafafa;
		display: flex;
		flex-direction: column;

		.box {
			display: flex;
			flex-direction: column;

			ul {
				display: flex;
				flex-direction: column;
				background: #fafafa;

				li {
					height: 44px;
					display: flex;
					justify-content: space-between;
					align-items: center;
					color: #333;
					font-size: 13px;
					padding: 0 10px;
					border-bottom: 1px solid #eee;
					background: #ffffff;

					.modify_right {
						display: flex;
						justify-content: space-between;
						align-items: center;

						img {
							width: 55px;
							height: 55px;
						}

						.right {
							width: 13px;
							height: 15px;
							margin-left: 30px;
						}

						input {
							text-align: right;
							background: #fff;
						}
					}
				}
			}
		}
	}
</style>
