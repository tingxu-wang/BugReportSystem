define(function (require,exports,module){
	var ajaxInit=require('../public/ajaxInit.js'),
		obj=require('../public/cookieObj.js')

	var tpl=require('../../../tpl/prjDetail.tpl'),//展示全部人员信息的模板
		render=template.compile(tpl)

	var loadingStr=require('../public/loading')

	var objCopy=require('../public/objCopy')

	var confirmAlert=require('../public/confirmAlert')

	function eventHandler(){
		//提交按钮
		$('.js-addBug-submit').on('click',function(e){
			var $title=$('input[name="title"]'),
				$level=$('input[name="level"]'),
				$intro=$('textarea[name="intro"]'),
				$collection=$('.js-collection').find('input,textarea'),
				$submitError=$('.js-collection .js-submit-error'),
				titleVal=$title.val(),
				levelVal=$level.val(),
				introVal=$intro.val().trim()

			e.preventDefault()

			$submitError.addClass('hidden')

			if(titleVal==='' || levelVal==='' || introVal===''){//校验失败
				$submitError.removeClass('hidden').text('请填写所有必填项！')
			}else{//成功
				//出入：项目id pid,问题介绍intro,等级level,title(bug标题）
				var infoObj={
					pid:$.cookie('detail_pid'),
					intro:introVal,
					level:levelVal,
					title:titleVal
				}
				$.post(ajaxInit.url+'/addBug',infoObj,function(data){
					if(data===1){
						$('.js-cancel-btn').trigger('click')
						$('.modal-backdrop').remove()
						tplRender()
					}else{
						$submitError.removeClass('hidden').text('网络出现问题，请您稍后重试！')
					}
				},'json')			
			}	
		})

		//人员选择
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

		$('.js-addPersonInput,.js-selectAll-input').on('click',function(){
			triggerSelect($(this))
		})

		$('.js-addUserProject').on('click',function(){
			var $checkedInput=$('.js-addPerson input:checked')

			$('.js-memberSubmit-error,.js-memberSubmit-success').addClass('hidden')
			if($checkedInput.length){
				var arr=[]
				$checkedInput.each(function(index){
					arr.push($(this).val())
				})

				$.post(ajaxInit.url+'/addUserProject',{pid:$.cookie('detail_pid'),uid:arr.toString()},function(data){
					if(data===0){
						$('.js-memberSubmit-error').removeClass('hidden').text('人员绑定失败，请你稍后刷新重试')
					}else{						
						$('.js-memberSubmit-success').removeClass('hidden').text('人员绑定成功！')
					}
				},'json')
			}else{
				$('.js-memberSubmit-error').removeClass('hidden').text('请选择人员！')
			}
		})

		//标记bug状态
		$('.js-submitBug').on('click',function(){
			$bugTitle=$(this).parents('tr').find('.js-bugTitle')
			confirmAlert.showAlert('确定要标记bug '+$bugTitle.text()+'为已解决状态吗？')
			$('.js-ok-btn').on('click',function(){
				confirmAlert.fadeout()
				$.post(ajaxInit.url+'/submitBug',{bid:$bugTitle.data('bid')},function(data){
					if(data===1){
						tplRender()
					}
				},'json')					
			})
		})

		//bug详情展示
		$('.js-bugDetail td').not('.js-submitBug-td').on('click',function(){
			var bugDetailTpl=require('../../../tpl/bugDetail.tpl'),
				render=template.compile(bugDetailTpl)

		/*	var $this=$(this),
				$rd=$this.find('td')*/

			var $tr=$(this).parent(),
				$td=$(this).parent().find('td')

			var data={
				bugTitle:$td.eq(0).text(),
				level:$td.eq(1).data('level'),
				puttime:$td.eq(2).text(),
				uname:$td.eq(3).text(),
				intro:$tr.find('.js-table_intro').text(),
				sname:$tr.find('.js-sname').text(),
				stime:$tr.find('.js-stime').text()
			}

			$('body').append(render(data))

			$('body').on('click','.js-bugDetail-submit,.js-confirm-close',function(){
				$('.js-modal,.js-backdrop').removeClass('in')
				setTimeout(function (){$('.js-bugDetailWin').remove()},300)		
			})
		})
	}

	function tplRender(){
		$('.js-prjDetailTemplate').append(loadingStr)

		var innerObj=objCopy(obj)

		if(obj.code==='2'){//pm 获取手下人员信息
			$.post(ajaxInit.url+'/getUser',function(data3){
				innerObj.data3=data3
			},'json')
		}
		$.post(ajaxInit.url+'/getProjectInformation',{id:$.cookie('detail_pid')},function(data){//项目信息
			//[{"id":"8a21a476572e96fb015730db32e3000b","uid":"8a21a476572e96fb015730c2c5490002","p_name":"鎵嬫満QQ","time":"2016-09-16 00:00:00.0","pmname":"鐜嬪涵鏃 ","intro":"Mobile QQ"}]
			
			innerObj.data=data[0]
			$.post(ajaxInit.url+'/getBug',{pid:$.cookie('detail_pid'),state:0},function(data1){//未解决
				//[{"id":"8a21a47657319a5d0157319acddc0000","uid":"8a21a476572e96fb01573100c8250024","level":"2","uname":"pmTest","state":"0","pid":"8a21a47657318e500157318ef2650000","puttime":"2016-09-16 00:00:00.0","intro":"prj1 intro"}]					
				innerObj.data1=data1
				$.post(ajaxInit.url+'/getBug',{pid:$.cookie('detail_pid'),state:1},function(data2){//已解决
					$('.js-loadingWrap').remove()
					innerObj.data2=data2
					$('.js-prjDetailTemplate').html(render(innerObj))	

					eventHandler()//事件注册
				},'json')
			},'json')			
		},'json')

	}

	//$('.js-prjDetailTemplate').html(render(obj))
	tplRender()	
})