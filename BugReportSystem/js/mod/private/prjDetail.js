define(function (require,exports,module){
	var ajaxInit=require('../public/ajaxInit.js'),
		obj=require('../public/cookieObj.js')

	var tpl=require('../../../tpl/prjDetail.tpl'),//展示全部人员信息的模板
		render=template.compile(tpl)

	var loadingStr=require('../public/loading')

	var objCopy=require('../public/objCopy')

	function eventHandler(){
		$('.js-addBug-submit').on('click',function(e){
			var $title=$('input[name="title"]'),
				$level=$('input[name="level"]'),
				$intro=$('textarea[name="intro"]'),
				$collection=$('.js-collection').find('input,textarea'),
				$submitError=$('.js-collection .js-submit-error'),
				titleVal=$title.val(),
				levelVal=$level.val(),
				introVal=$intro.val().trim()

			e.preventDefault()

			$submitError.addClass('hidden')

			if(titleVal==='' || levelVal==='' || introVal===''){//校验失败
				$submitError.removeClass('hidden').text('请填写所有必填项！')
			}else{//成功
				//出入：项目id pid,问题介绍intro,等级level,title(bug标题）
				var infoObj={
					pid:$.cookie('detail_pid'),
					intro:introVal,
					level:levelVal,
					title:titleVal
				}
				$.post(ajaxInit.url+'/addBug',infoObj,function(data){
					if(data===1){
						$('.js-cancel-btn').trigger('click')
						tplRender()
					}else{
						$submitError.removeClass('hidden').text('网络出现问题，请您稍后重试！')
					}
				},'json')			
			}	
		})
	}

	function tplRender(){
		$('.js-prjDetailTemplate').append(loadingStr)

		var innerObj=objCopy(obj)

		if(obj.code==='2'){
			$.post(ajaxInit.url+'/getUser',function(data3){
				innerObj.data3=data3[0]
			},'json')
		}
		$.post(ajaxInit.url+'/getProjectInformation',{id:$.cookie('detail_pid')},function(data){//项目信息
			//[{"id":"8a21a476572e96fb015730db32e3000b","uid":"8a21a476572e96fb015730c2c5490002","p_name":"鎵嬫満QQ","time":"2016-09-16 00:00:00.0","pmname":"鐜嬪涵鏃 ","intro":"Mobile QQ"}]
			
			innerObj.data=data[0]
			$.post(ajaxInit.url+'/getBug',{pid:$.cookie('detail_pid'),state:0},function(data1){//未解决
				//[{"id":"8a21a47657319a5d0157319acddc0000","uid":"8a21a476572e96fb01573100c8250024","level":"2","uname":"pmTest","state":"0","pid":"8a21a47657318e500157318ef2650000","puttime":"2016-09-16 00:00:00.0","intro":"prj1 intro"}]					
				innerObj.data1=data1
				$.post(ajaxInit.url+'/getBug',{pid:$.cookie('detail_pid'),state:1},function(data2){//已解决
					$('.js-loadingWrap').remove()
					innerObj.data2=data2
					$('.js-prjDetailTemplate').html(render(innerObj))	

					eventHandler()//事件注册
				},'json')
			},'json')			
		},'json')

	}

	//$('.js-prjDetailTemplate').html(render(obj))
	tplRender()	
})