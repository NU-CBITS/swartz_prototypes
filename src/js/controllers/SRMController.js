(function () {
  'use strict';

  function SRMController() {

    this.appName = 'RADAR';
    this.currentUser = 'user';
  
  }

  angular.module('sis.controllers')
    .controller('SRMController',
    [ SRMController]);
})();
