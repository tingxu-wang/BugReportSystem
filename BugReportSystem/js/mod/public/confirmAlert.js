/*
* create by wtx 20160915
* 确认操作弹出框
*/	

define(function (require,exports,module){
		//var result=null

		function showAlert(content){
			$('body').append('<div class="js-confirm-wrap"> <div class="modal fade in js-modal" style="display: block;"> <div class="modal-dialog"> <div class="modal-content"> <div class="modal-header"> <button type="button" class="close js-confirm-close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button> <h4 class="modal-title js-title" id="myModalLabel">确认框</h4> </div> <div class="modal-body js-content">您确认吗？</div> <div class="modal-footer"> <button type="button" class="btn btn-default js-cancle-btn" data-dismiss="modal">取消</button> <button type="button" class="btn btn-primary js-ok-btn">确认</button> </div> </div> </div> </div> <div class="modal-backdrop fade in js-backdrop"></div> </div>')		
			//$('.js-title').text(title)
			$('.js-content').text(content)			
		}

		function fadeout(){
			$('.js-modal,.js-backdrop').removeClass('in')
			setTimeout(function (){$('.js-confirm-wrap').remove()},300)
		}

		$('body').on('click','.js-cancle-btn,.js-confirm-close',function(){
			fadeout()
		})
		return {
			showAlert:showAlert,
			fadeout:fadeout
		}
/*
		$('.js-ok-btn').on('click',function(){
			fadeout()
			result=true
		})

		$('.js-cancle-btn').on('click',function(){
			fadeout()
			result=false
		})

*/		
		//return result
		
})