define(function (require,exports,module){
	var ajaxInit=require('../public/ajaxInit.js'),
		obj=require('../public/cookieObj.js')

	var tpl=require('../../../tpl/prjDetail.tpl'),//展示全部人员信息的模板
		render=template.compile(tpl)

	var loadingStr=require('../public/loading')

	var objCopy=require('../public/objCopy')

	function eventHandler(){
		$('.js-addBug-submit').on('click',function(e){


			e.preventDefault()
		})
	}

	function init(){
		$.post(ajaxInit.url+'/getBug',{pid:$.cookie('detail_pid'),state:0},function(data1){//未解决
			var innerObj=objCopy(obj)
				
			innerObj.data1=data1
			$.post(ajaxInit.url+'/getBug',{pid:$.cookie('detail_pid'),state:1},function(){//已解决
				innerObj.data2=data2
				$('.js-prjDetailTemplate').html(render(innerObj))	
			},'json')
		},'json')
	}
	//init()
	$('.js-prjDetailTemplate').html(render(obj))
})