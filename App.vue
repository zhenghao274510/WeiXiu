<script>
	export default {
		globalData:{
			// cid:'1'
			cid:''
		},
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import url("./common/uni.css");
	*{
		padding: 0;
		margin: 0;
	}
	.btn-hover {
		opacity: .8;
	}
	view{
		font-size: 14px;
		box-sizing: border-box;
	}
	image{
		width: 100%;
		height: 100%;
	}
	.ft_color{
		font-size: 11px;
		color: #A4A4A5;
	}
	.order-btn{
		padding: 2px 10px;
		color: #007AFF;
		border: 1px solid #007AFF;
		border-radius: 3px;
		font-size: 12px;
	}
	::-webkit-scrollbar {
	  width:0;
	  height: 0;
	  color: transparent;
	}
</style>
