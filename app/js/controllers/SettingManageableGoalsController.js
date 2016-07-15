(function () {
  'use strict';

  function SettingManageableGoalsController() {

  	this.panelVisible = [true,false,false];

    this.showPanel = function(panelIndex){
    	for(var i = 0; i < this.panelVisible.length; i++){
    			this.panelVisible[i] = false;
    	}
    	this.panelVisible[panelIndex] = true;
    }

    this.goalResponses =[
    'Manageable (can be accomplished in 1-2 weeks)',
    'Probably Manageable (can be accomplished in 2-3 weeks)',	
    'Not for me (unrealistic for me;  probably not possible in the short term or long term; not applicable to me)',	
    'Long-term (can be accomplished in 6 months- 1 year)'
    ];

    this.goals = [
		{name:'Get up 30 minutes earlier than my current wake time',response:null},
		{name:'Get up at 7 am every day',response:null},
		{name:'Go to bed at the same time every night',response:null},
		{name:'Go to sleep 2 hours earlier than my current bed time',response:null},
		{name:'Get a pet to help me get up on time',response:null},
		{name:'Exercise regularly',response:null},
		{name:'Get a new job with regular hours',response:null},
		{name:'Get a job',response:null},
		{name:'Get a volunteer job',response:null},
		{name:'Make some new friends so I have somewhere to go during the day',response:null},
		{name:'Learn how to cook so I can make dinner for myself',response:null},
		{name:'Go back to school',response:null},
		{name:'Find a romantic partner',response:null},
		{name:'Get some roommates',response:null},
		{name:'Stop using my computer late at night',response:null},
		{name:'Cut back on social media use',response:null},
		{name:'Meet friends for coffee on Saturday morning',response:null},
		{name:'Get more involved with church so I have somewhere to go on Sundays',response:null},
		{name:'Join a gym',response:null},
		{name:'Get more organized about my life',response:null}
    ];


  }

  angular.module('cbitsPrototype.controllers')
    .controller('SettingManageableGoalsController',
    [SettingManageableGoalsController]);
})();
