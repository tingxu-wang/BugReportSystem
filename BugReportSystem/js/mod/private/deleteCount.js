/*
* create by wtx 20160910
* 删除账号
*/	

define(function (require,exports,module){
	var ajaxInit=require('../public/ajaxInit.js'),
		obj=require('../public/cookieObj.js')

	var tpl=require('../../../tpl/deleteCount.tpl'),//展示全部人员信息的模板
		render=template.compile(tpl)

	var loadingStr=require('../public/loading')

	var objCopy=require('../public/objCopy')

	var confirmAlert=require('../public/confirmAlert')

	function checkSubmit(){//表单提交检测
		$('.js-deleteRow').on('click',function(){
			var $this=$(this),
				id=$this.data('pid')

			//if(confirm('确认删除账号：'+$this.parent().siblings('.js-user-name').text()+'吗？')){
				confirmAlert.showAlert('确认删除账号：'+$this.parent().siblings('.js-user-name').text()+'吗？'))
				
				$('.js-ok-btn').on('click',function(){
					confirmAlert.fadeout()
					$.post(ajaxInit.url+'/removeUser',{id:id},function(data){
						if(data==='1'){
							$this.parents('tr').remove()
							alert('账号删除成功！')
						}else{
							alert('账号删除失败，请您刷新重试！')
						}
					})						
				})
			
			//}
		})
	}

	function tplInsert(data){//渲染模板
		var innerObj=objCopy(obj)
		
		innerObj.data=data

		if($('.js-reflesh-confirm').length){//存在已渲染的模板，将其删除
			$('.js-reflesh-confirm').remove()
		}

		$('.js-deleteCount-tpl').append(render(innerObj))
		checkSubmit()//事件注册
	}

	function refreshTpl(codeVal){//select触发change事件时刷新模板
		if(codeVal==='0'){
			init()
		}else{
			$.post(ajaxInit.url+'/getUser',{code:codeVal},function(data){
				tplInsert(data)
			},'json')			
		}			
	}

	function eventInit(){
		$('.js-codeSelect').on('change',function(){
			var optionVal=$(this).find('option:checked').val()
			refreshTpl(optionVal)
		})
	}

	function init(){//模板初始化，页面刚打开默认返回全部账号
		$('.js-deleteCount-tpl').append(loadingStr)
		$.post(ajaxInit.url+'/getUser',function(data){
			$('.js-loadingWrap').remove()
			//http://115.28.243.24:8080/SSH/getUser
			//var data=[{"id":"1","sex":"male","name":"admin","code":"1","password":"admin","intro":"è¶…ç®¡"},{"id":"8a21a4765714bc42015714c921b70000","sex":"male","name":"pmTest","code":"2","password":"admin"},{"id":"8a21a47657229298015722937a120000","sex":"male","name":"userTest","pid":"a","code":"5","password":"admin"},{"id":"8a21a47657229298015723d049380001","sex":"female","name":"a","code":"5","password":"admin"}]
			tplInsert(data)
		},'json')			
	}


	eventInit()
	init()

})