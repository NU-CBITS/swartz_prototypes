(function () {
  'use strict';

  function SRMGoalSettingController($location, $routeParams, $sce, SRMGoalsContent) {

  	this.stages = SRMGoalsContent.Stages;
  	this.goals = SRMGoalsContent.Goals;

    this.currentGoalIndex = 0;
    this.currentGoalTaskCompleted = false;
    this.currentGoalPageFinished = false;
    this.currentGoal = this.goals[this.currentGoalIndex];
    this.currentHighestUnlockedGoalStage = 5;
    this.currentStageIndex = $routeParams.goal_stage_index || this.currentHighestUnlockedGoalStage;
    this.currentStage = this.stages[this.currentStageIndex];
    this.currentStrategyIndex = 0;
    this.nextGoalIndex = null;
    this.nextGoalSaved = false;

    this.goalSuccess = function(){
        return this.currentGoalTaskCompleted == 'Yes'
    }

    this.goalSuccessHTML = $sce.trustAsHtml(this.currentStage.goalSuccessHTML.success);

    this.goalFailure = function(){
        return this.currentGoalTaskCompleted == 'No'
    }

    this.goalFailureHTML = $sce.trustAsHtml(this.currentStage.goalSuccessHTML.failure);


    this.goalCompletionRequired = function(){
        return this.currentStageIndex > 0 && !this.currentGoalPageFinished
    }

    this.finishGoalTracking = function(){
        this.currentGoalPageFinished = true;
    }

    this.goalCompleted = function(){
        return !this.nextGoalSaved && !this.goalCompletionRequired()
    }

    this.availableGoals = function(){

      var availableGoals = [];
       for(var i = 0; i <this.goals.length; i++){
          if( this.goals[i].availability.indexOf(this.currentStageIndex) > -1){
          availableGoals.push(this.goals[i]);
        }

       }

       return availableGoals
    }

    this.saveNextGoal = function(){
        this.nextGoalSaved = true;
    }

    this.nextGoal = function(){
        return this.goals[this.nextGoalIndex];
    }

    this.strategiesHTML = function(){ 
      var strategiesHTML = '';
      if (this.nextGoal() != undefined){
      strategiesHTML = this.nextGoal().strategiesHTML[this.currentStrategyIndex];
      }
      return $sce.trustAsHtml(strategiesHTML)
    }
  }

  angular.module('cbitsPrototype.controllers')
    .controller('SRMGoalSettingController',
    [ '$location', '$routeParams', '$sce', 'SRMGoalsContent', SRMGoalSettingController]);
})();
