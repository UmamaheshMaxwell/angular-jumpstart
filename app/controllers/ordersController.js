(function(){

var OrdersController = function($scope, $http, $routeParams, customerFactory){	
 	
 	var customerId = $routeParams.customerId;
 	console.log(customerId)
 	$scope.customer = null;

 	function init(){
 		// Search for the customer for the customerId
 		customerFactory.getCustomer(customerId)
			.then(function(customer){				
				$scope.customer = customer.data
			})
 	}
	
	init();
}

OrdersController.$inject= ["$scope", "$http" ,"$routeParams", "customerFactory"]

angular.module("customerApp")
	   .controller("OrdersController", OrdersController);


}())
