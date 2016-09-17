/*
* create by wtx 20160908
*/
define(function (require, epxorts, module){
	$('.container-fluid').on('click','.js-prj-table tbody tr',function(){
		var $this=$(this),
			pid=$(this).find('td').eq(0).data('id')//单行项目id

		$.cookie('detail_pid',pid)//点击的项目id保存到cookie中

		window.location.href='prjdetail.html'		
	})
/*	$('.js-prj-table tr').on('click',function(){
		var $this=$(this),
			pid=$(this).find('td').eq(1).text().trim()//单行项目id

		$.cookie('pid',pid)

		window.location.href='prjdetail.html'
	})*/
});