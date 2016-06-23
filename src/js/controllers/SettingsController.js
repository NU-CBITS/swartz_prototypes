(function () {
  'use strict';

  function SettingsController() {

    this.appName = 'RADAR';
    this.currentUser = 'user';
  
  }

  angular.module('sis.controllers')
    .controller('SettingsController',
    [ SettingsController]);
})();
