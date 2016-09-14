/*
* create by wtx 20160914
* 对象复制方法
*/
define(function (require, epxorts, module){
	return function objCopy(obj){
		var resultObj={}

		for(var i in obj){
			resultObj[i]=obj[i]
		}
		return resultObj
	}
})