/*
 * create by wtx 20160908
*/

define(function (require,exports,module){
	var settingTpl=require('../../../tpl/prjView.tpl'),
		render=template.compile(settingTpl)
	
	$('.js-prjView-template').html(render())

})