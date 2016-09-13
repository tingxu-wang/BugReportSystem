<h3 class="page-title">
	<span id="js-page-tile">删除项目</span>
</h3>
<hr>
<div class="dataTables_wrapper">
	<div class="table-responsive">
	    <table class="table table-striped table-bordered table-hover">
	      <thead>
	      	<tr>
	        	<th>标题</th>
	        	<th>项目id</th>
	        	<th>添加日期</th>
	        	<th>项目简介</th>
	        	<th>删除</th>
	        </tr>
	      </thead>
	      <tbody>
	      	{{ each data }}
	      	<tr>
	      		<td class="js-pname">{{ $value.p_name }}</td>
	      		<td>
	      			{{ $value.id }}
	      		</td>
	      		<td>{{ $value.time }}</td>
	      		<td class="table_intro">{{ $value.intro }}</td>
	      		<td><span class="deleteRow js-deleteRow" data-pid="{{ $value.id }}"><span class="fa fa-close text-danger"></span> 删除项目</span></td>
	      	</tr>
	      </tbody>
	      {{ /each }}
	    </table>
	</div>
</div>