/*
 * create by wtx 20160908
 * 全局模板初始化，用于根据不同的用户类别展示相应的侧边栏内容,用户名显示
*/

define(function (require,exports,module){
	var sidebarTpl=require('../../../tpl/sidebar.tpl')
	var render=template.compile(sidebarTpl)

	$('.page-sidebar-menu').html(render({code:$.cookie('code')}))

	$('.cus-user .username').html($.cookie('name'))
	
})