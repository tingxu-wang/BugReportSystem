/*
* create by wtx 20160915
* 测试用
*/	

define(function (require,exports,module){

	$('.js-test').on('click',function(){
		var confirmAlert=require('../mod/public/confirmAlert')

		confirmAlert.showAlert('内容')

		$('.js-ok-btn').on('click',function(){
			confirmAlert.fadeout()
		})
	})
})