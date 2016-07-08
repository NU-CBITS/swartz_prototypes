(function () {
  'use strict';

  function RememberingAWellPeriodController($location) {

    this.exerciseComplete = false;
    this.exerciseAlert = '';
    this.responses = {};

    this.completeExercise = function (){
      if (this.responses.stability){
        this.exerciseComplete = true; 
      }
      else{
        this.exerciseAlert = 'Make sure to answer all questions!'
      }
    }

    this.showFeedback = function(truthyCriteria){

        var showFeedback = false;
        if (truthyCriteria.stability == this.responses.stability){
          showFeedback = true;
        }
        return showFeedback
    }
  
  }

  angular.module('sis.controllers')
    .controller('RememberingAWellPeriodController',
    [ '$location',RememberingAWellPeriodController]);
})();
