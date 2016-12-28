(function(){

	var  CustomerController = function ($scope, $http, customerFactory, appSettings){
			$scope.sortBy = 'name'; 
			$scope.reverse='false';			
			$scope.customers = [];
			$scope.appSettings = appSettings;

			function init(){
				customerFactory.getCustomers()
					.then(function(customers){
						$scope.customers = customers.data
					})
			}

			init();

			$scope.doSort = function(propName){
				$scope.sortBy = propName; 
				$scope.reverse=!$scope.reverse;
			}
	}

	CustomerController.$inject= ["$scope", "$http", "customerFactory", "appSettings"]

	angular.module("customerApp")
		   .controller("CustomerController", CustomerController);

})()

