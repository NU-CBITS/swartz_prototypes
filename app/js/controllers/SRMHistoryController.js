(function () {
  'use strict';

  function SRMHistoryController() {

    this.pageTitle = 'Your SRM History';
    this.srmDays = new Array();
    this.detailsVisible = [false,false];

    this.showDetails = function(index){
      this.detailsVisible[index] = true;
    }

    this.hideDetails = function(index){
      this.detailsVisible[index] = false;
    }

    this.srmWeeks = [
      {id:0, name:'This week (7/3 - 7/10)', score:22},
      {id:1, name:'Last week (6/26 - 7/2)', score:15}
    ]
  
    this.srmDays[0] = [
    {dayName:'Sunday', getOutOfBed:'5:00 AM', firstContact:'7:00 AM', startWork:'9:00 AM', haveDinner:'8 PM', mood:4, energy:7, complete:true, accessible:true},
		{dayName:'Monday', getOutOfBed:'5:00 AM', firstContact:'7:00 AM', startWork:'9:00 AM', haveDinner:'8 PM', mood:4, energy:7, complete:true, accessible:true},
		{dayName:'Tuesday', getOutOfBed:'5:00 AM', firstContact:'7:00 AM', startWork:'9:00 AM', haveDinner:'8 PM', mood:4, energy:7, complete:true, accessible:true},
		{dayName:'Wednesday', getOutOfBed:'5:00 AM', firstContact:'7:00 AM', startWork:'9:00 AM', haveDinner:'8 PM', mood:4, energy:7, complete:true, accessible:true},
		{dayName:'Thursday', getOutOfBed:'5:00 AM', firstContact:'7:00 AM', startWork:'9:00 AM', haveDinner:'8 PM', mood:4, energy:7, complete:true, accessible:true},
		{dayName:'Friday', getOutOfBed:'5:00 AM', firstContact:'7:00 AM', startWork:'9:00 AM', haveDinner:'8 PM', mood:4, energy:7, complete:true, accessible:true},
		{dayName:'Saturday', getOutOfBed:'5:00 AM', firstContact:'7:00 AM', startWork:'9:00 AM', haveDinner:'8 PM', mood:4, energy:7, complete:true, accessible:true},
	  ];

    this.srmDays[1] = [
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
    .controller('SRMHistoryController',
    [ SRMHistoryController]);
})();
