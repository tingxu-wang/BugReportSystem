<div class="dataTables_wrapper js-reflesh-confirm">
    <div class="table-responsive">
	    <table class="table table-striped table-bordered table-hover">
	        <thead>
		      	<tr>
		        	<th>Id</th>
		        	<th>用户名</th>
		        	<th>账号类别</th>
		        	<th>性别</th>
		        </tr>
	        </thead>
	        <tbody>
	        	{{ each data }}
		      	<tr>
		      		<td>{{ $value.id }}</td>
		      		<td>{{ $value.name }}</td>

		      		{{ if $value.code==1 }}
		      		<td>超级管理员</td>
		      		{{ /if }}
		      		{{ if $value.code==2 }}
		      		<td>产品经理</td>
		      		{{ /if }}
		      		{{ if $value.code==3 }}
		      		<td>程序员</td>
		      		{{ /if }}
		      		{{ if $value.code==4 }}
		      		<td>测试</td>
		      		{{ /if }}
		      		{{ if $value.code==5 }}
		      		<td>用户</td>
		      		{{ /if }}

					{{ if $value.sex=='male' }}
		      		<td>男</td>
		      		{{ /if }}
		      		{{ if $value.sex=='female' }}
		      		<td>女</td>
		      		{{ /if }}
		      	</tr>
		      	{{ /each }}
	        </tbody>
	    </table>
    </div>
</div>