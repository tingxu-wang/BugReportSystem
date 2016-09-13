/*
* edit by wtx 20160909
* 添加性别字段
*/

define(function (require,exports,module){
	var ajaxInit=require('../public/ajaxInit.js'),
		obj=require('../public/cookieObj.js')

	var tpl=require('../../../tpl/createCount.tpl'),//展示全部人员信息的模板
		render=template.compile(tpl)

	function eventHandler(){
		$('select[name="code"]').on('change',function(){
			var $option=$(this).find('option:selected'),
				optionVal=$option.val()

			$('.js-pm-wrap,.js-project-wrap').addClass('hidden')

			if(optionVal==3 || optionVal==4){//测试或程序员
				$('.js-pm-wrap').removeClass('hidden')
			}else if(optionVal==5){//用户
				$('.js-project-wrap').removeClass('hidden')
			}
		})

		$('.js-createCount-submit').on('click',function(e){
			var $pmWrap=$('.js-pm-wrap'),
				$prjWrap=$('.js-project-wrap'),
				$pm=$('input[name="uid"]'),
				$prjOption=$('select[name="pid"] option:checked'),
				$sex=$('input[name="sex"]:checked')

			var obj={
				name:$('input[name="name"]').val(),//用户名
				pass:$('input[name="pass"]').val(),
				code:$('select[name="code"] option:selected').val(),
				sex:$sex.val()
			}

			$('.js-submit-error,.js-submit-success').addClass('hidden')

			e.preventDefault()

			if( (!$pmWrap.hasClass('hidden') && $pm.val()==0) || (!$prjWrap.hasClass('hidden') && $prjOption.val()==='0') || obj.name==0 || $sex.val()===undefined || obj.code==='0'){
				$('.js-submit-error').text('请填写全所有必填项').removeClass('hidden')
				return
			}

			if(!$pmWrap.hasClass('hidden')){
				obj['uid']=$pm.val()//将Pm的id值信息加入提交对象
			}else if(!$prjWrap.hasClass('hidden')){
				obj['pid']=$prj.val()
			}

			//String name,String pass,String code,String uid,String pid
			$.post(ajaxInit.url+'/register',obj,function(data){			
				//1 存在 2 成功 0空数据
				if(data==1){
					$('.js-submit-error').text('用户名已存在').removeClass('hidden')
				}else if(data==2){
					$('.js-submit-success').text('账号注册成功！').removeClass('hidden')
				}
			},'json')				
		})		
	}

	$.post(ajaxInit.url+'/getProject',function(data){
		//http://115.28.243.24:8080/SSH/getProject
		//var data=[{"id":"8a21a4765714bc4201571748817f0003","uid":"8a21a4765714bc42015714c921b70000","p_name":"projectName","time":"2016-09-11 00:00:00.0","pmname":"pmTest","intro":"projectIntrol"},{"id":"8a21a4765714bc420157174a98310004","uid":"8a21a4765714bc42015714c921b70000","p_name":"Ã¦Âµ\u008bÃ¨Â¯\u0095Ã©Â¡Â¹Ã§\u009bÂ®","time":"2016-09-11 00:00:00.0","pmname":"pmTest","intro":"Ã¦Âµ\u008bÃ¨Â¯\u0095Ã§Â»\u0093Ã¦\u009d\u009f"}]
		var innerObj=Object.assign({},obj)

		innerObj.data=data
		$('.js-createCount-tpl').html(render(innerObj))
		eventHandler()		
	},'json')


})