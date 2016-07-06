(function () {
  'use strict';

  function AlignedMisalignedRhythmsController($location) {

    this.lessonPlan = {
    name:"Rhythms and You", description:"", modules:[
     {name:'Rhythms and You (RAY)',icon:'book',type:'',available:true, target:'#/session'},
     {name:'Aligned and Misaligned Rhythms',icon:'tool',type:'',available:true, target:"#/aligned_misaligned_rhythms"},
	   {name:'Remembering a Well Period',icon:'tool',type:'',available:true, target:"#/remembering_a_well_period"},
	   {name:'Social Rhythm Metric',icon:'bolt',type:'',available:true, target:"#/srm"}
     ]
    };

    this.goToLesson = function (lessonNumber){
    }
  
  }

  angular.module('sis.controllers')
    .controller('AlignedMisalignedRhythmsController',
    [ '$location',AlignedMisalignedRhythmsController]);
})();
