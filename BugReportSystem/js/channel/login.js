define(function (require,exports,module){
	var ajaxInit=require('channel/ajaxInit.js')

	//'http://192.168.23.2:8080/SSH/login'
/*
	$.post('http://192.168.23.1:8080/SSH/login?name=admin&pass=admin',function(data){
		//{"uid":null,"name":"admin","pid":null,"code":"1","password":"admin"}

		var str=JSON.stringify(data)
		console.log(str)
	},'json')*/


	$('.js-login-submit').on('click',function(e){
		var name=$('input[name="name"]').val(),//用户名
			pass=$('input[name="pass"]').val()//密码	

		e.preventDefault()

		$.post(ajaxInit.url+'/login',$('form').serialize(),function(data){
			console.log(data)
			//{"uid":null,"name":"admin","pid":null,"code":"1","password":"admin"}
			if(data==0){
				$('.js-submit-error').removeClass('hidden')
			}else{
				$.cookie('uid',data.uid)
				$.cookie('name',data.name)
				$.cookie('pid',data.pid)
				$.cookie('code',data.code)
				$.cookie('password',data.password)
				console.log($.cookie('name'))
				if(data.code==1){//超管
					window.location.href='superManager.html'
				}else if(data.code==2){//PM
					window.location.href='manager.html'
				}else if(data.code==3){//程序员
					//window.location.href='coder.html'
				}else if(data.code==4){//测试
					//window.location.href='test.html'		
				}else if(data.code==5){//用户
					//window.location.href='user.html'
				}
			}
		},'json')		
	})
})