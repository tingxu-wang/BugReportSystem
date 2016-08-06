/*
* create by rmz 20160803
* 页面：课程管理—子课程管理
* 功能：
*/
define(function (require, epxorts, module) {
			 /*
        *页面：课程管理——子课程设置 
        *功能：删除课程
        */
      $(document).on("click","#delCourse",function(){
          var _rurl = $(this).data('url');
          if(confirm('确定删除课程')){
              location.href = _rurl;
          }
      })
         /*
      *页面：课程管理——子课程设置 
      *功能：AIO 添加直播时间,添加删除
      */
      $(document).on("click",".delLive",function(){
        $(this).parent().remove();
      })

      $(document).on("click","#addLive",function(){
          $('.i-live-info:first-child').clone().appendTo('.i-live-list');
      })

        /*
        *页面：课程管理——子课程设置 
        *功能：切换课程刷新页面
        */
       $('#js-select-parent').on('change',function(){
          var _this = $(this);
          var _url = _this.children('option:selected').data("url");
          location.href = _url;
      })

   



       /*
        *页面：课程管理——子课程设置 
        *功能：编辑器
      */
     require.async('http://code.enhance.cn/dist/libs/kindeditor-4.0.6/kindeditor.js',function(){
        var editor = KindEditor.create('#editor_id',{
            width:'100%',
            height:'200px',
            items:['source','bold', 'italic', 'underline', 'justifyleft', 'justifycenter', 'justifyright','insertorderedlist', 'insertunorderedlist', 'removeformat',/*"image"*/],
            themeType : 'simple'
        });
     });
     

})