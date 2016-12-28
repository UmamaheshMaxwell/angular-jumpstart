(function(){
	var customerService = function(){
		var customers = [
							{ id:1, joined:'2012-12-02', name:'Umesh', city: 'Bangalore', orderTotal :9.9956,
	                          orders:[{
	                          	id: 1,
	                          	product: 'Shoes',
	                          	total: 9.9956
	                          }]
	                      	},
							{ id:2, joined:'1965-01-25', name:'Gowda', city: 'Peenya', orderTotal :19.99,
							   orders:[
								   {
		                          	id: 2,
		                          	product: 'Baseball',
		                          	total: 9.995
		                          },
								   {
		                          	id: 3,
		                          	product: 'Bat',
		                          	total: 9.995
		                          },	                          
	                          ]
							},
							{ id:3, joined:'1944-06-15', name:'Sundar', city: 'Mysore', orderTotal :44.99,
	                          orders:[{
	                          	id: 4,
	                          	product: 'Caps',
	                          	total: 9.9956
	                          }]
							},
							{ id:4, joined:'1995-03-28', name:'Kp', city: 'Managalore', orderTotal :101.5,
	                          orders:[{
	                          	id: 5,
	                          	product: 'Gloves',
	                          	total: 9.9956
	                          }]
						}
					];

			
			this.getCustomers = function(){
				return customers;
			}	

			this.getCustomer = function(customerId){
		 		for(var i=0; i< customers.length; i++){
		 			if(customers[i].id === parseInt(customerId)){
		 				return customers[i]
		 			}
		 		}
		 		return {};
			}
			
	}
	angular.module("customerApp")
		   .service("customerService", customerService)

})();