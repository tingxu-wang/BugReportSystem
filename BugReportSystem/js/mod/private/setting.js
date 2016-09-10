/*
 * create by wtx 20160908
 * 加载用户设置（setting.tpl）
 * 表单验证
*/

define(function (require,exports,module){
	var settingTpl=require('../../../tpl/setting.tpl'),
		render=template.compile(settingTpl),
		obj=require('../public/cookieObj')

	console.log(obj)
	
	$('.js-setting-template').html(render(obj))


	$('.js-setting-submit').on('click',function(e){
		var password=$('input[name="password"]').val().trim(),
			confirm=$('input[name="confirm"]').val().trim()

		e.preventDefault()
		$('.js-setting-submit-error').addClass('hidden')

		if(password!==confirm){
			$('.js-setting-submit-error').removeClass('hidden').find('span').text('两次密码输入不同，请重新输入')
			return
		}
	})
})