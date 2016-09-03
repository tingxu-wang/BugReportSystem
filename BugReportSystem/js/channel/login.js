define(function (require,exports,module){
	var $=require('jquery'),
		ajaxInit=require('channel/ajaxInit.js')

	require('cookie')//jquery.cookie

	//'http://192.168.23.2:8080/SSH/login'
	$('.js-submit-btn').on('click',function(e){
		var name=$('input[name="name"]').val(),//用户名
			pass=$('input[name="pass"]').val()//密码	

		e.preventDefault()

		$.post(ajaxInit.url+'/login',{			
			name:name,
			pass:pass
		},function(data){
			/*{"uid":null,"name":"admin","pid":null,"code":"1","password":"admin"}*/
			if(data==0){
				$('.login-error').removeClass('hidden')
			}else{
				if(data.code==1){//超管
					window.location.href='superManager.html'
				}else if(data.code==2){

				}
			}
		},'json')		
	})
})