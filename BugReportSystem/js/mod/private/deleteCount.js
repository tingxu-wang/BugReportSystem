/*
* create by wtx 20160910
* 删除账号
*/	

define(function (require,exports,module){
	var ajaxInit=require('../public/ajaxInit.js')

	$('.js-deleteCount-submit').on('click',function(e){
		var $id=$('input[name="id"]'),
			$error=$('.js-submit-error'),
			$success=$('.js-submit-success')

		e.preventDefault()

		$error.addClass('hidden')
		$success.addClass('hidden')
		
		if(!($id.val()==='')){//非空
			if(confirm('确认要删除吗？')){
				$.post(ajaxInit.url+'/removeUser',{'id':$id.val()},function(data){
					console.log(data)
				})
			}
		}else{//空
			$error.text('请填写账号id!').removeClass('hidden')
		}
	})
})