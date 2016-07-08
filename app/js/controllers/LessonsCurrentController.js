(function () {
  'use strict';

  function LessonsCurrentController($location, $routeParams) {

    this.lessonPlan = new Array();

    this.currentLessonPlan = $routeParams.lesson_index || 0;

    this.lessonPlan[0] = {
    name:"Rhythms and You", description:"This week is all about how RAY (Rhythms and You) works!", modules:[
     {name:'Rhythms and You (RAY)',icon:'book',type:'',available:true, target:'#/session/0', completed:true},
     {name:'Aligned and Misaligned Rhythms',icon:'wrench',type:'',available:true, target:"#/aligned_misaligned_rhythms"},
	   {name:'Remembering a Well Period',icon:'wrench',type:'',available:true, target:"#/remembering_a_well_period"},
	   {name:'Social Rhythm Metric',icon:'bolt',type:'',available:true, target:"#/srm"}
     ]
    };

    this.lessonPlan[1] = {
    name:"Rhythms and Blues", description:"This week is all about Rhythms and Blues!", modules:[
     {name:'All about Rhythms and Blues',icon:'book',type:'',available:true, target:'#/session/1'},
     {name:'Your First SRM Score!',icon:'area-chart',type:'',available:true, target:'#/srm_feedback'},
     {name:'The Bipolar Disorder Calculator',icon:'wrench',type:'',available:true, target:"#/bipolar_disorder_calculator"},
     {name:'Learn to Rate your Moods the Mood Thermometer',icon:'wrench',type:'',available:true, target:"#/mood_thermometer"},
     {name:'Social Rhythm Metric',icon:'bolt',type:'',available:true, target:"#/srm"}
     ]
    };

    this.goToLesson = function (lessonNumber){
    }
  
  }

  angular.module('sis.controllers')
    .controller('LessonsCurrentController',
    [ '$location','$routeParams',LessonsCurrentController]);
})();
