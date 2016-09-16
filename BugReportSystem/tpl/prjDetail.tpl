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
      	{{ data.p_name }}
      </div>
    </div>
	</div>
	<div class="control-group">
		<label id="" class="control-label left-site">
			项目ID
		</label>
		<div class="controls left-site">
	        <div class="form-control-static">
	      	    {{ data.id }}
	        </div>
	    </div>
	</div>
	<div class="control-group">
		<label id="" class="control-label left-site">
			添加时间
		</label>
		<div class="controls left-site">
	        <div class="form-control-static">
	      	    {{ data.time }}
	        </div>
	    </div>
	</div>
	<div class="control-group">
		<label id="" class="control-label left-site">
			负责人
		</label>
		<div class="controls left-site">
	        <div class="form-control-static">
	      	    {{ data.pmname }}
	        </div>
	    </div>
	</div>
	<div class="control-group">
		<label id="" class="control-label left-site">
			项目简介
		</label>
		<div class="controls left-site">
	        <div class="form-control-static">
	      	    {{ data.intro }}
	        </div>
	    </div>
	</div>
	{{ if code==4||code==5 }}
	<div class="control-group">
		<button class="btn btn-primary" type="button" data-toggle="modal" data-target="#bugModal">添加新的bug</button>
		<div class="modal fade js-modal" id="bugModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
		  <div class="modal-dialog" role="document">
		    <div class="modal-content">
		      <div class="modal-header">
		        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
		        <h4 class="modal-title" id="myModalLabel">添加新的bug</h4>
		      </div>
		      <div class="modal-body js-collection">
					<div class="control-group">
						<label class="control-label left-site">
							标题
							<span class="require-warn">*</span>
						</label>
						<div class="controls left-site">
							<input type="text" class="large m-wrap" name="title">
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
							<input type="number" class="hidden requireLevelInput" name="level">
						</div>
					</div>
					<div class="control-group">
				      <label class="control-label left-site">详细内容</label>
				      <div class="controls left-site">
				        <textarea class="tea-wrap large" name="intro"></textarea>
				      </div>
				    </div>
				    <div class="control-group">
						<div class="controls left-site">
							<span class="errorText js-submit-error hidden"></span>
						</div>						
					</div>
		      </div>
		      <div class="modal-footer">
		        <button type="button" class="btn btn-default js-cancel-btn" data-dismiss="modal">取消</button>
		        <button type="button" class="btn btn-primary js-addBug-submit">提交</button>
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
	        	<th>提交人</th>
	        	<th>bug内容摘要</th>
	        </tr>
	      </thead>
	      <tbody>
	      	<!-- 成功返回当前用户的项目bug，失败返回0，提出者名称(uname)，解决者名称(sname)，项目id pid,问题介绍intro,等级level,title(bug标题） -->
	      	{{ each data1 }}
	      	<tr>
	      		<td>{{ $value.title }}</td>
	      		{{ if $value.level==0 }}
	      		<td>
	      			<span class="fa fa-star"></span>
	      			<span class="fa fa-star-o"></span>
	      			<span class="fa fa-star-o"></span>
	      			<span class="fa fa-star-o"></span>
	      			<span class="fa fa-star-o"></span>
	      		</td>
	      		{{ else if $value.level==1 }}
	      		<td>
	      			<span class="fa fa-star"></span>
	      			<span class="fa fa-star"></span>
	      			<span class="fa fa-star-o"></span>
	      			<span class="fa fa-star-o"></span>
	      			<span class="fa fa-star-o"></span>
	      		</td>
	      		{{ else if $value.level==2 }}
	      		<td>
	      			<span class="fa fa-star"></span>
	      			<span class="fa fa-star"></span>
	      			<span class="fa fa-star"></span>
	      			<span class="fa fa-star-o"></span>
	      			<span class="fa fa-star-o"></span>
	      		</td>
	      		{{ else if $value.level==3 }}
	      		<td>
	      			<span class="fa fa-star"></span>
	      			<span class="fa fa-star"></span>
	      			<span class="fa fa-star-"></span>
	      			<span class="fa fa-star-"></span>
	      			<span class="fa fa-star-o"></span>
	      		</td>
	      		{{ else if $value.level==5 }}
	      		<td>
	      			<span class="fa fa-star"></span>
	      			<span class="fa fa-star"></span>
	      			<span class="fa fa-star"></span>
	      			<span class="fa fa-star"></span>
	      			<span class="fa fa-star"></span>
	      		</td>
	      		{{ /if }}
	      		<td>{{ $value.puttime }}</td>
	      		<td>{{ $value.uname }}</td>
	      		<td class="table_intro">{{ $value.intro }}</td>
	      		{{ if code==3 }}
	      		<td><span class="deleteRow js-deleteRow" data-pid="{{ $value.id }}"><span class="fa fa-close text-success"></span> 标记为已解决</span></td>
	      		{{ /if }}
	      	</tr>
	      	{{ /each }}
	      	<!-- <tr>
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
	      	</tr> -->
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
	        	<th>提交人</th>
	        	<th>解决人</th>
	        	<th>bug内容摘要</th>
	        	<th>完成时间</th>
	        </tr>
	      </thead>
	      <tbody>
	      	{{ each data2 }}
	      	<tr>
	      		<td>{{ $value.title }}</td>
	      		{{ if $value.level==0 }}
	      		<td>
	      			<span class="fa fa-star"></span>
	      			<span class="fa fa-star-o"></span>
	      			<span class="fa fa-star-o"></span>
	      			<span class="fa fa-star-o"></span>
	      			<span class="fa fa-star-o"></span>
	      		</td>
	      		{{ else if $value.level==1 }}
	      		<td>
	      			<span class="fa fa-star"></span>
	      			<span class="fa fa-star"></span>
	      			<span class="fa fa-star-o"></span>
	      			<span class="fa fa-star-o"></span>
	      			<span class="fa fa-star-o"></span>
	      		</td>
	      		{{ else if $value.level==2 }}
	      		<td>
	      			<span class="fa fa-star"></span>
	      			<span class="fa fa-star"></span>
	      			<span class="fa fa-star"></span>
	      			<span class="fa fa-star-o"></span>
	      			<span class="fa fa-star-o"></span>
	      		</td>
	      		{{ else if $value.level==3 }}
	      		<td>
	      			<span class="fa fa-star"></span>
	      			<span class="fa fa-star"></span>
	      			<span class="fa fa-star-"></span>
	      			<span class="fa fa-star-"></span>
	      			<span class="fa fa-star-o"></span>
	      		</td>
	      		{{ else if $value.level==5 }}
	      		<td>
	      			<span class="fa fa-star"></span>
	      			<span class="fa fa-star"></span>
	      			<span class="fa fa-star"></span>
	      			<span class="fa fa-star"></span>
	      			<span class="fa fa-star"></span>
	      		</td>
	      		{{ /if }}
	      		<td>{{ $value.puttime }}</td>
	      		<td>{{ $value.uname }}</td>
	      		<td>{{ $value.sname }}</td>
	      		<td class="table_intro">{{ $value.intro }}</td>
	      		<td>{{ $value.slovetime }}</td>
	      	</tr>
	      	{{ /each }}
<!-- 	      	<tr>
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
	      	</tr> -->
	      </tbody>
	    </table>
    </div>
</div>