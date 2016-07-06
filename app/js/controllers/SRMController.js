(function () {
  'use strict';

  function SRMController() {

  	var currentDayOfWeek = new Date().getDay();

    this.currentActiveDay = currentDayOfWeek; 

    this.srmDays = [
    	{dayName:'Sunday', getOutOfBed:null, firstContact:null, startWork:null, haveDinner:null, complete:true, accessible:true},
    	{dayName:'Monday', getOutOfBed:null, firstContact:null, startWork:null, haveDinner:null, complete:true, accessible:true},
    	{dayName:'Tuesday', getOutOfBed:null, firstContact:null, startWork:null, haveDinner:null, complete:false, accessible:true},
    	{dayName:'Wednesday', getOutOfBed:null, firstContact:null, startWork:null, haveDinner:null, complete:false, accessible:true},
    	{dayName:'Thursday', getOutOfBed:null, firstContact:null, startWork:null, haveDinner:null, complete:false, accessible:false},
     	{dayName:'Friday', getOutOfBed:null, firstContact:null, startWork:null, haveDinner:null, complete:false, accessible:false},
      	{dayName:'Saturday', getOutOfBed:null, firstContact:null, startWork:null, haveDinner:null, complete:false, accessible:false}
    ];

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
    	var srmDaysThisWeek = this.srmDays;
    	var daysLeftToLog = 7;
    	angular.forEach(srmDaysThisWeek,function(day){
    		if (day.complete){daysLeftToLog--}
    	})
    	return daysLeftToLog
    }

    this.gotoNextDay = function(){

    }

    this.gotoLastDay = function(){

    }

    this.gotoDay = function(day){
    	this.currentActiveDay = day;
    }
 
  }

  angular.module('sis.controllers')
    .controller('SRMController',
    [ SRMController]);
})();
