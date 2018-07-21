var app=angular.module("customers",[]);
app.controller("CustemerSearchController",[
	"$scope","$http",function($scope,$http){
		var page = 0;
		$scope.customers = [];
	
		$scope.search = function(searchTerm) {
			if (searchTerm.length < 3) {
				return;
			 }

			$scope.searchedFor = searchTerm;
			$http.get("/customers.json",{"params":{"keywords":searchTerm,"page":
				page}}).then(function(response){
				$scope.customers=response.data;
			},function(response){
				// $scope.customers={
				// 	"first_name":"",
				// 	"last_name":"",
				// 	"email":"",
				// 	"username":"",
				// 	"created_at":"",
				// };
				alert("There was a problem:"+response.status);
			});
		}
		$scope.previousPage=function(){
			if(page>0){
				page=page-1;
				$scope.search($scope.keywords);
			}
		}
		$scope.nextPage=function(){
			page=page+1;
			$scope.search($scope.keywords);
		}
	}
]);

app.config([
	"$routeProvider",
	function($routeProvider) {
	 $routeProvider.when("/", {
	 controller: "CustomerSearchController",
	 templateUrl: "customer_search.html"
	 });
	}
]);
