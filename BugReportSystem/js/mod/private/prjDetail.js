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
				introVal=$intro.val()

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
		$('.js-memberView-tpl').append(loadingStr)
		$.post(ajaxInit.url+'/getBug',{pid:$.cookie('detail_pid'),state:0},function(data1){//未解决
			var innerObj=objCopy(obj)
				
			innerObj.data1=data1
			$.post(ajaxInit.url+'/getBug',{pid:$.cookie('detail_pid'),state:1},function(){//已解决
				$('.js-loadingWrap').remove()
				innerObj.data2=data2
				$('.js-prjDetailTemplate').html(render(innerObj))	
			},'json')
		},'json')
	}

	//$('.js-prjDetailTemplate').html(render(obj))
	tplRender()
	eventHandler()
})