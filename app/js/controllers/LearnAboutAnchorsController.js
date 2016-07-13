(function () {
  'use strict';

  function LearnAboutAnchorsController($location) {
    this.panelVisible = [true,false,false];

    this.popovers = [
    	//Jon's popovers
    	{
    		name:'Jon',
	    	contents: [
	    	{text:'We can use technology to help regulate our social rhythms.  Setting alarms helps regulate routines', reviewed:false},
	    	{text:'Pets are often good social anchors.  Like Jon’s cat, they have regular circadian rhythms and rarely take “no” for an answer.  Jon’s cat helps to get him up at the same time every day.', reviewed:false},
	    	{text:'Regular meals help to regulate our body clock.  A cup of coffee may help to wake Jon up but isn’t enough food to alert his body clock that the day has started.', reviewed:false},
	    	{text:'Regular exercise is healthy and also helps to keep the body clock running smoothly', reviewed:false},
	    	{text:'Regular hygiene routines like showering can help keep your body clock on track.', reviewed:false},
	    	{text:'Although a breakfast bar may not  be as nutritious as a “real” meal, it will still send signals to Jon’s body clock about time of day', reviewed:false},
	    	{text:'Having daily activities helps keep us on track', reviewed:false}
	    	]
		},

	    //Maria's popovers
	    {
    		name:'Maria',
	    	contents: [
	    	{text:'Being out of work can cause disruptions in social rhythms.', reviewed:false},
	    	{text:'When you do not have a regular routine, setting up regular activities can help establish regular routines.', reviewed:false},
	    	{text:'Combining a regular activity with a social interaction helps to strengthen the social rhythm anchor', reviewed:false},
	    	{text:'Skipping meals might cause the body clock to be confused', reviewed:false},
	    	{text:'Regular exercise is especially important, especially when your routines are less regular than usual', reviewed:false},
	    	{text:'Social contact is an important anchor.  Although face-to-face communication is best, phone calls are great too.', reviewed:false}
	    	]
		},

	    //Hal's popovers
	    {
    		name:'Maria',
	    	contents: [
	    	{text:'Losing a life partner is a big psychological loss but also causes disruptions to social rhythms.', reviewed:false},
	    	{text:'Keeping schedules intact in the face of big changes may help with your mood', reviewed:false},
	    	{text:'Eating dinner at a regular time is a social anchor', reviewed:false},
	    	{text:'Watching a specific program at a specific time can be a social rhythm anchor', reviewed:false},
	    	{text:'Social connections, even by phone, are important social rhythm anchors', reviewed:false},
	    	{text:'Hal could improve his social rhythms further by adding even more structure to his evenings', reviewed:false},
	    	{text:'Taking medications at a regular time can be an anchor', reviewed:false}
	    	]
		}
    ];

    this.showPanel = function(panelIndex){
    	for(var i = 0; i < this.panelVisible.length; i++){
    			this.panelVisible[i] = false;
    	}
    	this.panelVisible[panelIndex] = true;
    }
  
    this.popoverFinishedClass = function(arrayPosition){
    	return this.popovers[arrayPosition[0]].contents[arrayPosition[1]].reviewed ? 'popoverFinished' :'popoverLink';
    }

    this.loadPopover = function(arrayPosition){
    	this.popovers[arrayPosition[0]].contents[arrayPosition[1]].reviewed = true;
    }

    this.popoverText = function(arrayPosition){
    	return this.popovers[arrayPosition[0]].contents[arrayPosition[1]].text
    }

  }

  angular.module('cbitsPrototype.controllers')
    .controller('LearnAboutAnchorsController',
    [ '$location',LearnAboutAnchorsController]);
})();
