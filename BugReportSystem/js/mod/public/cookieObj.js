/*
 * create by wtx 20160908
 * cookie对象
*/

define(function (require,exports,module){
	//{"uid":null,"name":"admin","pid":null,"code":"1","password":"admin"}
	return {
		code:$.cookie('code'),
		name:$.cookie('name'),
		pid:$.cookie('pid'),
		uid:$.cookie('uid'),
		password:$.cookie('password'),
		sex:$.cookie('sex'),
		id:$.cookie('id')
	}
})