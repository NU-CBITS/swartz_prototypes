(function () {
  'use strict';

  function SRMFeedbackController($location) {

  	this.srmDays[0] = [
    	{dayName:'Sunday', getOutOfBed:'5:00 AM', firstContact:'7:00 AM', startWork:'9:00 AM', haveDinner:'8 PM', mood:4, energy:7, complete:true, accessible:true},
		{dayName:'Monday', getOutOfBed:'5:00 AM', firstContact:'7:00 AM', startWork:'9:00 AM', haveDinner:'8 PM', mood:4, energy:7, complete:true, accessible:true},
		{dayName:'Tuesday', getOutOfBed:'5:00 AM', firstContact:'7:00 AM', startWork:'9:00 AM', haveDinner:'8 PM', mood:4, energy:7, complete:true, accessible:true},
		{dayName:'Wednesday', getOutOfBed:'5:00 AM', firstContact:'7:00 AM', startWork:'9:00 AM', haveDinner:'8 PM', mood:4, energy:7, complete:true, accessible:true},
		{dayName:'Thursday', getOutOfBed:'5:00 AM', firstContact:'7:00 AM', startWork:'9:00 AM', haveDinner:'8 PM', mood:4, energy:7, complete:true, accessible:true},
		{dayName:'Friday', getOutOfBed:'5:00 AM', firstContact:'7:00 AM', startWork:'9:00 AM', haveDinner:'8 PM', mood:4, energy:7, complete:true, accessible:true},
		{dayName:'Saturday', getOutOfBed:'5:00 AM', firstContact:'7:00 AM', startWork:'9:00 AM', haveDinner:'8 PM', mood:4, energy:7, complete:true, accessible:true},
	];
  
  }

  angular.module('sis.controllers')
    .controller('SRMFeedbackController',
    [ '$location',SRMFeedbackController]);
})();
