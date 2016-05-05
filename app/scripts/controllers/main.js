'use strict';

/**
 * @ngdoc function
 * @name shopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the shopApp
 */
angular.module('shopApp')
  .controller('MainCtrl', function ($scope, $mdSidenav, products, $location) {
    $scope.selectedItems = products.selectedItems;
    $scope.phonesImagesUrl = "images/phones/";

    products.getProducts()
    	.then(function(res){
    		$scope.items = res.data;
    	});

    $scope.toggleList = function() {
      $mdSidenav('left').toggle();
    }

    $scope.toggleCarrier = function(carrier) {
    	if($scope.seletedCarrier != carrier) {
    		$scope.seletedCarrier = carrier;
    	} else {
    		$scope.seletedCarrier = "";
    	}
    }

    $scope.addToCart = function(item) {
        if($scope.selectedItems.indexOf(item) === -1) {
            $scope.selectedItems.push(item);
        }
    }

    $scope.toCart = function() {
        if ($scope.selectedItems.length) $location.path('/cart');
    }


  });
