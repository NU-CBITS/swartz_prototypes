(function () {
  'use strict';

  function HelpController($location) {

    this.confirmationVisible = false;

    this.showConfirmation = function(){
      this.confirmationVisible = true;
    }
  
  }

  angular.module('cbitsPrototype.controllers')
    .controller('HelpController',
    [ '$location',HelpController]);
})();
