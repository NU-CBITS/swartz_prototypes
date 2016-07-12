(function () {
  'use strict';

  function SRMAnchorsController() {

    this.anchorSelectionFormComplete = false;
    this.reviewAnchorsComplete = false;

    this.anchors = [
    {name:'Set an alarm clock', response:''},
	{name:'Walk my dog', response:''},
	{name:'Cook for my family', response:''},
	{name:'Eat breakfast', response:''},
	{name:'Get woken up by kids/partner/pet', response:''},
	{name:'Go to work', response:''},
	{name:'Go to school', response:''},
	{name:'Talk to friends', response:''},
	{name:'Talk to family', response:''},
	{name:'Eat lunch', response:''},
	{name:'Eat dinner', response:''},
	{name:'Take medications', response:''},
	{name:'Watch a TV program at a specific time', response:''},
	{name:'Catch the bus', response:''},
	{name:'Exercise', response:''},
	{name:'Do housework', response:''},
	{name:'Do homework', response:''},
	{name:'Check my blood sugar', response:''},
	{name:'Play a sport', response:''},
	{name:'Watch a sport', response:''}
    ];

    this.completeAnchorSelectionForm = function(){
    	this.anchorSelectionFormComplete = true;
    }

    this.completeAnchorSelectionForm = function(){
    	this.anchorSelectionFormComplete = true;
    }    

  }

  angular.module('sis.controllers')
    .controller('SRMAnchorsController',
    [ SRMAnchorsController]);
})();
