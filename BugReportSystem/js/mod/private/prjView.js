/*
 * create by wtx 20160908
*/

define(function (require,exports,module){
	var ajaxInit=require('../public/ajaxInit.js')

	var settingTpl=require('../../../tpl/prjView.tpl'),
		render=template.compile(settingTpl)

	var obj=require('../public/cookieObj.js')

	var loadingStr=require('../public/loading')

	var objCopy=require('../public/objCopy')

	function getPrj(infoObj){
		if(arguments.length){
			$('.js-prjView-template').append(loadingStr)
			$.post(ajaxInit.url+'/getProject',infoObj,function(data){//有传参，内容为uid(PM的id),返回PM下的所有项目
				$('.js-loadingWrap').remove()
				//http://115.28.243.24:8080/SSH/getProject?uid=8a21a4765714bc42015714c921b70000
				//var data=[{"id":"8a21a4765714bc42015714cccc6a0001","uid":"8a21a4765714bc42015714c921b70000","p_name":"projectName","time":"2016-09-10 00:00:00.0","pmname":"pmTest","intro":"projectIntrol"}]
				var innerObj=objCopy(obj)
				innerObj.data=data

				$('.js-prjView-template').html(render(innerObj))
			},'json')
		}else{
			$('.js-prjView-template').append(loadingStr)
			$.post(ajaxInit.url+'/getProject',function(data){
				$('.js-loadingWrap').remove()
				//http://115.28.243.24:8080/SSH/getProject
				//var data=[{"id":"1","uid":"8a8bb31356f091120156f096a0e50000","p_name":"BUGé¡¹ç›®","time":"2016-09-10 00:00:00.0","pmname":"ä¸åˆ˜å…¨","intro":"æµ‹è¯•"},{"id":"8a21a4765714bc42015714cccc6a0001","uid":"8a21a4765714bc42015714c921b70000","p_name":"projectName","time":"2016-09-10 00:00:00.0","pmname":"pmTest","intro":"projectIntrol"}]
				var innerObj=objCopy(obj)
				innerObj.data=data

				$('.js-prjView-template').html(render(innerObj))
			},'json')
		}
	}

	if($.cookie('code')==='2'){//用户为PM 返回该账号下的项目
		getPrj({uid:$.cookie('id')})
	}else{
		getPrj()
	}

	
	
	//$('.js-prjView-template').html(render())

})