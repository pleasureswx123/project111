(function(win){

	var path = 'https://mpandora.jiuxinfinance.com/op-app/'; //'http://100.66.240.51:8889/op-app/';
	var Api = {
			login:path+'user/login',  //登陆
			logout:path+'logout', //退出

			//建标页面
			queryUser:path+'user/queryUser', //查询用户
			create:path+'loan/quickLoanRequestPost', //创建新标 提交申请

			examine:path+'loan/queryLoanRequest', //审批列表
			examineItem:path+'loan/getLoanRequest', //审批
			radioData:path+'loan/quickLoanRequest',//所有选择框表单数据

			past:path+'loan/request/approve',//审批通过
			delete:path+'loan/request/cancel',//删除审批

			release:path+'loan/listLoansByStatus',//发标管理列表 startRelease timingRelease
			deleteRelease:path+'loan/cancel', //删除发标
			startRelease:path+'loan/schedule/now', //立即发标
			timingRelease:path+'loan/schedule/set', //定时调度
	}
	
	win.Api = Api;
})(window)