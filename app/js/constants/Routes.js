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
    REMEMBERING_A_WELL_PERIOD : '/remembering_a_well_period',
    HISTORY: '/history',
    SRM_FEEDBACK: '/srm_feedback',
    BIPOLAR_DISORDER_CALCULATOR: '/bipolar_disorder_calculator',
    MOOD_THERMOMETER: '/mood_thermometer',
    SRM_ANCHORS: '/srm_anchors',
    SRM_GOAL_SETTING: '/srm_goal_setting',
    HELP: '/help',
    LEARN_ABOUT_ANCHORS: '/learn_about_anchors',
    TOOLS: '/tools',
    HANDBOOKS: '/handbooks',
    TIPS_ARCHIVE: '/tips_archive',
    SETTING_MANAGEABLE_GOALS: '/setting_manageable_goals',
    I_CANT_SLEEP_PLAN: '/i_cant_sleep_plan',
    RULES_FOR_BETTER_SLEEP: '/rules_for_better_sleep',
    GETTING_OUT_OF_BED_SEARCH: '/getting_out_of_bed_search',
    TROUBLESHOOTING_ROUTINES: '/troubleshooting_routines',
    ANTICIPATING_DISRUPTIONS: '/anticipating_disruptions',
    MY_SOCIAL_CHANGES: '/my_social_changes',
    I_STATEMENTS: '/i_statements',
    LETS_TALK: '/lets_talk',
    DISAGREEMENTS: '/disagreements',
    REVIEWING_PROGRESS: '/reviewing_progress',
    EARLY_WARNING_SIGNS: '/early_warning_signs',
    RELAPSE_PREVENTION_PLAN: '/relapse_prevention_plan'
  };

  angular.module('cbitsPrototype.constants')
         .constant('Routes', Routes);
})();
