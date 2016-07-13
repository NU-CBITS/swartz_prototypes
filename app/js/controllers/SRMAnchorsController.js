(function () {
  'use strict';

  function SRMAnchorsController() {

    this.panelVisible = [true,false,false];

    this.showPanel = function(panelIndex){
    	for(var i = 0; i < this.panelVisible.length; i++){
    			this.panelVisible[i] = false;
    	}
    	this.panelVisible[panelIndex] = true;
    }

    this.anchors = [
    {name:'Set an alarm clock', response:false},
	{name:'Walk my dog', response:false},
	{name:'Cook for my family', response:false},
	{name:'Eat breakfast', response:false},
	{name:'Get woken up by kids/partner/pet', response:false},
	{name:'Go to work', response:false},
	{name:'Go to school', response:false},
	{name:'Talk to friends', response:false},
	{name:'Talk to family', response:false},
	{name:'Eat lunch', response:false},
	{name:'Eat dinner', response:false},
	{name:'Take medications', response:false},
	{name:'Watch a TV program at a specific time', response:false},
	{name:'Catch the bus', response:false},
	{name:'Exercise', response:false},
	{name:'Do housework', response:false},
	{name:'Do homework', response:false},
	{name:'Check my blood sugar', response:false},
	{name:'Play a sport', response:false},
	{name:'Watch a sport', response:false}
    ];

  }

  angular.module('cbitsPrototype.controllers')
    .controller('SRMAnchorsController',
    [ SRMAnchorsController]);
})();
