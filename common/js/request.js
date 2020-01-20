const bassUrl=require("./config.js").bass
const http = {
	iget(t = {}, e) {
		return new Promise((resolve, reject) => {
			uni.request({
				url: encodeURI(`${bassUrl}` + e),
				// url: encodeURI(`${bassUrl}/customer/` + e),
				data: t,
				method: "GET",
				header: {
					//   'X-Bmob-Application-Id': bmobConfig.applicationId,
					//   'X-Bmob-REST-API-Key': bmobConfig.restApiKey,
					'Content-Type': 'application/json'
				},
				success: function(res) {
					resolve(res.data)
				},
				fail: function(res) {
					resolve(res)
				}
			});
		});
	},
	ipost(t = {}, e) {
		return new Promise((resolve, reject) => {
			uni.request({
				url: encodeURI(`${bassUrl}` + e),
				// url: encodeURI(`${bassUrl}/customer/` + e),
				data: t,
				method: "POST",
				header: {
					//   'X-Bmob-Application-Id': bmobConfig.applicationId,
					//   'X-Bmob-REST-API-Key': bmobConfig.restApiKey,
					'Content-Type': 'application/json'
				},
				success: function(res) {
					resolve(res.data)
				},
				fail: function(res) {
					resolve(res)
				}
			});
		});
	},
	iupfile(t={}) {
		uni.showLoading({
			mask: false,
			title: "上传中..."
		});
		return new Promise((resolve, reject) => {
			uni.uploadFile({
				url: encodeURI(`${bassUrl}/file/upload`),
				filePath: t.path,
				name: 'file',
				method: "POST",
				headers: {
					'Content-Type': 'application/json',
					'Content-Type': 'multipart/form-data;'
				},
				success: function(res) {
					uni.hideLoading();
					resolve(res.data)
				},
				fail: function(res) {
					uni.hideLoading();
					resolve(res)
				}
			});
		});
	}
}

export default http;
