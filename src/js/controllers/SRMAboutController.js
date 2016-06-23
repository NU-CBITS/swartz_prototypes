(function () {
  'use strict';

  function SRMAboutController() {

    this.appName = 'RADAR';
    this.currentUser = 'user';
  
  }

  angular.module('sis.controllers')
    .controller('SRMAboutController',
    [ SRMAboutController]);
})();
