/*
 * create by wtx 20160908
 * 全局模板初始化，用于根据不同的用户类别展示相应的侧边栏内容,用户名显示
*/

define(function (require,exports,module){
	var sidebarTpl=require('../../../tpl/sidebar.tpl'),
		sidebarRender=template.compile(sidebarTpl)

	var navbarTpl=require('../../../tpl/navbar.tpl'),
		navbarRender=template.compile(navbarTpl)

	var obj=require('./cookieObj')

	$('.page-sidebar-menu').html(sidebarRender(obj))
	$('.cus-navbar-inner').html(navbarRender(obj))

	
})