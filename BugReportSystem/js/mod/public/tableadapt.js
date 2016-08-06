/*
* 
* 全选功能
*/
define(function (require, epxorts, module) {

		$page_footer=$('.js-table-page-footer')
		if($page_footer.length>0){
			function changeFooterWidth(){
				$page_footer.each(function(index){
					$(this).css('width',$(this).siblings('table').css('width'));
				})
			}
			$(window).on('resize',changeFooterWidth).trigger('resize');
		}
})