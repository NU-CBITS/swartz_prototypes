(function () {
  'use strict';

  function SRMGoalSettingController($location) {

    this.olderPostsVisible = false;

    this.showOlderPosts = function(){
      this.olderPostsVisible = true;
    }
  
  }

  angular.module('sis.controllers')
    .controller('SRMGoalSettingControllerr',
    [ '$location',SRMGoalSettingController]);
})();
