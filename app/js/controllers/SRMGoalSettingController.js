(function () {
  'use strict';

  function SRMGoalSettingController($location, $routeParams, $sce, SRMGoalsContent) {

  	this.stages = SRMGoalsContent.Stages;
  	this.goals = SRMGoalsContent.Goals;

    this.currentGoalIndex = 0;
    this.currentGoal = this.goals[this.currentGoalIndex];
  	this.currentHighestUnlockedGoalStage = 1;
  	this.currentStageIndex = $routeParams.goal_stage_index || this.currentHighestUnlockedGoalStage;
    this.currentStage = this.stages[this.currentStageIndex];

    this.currentGoalTaskCompleted = false;
    this.currentGoalPageFinished = false;

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

  	//stages model
  	// id:0,
  	// title:'Your First Goal',
  	// keyword:'first_goal',
  	// preamble:'Setting and meeting SRM goals can help you improve your social rhythms and your mood.',
  	// instructions:'Select one of the following SRM goals. Pick something that you would like to work on and yet doesn’t seem too overwhelming.',
  	// description:'This week you will set one short term SRM goal.  The idea is to pick a goal that you think you might be able to accomplish by the end of the week. Don’t pick something too ambitious.',
  	// tip:'Each goal will come with a list of tips and suggestions to help you reach your goal this week.',
  	// goalSuccessHTML:{
  	// 	success:'You now can set your next SRM goal.  This next goal should be based on your SRMs.  Is there an area where you are having difficulty?  Select a goal that will help you achieve more regular SRMs. This week you will have the option of picking an exercise goal because exercise is also important to your rhythms and health.',
  	// 	failure:'Many people do not meet their SRM goals on their first try.  Sometimes it takes additional attempts to reach your goal.  You will learn additional skills as you continue to work on RAY that will help you accomplish your goals.  We also have some additional tips for you to work on this week.'
  	// }

  	//goals model
  	// title:'Get up at the same time every day.',
  	// availability:[],
  	// tags:[],
  	// strategiesHTML:[]

  }

  angular.module('cbitsPrototype.controllers')
    .controller('SRMGoalSettingController',
    [ '$location', '$routeParams', '$sce', 'SRMGoalsContent', SRMGoalSettingController]);
})();
