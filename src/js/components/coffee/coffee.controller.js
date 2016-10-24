(function() {

  'use strict';

  angular
    .module('myApp.components.coffee', [])
    .controller('coffeeController', coffeeController);

  coffeeController.$inject = ['$scope', 'coffeeService'];

  function coffeeController($scope, coffeeService) {
    /*jshint validthis: true */
    const vm = this;
    this.form = false;
    vm.coffeeObj = {};
    this.showForm = function() {
      this.form = true;
    }

    // vm.addCoffee = function(vm.coffeeObj) {
    //   coffeeService.addCoffee(vm.coffeeObj)
    // }

    coffeeService.getAllCoffee()
    .then((data) => {
      vm.coffee = data.data.data;
    })
    .catch((err) => {console.log(err);});

    // coffeeService.getSingleCoffee(1)
    // .then((coffee) => {console.log(coffee);})
    // .catch((err) => {console.log(err);})
  }

})();
