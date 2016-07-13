(function () {
  'use strict';

  function SRMGoalSettingController($location) {

    this.olderPostsVisible = false;

    this.showOlderPosts = function(){
      this.olderPostsVisible = true;
    }
  
  }

  angular.module('cbitsPrototype.controllers')
    .controller('SRMGoalSettingControllerr',
    [ '$location',SRMGoalSettingController]);
})();
