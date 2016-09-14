<div class="dataTables_wrapper js-reflesh-confirm">
    <div class="table-responsive">
	    <table class="table table-striped table-bordered table-hover">
	        <thead>
		      	<tr>
		        	<th>Id</th>
		        	<th>用户名</th>
		        	<th>账号类别</th>
		        	<th>性别</th>
		        	<!-- <th>个人简介</th> -->
		        	<th>删除</th>
		        </tr>
	        </thead>
	        <tbody>
	        	{{ each data }}
		      	<tr>
		      		<td>{{ $value.id }}</td>
		      		<td class="js-user-name">{{ $value.name }}</td>

		      		{{ if $value.code==1 }}
		      		<td>管理员</td>
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
		      		<td><span class="deleteRow js-deleteRow" data-pid="{{ $value.id }}"><span class="fa fa-close text-danger"></span> 删除账号</span></td>
		      	</tr>
		      	{{ /each }}
	<!-- 	      	<tr>
		      		<td>123</td>
		      		<td>tingxu.wang</td>
		      		<td>程序员</td>
		      		<td>男</td>
		      		<td>前端工程师</td>
		      	</tr>
		      	<tr>
		      		<td>456</td>
		      		<td>liuquan.ding</td>
		      		<td>程序员</td>
		      		<td>男</td>
		      		<td>JAVA工程师</td>
		      	</tr> -->
	        </tbody>
	    </table>
    </div>
</div>