(function () {
  'use strict';

  function NavBarController($location) {

    this.userName = 'Ray User';
    this.brand = 'RAY';
    this.showNavbar = $location.path() != '/';


    this.newTasks= function(taskType){

      var newTaskNotification = false;

      switch (taskType) {
        case 'lessons':
        newTaskNotification = true;
        break;
        case 'srm':
        newTaskNotification = true;
        break;
      }
      return newTaskNotification
    }
    
  }

  angular.module('sis.controllers')
    .controller('NavBarController',
    [ '$location',NavBarController]);
})();
