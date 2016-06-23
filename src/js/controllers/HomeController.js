(function () {
  'use strict';

  function HomeController() {

    this.appName = 'RAY User';
    this.currentUser = 'user';
  
  }

  angular.module('sis.controllers')
    .controller('HomeController',
    [ HomeController]);
})();
