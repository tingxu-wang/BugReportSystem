/*
* create by wtx 20160914
* 删除账号
*/	

define(function (require,exports,module){
	var ajaxInit=require('../public/ajaxInit.js'),
		obj=require('../public/cookieObj.js')

	var tpl=require('../../../tpl/memberView.tpl'),//展示全部人员信息的模板
		render=template.compile(tpl)

	var loadingStr=require('../public/loading')

	var objCopy=require('../public/objCopy')

	function checkSubmit(){//表单提交检测
		
	}

	function tplInsert(data){//渲染模板
		var innerObj=objCopy(obj)
						
		innerObj.data=data

		if($('.js-reflesh-confirm').length){//存在已渲染的模板，将其删除
			$('.js-reflesh-confirm').remove()
		}

		$('.js-memberView-tpl').append(render(innerObj))
		checkSubmit()//事件注册
	}

	function refreshTpl(codeVal){//select触发change事件时刷新模板
		if(codeVal==='0'){
			init()
		}else{
			$('.js-memberView-tpl').append(loadingStr)
			$.post(ajaxInit.url+'/getUser',{code:codeVal},function(data){
				$('.js-loadingWrap').remove()
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
		$('.js-memberView-tpl').append(loadingStr)
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