define(function (require,exports,module){
	var $=require('jquery')
	var ajaxInit=require('../public/ajaxInit.js')

	require('cookie')


	$('.js-login-submit').on('click',function(e){
		var name=$('input[name="name"]').val().trim(),//用户名
			pass=$('input[name="pass"]').val().trim()//密码	

		e.preventDefault()

		$.post(ajaxInit.url+'/login',$('form').serialize(),function(data){
			//{"uid":null,"name":"admin","pid":null,"code":"1","password":"admin"}
			if(data==0){
				$('.js-submit-error').removeClass('hidden')
			}else{
				$.cookie('uid',data.uid)
				$.cookie('name',data.name)
				$.cookie('pid',data.pid)
				$.cookie('code',data.code)
				$.cookie('password',data.password)
				$.cookie('sex',data.sex)
				$.cookie('id',data.id)

/*				if(data.code==1){//超管
					window.location.href='superManager.html'
				}else if(data.code==2){//PM
					window.location.href='manager.html'
				}else if(data.code==3){//程序员
					window.location.href='coder.html'
				}else if(data.code==4){//测试
					//window.location.href='tester.html'		
				}else if(data.code==5){//用户
					//window.location.href='user.html'
				}*/

				if(data.code==1 || data.code==2 || data.code==3 || data.code==4){//超管 PM 程序员 测试
					window.location.href='prjView.html'
				}else{//用户
					window.location.href='prjDetail.html'
				}
			}
		},'json')		
	})
})