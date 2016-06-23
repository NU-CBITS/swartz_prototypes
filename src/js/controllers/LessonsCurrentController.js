(function () {
  'use strict';

  function LessonsCurrentController($location) {

    this.lessons = [
    {name:'Rhythms and You (RAY)',icon:'book',type:'',available:true},
    {name:'Aligned and Misaligned Rhythms',icon:'',type:'',available:true},
	{name:'Remembering a Well Period',icon:'',type:'',available:true},
	{name:'Social Rhythm Metric',icon:'bolt',type:'',available:true},
    ];

    this.goToLesson = function (lessonNumber){
      $location.path('/session');
    }
  
  }

  angular.module('sis.controllers')
    .controller('LessonsCurrentController',
    [ '$location',LessonsCurrentController]);
})();
