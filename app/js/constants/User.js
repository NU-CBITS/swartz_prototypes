(function() {
  'use strict';

  var User = {
    name:'Joan Smith',
    startDate: new Date(),
    endDate: new Date(),
    email:'jsmith@gmail.com'
  };

  angular.module('cbitsPrototype.constants')
         .constant('User', User);
})();
