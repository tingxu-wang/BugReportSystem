/*
* create by rmz 20160726
* 左侧边栏js事件
*/
define(function (require, epxorts, module) {
	 /*下拉菜单的手气和隐藏*/ 
	$('.page-sidebar').on('click', 'li > a', function (e) {
        if ($(this).next().hasClass('sub-menu') == false) {
            return;
        }

        var parent = $(this).parent().parent();

        parent.children('li.open').children('a').children('.arrow').removeClass('open');
        parent.children('li.open').children('.sub-menu').slideUp(200);
        parent.children('li.open').removeClass('open');

        var sub = jQuery(this).next();
        if (sub.is(":visible")) {
            jQuery('.arrow', jQuery(this)).removeClass("open");
            jQuery(this).parent().removeClass("open");
            sub.slideUp(200);
        } else {
            jQuery('.arrow', jQuery(this)).addClass("open");
            jQuery(this).parent().addClass("open");
            sub.slideDown(200);
        }

        e.preventDefault();
    });

    /*小图标和详细菜*/ 
    $('.page-sidebar').on('click', '.sidebar-toggler', function (e) {            
        var body = $('body');
        var sidebar = $('.page-sidebar');

        
        $(".sidebar-search", sidebar).removeClass("open");

        if (body.hasClass("page-sidebar-closed")) {
            body.removeClass("page-sidebar-closed");
            $('.main-content').css('margin-left',225);
        } else {
            body.addClass("page-sidebar-closed");
            $('.main-content').css('margin-left',35);
        }

    });

    /*
    *小屏幕隐藏菜单，主题内容全屏
    */
    $(window).on('resize',function(){
        init();
    });

    // 是否展示左侧菜单
/*    function init(){
       if($(window).width()<980){
         $('body').removeClass("page-sidebar-closed");
             $('.main-content').css('margin-left',0);
            $('.page-sidebar').removeClass('in');
        }else{
            $('.main-content').css('margin-left',225);
            $('.page-sidebar').addClass('in');
        }
        var h=$('.main-content').height();
        var winH=$(window).height()-$('#js-cus-navbar').height();
        if(h<winH){
            $('.main-content').css('min-height',winH)
        } 
    }*/
    function init(hidden){
       if($(window).width()<768){
         $('body').removeClass("page-sidebar-closed");
             $('.main-content').css('margin-left',0);

             if($('.page-sidebar').data('hidden')!=1){
                  $('.page-sidebar').removeClass('in');
             }

             // safari下面拖动页面触发resize事件
             if(hidden){
                $('.page-sidebar').data('hidden','1');
             }
        }else if($(window).width()>=768 && $(window).width()<979){
             $('body').removeClass("page-sidebar-closed");
            $('.sidebar-toggler').trigger('click');
            $('.main-content').css('margin-left',35);
        }else{
            $('body').removeClass("page-sidebar-closed");
            $('.main-content').css('margin-left',225);
            $('.page-sidebar').addClass('in');
        }
        var h=$('.main-content').height();
        var winH=$(window).height()-$('#js-cus-navbar').height();
        if(h<winH){
            //$('.main-content').height(winH);
            $('.main-content').css('min-height',winH)
        }
    }
    init();
})