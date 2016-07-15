(function () {
  'use strict';

  function LessonsCurrentController($location, $routeParams, LessonPlans) {
    this.lessonPlan = LessonPlans;
    this.currentLessonPlan = $routeParams.lessons_index || 2;
    this.currentLessonCounter = this.currentLessonPlan + 1;
  }

  angular.module('cbitsPrototype.controllers')
    .controller('LessonsCurrentController',
    [ '$location','$routeParams','LessonPlans',LessonsCurrentController]);
})();
