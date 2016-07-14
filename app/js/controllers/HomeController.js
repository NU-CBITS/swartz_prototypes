(function () {
  'use strict';

  function HomeController(User, Site) {

    this.userName = User.firstName;
    this.brand = Site.brand;
  
  }

  angular.module('cbitsPrototype.controllers')
    .controller('HomeController',
    ['User', 'Site', HomeController]);
})();
