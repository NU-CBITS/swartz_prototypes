(function () {
  'use strict';

  function LetsTalkController() {

  	this.panelVisible = [true,false];

    this.notLastPanel = function(){
        return !this.panelVisible[this.panelVisible.length-1]
    }

    this.showPanel = function(panelIndex){
    	for(var i = 0; i < this.panelVisible.length; i++){
    		this.panelVisible[i] = false;
    	}
    	this.panelVisible[panelIndex] = true;
    }

  }

  angular.module('cbitsPrototype.controllers')
    .controller('LetsTalkController',
    [LetsTalkController]);
})();
