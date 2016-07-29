(function () {
  'use strict';

  function IStatementsController() {

  	this.panelVisible = [true,false,false,false];

    this.showPanel = function(panelIndex){
    	for(var i = 0; i < this.panelVisible.length; i++){
    		this.panelVisible[i] = false;
    	}
    	this.panelVisible[panelIndex] = true;
    }
  }

  angular.module('cbitsPrototype.controllers')
    .controller('IStatementsController',
    [IStatementsController]);
})();
