(function() {

  'use strict';

  angular
    .module('myApp.services', [])
    .service('coffeeService', coffeeService);

    coffeeService.$inject = ['$http'];

  function coffeeService($http) {
    /*jshint validthis: true */
    var baseUrl = 'https://whispering-temple-83058.herokuapp.com/coffee'

    this.getAllCoffee = function() {
      return $http.get(baseUrl)
    };
    // this.getSingleCoffee = function(id) {
    //   return $http.get(baseUrl + '/' + id)
    // }
    this.test = 'Coffee Service is working!'
  }

})();
