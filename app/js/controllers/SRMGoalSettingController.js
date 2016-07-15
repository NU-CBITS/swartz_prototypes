(function () {
  'use strict';

  function SRMGoalSettingController($location, $routeParams, $sce, SRMGoalsContent) {

  	this.stages = SRMGoalsContent.Stages;
  	this.goals = SRMGoalsContent.Goals;

    this.currentGoalIndex = 0;
    this.currentStrategyIndex = 0;


    this.nextGoalIndex = null;
    this.currentHighestUnlockedGoalStage = 5;
    this.panelsVisible = [true,false,false];

    this.showPanel = function(panelIndex){
      for(var i = 0; i < this.panelsVisible.length; i++){
          this.panelsVisible[i] = false;
      }
      this.panelsVisible[panelIndex] = true;
    }

    this.init = function(){
      if (this.currentStageIndex() === 0){
        this.panelsVisible = [false,true,false];
      }
    }

    this.currentStageIndex = function(){
        return parseInt($routeParams.goal_stage_index) > -1 ? parseInt(parseInt($routeParams.goal_stage_index)) : this.currentHighestUnlockedGoalStage;
    }

    this.currentStage = this.stages[this.currentStageIndex()];
    this.currentGoal = this.goals[this.currentGoalIndex];

    this.goalSuccess = function(){
        return this.currentGoalTaskCompleted == 'Yes'
    }

    this.goalFailure = function(){
        return this.currentGoalTaskCompleted == 'No'
    }

    this.goalFailureHTML = $sce.trustAsHtml(this.currentStage.goalSuccessHTML.failure);
    this.goalSuccessHTML = $sce.trustAsHtml(this.currentStage.goalSuccessHTML.success);

    this.availableGoals = function(){

      var availableGoals = [];
       for(var i = 0; i <this.goals.length; i++){
          if( this.goals[i].availability.indexOf(this.currentStageIndex()) > -1){
          availableGoals.push(this.goals[i]);
        }

       }

       return availableGoals
    }

    this.nextGoal = function(){
      debugger;
        return this.goals[this.nextGoalIndex];
    }

    this.strategiesHTML = function(){ 
      var strategiesHTML = '';
      if (this.nextGoal() != undefined){debugger;
      strategiesHTML = this.nextGoal().strategiesHTML[this.currentStrategyIndex];
      }
      return $sce.trustAsHtml(strategiesHTML)
    }
  }

  angular.module('cbitsPrototype.controllers')
    .controller('SRMGoalSettingController',
    [ '$location', '$routeParams', '$sce', 'SRMGoalsContent', SRMGoalSettingController]);
})();
