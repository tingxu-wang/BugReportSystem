define(function (require,exports,module){
	var prjTpl=require('../../../tpl/prjDetail.tpl'),
		render=template.compile(prjTpl)

	var obj=require('../public/cookieObj')

	var objCopy=require('../public/objCopy')

	function init(){
		$('.js-prjDetailTemplate').html(render(obj))		
	}
	init()
})