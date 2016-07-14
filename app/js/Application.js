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
        .when(Routes.SESSIONS + '/:lessonId', {
          templateUrl: 'partials/session.html',
          controller: 'SessionsController',
          controllerAs: 'session'
        })
        .when(Routes.SESSIONS + '/:lessonId/:onEndURI', {
          templateUrl: 'partials/session.html',
          controller: 'SessionsController',
          controllerAs: 'session'
        })
        .when(Routes.HISTORY, {
          templateUrl: 'partials/history.html',
          controller: 'HistoryController',
          controllerAs: 'history'
        })
        .when(Routes.LESSONS_CURRENT, {
          templateUrl: 'partials/lessons_current.html',
          controller: 'LessonsCurrentController',
          controllerAs: 'lessonsCurrent'
        })
        .when(Routes.LESSONS_CURRENT+ '/:lessons_index', {
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
        .when(Routes.ALIGNED_MISALIGNED_RHYTHMS, {  
          templateUrl: 'partials/aligned_misaligned_rhythms.html',
          controller: 'AlignedMisalignedRhythmsController',
          controllerAs: 'aligned_rhythms'
        })
        .when(Routes.REMEMBERING_A_WELL_PERIOD, {  
          templateUrl: 'partials/remembering_a_well_period.html',
          controller: 'RememberingAWellPeriodController',
          controllerAs: 'well_period'
        })
        .when(Routes.HELP, {  
          templateUrl: 'partials/help.html',
          controller: 'HelpController',
          controllerAs: 'help'
        })
        .when(Routes.SRM_FEEDBACK, {  
          templateUrl: 'partials/srm_feedback.html',
          controller: 'SRMFeedbackController',
          controllerAs: 'srm_feedback'
        })
        .when(Routes.BIPOLAR_DISORDER_CALCULATOR, {  
          templateUrl: 'partials/bipolar_disorder_calculator.html',
          controller: 'BipolarDisorderCalculatorController',
          controllerAs: 'bipolar_calculator'
        })
        .when(Routes.MOOD_THERMOMETER, {  
          templateUrl: 'partials/mood_thermometer.html',
          controller: 'MoodThermometerController',
          controllerAs: 'thermometer'
        })
        .when(Routes.SRM_ANCHORS, {  
          templateUrl: 'partials/srm_anchors.html',
          controller: 'SRMAnchorsController',
          controllerAs: 'srm_anchors'
        })
        .when(Routes.SRM_GOAL_SETTING, {  
          templateUrl: 'partials/srm_goal_setting.html',
          controller: 'SRMGoalSettingController',
          controllerAs: 'srm_goal_setting'
        })
        .when(Routes.SRM_GOAL_SETTING + '/:goal_version', {  
          templateUrl: 'partials/srm_goal_setting.html',
          controller: 'SRMGoalSettingController',
          controllerAs: 'srm_goal_setting'
        })
        .when(Routes.LEARN_ABOUT_ANCHORS, {  
          templateUrl: 'partials/learn_about_anchors.html',
          controller: 'LearnAboutAnchorsController',
          controllerAs: 'learn_about_anchors'
        })
        .when(Routes.TOOLS, {  
          templateUrl: 'partials/tools.html',
          controller: 'ToolsController',
          controllerAs: 'tools'
        })
        .when(Routes.HANDBOOKS, {  
          templateUrl: 'partials/handbooks.html',
          controller: 'HandbooksController',
          controllerAs: 'handbooks'
        })
        .when(Routes.TIPS_ARCHIVE, {  
          templateUrl: 'partials/tips_archive.html',
          controller: 'TipsArchiveController',
          controllerAs: 'tips'
        })
        .when(Routes.SETTING_MANAGEABLE_GOALS, {  
          templateUrl: 'partials/setting_manageable_goals.html',
          controller: 'SettingManageableGoalsController',
          controllerAs: 'manageable'
        })
        .when(Routes.I_CANT_SLEEP_PLAN, {  
          templateUrl: 'partials/i_cant_sleep_plan.html',
          controller: 'ICantSleepPlanController',
          controllerAs: 'cant_sleep'
        })
        .when(Routes.RULES_FOR_BETTER_SLEEP, {  
          templateUrl: 'partials/rules_for_better_sleep.html',
          controller: 'RulesForBetterSleepController',
          controllerAs: 'rules'
        })
        .when(Routes.GETTING_OUT_OF_BED_SEARCH, {  
          templateUrl: 'partials/handbooks.html',
          controller: 'GettingOutOfBedSearchController',
          controllerAs: 'bed'
        })
        .when(Routes.TROUBLESHOOTING_ROUTINES, {  
          templateUrl: 'partials/troubleshooting_routines.html',
          controller: 'TroubleshootingRoutinesController',
          controllerAs: 'troubleshooting'
        })
        .when(Routes.ANTICIPATING_DISRUPTIONS, {  
          templateUrl: 'partials/handbooks.html',
          controller: 'AnticipatingDisruptionsController',
          controllerAs: 'anticipating'
        })
        .when(Routes.MY_SOCIAL_CHANGES, {  
          templateUrl: 'partials/my_social_changes.html',
          controller: 'MySocialChangesController',
          controllerAs: 'changes'
        })
        .when(Routes.I_STATEMENTS, {  
          templateUrl: 'partials/i_statements.html',
          controller: 'IStatementsController',
          controllerAs: 'i_statements'
        })
        .when(Routes.LETS_TALK, {  
          templateUrl: 'partials/lets_talk.html',
          controller: 'LetsTalkController',
          controllerAs: 'talk'
        })
        .when(Routes.DISAGREEMENTS, {  
          templateUrl: 'partials/disagreements.html',
          controller: 'DisagreementsController',
          controllerAs: 'disagreements'
        })
        .when(Routes.REVIEWING_PROGRESS, {  
          templateUrl: 'partials/reviewing_progress.html',
          controller: 'ReviewingProgressController',
          controllerAs: 'progress'
        })
        .when(Routes.EARLY_WARNING_SIGNS, {  
          templateUrl: 'partials/handbooks.html',
          controller: 'EarlyWarningSignsController',
          controllerAs: 'ews'
        })
        .when(Routes.RELAPSE_PREVENTION_PLAN, {  
          templateUrl: 'partials/relapse_prevention_plan.html',
          controller: 'RelapsePreventionPlanController',
          controllerAs: 'relapse'
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

  angular.module('cbitsPrototype.constants', []);
  angular.module('cbitsPrototype.directives',
      ['cbitsPrototype.controllers', 'cbitsPrototype.services','cbitsPrototype.constants']);
  angular.module('cbitsPrototype.resources',
      ['ngResource', 'cbitsPrototype.services', 'cbitsPrototype.constants']);
  angular.module('cbitsPrototype.controllers',
      ['cbitsPrototype.directives','cbitsPrototype.constants', 'cbitsPrototype.resources', 'cbitsPrototype.services', 'ui.bootstrap']);
  angular.module('cbitsPrototype.services',
      ['cbitsPrototype.resources', 'cbitsPrototype.constants']);
  angular.module('cbitsPrototype-app',
      ['ngRoute', 'mobiscroll-datetime', 'cbitsPrototype.controllers',
        'cbitsPrototype.resources', 'cbitsPrototype.services', 'cbitsPrototype.constants'])
      .config(['$routeProvider', 'Routes', Application.configure])
      .run(['$rootScope', '$location', '$q', '$window',
        'Routes', 
        'contentService','resourceCache', 'sessionsService', 
        'sessionsCache',
        'sessionAnswerCache', Application.run]);
})();
