(function () {
  'use strict';

  function LessonsCurrentController($location, $routeParams) {

    this.lessonPlan = new Array();

    this.currentLessonPlan = $routeParams.lessons_index || 0;

    this.lessonPlan[0] = {
    name:"Rhythms and You", description:"This week is all about how RAY (Rhythms and You) works!", modules:[
     {name:'Rhythms and You (RAY)',icon:'book',type:'',available:true, target:'#/session/3', completed:true},
     {name:'Aligned and Misaligned Rhythms',icon:'wrench',type:'',available:true, target:"#/aligned_misaligned_rhythms"},
	 {name:'Remembering a Well Period',icon:'wrench',type:'',available:true, target:"#/remembering_a_well_period"},
	 {name:'Social Rhythm Metric',icon:'bolt',type:'',available:true, target:"#/srm"}
     ]
    };

    this.lessonPlan[1] = {
    name:"Rhythms and Blues", description:"This week is all about Rhythms and Blues!", modules:[
     {name:'All about Rhythms and Blues',icon:'book',type:'',available:true, target:'#/session/4'},
     {name:'Your First SRM Score!',icon:'area-chart',type:'',available:true, target:'#/srm_feedback'},
     {name:'The Bipolar Disorder Calculator',icon:'wrench',type:'',available:true, target:"#/bipolar_disorder_calculator"},
     {name:'Learn to Rate your Moods the Mood Thermometer',icon:'wrench',type:'',available:true, target:"#/mood_thermometer"},
     {name:'Social Rhythm Metric',icon:'bolt',type:'',available:true, target:"#/srm"}
     ]
    };

    this.lessonPlan[2] = {
    name:"Finding the Beat", description:"This week is all about Finding the Beat!", modules:[
     {name:'All About Rhythms and Blues',icon:'book',type:'',available:true, target:'#/session/5'},
     {name:'Explore Your SRM',icon:'area-chart',type:'',available:true, target:'#/srm_feedback'},
     {name:'What are your Social Rhythm Anchors?',icon:'wrench',type:'',available:true, target:"#/srm_anchors"},
     {name:'Learn How to Set a Social Rhythm Goal',icon:'bolt',type:'',available:true, target:"#/srm_goal"},
     {name:'Social Rhythm Metric',icon:'bolt',type:'',available:true, target:"#/srm"}
     ]
    };

    this.lessonPlan[3] = {
    name:"Bipolar and Physical Health", description:"This week is all about how your physical health and bipolar are related!", modules:[
     {name:'All About Bipolar and Physical Health',icon:'book',type:'',available:true, target:'#/session/6'},
     {name:'Explore Your SRM',icon:'area-chart',type:'',available:true, target:'#/srm_feedback'},
     {name:'Setting Manageable Goals',icon:'wrench',type:'',available:true, target:"#/setting_manageable_goals"},
     {name:'Set a New Social Rhythm Goal',icon:'bolt',type:'',available:true, target:"#/srm_goal"},
     {name:'Social Rhythm Metric',icon:'bolt',type:'',available:true, target:"#/srm"}
     ]
    };

    this.lessonPlan[4] = {
    name:"Rhythms and Sleep", description:"This week is all about Rhythms and Sleep!", modules:[
     {name:'All About Rhythms and Sleep',icon:'book',type:'',available:true, target:'#/session/7'},
     {name:'Explore Your SRM!',icon:'area-chart',type:'',available:true, target:'#/srm_feedback'},
     {name:'Your "I Can\'t Sleep" Plan ',icon:'wrench',type:'',available:true, target:"#/i_cant_sleep_plan"},
     {name:'Set a New Social Rhythm Goal',icon:'bolt',type:'',available:true, target:"#/srm_goal"},
     {name:'Social Rhythm Metric',icon:'bolt',type:'',available:true, target:"#/srm"}
     ]
    };

    this.lessonPlan[5] = {
    name:"Even Better Sleep", description:"This week is all about getting even better sleep!", modules:[
     {name:'All About Even Better Sleep',icon:'book',type:'',available:true, target:'#/session/8'},
     {name:'Explore Your SRM!',icon:'area-chart',type:'',available:true, target:'#/srm_feedback'},
     {name:'Rules for Better Sleep',icon:'wrench',type:'',available:true, target:"#/i_cant_sleep_plan"},
     {name:'Getting Out of Bed Search',icon:'wrench',type:'',available:true, target:"#/getting_out_of_bed_search"},
     {name:'Set a New Social Rhythm Goal',icon:'bolt',type:'',available:true, target:"#/srm_goal"},
     {name:'Social Rhythm Metric',icon:'bolt',type:'',available:true, target:"#/srm"}
     ]
    };

    this.lessonPlan[6] = {
    name:"Skipped Beats", description:"This week is all about skipped beats!", modules:[
     {name:'All About Skipped Beats',icon:'book',type:'',available:true, target:'#/session/9/'},
     {name:'Explore Your SRM!',icon:'area-chart',type:'',available:true, target:'#/srm_feedback'},
     {name:'Troubleshooting Disrupted Routines',icon:'wrench',type:'',available:true, target:"#/i_cant_sleep_plan"},
     {name:'Anticipating Upcoming Routine Disruptions',icon:'wrench',type:'',available:true, target:"#/getting_out_of_bed_search"},
     {name:'Set a New Social Rhythm Goal',icon:'bolt',type:'',available:true, target:"#/srm_goal"},
     {name:'Social Rhythm Metric',icon:'bolt',type:'',available:true, target:"#/srm"}
     ]
    };
  
  }

  angular.module('sis.controllers')
    .controller('LessonsCurrentController',
    [ '$location','$routeParams',LessonsCurrentController]);
})();
