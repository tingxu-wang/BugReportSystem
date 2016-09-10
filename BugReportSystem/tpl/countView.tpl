<!-- 账号展示table，删除账号（deleteCount.html）和人员总览（memberView.html）两个页面共用 -->
<form action="" class="form-horizontal">
	<div class="control-group">
		<label id="" class="control-label left-site">
			账号类别
			<span class="require-warn">*</span>
		</label>
		<div class="controls left-site">
      <select name="" id="" class="large m-wrap">
      	<option value="">全部人员</option>
				<option value="">程序员</option>
				<option value="">产品经理</option>
				<option value="">测试人员</option>
				<option value="">管理员</option>
			</select>
    </div>
	</div>
</form>
<div class="dataTables_wrapper">
	    <div class="table-responsive">
	    <table class="table table-striped table-bordered table-hover">
	      <thead>
	      	<tr>
	        	<th>Id</th>
	        	<th>用户名</th>
	        	<th>账号类别</th>
	        	<th>性别</th>
	        	<th>个人简介</th>
	        </tr>
	      </thead>
	      <tbody>
	      	<tr>
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
	      	</tr>
	      </tbody>
	    </table>
	    <div class="table-page-footer js-table-page-footer clearfix">
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
	    </div>
	    </div>
</div>