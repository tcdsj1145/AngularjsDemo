<!DOCTYPE HTML>
<html ng-app="myApp">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>无标题文档</title>
<style>
.active1{ background:red;}
.active2{ background:blue;}
</style>
<script src="angular.min.js"></script>
<script>
//    $index  每一项的索引值，后面都是true/false
//    $first   第一行返回true，其他返回false
//    $middle  除了首尾两行，其他都为false
//    $last
//    $even$odd
//    ng-repeat-start
//    ng-repeat-end

var m1 = angular.module('myApp',[]);
m1.controller('Aaa',['$scope',function($scope){
	
	$scope.dataList = [
		'aaaaa' , 'bbbbb' , 'cccccc' , 'dddddd' , 'eeeeee'
	];
}]);

</script>
</head>

<body>
<div ng-controller="Aaa">
    <!--隔行换色-->
	<ul>
    	<!--<li ng-repeat=" data in dataList ">{{ $even }}</li>-->
        <li class="{{ $even ? 'active1' : 'active2' }}" ng-repeat=" data in dataList ">{{ data }}</li>
    </ul>
    <!--指定循环的开始和结束-->
    <div ng-repeat-start="data in dataList">{{data}}</div>
    <p>{{data}}</p>
    <div ng-repeat-end>{{data}}</div>
</div>
</body>
</html>
