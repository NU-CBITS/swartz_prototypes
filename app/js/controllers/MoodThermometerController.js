(function () {
  'use strict';

  function MoodThermometerController($location, $filter) {

  	this.symptoms = new Array();
  	this.thermometerContent = new Array();
  	this.currentSymptomClassIndex = 0;
  	this.currentSymptomIndex = null;

  	this.thermometerContent = [
  		{value:5, type:'mania',text:'worst, most manic',contents:[]},
		{value:4, type:'mania',text:'mania getting out of control',contents:[]}, 
		{value:3, type:'mania',text:'multiple signs of mania are present',contents:[]},
		{value:2, type:'mania', text:'early sign(s) of mania are present',contents:[]},
		{value:1, type:'mania', text:'mildly elevated mood, may or may not be normal',contents:[]},
		{value:0, type:'normal', text:'normal, neither up nor down',contents:[]},  
		{value:-1, type:'depression', text:'mildly depressed mood, may or may not be normal',contents:[]},
		{value:-2, type:'depression', text:'early sign(s) of depression are present',contents:[]},
		{value:-3, type:'depression', text:'multiple signs of depression are present',contents:[]},
		{value:-4, type:'depression', text:'depression getting out of control',contents:[]},
		{value:-5, type:'depression', text:'worst, most depressed',contents:[]}
	];

  	this.symptoms[0] = {
  		name:'Mania', type:'mania', instructions:'Which of these symptoms do you feel when you are manic or hypomanic?', bgcolor:2,symptoms:[
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

  	this.symptoms[2] = {
		name:'Depression', type:'depression', instructions:'Which of these symptoms do you feel when you are depressed?', bgcolor:5, symptoms:[
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

	this.symptoms[1] = {
		name:'Normal', type:'normal', instructions:'Which of these symptoms do you feel when you are feeling normal?', bgcolor:8, symptoms:[
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

  angular.module('cbitsPrototype.controllers')
    .controller('MoodThermometerController',
    [ '$location', '$filter', MoodThermometerController]);
})();
