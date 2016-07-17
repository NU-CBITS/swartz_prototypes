(function () {
  'use strict';

  function TroubleshootingRoutinesController($routeParams, $filter, DisruptedRoutinesContent) {

  	this.content = DisruptedRoutinesContent;
  	this.panelVisible = [true,false,false];
  	this.currentStoryIndex =  $routeParams.storyIndex || 0;  	
  	this.currentStory = this.content[this.currentStoryIndex];

  	this.responses = {
  		challenges:[],
  		solutions:[]
  	}

  	this.pluralize = {};
  	
  	this.pluralize.challenges = {
  		'0':'No challenges',
  		'1':'{} challenge',
  		'other': '{} challenges'
  	}
  	
  	this.pluralize.solutions = {
  		'0':'No solutions',
  		'1':'{} solution',
  		'other': '{} solutions'
  	}

  	this.challengesFinished = function(){
  		return this.correctlyIdentifiedChallengesRemaining() == 0
  	}

  	this.correctChallenges = function(){
  		return $filter('filter')(this.currentStory.challenges,{correct:true});
  	}

  	this.correctlyIdentifiedChallengesRemaining = function(){
  		var challengesRemaining = null;
  		var challengesCompleted = 0;
  		var totalCorrectChallenges = this.correctChallenges().length;  
  		for (var i =0; i < this.currentStory.challenges.length; i++){
  			if (this.responses.challenges[i] == true && this.currentStory.challenges[i].correct){
  				challengesCompleted++
  			}
  		}
  		challengesRemaining = totalCorrectChallenges - challengesCompleted;
  		return challengesRemaining
  	}

  	this.correctlyIdentifiedSolutionsemaining = function(challengeIndex){
  		var challengesRemaining = null;
  		var challengesCompleted = 0;
  		var totalCorrectChallenges = this.correctChallenges().length;  
  		for (var i =0; i < this.currentStory.challenges.length; i++){
  			if (this.responses.challenges[i] == true && this.currentStory.challenges[i].correct){
  				challengesCompleted++
  			}
  		}
  		challengesRemaining = totalCorrectChallenges - challengesCompleted;
  		return challengesRemaining
  	}

  	this.currentPanelIndex = function(){
  		return this.panelVisible.indexOf(true);
  	}

  	this.showPanel = function(panelIndex){
    	for(var i = 0; i < this.panelVisible.length; i++){
    			this.panelVisible[i] = false;
    	}
    	this.panelVisible[panelIndex] = true;
    }

  }

  angular.module('cbitsPrototype.controllers')
    .controller('TroubleshootingRoutinesController',
    ['$routeParams', '$filter', 'DisruptedRoutinesContent',TroubleshootingRoutinesController]);
})();
