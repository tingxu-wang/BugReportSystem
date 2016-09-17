<h3 class="page-title">
	<span id="js-page-tile">账号设置</span>
</h3>
<hr>
<form action="" class="form-horizontal">
	<div class="control-group">
		<label class="control-label left-site">
			用户名
		</label>
		<div class="controls left-site">
			<div class="form-control-static">
		      	{{ name }}
		    </div>
			<!-- <input type="text" class="large m-wrap" name="name" disabled="" value="{{ name }}"> -->
		</div>
	</div>
	<div class="control-group">
		<label class="control-label left-site">
			密码
		</label>
		<div class="controls left-site">
			<input type="password" class="large m-wrap js-password" name="password">
		</div>
	</div>
	<div class="control-group">
		<label class="control-label left-site">
			再次输入密码
		</label>
		<div class="controls left-site">
			<input type="password" class="large m-wrap js-password-confirm" name="confirm">
		</div>
	</div>
	<!-- 
	<div class="control-group">
		<label class="control-label left-site">
			账号id
		</label>
		<div class="controls left-site">
			<div class="form-control-static">
		      	{{ id  }}
		    </div>
		</div>
	</div>
	 -->
	{{ if code==3 || code==4 }}
	<div class="control-group">
		<label class="control-label left-site">
			负责产品经理ID
		</label>
		<div class="controls left-site">
			<div class="form-control-static">
		      	{{ uid }}
		    </div>
			<!-- <input type="text" class="large m-wrap" name="uid" disabled="" value="{{ uid }}"> -->
		</div>
	</div>
	{{ /if }}
	<div class="control-group js-setting-submit-error hidden">
		<div class="controls left-site">
			<span class="text-danger"></span>
		</div>
	</div>
	<div class="control-group js-setting-submit-success hidden">
		<div class="controls left-site">
			<span class="text-success"></span>
		</div>
	</div>
	<div class="control-group">
		<div class="controls left-site">
			<button class="btn btn-primary js-setting-submit">修改</button>
		</div>
	</div>
</form>