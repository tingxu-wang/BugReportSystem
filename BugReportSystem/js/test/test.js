/*
* create by wtx 20160915
* 测试用
*/	

define(function (require,exports,module){

	function triggerSelect($selector){
		if($selector.prop('checked')===false){
			$selector.prop('checked',true)
		}else{
			$selector.prop('checked',false)
		}
	}

	$('.js-addPersonRow').on('click',function(){
		var $this=$(this),
			$input=$this.find('input')

		triggerSelect($input)
	})

	$('.js-selectAll-th').on('click',function(){
		var $this=$(this),
			$all=$this.parents('table').find('input')

		triggerSelect($all)		
	})
})	