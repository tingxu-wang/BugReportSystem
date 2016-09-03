define(function (require,exports,module){
	var ajaxInit=require('channel/ajaxInit.js')

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
			$prj=$('input[name="pid"]')

		var obj={
			name:$('input[name="name"]').val(),//用户名
			pass:$('input[name="pass"]').val(),
			code:$('select[name="code"] option:selected').val()
		}

		$('.js-submit-error,.js-submit-success').addClass('hidden')

		e.preventDefault()

		if( (!$pmWrap.hasClass('hidden') && $pm.val()==0) || (!$prjWrap.hasClass('hidden') && $prj.val()==0) || obj.name==0 ){
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
})