(function () {
  'use strict';

  function LessonsCurrentController($location, $routeParams, LessonPlans) {
    this.lessonPlan = LessonPlans;
    this.currentLessonPlan = $routeParams.lessons_index || 0;
  }

  angular.module('cbitsPrototype.controllers')
    .controller('LessonsCurrentController',
    [ '$location','$routeParams','LessonPlans',LessonsCurrentController]);
})();
