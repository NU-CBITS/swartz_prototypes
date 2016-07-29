(function () {
  'use strict';

  function SettingManageableGoalsController($filter) {

  	this.panelVisible = [true,false,false];

    this.showPanel = function(panelIndex){
    	for(var i = 0; i < this.panelVisible.length; i++){
    			this.panelVisible[i] = false;
    	}
    	this.panelVisible[panelIndex] = true;
    }

    this.allGoalsAnswered = function(){
      return $filter('filter')(this.goals,{response:null}).length == 0;
    }

    this.goalResponses =[
    'Manageable (can be accomplished in 1-2 weeks)',
    'Probably Manageable (can be accomplished in 2-3 weeks)',	
    'Long-term (can be accomplished in 6 months- 1 year)',
    'Not for me (not applicable to me, not a priority for me)'

    ];

    this.goals = [
		{id:1,name:'Get up 30 minutes earlier than my current wake time',response:null},
		{id:2,name:'Get up at 7 am every day',response:null},
		{id:3, name:'Go to bed at the same time every night',response:null},
		{id:4, name:'Go to sleep 2 hours earlier than my current bed time',response:null},
		{id:5, name:'Get a pet to help me get up on time',response:null},
		{id:6, name:'Exercise regularly',response:null},
		{id:7, name:'Get a new job with regular hours',response:true},
		{id:8, name:'Get a job',response:null},
		{id:9, name:'Get a volunteer job',response:null},
		{id:10, name:'Make some new friends so I have somewhere to go during the day',response:null},
		{id:11, name:'Learn how to cook so I can make dinner for myself',response:null},
		{id:12, name:'Go back to school',response:null},
		{id:13, name:'Find a romantic partner',response:null},
		{id:14, name:'Get some roommates',response:null},
		{id:15, name:'Stop using my computer late at night',response:null},
		{id:16, name:'Cut back on social media use',response:null},
		{id:17, name:'Meet friends for coffee on Saturday morning',response:null},
		{id:18, name:'Get more involved with church so I have somewhere to go on Sundays',response:null},
		{id:19, name:'Join a gym',response:null},
		{id:20, name:'Get more organized about my life',response:null},
    {id:21, name:'Not for me',response:null}

    ];


  }

  angular.module('cbitsPrototype.controllers')
    .controller('SettingManageableGoalsController',
    ['$filter',SettingManageableGoalsController]);
})();
