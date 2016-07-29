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
  }

  angular.module('cbitsPrototype.controllers')
    .controller('EarlyWarningSignsController',
    [ EarlyWarningSignsController]);
})();
