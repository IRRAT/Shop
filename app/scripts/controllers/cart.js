'use strict';

/**
 * @ngdoc function
 * @name shopApp.controller:CartCtrl
 * @description
 * # CartCtrl
 * Controller of the shopApp
 */
angular.module('shopApp')
  .controller('CartCtrl', function ($scope, products, $location) {
  	$scope.selectedItems = products.selectedItems;

  	$scope.removeItem = function(item) {
  		var index = $scope.selectedItems.indexOf(item);
  		$scope.selectedItems.splice(index, 1);
  	}

  	$scope.$watch('selectedItems.length', function(newValue, oldValue) {
  		if(newValue === 0) $location.path('/');
		});
  });
