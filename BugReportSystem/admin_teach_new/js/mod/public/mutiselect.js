/*
* create by rmz 20160729
* 多选插件
*/
define(function (require, epxorts, module) {
$('.js-checkitem').on('click',function(){//点击列表项
			var $this=$(this),
				$input_checkbox=$this.find('input'),
				$checklist=$this.parent(),
				$checkresult=$checklist.siblings('.js-checkresult')

			if($this.hasClass('checkselected')){//选定状态
				var val=$input_checkbox.val()

				$this.removeClass('checkselected')
				$input_checkbox.prop('checked',false)
				$checkresult.find('span').each(function(index){//遍历选出框的span
					if($(this).data('teacher')==val){
						$(this).remove()
					}
				})
			}else{//未选定状态
				var str='<span class="checkitem js-checkitem" data-teacher="'+$input_checkbox.val()+'"><em>x</em>'+$(this).text()+'</span>'

				$this.addClass('checkselected')
				$input_checkbox.prop('checked',true)
				$checkresult.append(str)
			}
		})

		$('.js-checkresult').on('click','.js-checkitem',function(){//点击选出项span
			var $this=$(this),
				$checkresult=$this.parent(),
				$checklist=$checkresult.siblings('.js-checklist'),
				$checkitem=$checklist.find('.js-checkitem'),
				$input_checkbox=$checkitem.find('input')

			var val=$this.data('teacher')
			$this.remove()
			$input_checkbox.each(function(index){//遍历checkbox
				if($(this).val()==val){
					$(this).prop('checked',false)
					$(this).parent().removeClass('checkselected')
				}
			})
		})
})