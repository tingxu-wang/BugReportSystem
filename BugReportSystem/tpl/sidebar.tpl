{{ if code==1 }}
<!-- superManager -->
<li>
	<div class="sidebar-toggler hidden-phone"></div>
</li>
<li class="start active">
	<a href="prjView.html">
		<i class="fa fa-sitemap"></i>
		<span class="title">项目管理</span>
		<span class="selected"></span>
	</a>
</li>
<li>
	<a href="javascript:;">
		<i class="fa fa-users"></i>
		<span class="title">账号管理</span>
		<span class="arrow"></span>
	</a>
	<ul class="sub-menu">
		<li>
			<a href="create.html">
				<span class="fa fa-user-plus"></span>
				账号创建
			</a>
		</li>
		<li>
			<a href="deleteCount.html">
				<span class="fa fa-user-times"></span>
				账号删除
			</a>
		</li>
	</ul>
</li>
<li>
	<a href="memberView.html">
		<i class="fa fa-list"></i>
		<span class="title">人员信息一览</span>
	</a>
</li>
{{ /if }}

{{ if code==2 }}
<!-- PM -->
<li>
	<div class="sidebar-toggler hidden-phone"></div>
</li>
<li class="start">
	<a href="memberView.html">
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
{{ if code==3 || code==4 }}
<li>
	<div class="sidebar-toggler hidden-phone"></div>
</li>
<li class="start active">
	<a href="prjView.html">
		<i class="fa fa-sitemap"></i>
		<span class="title">项目总揽</span>
		<span class="selected"></span>
	</a>
</li>
{{ /if }}
{{ if code==5}}
<li>
	<div class="sidebar-toggler hidden-phone"></div>
</li>
<li class="start active">
	<a href="prjdetail.html">
		<i class="fa fa-sitemap"></i>
		<span class="title">项目明细</span>
		<span class="selected"></span>
	</a>
</li>
{{ /if }}