{{ if code==2 }}
<li>
	<div class="sidebar-toggler hidden-phone"></div>
</li>
<li class="start">
	<a href="manager.html">
		<i class="fa fa-users"></i>
		<span class="title">我的团队</span>
	</a>
</li>
<li class="open">
	<a href="javascript:;">
		<i class="fa fa-list-ul"></i>
		<span class="title">我的项目</span>
		<span class="arrow"></span>
	</a>
	<ul class="sub-menu">
		<li>
			<a href="createprj.html">
				<span class="fa fa-plus-square-o"></span>
				创建项目
			</a>
		</li>
		<li>
			<a href="deleteprj.html">
				<span class="fa fa-minus-square-o"></span>
				删除项目
			</a>
		</li>
		<li>
			<a href="prjView.html">
				<span class="fa fa-clone"></span>
				项目总览
			</a>
		</li>
	</ul>
</li>
{{ /if }}