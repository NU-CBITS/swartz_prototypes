(function () {
  'use strict';

  function ICantSleepPlanController(ICantSleepContent) {

  	this.panelVisible = [true,false,false,false,false];
  	this.content = ICantSleepContent;

  	this.responses = [];

  	this.currentPanelIndex = function(){
  		return this.panelVisible.indexOf(true);
  	}
  	
  	this.currentContent = function(){
  		return this.content[this.currentPanelIndex()];
  	}

    this.showPanel = function(panelIndex){
    	for(var i = 0; i < this.panelVisible.length; i++){
    		this.panelVisible[i] = false;
    	}
    	this.panelVisible[panelIndex] = true;
    }

    this.responseAnswered = function(responseIndex){
		return this.responses[this.currentPanelIndex()] != undefined
	}

	    this.makePDF = function(){
    	  var pdf = new jsPDF('l', 'in', [11,8.5]);
		    pdf.addHTML( document.getElementById('i-cant-sleep-plan'),  function() {
		    pdf.save('MyICantSleepPlan.pdf');
  		  });
    }

  }

  angular.module('cbitsPrototype.controllers')
    .controller('ICantSleepPlanController',
    ['ICantSleepContent',ICantSleepPlanController]);
})();
