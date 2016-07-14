(function() {
  'use strict';

  var User = {
    firstName:'Holly',
    startDate: new Date()
  };

  angular.module('cbitsPrototype.constants')
         .constant('User', User);
})();
