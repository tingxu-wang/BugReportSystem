<h3 class="page-title">
	<span id="js-page-tile">账号创建</span>
</h3>
<hr>
<form action="" class="form-horizontal">
	<div class="control-group">
		<label id="" class="control-label left-site">
			账号类别
			<span class="require-warn">*</span>
		</label>
		<div class="controls left-site">
	        <select name="code" class="large m-wrap">
	        	<option value="0">请选择</option>
				<option value="1">管理员</option>
				<option value="2">产品经理</option>
				<option value="3">程序员</option>
				<option value="4">测试人员</option>
				<option value="5">用户</option>
			</select>
	    </div>
	</div>
	<div class="control-group">
	    <label class="control-label left-site">
	    	用户名
	    	<span class="require-warn">*</span>
	    </label>
	    <div class="controls left-site">
	      <input type="text" class="large m-wrap" name="name">
	    </div>
    </div>
    <div class="control-group">
	    <label class="control-label left-site">
	    	性别
	    	<span class="require-warn">*</span>
	    </label>
	    <div class="controls left-site">
	        <label class="label-inline">
	      	    <input type="radio" value="male" name="sex">
				男
	        </label>
	        <label class="label-inline">
	      	    <input type="radio" value="female" name="sex">
				女
	        </label>
	    </div>
    </div>
    <div class="control-group">
	    <label class="control-label left-site">
	    	密码
	    </label>
	    <div class="controls left-site">
	      <input type="text" class="large m-wrap" value="admin" name="pass" disabled>
	    </div>
    </div>
    <div class="control-group hidden js-pm-wrap">
		<label id="" class="control-label left-site">
			直属产品经理名称
			<span class="require-warn">*</span>
		</label>
        <div class="controls left-site">
        	<!-- <input type="text" class="large m-wrap" name="uid"> -->
        	<select name="uid" class="large m-wrap">
	        	<option value="0">请选择</option>
				{{ each data2 }}
				<option value="{{ $value.id }}">{{ $value.name }}</option>
				{{ /each }}
			</select>
        </div>
	</div>
	<div class="control-group hidden js-project-wrap">
		<label id="" class="control-label left-site">
			直属项目名称
			<span class="require-warn">*</span>
		</label>
        <div class="controls left-site">
        	<!-- <input type="text" class="large m-wrap" name="pid"> -->
        	<select name="pid" class="large m-wrap">
	        	<option value="0">请选择</option>
				{{ each data }}
				<option value="{{ $value.id }}">{{ $value.p_name }}</option>
				{{ /each }}
			</select>
        </div>
	</div>
	<div class="control-group">
		<div class="controls left-site">
			<span class="errorText js-submit-error hidden"></span>
		</div>						
	</div>
	<div class="control-group">
		<div class="controls left-site">
			<span class="text-success js-submit-success hidden"></span>
		</div>							
	</div>
	<div class="control-group">
		<div class="controls left-site">
			<button class="btn btn-primary js-createCount-submit">提交</button>
		</div>
	</div>
</form>