<!DOCTYPE HTML>
<html ng-app="myApp">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>无标题文档</title>
<script src="angular.min.js"></script>
<script>

var m1 = angular.module('myApp',[]);
//依赖注入$filter服务
m1.controller('Aaa',['$scope','$filter',function($scope,$filter){
	
	var oriArr = [
		{ name : "red" , age : "20" },
		{ name : "yellow" , age : "40" },
		{ name : "blue" , age : "30" },
		{ name : "green" , age : "10" }
	];
	$scope.dataList = oriArr;

	$scope.fnSort = function(arg){
		arguments.callee['fnSort'+arg] = !arguments.callee['fnSort'+arg];  //该表第三个参数，开关
		//第三个参数，true：从大到小，false，从小到大
		$scope.dataList = $filter('orderBy')($scope.dataList,arg,arguments.callee['fnSort'+arg] );
	};
	$scope.fnFilter = function(){    //第一个参数是搜索的原始数据  
			$scope.dataList = $filter('filter')( oriArr,$scope.filterVal );
	};
}]);
</script>
</head>

<body>
<div ng-controller="Aaa">
	<input type="text" ng-model="filterVal">
	<input type="button" ng-click="fnFilter()" value="搜索">
	<table border="1">
    	<tr>
        	<th ng-click="fnSort('name')">姓名</th>
            <th ng-click="fnSort('age')">年龄</th>
        </tr>
        <tr ng-repeat="data in dataList">
        	<td>{{ data.name }}</td>
            <td>{{ data.age }}</td>
        </tr>
    </table>
</div>
</body>
</html>
