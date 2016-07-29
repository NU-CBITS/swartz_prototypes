(function () {
  'use strict';

  function EarlyWarningSignsController() {
  	this.panelVisible = [true,false,false,false];

    this.showPanel = function(panelIndex){
    	for(var i = 0; i < this.panelVisible.length; i++){
    		this.panelVisible[i] = false;
    	}
    	this.panelVisible[panelIndex] = true;
    }

    this.notLastPanel = function(){
        return !this.panelVisible[this.panelVisible.length-1]
    }

    this.content = [
      {title:'Sleep',list:['Sleeping more','Sleeping less','Broken sleep','Other (free text to specify)']},
      {title:'Appetite',list:['Eating more','Eating less','Other (free text to specify)']},
      {title:'Energy',list:['More energy','Less energy','Other (free text to specify)']},
      {title:'Consultant',list:['Scattered attention','Poor focus','Overly focused on one topic','Other (free text to specify)']},
      {title:'Interest in activities',list:['Increased interest in activities','Increased interest in activities that I would not normally do','Decreased interest in activities','Decreased interest in any activities, even ones I normally enjoy','Other (free text to specify)']},
      {title:'Interest in sex',list:['Higher interest in sex','Lower interest in sex','Other (free text to specify)']},
      {title:'Ability to make decisions',list:['Increased ability to make decisions','Making reckless or impulsive decisions','Decreased ability to make decisions','Other (free text to specify)']},
      {title:'Level of worry or anxiety',list:['Higher levels of worry/anxiety','Lower levels of worry/anxiety','Other (free text to specify)']}];

  }

  angular.module('cbitsPrototype.controllers')
    .controller('EarlyWarningSignsController',
    [ EarlyWarningSignsController]);
})();
