(function() {
    'use strict';

    var LessonPlans = new Array();

    LessonPlans[0] = {
        name: 'Rhythms and You',
        description: 'This week is all about how RAY (Rhythms and You) works!',
        available: true,
        completed: true,
        modules: [{
            name: 'Welcome!',
            icon: 'book',
            type: 'handbook',
            available: true,
            target: '#/session/3',
            completed: true
        }, {
            name: 'Aligned and Misaligned Rhythms',
            icon: 'wrench',
            type: 'tool',
            available: true,
            target: '#/aligned_misaligned_rhythms'
        }, {
            name: 'Remembering a Well Period',
            icon: 'wrench',
            type: 'tool',
            available: true,
            target: '#/remembering_a_well_period'
        }, {
            name: 'Social Rhythm Metric',
            icon: 'bolt',
            type: 'srm',
            available: true,
            target: '#/srm'
        }]
    };

    LessonPlans[1] = {
        name: 'Rhythms and Blues',
        description: 'This week is all about Rhythms and Blues!',
        available: true,
        completed: false,
        modules: [{
            name: 'All About Rhythms and Blues',
            icon: 'book',
            type: 'handbook',
            available: true,
            target: '#/session/4'
        }, {
            name: 'Your First SRM Score!',
            icon: 'area-chart',
            type: 'srm',
            available: true,
            target: '#/srm_feedback'
        }, {
            name: 'The Bipolar Disorder Calculator',
            icon: 'wrench',
            type: 'tool',
            available: true,
            target: '#/bipolar_disorder_calculator'
        }, {
            name: 'Learn to Rate Your Moods On the Mood Thermometer',
            icon: 'wrench',
            type: 'tool',
            available: true,
            target: '#/mood_thermometer'
        }, {
            name: 'Social Rhythm Metric',
            icon: 'bolt',
            type: '',
            available: true,
            target: '#/srm'
        }]
    };

    LessonPlans[2] = {
        name: 'Finding the Beat',
        description: 'This week is all about Finding the Beat!',
        available: true,
        completed: false,
        modules: [{
            name: 'All About Finding the Beat',
            icon: 'book',
            type: 'handbook',
            available: true,
            target: '#/session/5'
        }, {
            name: 'Explore Your SRM',
            icon: 'area-chart',
            type: '',
            available: true,
            target: '#/srm_feedback'
        }, {
            name: 'Learn About Social Rhythm Anchors',
            icon: 'wrench',
            type: 'tool',
            available: true,
            target: '#/learn_about_anchors'
        }, {
            name: 'What are your Social Rhythm Anchors?',
            icon: 'wrench',
            type: 'tool',
            available: true,
            target: '#/srm_anchors'
        }, {
            name: 'Learn How to Set a Social Rhythm Goal',
            icon: 'bolt',
            type: 'srm',
            available: true,
            target: '#/srm_goal_setting/0'
        }, {
            name: 'Social Rhythm Metric',
            icon: 'bolt',
            type: 'srm',
            available: true,
            target: '#/srm'
        }]
    };

    LessonPlans[3] = {
        name: 'Bipolar and Physical Health',
        description: 'This week is all about how your physical health and bipolar are related!',
        available: true,
        modules: [{
            name: 'All About Bipolar and Physical Health',
            icon: 'book',
            type: 'handbook',
            available: true,
            completed: false,
            target: '#/session/6'
        }, {
            name: 'Explore Your SRM',
            icon: 'area-chart',
            type: 'srm',
            available: true,
            target: '#/srm_feedback'
        }, {
            name: 'Setting Manageable Goals',
            icon: 'wrench',
            type: 'tool',
            available: true,
            target: '#/setting_manageable_goals'
        }, {
            name: 'Set a New Social Rhythm Goal',
            icon: 'bolt',
            type: 'srm',
            available: true,
            target: '#/srm_goal_setting/1'
        }, {
            name: 'Social Rhythm Metric',
            icon: 'bolt',
            type: 'srm',
            available: true,
            target: '#/srm'
        }]
    };

    LessonPlans[4] = {
        name: 'Rhythms and Sleep',
        description: 'This week is all about Rhythms and Sleep!',
        available: true,
        completed: false,
        modules: [{
            name: 'All About Rhythms and Sleep',
            icon: 'book',
            type: 'handbook',
            available: true,
            target: '#/session/7'
        }, {
            name: 'Explore Your SRM!',
            icon: 'area-chart',
            type: 'srm',
            available: true,
            target: '#/srm_feedback'
        }, {
            name: 'Your "I Can\'t Sleep" Plan ',
            icon: 'wrench',
            type: 'tool',
            available: true,
            target: '#/i_cant_sleep_plan'
        }, {
            name: 'Set a New Social Rhythm Goal',
            icon: 'bolt',
            type: 'srm',
            available: true,
            target: '#/srm_goal_setting/2'
        }, {
            name: 'Social Rhythm Metric',
            icon: 'bolt',
            type: 'srm',
            available: true,
            target: '#/srm'
        }]
    };

    LessonPlans[5] = {
        name: 'Even Better Sleep',
        description: 'This week is all about getting even better sleep!',
        available: true,
        completed: false,
        modules: [{
            name: 'All About Even Better Sleep',
            icon: 'book',
            type: 'handbook',
            available: true,
            target: '#/session/8'
        }, {
            name: 'Explore Your SRM!',
            icon: 'area-chart',
            type: 'srm',
            available: true,
            target: '#/srm_feedback'
        }, {
            name: 'Rules for Better Sleep',
            icon: 'wrench',
            type: 'tool',
            available: true,
            target: '#/rules_for_better_sleep'
        }, {
            name: 'Getting Out of Bed Strategies',
            icon: 'wrench',
            type: 'tool',
            available: true,
            target: '#/getting_out_of_bed_search'
        }, {
            name: 'Set a New Social Rhythm Goal',
            icon: 'bolt',
            type: 'srm',
            available: true,
            target: '#/srm_goal_setting/3'
        }, {
            name: 'Social Rhythm Metric',
            icon: 'bolt',
            type: 'srm',
            available: true,
            target: '#/srm'
        }]
    };

    LessonPlans[6] = {
        name: 'Skipped Beats',
        description: 'This week is all about skipped beats!',
        available: true,
        completed: false,
        modules: [{
            name: 'All About Skipped Beats',
            icon: 'book',
            type: 'handbook',
            available: true,
            target: '#/session/9/'
        }, {
            name: 'Explore Your SRM!',
            icon: 'area-chart',
            type: 'srm',
            available: true,
            target: '#/srm_feedback'
        }, {
            name: 'Troubleshooting Disrupted Routines',
            icon: 'wrench',
            type: 'tool',
            available: true,
            target: '#/troubleshooting_routines'
        }, {
            name: 'Anticipating Upcoming Routine Disruptions',
            icon: 'wrench',
            type: 'tool',
            available: true,
            target: '#/anticipating_disruptions'
        }, {
            name: 'Set a New Social Rhythm Goal',
            icon: 'bolt',
            type: 'srm',
            available: true,
            target: '#/srm_goal_setting/4'
        }, {
            name: 'Social Rhythm Metric',
            icon: 'bolt',
            type: 'srm',
            available: true,
            target: '#/srm'
        }]
    };

    LessonPlans[7] = {
        name: 'Social Rhythms',
        description: 'This week is all about Social Rhythms!',
        available: true,
        completed: false,
        modules: [{
            name: 'All About Social Rhythms',
            icon: 'book',
            type: 'handbook',
            available: true,
            target: '#/session/10/'
        }, {
            name: 'SRM Feedback',
            icon: 'bolt',
            type: 'srm',
            available: true,
            target: '#/srm_feedback'
        }, {
            name: 'Setting a New Social Rhythm Goal',
            icon: 'wrench',
            type: 'tool',
            available: true,
            target: '#/srm_goal_setting/5'
        }, {
            name: 'My Social Changes',
            icon: 'wrench',
            type: 'tool',
            available: true,
            target: '#/my_social_changes'
        }]
    };

    LessonPlans[8] = {
        name: 'Let’s Talk',
        description: 'This week is all about learning to communicate!',
        available: true,
        completed: false,
        modules: [{
            name: 'All About Communication',
            icon: 'book',
            type: 'handbook',
            available: true,
            target: '#/session/11/'
        }, {
            name: 'SRM Feedback',
            icon: 'bolt',
            type: 'srm',
            available: true,
            target: '#/srm_feedback'
        }, {
            name: '“I” Statements Worksheet',
            icon: 'wrench',
            type: 'tool',
            available: true,
            target: '#/i_statements'
        }, {
            name: 'Let’s Talk Tool',
            icon: 'wrench',
            type: 'tool',
            available: true,
            target: '#/lets_talk'
        }]
    };
    
    LessonPlans[9] = {
        name: 'Relationships and Rhythms',
        description: 'This week we will learn about how your social rhythm and your relationships are related!',
        available: true,
        completed: false,
        modules: [{
            name: 'All About Relationships and Rhythms',
            icon: 'book',
            type: 'handbook',
            available: true,
            target: '#/session/12/'
        }, {
            name: 'SRM Feedback',
            icon: 'bolt',
            type: 'srm',
            available: true,
            target: '#/srm_feedback'
        }, {
            name: 'Setting a New Goal',
            icon: 'wrench',
            type: 'tool',
            available: true,
            target: '#/srm_goal_setting/6'
        }, {
            name: 'Disagreements Exercise',
            icon: 'wrench',
            type: 'tool',
            available: true,
            target: '#/disagreements'
        }]
    };

    LessonPlans[10] = {
        name: 'Timing Tomorrow',
        description: 'This week is all about how to time... tomorrow!',
        available: true,
        completed: false,
        modules: [{
            name: 'All About Timing Tomorrow',
            icon: 'book',
            type: 'handbook',
            available: true,
            target: '#/session/13/'
        }, {
            name: 'SRM Goal Setting for Tomorrow',
            icon: 'wrench',
            type: 'tool',
            available: true,
            target: '#/srm_goal_setting/6'
        }, {
            name: 'Reviewing Progress',
            icon: 'wrench',
            type: 'tool',
            available: true,
            target: '#/reviewing_progress'
        }]
    };

    LessonPlans[11] = {
        name: 'Staying in Rhythm',
        description: 'This week is all about staying in rhythm!',
        available: true,
        completed: false,
        modules: [{
            name: 'All About Staying in Rhythm',
            icon: 'book',
            type: 'handbook',
            available: true,
            target: '#/session/14/'
        }, {
            name: 'My Early Warning Signs',
            icon: 'wrench',
            type: 'tool',
            available: true,
            target: '#/early_warning_signs'
        }, {
            name: 'My Relapse Prevention Plan',
            icon: 'wrench',
            type: 'tool',
            available: true,
            target: '#/relapse_prevention_plan'
        }]
    };

    angular.module('cbitsPrototype.constants')
        .constant('LessonPlans', LessonPlans);
})();