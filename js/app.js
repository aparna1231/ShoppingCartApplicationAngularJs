var app = angular.module("myModule", [])
				.controller("myController", function($scope, $http){
					//dataType:JSONP;
$http.get('http://filedshoppingcarttest.azurewebsites.net/API/products/category/T')
					.then(function(response) {
            $scope.products = response.data;
});

$http.get('http://filedshoppingcarttest.azurewebsites.net/API/products/category/S')
					.then(function(response) {
            $scope.shoes = response.data;
});
				
				
				$scope.carts=[];				
				
				$scope.add_cart = function(product){
					if(product){
						$scope.carts.push({p_id: product.productId, p_name: product.description, p_price: product.price});
					}	

				}
				
				$scope.add_cart = function(shoe){
					if(shoe){
						$scope.carts.push({p_id: shoe.productId, p_name: shoe.description, p_price: shoe.price});
					}	

				}
						
					
				$scope.total = 0;
				
				$scope.setTotals = function(cart){
					if(cart){
						$scope.total += cart.p_price;
					}
                     				
				}
				
				$scope.remove_cart = function(cart){
					if(cart){
						$scope.carts.splice($scope.carts.indexOf(cart), 1);
						$scope.total -= cart.p_price;
					}
					
				}
				
				          
	});