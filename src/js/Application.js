/* Declare app level module which depends on filters, and services */
(function() {
  'use strict';

  var Application = {
    self: this,

    configure: function configure($routeProvider, Routes) {
      $routeProvider
        .when(Routes.ROOT, {
          templateUrl: 'partials/home.html',
          controller: 'HomeController',
          controllerAs: 'home'
        })
        .when(Routes.HOME, {
          templateUrl: 'partials/home.html',
          controller: 'HomeController',
          controllerAs: 'home'
        })
        .when(Routes.SESSIONS, {
          templateUrl: 'partials/session.html',
          controller: 'SessionsController',
          controllerAs: 'session'
        })
        .when(Routes.HISTORY, {
          templateUrl: 'partials/smoking_history.html',
          controller: 'SmokingHistoryController',
          controllerAs: 'smokingHistory'
        })
        .when(Routes.LESSONS_CURRENT, {
          templateUrl: 'partials/lessons_current.html',
          controller: 'LessonsCurrentController',
          controllerAs: 'lessonsCurrent'
        })
        .when(Routes.LESSONS_ARCHIVE, {
          templateUrl: 'partials/lessons_archive.html',
          controller: 'LessonsArchiveController',
          controllerAs: 'lessonsArchive'
        })
        .when(Routes.SRM, {
          templateUrl: 'partials/srm.html',
          controller: 'SRMController',
          controllerAs: 'srm'
        })
        .when(Routes.SRM_HISTORY, {
          templateUrl: 'partials/srm_history.html',
          controller: 'SRMHistoryController',
          controllerAs: 'srm_history'
        })
        .when(Routes.SRM_ABOUT, {
          templateUrl: 'partials/srm_about.html',
          controller: 'SRMAboutController',
          controllerAs: 'srm_about'
        })
        .when(Routes.SETTINGS, {  
          templateUrl: 'partials/settings.html',
          controller: 'SettingsController',
          controllerAs: 'settings'
        })
        .when(Routes.SETTINGS, {  
          templateUrl: 'partials/help.html',
          controller: 'HelpController',
          controllerAs: 'help'
        })
        
    },

    run: function run($rootScope, $location, $q, $window, 
                      Routes, sessionQuestionService, resourceCache,
                      sessionsService, sessionsCache,
                      sessionAnswerCache) {

      function configurationIncompleteRouting() {

          $location.url(Routes.HOME);
      }

      function determineRouteFromState() {
          $location.url(Routes.HOME);
      }

    }
  };

  angular.module('sis.constants', []);
  angular.module('sis.directives',
      ['sis.controllers', 'sis.services','sis.constants']);
  angular.module('sis.resources',
      ['ngResource', 'sis.services', 'sis.constants']);
  angular.module('sis.controllers',
      ['sis.directives','sis.constants', 'sis.resources', 'sis.services', 'ui.bootstrap']);
  angular.module('sis.services',
      ['sis.resources', 'sis.constants']);
  angular.module('sis',
      ['ngRoute', 'mobiscroll-datetime', 'sis.controllers',
        'sis.resources', 'sis.services', 'sis.constants'])
      .config(['$routeProvider', 'Routes', Application.configure])
      .run(['$rootScope', '$location', '$q', '$window',
        'Routes', 
        'sessionQuestionService','resourceCache', 'sessionsService', 
        'sessionsCache',
        'sessionAnswerCache', Application.run]);
})();
