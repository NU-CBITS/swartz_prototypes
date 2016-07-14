(function() {
  'use strict';

  var User = {
    firstName:'Holly',
    startDate: new Date(),
    currentGoal: ''
  };

  angular.module('cbitsPrototype.constants')
         .constant('User', User);
})();
