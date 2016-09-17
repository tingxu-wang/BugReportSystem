<!-- 项目总览模板 -->
<h3 class="page-title">
	<span id="js-page-tile">项目总览</span>
</h3>
<hr>
<div class="dataTables_wrapper">
	<div class="table-responsive">
	    <table class="table table-striped table-bordered table-hover js-prj-table">
	      <thead>
	      	<tr>
	        	<th>项目名称</th>
	        	<!-- <th>项目id</th> -->
	        	<!-- <th>产品经理id</th> -->
	        	<th>产品经理用户名</th>
	        	<th>添加日期</th>
	        	<th>项目简介</th>
	        </tr>
	      </thead>
	      <tbody>
	      	{{ each data }}
	      	<tr>
	      		<td>{{ $value.p_name }}</td>
	      		<!-- <td>{{ $value.id }}</td> -->
	      		<!-- <td>{{ $value.uid }}</td> -->
	      		<td>{{ $value.pmname }}</td>
	      		<td>{{ $value.time }}</td>
	      		<td>{{ $value.intro }}</td>
	      	</tr>
	      	{{ /each }}
<!-- 	      	<tr>
	      		<td>版本控制平台</td>
	      		<td>001</td>
	      		<td>john</td>
	      		<td>2016-08-07 08:36</td>
	      		<td>具备版本回溯以及更新的综合平台</td>
	      	</tr> -->
	      </tbody>
	    </table>
	</div>
</div>