(function () {
  'use strict';

  function GettingOutOfBedSearchController(GettingOutOfBedContent, $sce) {


  	this.panelVisible = [true,false,false];

  	this.showPanel = function(panelIndex){
    	for(var i = 0; i < this.panelVisible.length; i++){
    			this.panelVisible[i] = false;
    	}
    	this.panelVisible[panelIndex] = true;
    }

  	this.content = GettingOutOfBedContent;

  	this.responseHTML = function(content){
  		return $sce.trustAsHtml(content)
  	}

  	this.responses = [];

  	this.responsesSelected = function(){
  		return this.responses.length > 0
  	}

  	this.responsesExist = function(index){
		return this.responses[index] == undefined
	}
  }

  angular.module('cbitsPrototype.controllers')
    .controller('GettingOutOfBedSearchController',
    ['GettingOutOfBedContent', '$sce', GettingOutOfBedSearchController]);
})();
