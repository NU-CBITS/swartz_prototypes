/* Declare app level module which depends on filters, and services */
(function() {
  'use strict';

  var Application = {
    self: this,

    configure: function configure($routeProvider, Routes) {
      $routeProvider
        .when(Routes.INDEX, {
          templateUrl: 'partials/home.html',
          controller: 'HomeController',
          controllerAs: 'home',
          title:'Home'
        })
        .when(Routes.HOME, {
          templateUrl: 'partials/home.html',
          controller: 'HomeController',
          controllerAs: 'home',
          title:'Home'
        })
        .when(Routes.SESSIONS, {
          templateUrl: 'partials/session.html',
          controller: 'SessionsController',
          controllerAs: 'session',
          title:'Handbook'
        })
        .when(Routes.SESSIONS + '/:lessonId', {
          templateUrl: 'partials/session.html',
          controller: 'SessionsController',
          controllerAs: 'session',
          title:'Handbook'
        })
        .when(Routes.SESSIONS + '/:lessonId/:onEndURI', {
          templateUrl: 'partials/session.html',
          controller: 'SessionsController',
          controllerAs: 'session',
          title:'Handbook'
        })
        .when(Routes.HISTORY, {
          templateUrl: 'partials/history.html',
          controller: 'HistoryController',
          controllerAs: 'history',
          title:'History'
        })
        .when(Routes.LESSONS_CURRENT, {
          templateUrl: 'partials/lessons_current.html',
          controller: 'LessonsCurrentController',
          controllerAs: 'lessonsCurrent',
          title:'Current Lesson Plan'
        })
        .when(Routes.LESSONS_CURRENT+ '/:lessons_index', {
          templateUrl: 'partials/lessons_current.html',
          controller: 'LessonsCurrentController',
          controllerAs: 'lessonsCurrent',
          title:'Current Lesson Plan'
        })
        .when(Routes.LESSONS_ARCHIVE, {
          templateUrl: 'partials/lessons_archive.html',
          controller: 'LessonsArchiveController',
          controllerAs: 'lessonsArchive',
          title:'Lesson Archive'
        })
        .when(Routes.SRM, {
          templateUrl: 'partials/srm.html',
          controller: 'SRMController',
          controllerAs: 'srm',
          title:'Social Rhythm Metric'
        })
        .when(Routes.SRM_HISTORY, {
          templateUrl: 'partials/srm_history.html',
          controller: 'SRMHistoryController',
          controllerAs: 'srm_history',
          title:'History | Social Rhythm Metric'
        })
        .when(Routes.SRM_ABOUT, {
          templateUrl: 'partials/srm_about.html',
          controller: 'SRMAboutController',
          controllerAs: 'srm_about',
          title:'About the SRM'
        })
        .when(Routes.SETTINGS, {  
          templateUrl: 'partials/settings.html',
          controller: 'SettingsController',
          controllerAs: 'settings',
          title:'User Settings'
        })
        .when(Routes.ALIGNED_MISALIGNED_RHYTHMS, {  
          templateUrl: 'partials/aligned_misaligned_rhythms.html',
          controller: 'AlignedMisalignedRhythmsController',
          controllerAs: 'aligned_rhythms',
          title:'Aligned &amp; Misaligned Rhythms'
        })
        .when(Routes.REMEMBERING_A_WELL_PERIOD, {  
          templateUrl: 'partials/remembering_a_well_period.html',
          controller: 'RememberingAWellPeriodController',
          controllerAs: 'well_period',
          title:'Remembering a Well Period'
        })
        .when(Routes.HELP, {  
          templateUrl: 'partials/help.html',
          controller: 'HelpController',
          controllerAs: 'help',
          title:'Ask for Help'
        })
        .when(Routes.SRM_FEEDBACK, {  
          templateUrl: 'partials/srm_feedback.html',
          controller: 'SRMFeedbackController',
          controllerAs: 'srm_feedback',
          title:'Feedback | Social Rhythm Metric'
        })
        .when(Routes.BIPOLAR_DISORDER_CALCULATOR, {  
          templateUrl: 'partials/bipolar_disorder_calculator.html',
          controller: 'BipolarDisorderCalculatorController',
          controllerAs: 'bipolar_calculator',
          title:'Understanding Your Bipolar'
        })
        .when(Routes.MOOD_THERMOMETER, {  
          templateUrl: 'partials/mood_thermometer.html',
          controller: 'MoodThermometerController',
          controllerAs: 'thermometer',
          title:'Mood Thermometer'
        })
        .when(Routes.SRM_ANCHORS, {  
          templateUrl: 'partials/srm_anchors.html',
          controller: 'SRMAnchorsController',
          controllerAs: 'srm_anchors'
          title: 'Anchors | Social Rhythm Metric'
        })
        .when(Routes.SRM_GOAL_SETTING, {  
          templateUrl: 'partials/srm_goal_setting.html',
          controller: 'SRMGoalSettingController',
          controllerAs: 'srm_goal_setting',
          title:'Goal Setting'
        })
        .when(Routes.SRM_GOAL_SETTING + '/:goal_version', {  
          templateUrl: 'partials/srm_goal_setting.html',
          controller: 'SRMGoalSettingController',
          controllerAs: 'srm_goal_setting',
          title:'Goal Setting'
        })
        .when(Routes.LEARN_ABOUT_ANCHORS, {  
          templateUrl: 'partials/learn_about_anchors.html',
          controller: 'LearnAboutAnchorsController',
          controllerAs: 'learn_about_anchors',
          title:'Learn About Anchors'
        })
        .when(Routes.TOOLS, {  
          templateUrl: 'partials/tools.html',
          controller: 'ToolsController',
          controllerAs: 'tools',
          title:'Tools'
        })
        .when(Routes.HANDBOOKS, {  
          templateUrl: 'partials/handbooks.html',
          controller: 'HandbooksController',
          controllerAs: 'handbooks',
          title:'Handbooks'
        })
        .when(Routes.TIPS_ARCHIVE, {  
          templateUrl: 'partials/tips_archive.html',
          controller: 'TipsArchiveController',
          controllerAs: 'tips',
          title:'Tips Archive'
        })
        .when(Routes.SETTING_MANAGEABLE_GOALS, {  
          templateUrl: 'partials/setting_manageable_goals.html',
          controller: 'SettingManageableGoalsController',
          controllerAs: 'manageable',
          title:'Setting Manageable Goals'
        })
        .when(Routes.I_CANT_SLEEP_PLAN, {  
          templateUrl: 'partials/i_cant_sleep_plan.html',
          controller: 'ICantSleepPlanController',
          controllerAs: 'cant_sleep',
          title:'I Can\'t Sleep Plan'
        })
        .when(Routes.RULES_FOR_BETTER_SLEEP, {  
          templateUrl: 'partials/rules_for_better_sleep.html',
          controller: 'RulesForBetterSleepController',
          controllerAs: 'rules',
          title:'Rules for Better Sleep'
        })
        .when(Routes.GETTING_OUT_OF_BED_SEARCH, {  
          templateUrl: 'partials/handbooks.html',
          controller: 'GettingOutOfBedSearchController',
          controllerAs: 'bed',
          title:'Getting Out of Bed Search'
        })
        .when(Routes.TROUBLESHOOTING_ROUTINES, {  
          templateUrl: 'partials/troubleshooting_routines.html',
          controller: 'TroubleshootingRoutinesController',
          controllerAs: 'troubleshooting',
          title:'Troubleshooting Routines'
        })
        .when(Routes.ANTICIPATING_DISRUPTIONS, {  
          templateUrl: 'partials/handbooks.html',
          controller: 'AnticipatingDisruptionsController',
          controllerAs: 'anticipating',
          title:'Anticipating Disruptions'
        })
        .when(Routes.MY_SOCIAL_CHANGES, {  
          templateUrl: 'partials/my_social_changes.html',
          controller: 'MySocialChangesController',
          controllerAs: 'changes',
          title:'My Social Changes'
        })
        .when(Routes.I_STATEMENTS, {  
          templateUrl: 'partials/i_statements.html',
          controller: 'IStatementsController',
          controllerAs: 'i_statements',
          title:'I Statements'
        })
        .when(Routes.LETS_TALK, {  
          templateUrl: 'partials/lets_talk.html',
          controller: 'LetsTalkController',
          controllerAs: 'talk',
          title:'Let\'s Talk'
        })
        .when(Routes.DISAGREEMENTS, {  
          templateUrl: 'partials/disagreements.html',
          controller: 'DisagreementsController',
          controllerAs: 'disagreements',
          title:'Disagreements'
        })
        .when(Routes.REVIEWING_PROGRESS, {  
          templateUrl: 'partials/reviewing_progress.html',
          controller: 'ReviewingProgressController',
          controllerAs: 'progress',
          title:'Reviewing Progress'
        })
        .when(Routes.EARLY_WARNING_SIGNS, {  
          templateUrl: 'partials/handbooks.html',
          controller: 'EarlyWarningSignsController',
          controllerAs: 'ews',
          title:'Early Warning Signs'
        })
        .when(Routes.RELAPSE_PREVENTION_PLAN, {  
          templateUrl: 'partials/relapse_prevention_plan.html',
          controller: 'RelapsePreventionPlanController',
          controllerAs: 'relapse',
          title:'Relapse Prevention Plans'
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
