(function(){
	var app= angular.module("customerApp",['ngRoute']);
	/*
	the default hash-prefix used for $location hash-bang URLs has changed 
	from the empty string ('') to the bang ('!').

	If you actually want to have no hash-prefix, then you can restore the 
	previous behavior by adding a configuration block to your application:

	*/
	app.config(['$locationProvider', function($locationProvider) {
	  $locationProvider.hashPrefix('');
	}]);
	
	app.config(function($routeProvider){

		$routeProvider
			.when("/", {
				controller: "CustomerController",
				templateUrl: "app/views/customers.html"
			})
			.when("/orders/:customerId", {
				controller: "OrdersController",
				templateUrl: "app/views/orders.html"
			})
			.otherwise({redirectTo : '/'})
	})

})()