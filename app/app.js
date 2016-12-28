(function(){
	var app= angular.module("customerApp",['ngRoute']);

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