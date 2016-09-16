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
	        	<th>项目id</th>
	        	<th>产品经理id</th>
	        	<th>产品经理用户名</th>
	        	<th>添加日期</th>
	        	<th>项目简介</th>
	        </tr>
	      </thead>
	      <tbody>
	      	{{ each data }}
	      	<tr>
	      		<td>{{ $value.p_name }}</td>
	      		<td>{{ $value.id }}</td>
	      		<td>{{ $value.uid }}</td>
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
<!-- 	    <table class="table table-striped table-bordered table-hover js-prj-table">
	      <thead>
	      	<tr>
	        	<th>项目名称</th>
	        	<th>产品经理ID</th>
	        	<th>产品经理用户名</th>
	        	<th>添加日期</th>
	        	<th>项目简介</th>
	        </tr>
	      </thead>
	      <tbody>
	      	<tr>
	      		<td>Bug管理系统</td>
	      		<td>000</td>
	      		<td>Martin</td>
	      		<td>2016-08-07 08:36</td>
	      		<td>企业项目Bug管理平台</td>
	      	</tr>
	      	<tr>
	      		<td>版本控制平台</td>
	      		<td>001</td>
	      		<td>john</td>
	      		<td>2016-08-07 08:36</td>
	      		<td>具备版本回溯以及更新的综合平台</td>
	      	</tr>
	      </tbody>
	    </table> -->
	    <!-- <div class="table-page-footer js-table-page-footer clearfix">
	      <div class="dataTables_info pull-left">
	        总共52条记录，每页显示10条
	      </div>
	      <div class="pull-right paging_bootstrap">
	        <ul class="pagination">
	          <li class="prev disabled">
	            <a href="#">
	              <i class="fa fa-chevron-left">
	              </i>
	            </a>
	          </li>
	          <li class="active">
	            <a href="javascript:void();">
	              1
	            </a>
	          </li>
	          <li>
	            <a href="/teach/masterrefundlist?&amp;name=&amp;isverify=-1&amp;type=2&amp;p=1&amp;limit=10&amp;p=2"
	            class="bootstrap">
	              2
	            </a>
	          </li>
	          <li>
	            <a href="/teach/masterrefundlist?&amp;name=&amp;isverify=-1&amp;type=2&amp;p=1&amp;limit=10&amp;p=3"
	            class="bootstrap">
	              3
	            </a>
	          </li>
	          <li>
	            <a href="/teach/masterrefundlist?&amp;name=&amp;isverify=-1&amp;type=2&amp;p=1&amp;limit=10&amp;p=4"
	            class="bootstrap">
	              4
	            </a>
	          </li>
	          <li>
	            <a href="/teach/masterrefundlist?&amp;name=&amp;isverify=-1&amp;type=2&amp;p=1&amp;limit=10&amp;p=5"
	            class="bootstrap">
	              5
	            </a>
	          </li>
	          <li>
	            <a href="/teach/masterrefundlist?&amp;name=&amp;isverify=-1&amp;type=2&amp;p=1&amp;limit=10&amp;p=6"
	            class="bootstrap">
	              6
	            </a>
	          </li>
	          <li class="next">
	            <a href="/teach/masterrefundlist?&amp;name=&amp;isverify=-1&amp;type=2&amp;p=1&amp;limit=10&amp;p=2">
	              <i class="fa fa-chevron-right"></i>
	            </a>
	          </li>
	        </ul>
	      </div>
	    </div> -->
	</div>
</div>