/*
* 
* 全选功能
*/
define(function (require, epxorts, module) {

	$('.js-input-selectAll').on('click',function(){
		var $this=$(this),
			$select_tr=$this.parents('.js-table-selectAll').find('.select-tr')

		//$this.parents('.js-table-selectAll')
		if($this.prop('checked')==true){//全选
			$select_tr.prop('checked',true)
		}else{//撤销权选
			$select_tr.prop('checked',false)
		}
	})
})