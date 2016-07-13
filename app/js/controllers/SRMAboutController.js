(function () {
  'use strict';

  function SRMAboutController() {

    this.appName = 'RADAR';
    this.currentUser = 'user';
  
  }

  angular.module('cbitsPrototype.controllers')
    .controller('SRMAboutController',
    [ SRMAboutController]);
})();
