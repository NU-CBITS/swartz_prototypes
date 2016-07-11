(function () {
  'use strict';

  function SRMController() {

  	// uncommment to set to current day
    // var currentDayOfWeek = new Date().getDay();
    // this.currentActiveDay = currentDayOfWeek; 
    // for prototyping day is set to Thursday (i.e. index of 4)
    var currentDayOfWeek = 4;
    this.currentActiveDay = 4; 

    this.showMoodRatings = true;
    this.showTargetTimes = true;

    this.dayIndexToString = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    this.seedSRMArray = [
        {dayIndex:0, getOutOfBed:null, firstContact:null, startWork:null, haveDinner:null, mood:null, energy:null, complete:true, accessible:true},
        {dayIndex:1, getOutOfBed:null, firstContact:null, startWork:null, haveDinner:null, mood:null, energy:null, complete:true, accessible:true},
        {dayIndex:2,  getOutOfBed:null, firstContact:null, startWork:null, haveDinner:null, mood:null, energy:null, complete:false, accessible:true},
        {dayIndex:3,  getOutOfBed:null, firstContact:null, startWork:null, haveDinner:null, mood:null, energy:null, complete:false, accessible:true},
        {dayIndex:4, getOutOfBed:null, firstContact:null, startWork:null, haveDinner:null, mood:null, energy:null, complete:false, accessible:true},
        {dayIndex:5,  getOutOfBed:null, firstContact:null, startWork:null, haveDinner:null, mood:null, energy:null, complete:false, accessible:false},
        {dayIndex:6, getOutOfBed:null, firstContact:null, startWork:null, haveDinner:null, mood:null, energy:null, complete:false, accessible:false}
        ];

    this.srmDays = function(){

        var srmDays = this.seedSRMArray;

        return srmDays
    };

    this.srmDayStatusLabel = function(isAccesible,isComplete){
    	var status = 'info';

    	if(!isComplete){
    		status = 'warning';
    	}

    	if(isComplete) {
    		status = 'success';
    	}

    	if(!isAccesible){
    		status = 'default';
    	}

    	return status
    }

    this.daysLeftToLog = function(){
    	var srmDaysThisWeek = this.srmDays();
    	var daysLeftToLog = 7;
    	angular.forEach(srmDaysThisWeek,function(day){
    		if (day.complete){daysLeftToLog--}
    	})
    	return daysLeftToLog
    }

    this.gotoNextDay = function(){
        this.currentActiveDay++;
    }

    this.showGotoNextDay = function(){
        return this.currentActiveDay < 7 && this.currentActiveDay <= currentDayOfWeek -1
    }

    this.gotoPreviousDay = function(){
        this.currentActiveDay--;
    }

    this.showGotoPreviousDay = function(){
        return this.currentActiveDay > 0 
    }

    this.goToDay = function(day){
        if(day <= currentDayOfWeek){
    	this.currentActiveDay = day;
        }
    }

    this.daySelectionActive = function(index){
        return index == this.currentActiveDay ? 'btn-active' : '' 
    }
 
  }

  angular.module('sis.controllers')
    .controller('SRMController',
    [ SRMController]);
})();
