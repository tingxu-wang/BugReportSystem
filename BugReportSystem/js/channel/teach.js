/*
* create by rmz 20160726
* 新teach后台共用js
*/
define(function(require, epxorts, module){
	require('jquery');
    // bootstrap 事件
	require('../plugin/bootstrap');
    // 左侧边栏
	require('../mod/public/sider');
	// 多选重写
	require('../mod/public/mutiselect');
	// 全选功能
	require('../mod/public/fullselect');
	//自适应table
	require('../mod/public/tableadapt');

	//bootstrap 提示插件
	$('[data-toggle="tooltip"]').tooltip();
	$('[data-toggle="popover"]').popover({
		trigger:'hover'
	});

});

