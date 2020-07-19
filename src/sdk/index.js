import config from './config'
import axios from 'axios'
import qs from 'qs'

// 不需要授权的api
const freeApis = [
	'/core/auth/login'
]
class SDK {
	constructor() {
		this._delayedCall = [] // 延迟 处理单元
		this._errHanlders = [] // 错误 处理器
		// 创建一个文件上传用的 axios 对象
		this.uploadInst = axios.create({
			baseURL: config.serverAddress,
			timeout: config.timeout,
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		})
	}
	// 设置token 意味着重新登陆了
	set token(token) {
		this._token = token
		// 每次设置token，都需要对延迟调用的 请求 做一次清楚
		if (this._token) // 只有 token有值的时候才需要请求
			this._delayedCall.forEach(params => {
				this.fetch(params)
			})
		// 处理完清理,每次新的token来之后都要清理下 老的请求,不管token有没有
		if (this._delayedCall.length > 0)
			this._delayedCall.splice(0, this._delayedCall.length)
	}
	delDelayedCall(token) {
		// 每次设置token，都需要对延迟调用的 请求 做一次清楚
		if (token) // 只有 token有值的时候才需要请求
			this._delayedCall.forEach(params => {
				this.fetch(params, token)
			})
		// 处理完清理,每次新的token来之后都要清理下 老的请求,不管token有没有
		if (this._delayedCall.length > 0)
			this._delayedCall.splice(0, this._delayedCall.length)
	}
	// 注册 事件，提供异常过滤事件
	regErrHanlder(hanlder) {
		/**
		 * 如：{
		 *  errCode : 'token_is_invalid',
		 *  action: (err,params) => {}
		 * }
		 */
		// 结构正确才可以被接纳
		if (hanlder.errCode && hanlder.action)
			this._errHanlders.push(hanlder)
	}

	// api 请求
	fetch(params, token) {
		// console.log('记录请求-----------',params,token)
		// 错误没必要这里处理，因为 业务有自己的具体处理方案，比如用户状态会维护自己的token,个人认为
		if (token != null) this.doRequest(params, token)
		else {
			if (this.authCheck(params.api)) {
				this._delayedCall.push(params)
			} else this.doRequest(params)
		}
	}

	/* ======================================================= */
	// 检查是否需要授权
	authCheck(api) {
		return freeApis.findIndex(a => a === api) < 0 // 不存在就 是需要验证的
	}
	doRequest(params, token) {
		// Loading.service({fullscreen: true, text: '拼命加载中....'} )
		this.checkParams(params) // 异常处理 二选一
		// 复制一份data
		if (params.data) {
			params.data = JSON.parse(JSON.stringify(params.data));
			// 对 meta数据做下转换
			if (params.data.meta && typeof params.data.meta === "object") {
				params.data.meta = JSON.stringify(params.data.meta)
			}
		}
		// if (token) sysParams.token = token // 用户token,新的方式加入header了
		let method = params.method ? params.method : config.method
		let timeout = config.timeout;
		let prepareData = {
			url: config.serverAddress + params.api,
			header: {
				'Content-Type': 'application/x-www-form-urlencoded',
				'x-auth-token': token
			},
			data: {
				clientid: config.clientid,
				...params.data
			},
			dataType: 'json',
		}
		switch (method.toUpperCase()) {
			case 'POST': {
				axios.post(prepareData.url, qs.stringify(prepareData.data), { headers: prepareData.header, timeout })
					.then(response => {
						this.dealResponse(response, params)
					}).catch(error => {
						console.log('post---------', error)
						if (error.response == null)
							error.response = { errCode: 'net_error', errMsg: '网络异常' }
						if (error.response.data && error.response.data.errCode) this.dealResponse(error.response, params)
						else this.completeSDK(error.response, params)
					})
				break
			}
			case 'upload': {
				this.upload(params.api, prepareData)
					.then(response => {
						this.dealResponse(response, params)
					}).catch(error => {
						console.log('upload---------', error)
						if (error.response.data && error.response.data.errCode) this.dealResponse(error.response, params)
						else this.completeSDK(error.response, params)
					})
				break
			}
			default:
				axios.get(prepareData.url, { params: prepareData.data, headers: prepareData.header }, { timeout })
					.then(response => {
						this.dealResponse(response, params)
					}).catch(error => {
						if (error.response && error.response.data && error.response.data.errCode) this.dealResponse(error.response, params)
						else this.completeSDK(error.response, params)
					})
				break
		}
	}
	upload(apiName, prepareData) {
		return new Promise((resolve, reject) => {
			// console.log('看看 request',request)
			// 组装formData
			let fd = new FormData()
			fd.append('file', prepareData.data.file, encodeURIComponent(prepareData.data.file.name))
			Object.keys(prepareData.data).forEach(key => {
				if (key !== 'file')
					fd.append(key, prepareData.data[key])
			})
			this.uploadInst.post(apiName, fd)
				.then(response => {
					resolve(response)
				}).catch(error => {
					reject(error)
				})
		})
	}
	uploadCustom(params, token) {
		//url,file,fieldName='file'
		return new Promise((resolve, reject) => {
			let fd = new FormData()
			fd.append(params.fieldName, params.file, encodeURIComponent(params.file.name))
			if (token)
				fd.append("token", token)
			this.uploadInst.post(params.url, fd)
				.then(response => {
					resolve(response)
				}).catch(error => {
					reject(error)
				})
		})
	}
	//集中处理get，post的respone
	dealResponse(response, params) {
		if (response.data.errCode) {
			// console.log('delresponse-------',response)
			if (this._errHanlders.length > 0) this.doErrHanlder(response, params)
			if (params.fail) params.fail(response.data)
		} else {
			try {
				if (params.success) {
					params.success(response.data)
				}
				if (params.complete) params.complete(response.data)
			} catch (e) {
				// console.log('截获错误---------', e)
			}
		}
		this.completeSDK(response, params)
	}

	// 错误回调 这里的错误是指 服务器端 的特定错误
	doErrHanlder(res, params) {
		console.log('处理指定错误------', res, params)
		if (res.data && res.data.errCode) {
			this._errHanlders.forEach(h => {
				if (res.data.errCode === h.errCode) // 判断 错误编码是否匹配
					h.action(res.data, params) // 回调
			})
		}
	}

	// 检查参数
	checkParams(params) {
		// console.log('throw error-------',params)
		if (!params.api) throw new Error("api没有设置")
	}
	completeSDK(e, params) {
		// console.log('----------------------------completeSDK----------------------------')
		// console.log(e)
		// console.log(params)
		// console.log('----------------------------completeSDK end----------------------------')
		// setTimeout(()=>{
		//   Loading.service().close()
		// },500)
	}
}

export default new SDK()
