(function () {
  'use strict';

  function MoodThermometerController($location) {

  	this.symptoms = new Array();
  	this.currentSymptomClassIndex = null;
  	this.currentSymptomIndex = null;

  	this.symptoms[0] = {
  		name:'Mania',symptoms:[
  		'Overly good mood',
		'Irritability or snappiness',
		'Talking fast',
		'Thinking fast',
		'Can’t concentrate',
		'Starting too many projects',
		'Don’t need much sleep',
		'Don’t need any sleep',
		'Spending too much money',
		'High sex drive',
		'Aggression',
		'Feelings of power or specialness',
		'Refusing to admit there is a problem',
		'Hearing voices',
		'Using more drugs or alcohol'
  	]};

  	this.symptoms[1] = {
		name:'Depression', symptoms:[
		'Sadness',
		'Anxiety',
		'Feelings of emptiness',
		'Feeling numb',
		'Hopelessness',
		'Helplessness',
		'Low interest',
		'Feeling guilty',
		'Feeling worthless',
		'Low interest in sex',
		'Low energy',
		'Low motivation',
		'Trouble with concentration',
		'Poor memory',
		'Irritability or snappiness',
		'Increased sleep',
		'Inability to sleep but feeling tired',
		'Increased appetite with weight gain',
		'Decreased appetite with weight loss',
		'Thoughts of death',
		'Wish to end my life',
		'Suicide attempts'
	]};

	this.symptoms[2] = {
		name:'Normal', symptoms:[
		'Even mood',
		'Neither high nor low',
		'Feeling pretty normal',
		'Sleeping well',
		'Eating well',
		'Concentrating well',
		'Acting “normal”',
		'Able to do the things I want to do'	
	]};

	this.selectSymptomClass = function(index){
		this.currentSymptomClassIndex = index;
		this.currentSymptomIndex = null;
	}

	this.selectSymptom = function(index){
		this.currentSymptomIndex = index;
	}

	this.showSymptomClassSelected = function(index){
		return index == this.currentSymptomClassIndex ? 'btn-active' : ''
	}

	this.showSymptomSelected = function(index){
		return index == this.currentSymptomIndex ? 'btn-active' : ''
	}
  
  }

  angular.module('sis.controllers')
    .controller('MoodThermometerController',
    [ '$location',MoodThermometerController]);
})();
