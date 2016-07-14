(function() {
  'use strict';

  var SRMGoalSetting = {
  	Goals: [],
  	Stages: []
  }

  SRMGoalSetting.Stages[0] = {
  	id:0,
  	title:'Your First Goal',
  	keyword:'first_goal',
  	preamble:'Setting and meeting SRM goals can help you improve your social rhythms and your mood.',
  	instructions:'Select one of the following SRM goals. Pick something that you would like to work on and yet doesn’t seem too overwhelming.',
  	description:'This week you will set one short term SRM goal.  The idea is to pick a goal that you think you might be able to accomplish by the end of the week. Don’t pick something too ambitious.',
  	tip:'Each goal will come with a list of tips and suggestions to help you reach your goal this week.',
  	goalSuccessHTML:{
  		success:'',
      failure:''
  	}
  }
 
  SRMGoalSetting.Stages[1] = {
  	id:1,
  	title:'Setting a New Goal',
  	keyword:'second_goal',
  	preamble:'Setting and meeting SRM goals can help you improve your social rhythms and your mood.',
  	instructions:'Select one of the following SRM goals. Pick something that you would like to work on and yet doesn’t seem too overwhelming.',
  	description:'This week you will set one short term SRM goal.  The idea is to pick a goal that you think you might be able to accomplish by the end of the week. Don’t pick something too ambitious.',
  	tip:'Each goal will come with a list of tips and suggestions to help you reach your goal this week.',
    goalSuccessHTML:{
      success:'<h3>Great!</h3> You now can set your next SRM goal.  This next goal should be based on your SRMs.  Is there an area where you are having difficulty?  Select a goal that will help you achieve more regular SRMs. This week you will have the option of picking an exercise goal because exercise is also important to your rhythms and health.',
      failure:'<h3>That\'s OK!</h3> Many people do not meet their SRM goals on their first try.  Sometimes it takes additional attempts to reach your goal.  You will learn additional skills as you continue to work on RAY that will help you accomplish your goals.  We also have some additional tips for you to work on this week.'
    }
  }

    SRMGoalSetting.Stages[2] = {
  	id:2,
  	title:'Sett',
  	keyword:'Set a New Goal',
  	preamble:'Setting and meeting SRM goals can help you improve your social rhythms and your mood.',
  	instructions:'Select one of the following SRM goals. Pick something that you would like to work on and yet doesn’t seem too overwhelming.',
  	description:'This week you will set one short term SRM goal.  The idea is to pick a goal that you think you might be able to accomplish by the end of the week. Don’t pick something too ambitious.',
  	tip:'Each goal will come with a list of tips and suggestions to help you reach your goal this week.',
  	goalSuccessHTML:{
  		success:'',
  		failure:''
  	}
  }

    SRMGoalSetting.Stages[3] = {
  	id:3,
  	title:'Set a New Goal',
  	keyword:'fourth_goal',
  	preamble:'Setting and meeting SRM goals can help you improve your social rhythms and your mood.',
  	instructions:'Select one of the following SRM goals. Pick something that you would like to work on and yet doesn’t seem too overwhelming.',
  	description:'This week you will set one short term SRM goal.  The idea is to pick a goal that you think you might be able to accomplish by the end of the week. Don’t pick something too ambitious.',
  	tip:'Each goal will come with a list of tips and suggestions to help you reach your goal this week.',
  	goalSuccessHTML:{
  		success:'',
  		failure:''
  	}
  }

    SRMGoalSetting.Stages[4] = {
  	id:4,
  	title:'Set a New Goal',
  	keyword:'fifth_goal',
  	preamble:'Setting and meeting SRM goals can help you improve your social rhythms and your mood.',
  	instructions:'Select one of the following SRM goals. Pick something that you would like to work on and yet doesn’t seem too overwhelming.',
  	description:'This week you will set one short term SRM goal.  The idea is to pick a goal that you think you might be able to accomplish by the end of the week. Don’t pick something too ambitious.',
  	tip:'Each goal will come with a list of tips and suggestions to help you reach your goal this week.',
  	goalSuccessHTML:{
  		success:'',
  		failure:''
  	}
  }

  SRMGoalSetting.Stages[5] = {
  	id:5,
  	title:'Set a New Goal',
  	keyword:'sixth_goal',
  	preambleHTML:'Setting and meeting SRM goals can help you improve your social rhythms and your mood.',
  	instructions:'Select one of the following SRM goals. Pick something that you would like to work on and yet doesn’t seem too overwhelming.',
  	description:'This week you will set one short term SRM goal.  The idea is to pick a goal that you think you might be able to accomplish by the end of the week. Don’t pick something too ambitious.',
  	tip:'Each goal will come with a list of tips and suggestions to help you reach your goal this week.',
  	goalSuccessHTML:{
  		success:'',
  		failure:''
  	}
  }

  SRMGoalSetting.Stages[6] = {
  	id:6,
  	title:'Set a New Goal',
  	keyword:'seventh_goal',
  	preambleHTML:'Setting and meeting SRM goals can help you improve your social rhythms and your mood.',
  	instructions:'Select one of the following SRM goals. Pick something that you would like to work on and yet doesn’t seem too overwhelming.',
  	description:'This week you will set one short term SRM goal.  The idea is to pick a goal that you think you might be able to accomplish by the end of the week. Don’t pick something too ambitious.',
  	tip:'Each goal will come with a list of tips and suggestions to help you reach your goal this week.',
  	goalSuccessHTML:{
  		success:'',
  		failure:''
  	}
  }

  SRMGoalSetting.Goals[0] = {
  	title:'Get up at the same time every day.',
  	availability:[],
  	tags:[],
  	strategiesHTML:[]
  }

  SRMGoalSetting.Goals[1] = {
  	title:'Start an activity at the same time every day.',
  	availability:'',
  	tags:[],
  	strategiesHTML:[]
  }

  SRMGoalSetting.Goals[2] = {
  	title:'Start an activity at the same time every day.',
  	availability:'',
  	tags:[],
  	strategiesHTML:[]
  }

  SRMGoalSetting.Goals[3] = {
  	title:'Start an activity at the same time every day.',
  	availability:'',
  	tags:[],
  	strategiesHTML:[]
  }

  SRMGoalSetting.Goals[4] = {
  	title:'Start an activity at the same time every day.',
  	availability:'',
  	tags:[],
  	strategiesHTML:[]
  }

  angular.module('cbitsPrototype.constants')
         .constant('SRMGoalsContent', SRMGoalSetting);
})();
