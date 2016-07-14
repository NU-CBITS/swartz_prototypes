(function () {
  'use strict';

  function NavBarController($location,User) {

    this.userName = User.firstName;
    this.brand = 'RAY';

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

  angular.module('cbitsPrototype.controllers')
    .controller('NavBarController',
    [ '$location', 'User', NavBarController]);
})();
