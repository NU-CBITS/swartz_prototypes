(function () {
  'use strict';

  function SRMHelpController($sce, SRMGoalsContent) {

  	this.goals = SRMGoalsContent.Goals;

    this.currentGoalIndex = 0;
    this.currentStrategyIndex = 0;

    this.goal = this.goals[this.currentGoalIndex];
    this.title = this.goal.title
    this.strategiesHTML = $sce.trustAsHtml(this.goal.strategiesHTML[this.currentStrategyIndex])
  
  }

  angular.module('cbitsPrototype.controllers')
    .controller('SRMHelpController',
    [ '$sce','SRMGoalsContent',SRMHelpController]);
})();
