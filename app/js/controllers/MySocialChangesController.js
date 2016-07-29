(function () {
  'use strict';

  function MySocialChangesController() {

  	this.areas = ['Area of My Life',
		'Amount of responsibility in work/family',
		'Financial situation',
		'Relationship situation',
		'Physical well-being',
		'Level of intellectual stimulation or interest',
		'Prestige or recognition',
		'Closeness to other people',
		'Mental health',
		'Legal situation',
		'Amount of free time',
		'Time with my pet',
		'Control over my schedule',
		'Stress',
		'Other (specify)'
	];

	this.socialRhythms = [
	{name:'Wake up time', options:['Earlier','Later','No change']},
	{name:'Bed time', options:['Earlier','Later','No change']},
	{name:'Amount of sleep', options:['Less','More','No change']},
	{name:'Meal Times', options:['More irregular','More regular','No change']},
	{name:'Exercise', options:['Less','More','No change']},
	{name:'Support from friends/family', options:['Less','More','No change']},
	{name:'Free time', options:['Less','More','No change']},
	{name:'Overall schedule', options:['More irregular','More regular','No change']}
	];

  }

  angular.module('cbitsPrototype.controllers')
    .controller('MySocialChangesController',
    [MySocialChangesController]);
})();
