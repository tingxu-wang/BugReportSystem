<div class="js-bugDetailWin">
	<div class="modal fade in js-modal" style="display: block;">
	  <div class="modal-dialog" role="document">
	    <div class="modal-content">
	      <div class="modal-header">
	        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
	        <h4 class="modal-title" id="myModalLabel">bug详情</h4>
	      </div>
	      <div class="modal-body js-collection">
				<div class="control-group">
					<label class="control-label left-site">
						标题
					</label>
					<div class="controls left-site">
				        <div class="form-control-static">
				      	    {{ bugTitle }}
				        </div>
				    </div>
				</div>
				<div class="control-group">
					<label class="control-label left-site">
						需求等级
					</label>
					<div class="controls left-site">
						<div class="js-requireLevel">
							{{ if level==0 }}
							<span class="fa fa-star"></span>
							<span class="fa fa-star-o"></span>
							<span class="fa fa-star-o"></span>
							<span class="fa fa-star-o"></span>
							<span class="fa fa-star-o"></span>
							{{ /if }}
							{{ if level==1 }}
							<span class="fa fa-star"></span>
							<span class="fa fa-star"></span>
							<span class="fa fa-star-o"></span>
							<span class="fa fa-star-o"></span>
							<span class="fa fa-star-o"></span>
							{{ /if }}
							{{ if level==2 }}
							<span class="fa fa-star"></span>
							<span class="fa fa-star"></span>
							<span class="fa fa-star"></span>
							<span class="fa fa-star-o"></span>
							<span class="fa fa-star-o"></span>
							{{ /if }}
							{{ if level==3 }}
							<span class="fa fa-star"></span>
							<span class="fa fa-star"></span>
							<span class="fa fa-star"></span>
							<span class="fa fa-star"></span>
							<span class="fa fa-star-o"></span>
							{{ /if }}
							{{ if level==4 }}
							<span class="fa fa-star"></span>
							<span class="fa fa-star"></span>
							<span class="fa fa-star"></span>
							<span class="fa fa-star"></span>
							<span class="fa fa-star"></span>
							{{ /if }}
						</div>
					</div>
				</div>
				<div class="control-group">
					<label class="control-label left-site">
						提出者
					</label>
					<div class="controls left-site">
				        <div class="form-control-static">
				      	    {{ uname }}
				        </div>
				    </div>
				</div>
				{{ if sname!='' }}
				<div class="control-group">
					<label class="control-label left-site">
						解决者
					</label>
					<div class="controls left-site">
				        <div class="form-control-static">
				      	    {{ sname }}
				        </div>
				    </div>
				</div>
				{{ /if }}
				{{ if stime!='' }}
				<div class="control-group">
					<label class="control-label left-site">
						解决时间
					</label>
					<div class="controls left-site">
				        <div class="form-control-static">
				      	    {{ stime }}
				        </div>
				    </div>
				</div>
				{{ /if }}
				<div class="control-group">
			      <label class="control-label left-site">详细内容</label>
			      <div class="controls left-site">
				        <div class="form-control-static">
				      	    {{ intro }}
				        </div>
				    </div>
			    </div>
			    <div class="control-group">
					<div class="controls left-site">
						<span class="errorText js-submit-error hidden"></span>
					</div>						
				</div>
	      </div>
	      <div class="modal-footer">
	        <button type="button" class="btn btn-primary js-bugDetail-submit">确认</button>
	      </div>
	    </div>
	  </div>
	</div>
	<div class="modal-backdrop fade in js-backdrop"></div>		
</div>