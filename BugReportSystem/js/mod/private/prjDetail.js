define(function (require,exports,module){
	var ajaxInit=require('../public/ajaxInit.js'),
		obj=require('../public/cookieObj.js')

	var tpl=require('../../../tpl/prjDetail.tpl'),//展示全部人员信息的模板
		render=template.compile(tpl)

	var loadingStr=require('../public/loading')

	var objCopy=require('../public/objCopy')

	function init(){
		//$.post(ajaxInit.url+'/getBug',)
		$('.js-prjDetailTemplate').html(render(obj))		
	}
	init()
})