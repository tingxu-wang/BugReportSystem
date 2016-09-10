/*
* create by wtx 20160910
* 删除账号
*/	

define(function (require,exports,module){
	var ajaxInit=require('../public/ajaxInit.js'),
		obj=require('../public/cookieObj.js')

	var tpl=require('../../../tpl/countView.tpl'),//展示全部人员信息的模板
		render=template.compile(tpl)


	function getUser(obj){//obj传参空字符串（''）表示获取全部数据
		if(arguments.length){

		}else{
			$.post(ajaxInit.url+'/getUser',function(data){
				console.log(data)
			})				
		}

	}
	
	getUser()


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