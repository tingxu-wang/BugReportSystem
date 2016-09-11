/*
* create by wtx 20160908
* 创建项目脚本，包含模板渲染
*/
define(function (require, epxorts, module){
	var ajaxInit=require('../public/ajaxInit.js'),
		obj=require('../public/cookieObj.js')

	var createPrjTpl=require('../../../tpl/createPrj.tpl'),
		render=template.compile(createPrjTpl)

		console.log($.cookie('uid'))


	function eventHandler(){
		$('.js-createPrj-submit').on('click',function(e){
			var $pname=$('input[name="pname"]'),
				$info=$('textarea[name="info"]'),
				$error=$('.js-setting-submit-error'),
				$success=$('.js-setting-submit-success')

			e.preventDefault()

			$success.addClass('hidden')
			$error.addClass('hidden')

			if($pname.val()===''){
				$error.removeClass('hidden').find('.text-danger').text('请填写完所有必选项')
			}
		})
	}


	$('.js-createPrj-load').html(render())
	eventHandler()

});