'use strict';

/**
 * @ngdoc service
 * @name shopApp.products
 * @description
 * # products
 * Factory in the shopApp.
 */
angular.module('shopApp')
  .factory('products', function ($http) {

    return {
      selectedItems: [],
      getProducts: function () {
        return $http.get("scripts/phones.js");;
      }
    };
  });
