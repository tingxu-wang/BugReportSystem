/*
* create by wtx 20160908
* 创建项目脚本，包含模板渲染
*/
define(function (require, epxorts, module){
	var ajaxInit=require('../public/ajaxInit.js')

	var createPrjTpl=require('../../../tpl/createPrj.tpl'),
		render=template.compile(createPrjTpl)

	var confirmAlert=require('../public/confirmAlert')

	function eventHandler(){
		$('.js-createPrj-submit').on('click',function(e){
			var $pname=$('input[name="pname"]'),
				$intro=$('textarea[name="intro"]'),
				$error=$('.js-setting-submit-error'),
				$success=$('.js-setting-submit-success')

			e.preventDefault()

			$success.addClass('hidden')
			$error.addClass('hidden')

			if($pname.val()==='' || $intro.val()===''){
				$error.removeClass('hidden').find('.text-danger').text('请填写完所有必选项')
			}else{//填写全
				//if(confirm('确认提交项目:'+$pname.val()+'吗?')){
					confirmAlert.showAlert('确认提交项目:'+$pname.val()+'吗?')
					var dataObj={
						pname:$pname.val(),
						intro:$intro.val(),
						uid:$.cookie('id')
					}

					$('.js-ok-btn').on('click',function(){
						confirmAlert.fadeout()
						$.post(ajaxInit.url+'/addProject',dataObj,function(data){
							if(data==='1'){
								$success.removeClass('hidden').find('.text-success').text('项目添加成功！')
								$pname.val('')
								$intro.val('')
							}else{
								$error.removeClass('hidden').find('.text-danger').text('创建失败，请刷新重试！')
							}
						})						
					})
				//}
			}
		})
	}


	$('.js-createPrj-load').html(render())
	eventHandler()

});