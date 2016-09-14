<h3 class="page-title">
	<span id="js-page-tile">项目明细</span>
</h3>
<hr>
<form action="" class="form-horizontal">
	<div class="control-group">
		<label id="" class="control-label left-site">
			项目名称
		</label>
		<div class="controls left-site">
      <div class="form-control-static">
      	这里填写项目名称
      </div>
    </div>
	</div>
	<div class="control-group">
		<label id="" class="control-label left-site">
			项目ID
		</label>
		<div class="controls left-site">
	        <div class="form-control-static">
	      	    这里填写项目ID
	        </div>
	    </div>
	</div>
	<div class="control-group">
		<label id="" class="control-label left-site">
			项目简介
		</label>
		<div class="controls left-site">
	        <div class="form-control-static">
	      	    这里填写项目简介
	        </div>
	    </div>
	</div>
	{{ if code!=3 }}
	<div class="control-group">
		<button class="btn btn-primary" type="button" data-toggle="modal" data-target="#bugModal">添加新的bug</button>
		<div class="modal fade" id="bugModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
		  <div class="modal-dialog" role="document">
		    <div class="modal-content">
		      <div class="modal-header">
		        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
		        <h4 class="modal-title" id="myModalLabel">添加新的bug</h4>
		      </div>
		      <div class="modal-body">
						<form action="" class="form-horizontal">
							<div class="control-group">
								<label class="control-label left-site">
									标题
									<span class="require-warn">*</span>
								</label>
								<div class="controls left-site">
									<input type="text" class="large m-wrap">
								</div>
							</div>
							<div class="control-group">
								<label class="control-label left-site">
									需求等级
									<span class="require-warn">*</span>
								</label>
								<div class="controls left-site">
									<div class="js-requireLevel">
										<span class="fa fa-star-o"></span>
										<span class="fa fa-star-o"></span>
										<span class="fa fa-star-o"></span>
										<span class="fa fa-star-o"></span>
										<span class="fa fa-star-o"></span>
									</div>
									<input type="number" class="hidden requireLevelInput">
								</div>
							</div>
							<div class="control-group">
					      <label class="control-label left-site">详细内容</label>
					      <div class="controls left-site">
					        <textarea class="tea-wrap large"></textarea>
					      </div>
					    </div>
						</form>
		      </div>
		      <div class="modal-footer">
		        <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
		        <button type="button" class="btn btn-primary">提交</button>
		      </div>
		    </div>
		  </div>
		</div>
	</div>
	{{ /if }}
</form>
<h4 class="page-title">
	<span id="js-page-tile">未完成</span>
</h4>
<div class="dataTables_wrapper">
  	<div class="table-responsive">
	    <table class="table table-striped table-bordered table-hover">
	      <thead>
	      	<tr>
	        	<th>标题</th>
	        	<th>需求等级</th>
	        	<th>添加日期</th>
	        	<th>bug内容摘要</th>
	        </tr>
	      </thead>
	      <tbody>
	      	<tr>
	      		<td>左边栏页面样式错误</td>
	      		<td>
	      			<span class="fa fa-star"></span>
	      			<span class="fa fa-star"></span>
	      			<span class="fa fa-star"></span>
	      			<span class="fa fa-star-o"></span>
	      			<span class="fa fa-star-o"></span>
	      		</td>
	      		<td>2016-08-07 08:36</td>
	      		<td>这里填写详细信息</td>
	      	</tr>
	      	<tr>
	      		<td>prj.html用户名获取无法显示</td>
	      		<td>
	      			<span class="fa fa-star"></span>
	      			<span class="fa fa-star"></span>
	      			<span class="fa fa-star"></span>
	      			<span class="fa fa-star"></span>
	      			<span class="fa fa-star-o"></span>
	      		</td>
	      		<td>2016-08-07 21:36</td>
	      		<td>这里填写详细信息</td>
	      	</tr>
	      </tbody>
	    </table>
    </div>
</div>
<hr>
<h4 class="page-title">
	<span id="js-page-tile">已完成</span>
</h4>
<div class="dataTables_wrapper">
  	<div class="table-responsive">
	    <table class="table table-striped table-bordered table-hover">
	      <thead>
	      	<tr>
	        	<th>标题</th>
	        	<th>需求等级</th>
	        	<th>添加日期</th>
	        	<th>bug内容摘要</th>
	        	<th>完成时间</th>
	        </tr>
	      </thead>
	      <tbody>
	      	<tr>
	      		<td>左边栏页面样式错误</td>
	      		<td>
	      			<span class="fa fa-star"></span>
	      			<span class="fa fa-star"></span>
	      			<span class="fa fa-star"></span>
	      			<span class="fa fa-star-o"></span>
	      			<span class="fa fa-star-o"></span>
	      		</td>
	      		<td>2016-08-07 08:36</td>
	      		<td>这里填写详细信息</td>
	      		<td>2016-08-07 08:36</td>
	      	</tr>
	      	<tr>
	      		<td>prj.html用户名获取无法显示</td>
	      		<td>
	      			<span class="fa fa-star"></span>
	      			<span class="fa fa-star"></span>
	      			<span class="fa fa-star"></span>
	      			<span class="fa fa-star"></span>
	      			<span class="fa fa-star-o"></span>
	      		</td>
	      		<td>2016-08-07 21:36</td>
	      		<td>这里填写详细信息</td>
	      		<td>2016-08-07 08:36</td>
	      	</tr>
	      </tbody>
	    </table>
    </div>
</div>