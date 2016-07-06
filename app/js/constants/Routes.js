(function() {
  'use strict';

  var Routes = {
    ROOT: '/',
    HOME: '/home',
    SESSIONS: '/session',
    LESSONS_CURRENT: '/lessons_current',
    LESSONS_ARCHIVE: '/lessons_archive',
    SRM: '/srm',
    SRM_HISTORY: '/srm_history',
    SETTINGS: '/settings',
    SRM_ABOUT: '/srm_about',
    ALIGNED_MISALIGNED_RHYTHMS : '/aligned_misaligned_rhythms',
    REMEMBERING_A_WELL_PERIOD : '/remembering_a_well_period'
  };

  angular.module('sis.constants')
         .constant('Routes', Routes);
})();
