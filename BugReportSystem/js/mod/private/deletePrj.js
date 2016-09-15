/*
* create by wtx 20160911
* 删除项目脚本，包含模板渲染
*/
define(function (require, epxorts, module){
	var ajaxInit=require('../public/ajaxInit.js'),
		obj=require('../public/cookieObj.js')

	var tpl=require('../../../tpl/deletePrj.tpl'),//展示全部人员信息的模板
		render=template.compile(tpl)

	var loadingStr=require('../public/loading')

	var objCopy=require('../public/objCopy')

	var confirmAlert=require('../public/confirmAlert')

	var infoObj={
		uid:$.cookie('id')
	}

	function renderCompile($selector,render,obj){
		var innerObj=Object.assign({},obj)
			innerObj.data=data
		
		$selector.html(render(innerObj))
	}

	function eventHandler(){
		$('.js-deleteRow').on('click',function(){
			var $this=$(this),
				pname=$this.parent().siblings('.js-pname').text(),
				pid=$this.data('pid')

			//if(confirm('确定要删除项目：'+pname+'吗？')){
				confirmAlert.showAlert('确定要删除项目：'+pname+'吗？')
				$('.js-ok-btn').on('click',function(){
					confirmAlert.fadeout()
					$.post(ajaxInit.url+'/removeProject',{id:pid},function(data){
						if(data==='1'){
							/*$.post(ajaxInit.url+'/getProject',infoObj,function(data){//删除项目后
								if(typeof data!=='string'){
									var innerObj=Object.assign({},obj)
									innerObj.data=data
									$('.js-deletePrj-tpl').html(render(innerObj))										
								}
							},'json')*/											
							$this.parents('tr').remove()
							alert('删除成功')
						}else{
							alert('失败，请检查您的网络！')
						}
					})					
				})
			//}
		})
	}

	function init(){
		$('.js-deletePrj-tpl').append(loadingStr)
		$.post(ajaxInit.url+'/getProject',infoObj,function(data){//获取指定项目经理的项目
			//http://115.28.243.24:8080/SSH/getProject?uid=8a21a4765714bc42015714c921b70000
			//var data=[{"id":"8a21a4765714bc42015714cccc6a0001","uid":"8a21a4765714bc42015714c921b70000","p_name":"projectName","time":"2016-09-10 00:00:00.0","pmname":"pmTest","intro":"projectIntrol"},{"id":"8a21a4765714bc420157168ddf150002","uid":"8a21a4765714bc42015714c921b70000","p_name":"projectName","time":"2016-09-11 00:00:00.0","pmname":"pmTest","intro":"projectIntrol"},{"id":"8a21a4765714bc4201571748817f0003","uid":"8a21a4765714bc42015714c921b70000","p_name":"projectName","time":"2016-09-11 00:00:00.0","pmname":"pmTest","intro":"projectIntrol"},{"id":"8a21a4765714bc420157174a98310004","uid":"8a21a4765714bc42015714c921b70000","p_name":"Ã¦Âµ\u008bÃ¨Â¯\u0095Ã©Â¡Â¹Ã§\u009bÂ®","time":"2016-09-11 00:00:00.0","pmname":"pmTest","intro":"Ã¦Âµ\u008bÃ¨Â¯\u0095Ã§Â»\u0093Ã¦\u009d\u009f"},{"id":"8a21a4765714bc4201571765cd600005","uid":"8a21a4765714bc42015714c921b70000","p_name":"aaaaa","time":"2016-09-11 00:00:00.0","pmname":"pmTest","intro":"aa"},{"id":"8a21a4765714bc4201571766174c0006","uid":"8a21a4765714bc42015714c921b70000","p_name":"asaa","time":"2016-09-11 00:00:00.0","pmname":"pmTest","intro":"aa"},{"id":"8a21a4765714bc42015717bad83a0007","uid":"8a21a4765714bc42015714c921b70000","p_name":"é¡¹ç›®æµ‹è¯•","time":"2016-09-11 00:00:00.0","pmname":"pmTest","intro":"é¡¹ç›®æµ‹è¯•çš„ä»‹ç»"},{"id":"8a21a4765714bc42015717baf9b90008","uid":"8a21a4765714bc42015714c921b70000","p_name":"é¡¹ç›®æµ‹è¯•","time":"2016-09-11 00:00:00.0","pmname":"pmTest","intro":"é¡¹ç›®æµ‹è¯•çš„ä»‹ç»"},{"id":"8a21a4765714bc42015717bbf0f20009","uid":"8a21a4765714bc42015714c921b70000","p_name":"é¡¹ç›®æµ‹è¯•2","time":"2016-09-11 00:00:00.0","pmname":"pmTest","intro":"é¡¹ç›®æµ‹è¯•2ä»‹ç»æ–‡æœ¬"},{"id":"8a21a4765714bc42015717bd8e58000a","uid":"8a21a4765714bc42015714c921b70000","p_name":"å•Šå•Š","time":"2016-09-11 00:00:00.0","pmname":"pmTest","intro":"å•Šå•Šå•Šå•Š"},{"id":"8a21a4765714bc42015717bdc309000b","uid":"8a21a4765714bc42015714c921b70000","p_name":"2222","time":"2016-09-11 00:00:00.0","pmname":"pmTest","intro":"3333"},{"id":"8a21a4765714bc42015717be0dd1000c","uid":"8a21a4765714bc42015714c921b70000","p_name":"333","time":"2016-09-11 00:00:00.0","pmname":"pmTest","intro":"333"},{"id":"8a21a4765714bc42015717be7b8d000d","uid":"8a21a4765714bc42015714c921b70000","p_name":"33","time":"2016-09-11 00:00:00.0","pmname":"pmTest","intro":"44"}]
			$('.js-loadingWrap').remove()
			if(typeof data!=='string'){
				var innerObj=objCopy(obj)
						
				innerObj.data=data
				$('.js-deletePrj-tpl').html(render(innerObj))
				eventHandler()			
			}else{
				$('.js-deletePrj-tpl').html('<h3 class="text-danger">请您登录账号后进入此页面</h3>')	
			}

		},'json')		
	}

	init()


});