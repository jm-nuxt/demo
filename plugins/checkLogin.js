import address from '~/config/address'

export default {
	hasLogin(config) {
		return new Promise(function(resolve, reject) {
			const script = document.createElement('script')

			window.userNotLoginCallback = function(){
				document.body.removeChild(script)
				console.log('沒有登录哦！')
				reject && reject()
			}

			window.userLoginSuccessCallback = function(){
				document.body.removeChild(script)
				console.log('已经登录了')
				resolve && resolve()
			}

			script.id = '_hasLoginJs'
	    script.type = 'text/javascript'
	    script.charset = 'utf-8'
	    script.defer = true
	    script.async = true
			script.src = address.USERCENTER_ADDRESS + '/hasLogin?serviceContext=&_t=' + Date.now()
			document.body.appendChild(script)
			debugger;
		})
	}
}
