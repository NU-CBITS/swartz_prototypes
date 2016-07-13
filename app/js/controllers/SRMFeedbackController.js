(function () {
  'use strict';

  function SRMFeedbackController($location, $sce) {

    this.pageTitles = new Array();
    this.srmDays = new Array();
    this.didactics = new Array();
    this.detailsVisible = [false];

    this.showDetails = function(index){
      this.detailsVisible[index] = true;
    }

    this.hideDetails = function(index){
      this.detailsVisible[index] = false;
    }

    this.srmWeeks = [
      {id:0, name:'This week (7/3 - 7/10)', score:22}
    ];
  
    this.srmDays[0] = [
    {dayName:'Sunday', getOutOfBed:'5:00 AM', firstContact:'7:00 AM', startWork:'9:00 AM', haveDinner:'8 PM', mood:4, energy:7, complete:true, accessible:true},
    {dayName:'Monday', getOutOfBed:'5:00 AM', firstContact:'7:00 AM', startWork:'9:00 AM', haveDinner:'8 PM', mood:4, energy:7, complete:true, accessible:true},
    {dayName:'Tuesday', getOutOfBed:'5:00 AM', firstContact:'7:00 AM', startWork:'9:00 AM', haveDinner:'8 PM', mood:4, energy:7, complete:true, accessible:true},
    {dayName:'Wednesday', getOutOfBed:'5:00 AM', firstContact:'7:00 AM', startWork:'9:00 AM', haveDinner:'8 PM', mood:4, energy:7, complete:true, accessible:true},
    {dayName:'Thursday', getOutOfBed:'5:00 AM', firstContact:'7:00 AM', startWork:'9:00 AM', haveDinner:'8 PM', mood:4, energy:7, complete:true, accessible:true},
    {dayName:'Friday', getOutOfBed:'5:00 AM', firstContact:'7:00 AM', startWork:'9:00 AM', haveDinner:'8 PM', mood:4, energy:7, complete:true, accessible:true},
    {dayName:'Saturday', getOutOfBed:'5:00 AM', firstContact:'7:00 AM', startWork:'9:00 AM', haveDinner:'8 PM', mood:4, energy:7, complete:true, accessible:true},
    ];

    this.pageTitles[0] = 'Your First SRM Score';
    this.pageTitles[1] = 'Explore Your SRM';

    this.didactics[0] = 'Let\'s fill this section with some excellent didactics about the SRM!';

    this.pageTitle = function(){
      return this.pageTitles[0]
    }
    this.currentDidactic = function(){
      return $sce.trustAsHtml(this.didactics[0])
    }
  
  }

  angular.module('cbitsPrototype.controllers')
    .controller('SRMFeedbackController',
    [ '$location', '$sce', SRMFeedbackController]);
})();
