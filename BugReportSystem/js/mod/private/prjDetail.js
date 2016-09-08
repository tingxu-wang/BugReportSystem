define(function (require,exports,module){
	var prjTpl=require('../../../tpl/prjDetail.tpl'),
		render=template.compile(prjTpl)

	var obj=require('../public/cookieObj')

	$('.js-prjDetailTemplate').html(render(obj))
})