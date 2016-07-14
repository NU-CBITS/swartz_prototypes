(function () {
  'use strict';

  function HomeController(User) {

    this.userName = User.firstName;
  
  }

  angular.module('cbitsPrototype.controllers')
    .controller('HomeController',
    ['User', HomeController]);
})();
