<!DOCTYPE HTML>
<html ng-app="myApp">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>无标题文档</title>
<script src="angular.min.js"></script>
<script>

var m1 = angular.module('myApp',[]);

//使用自定义过滤器  模块下的方法filter
m1.filter('firstUpper',function(){
	return function(str,num){
		//console.log(num);   str就是传进来的字符串
		return str.charAt(0).toUpperCase() + str.substring(1);
	}
});
//在js中使用过滤器，采用服务的形式，注入过滤器
m1.controller('Aaa',['$scope','$filter',function($scope,$filter){
	
	//$scope.name = '723894734.7489545';
	//$scope.name = 'hello';
	//$scope.name = {"name":"hello","age":"20"};
	//$scope.name = ['a','b','c'];
	//$scope.name = '3748935795';
	
	/*$scope.name = [
		{color:"red",age:"20"},
		{color:"yellow",age:"30"},
		{color:"blue",age:"40"},
		{color:"green",age:"10"}
	];*/

	//在js中使用系统自带的过滤器，采用服务的形式，注入过滤器
	//$scope.name = $filter('uppercase')('hello');
	//$scope.name = $filter('number')('236478234.3647348',1);
	//$scope.name = $filter('date')('236478234','hh');
	
	//$scope.name = 'hello';
	
	$scope.name = $filter('firstUpper')('hello');
}]);

</script>
</head>

<body>
<div ng-controller="Aaa">
	<!--在表达式中使用系统的过滤器-->
	<!--<p>{{name | currency:"￥"}}</p>-->
    <!--<p>{{ name | number : 0 }}</p>-->
    <!--<p>{{ name | uppercase }}</p>-->
    <!--<pre>{{ name | json }}</pre>-->
    <!--<p>{{ name | limitTo : 2 }}</p>-->
    <!--<p>{{ name | date : 'yyyy' }}</p>-->
    <!--<p>{{ name | orderBy : 'age' : true }}</p>-->
    <!--<p>{{ name | filter : 'l' }}</p>-->
    <!--<p>{{ name | limitTo : 2 | uppercase }}</p>-->
    <!--<p>{{ name | firstUpper : 2 }}</p>-->
    <p>{{ name }}</p>
</div>
</body>
</html>
