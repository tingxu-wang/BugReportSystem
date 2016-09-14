<div class="container-fluid cus-container-fluid">
	<div class="navbar-header cus-navbar-header">
      <a class="navbar-brand" href="#">
        <img width="32" alt="Brand" src="../css/img/logo.png">
        <p class="cus-brand-text">Bug管理后台</p>
      </a>
    </div>
	<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".nav-collapse" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
   </button>
   <ul class="nav navbar-nav pull-right cus-navbar-nav">
    <li class="dropdown cus-user">
      <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
		<span class="username">{{ name }}</span>
      	<span class="caret"></span></a>
      <ul class="dropdown-menu">
         <li><a href="setting.html"><span class="fa fa-gear" aria-hidden="true"></span> 账号设置</a></li>
        <li><a href="javascript:void (0);" onclick="location.replace('login.html')"><span class="fa fa-power-off" aria-hidden="true"></span> 注销</a></li>
      </ul>
    </li>
  </ul>
</div>