(function () {
  'use strict';

  function LessonsArchiveController($location) {

    this.lessons = [
    {name:'Rhythms and You (RAY)',available:true},
    {name:'Rhythms and Blues',available:true},
    {name:'Finding the Beat',available:true},
    {name:'Bipolar and Physical Health',available:false},
    {name:'Rhythms and Sleep',available:false},
    {name:'Even Better Sleep',available:false},
    {name:'Skipped Beats',available:false},
    {name:'Social Rhythms',available:false},
    {name:'Let’s Talk',available:false},
    {name:'Relationships and Rhythms',available:false},
    {name:'Timing Tomorrow',available:false},
    {name:'Staying in Rhythm',available:false}
    ];

    this.goToLesson = function (lessonNumber){

      $location.path('/lessons_current');
    }
  
  }

  angular.module('sis.controllers')
    .controller('LessonsArchiveController',
    [ '$location',LessonsArchiveController]);
})();
