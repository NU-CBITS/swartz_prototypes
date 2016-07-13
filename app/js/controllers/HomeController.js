(function () {
  'use strict';

  function HomeController() {

    this.appName = 'RAY User';
    this.currentUser = 'user';
  
  }

  angular.module('cbitsPrototype.controllers')
    .controller('HomeController',
    [ HomeController]);
})();
