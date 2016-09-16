/*
 * create by wtx 20160908
 * 加载用户设置（setting.tpl）
 * 表单验证
*/

define(function (require,exports,module){
	var ajaxInit=require('../public/ajaxInit.js')

	var settingTpl=require('../../../tpl/setting.tpl'),
		render=template.compile(settingTpl),
		obj=require('../public/cookieObj')

	function eventHandler(){
		$('.js-setting-submit').on('click',function(e){
			var $name=$('input[name="password"]'),
				$confirm=$('input[name="confirm"]'),
				password=$name.val().trim(),
				confirm=$confirm.val().trim()

			e.preventDefault()
			$('.js-setting-submit-error,.js-setting-submit-success').addClass('hidden')

			if(password!==confirm){
				$('.js-setting-submit-error').removeClass('hidden').find('span').text('两次密码输入不同，请重新输入')
				return
			}else{//信息正确
				$.post(ajaxInit.url+'/setUser',{pass:password},function(data){
					if(data===1){

						$('.js-setting-submit-success').removeClass('hidden').find('span').text('密码修改成功！')
					}else{
						$('.js-setting-submit-error').removeClass('hidden').find('span').text('设置失败，请刷新页面重试！')
					}
				},'json')
			}
		})		
	}

	$('.js-setting-template').html(render(obj))
	eventHandler()
})