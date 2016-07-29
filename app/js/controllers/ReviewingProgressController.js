(function () {
  'use strict';

  function ReviewingProgressController() {
  	this.panelVisible = [true,false,false,false];
    this.notLastPanel = function(){
        return !this.panelVisible[this.panelVisible.length-1]
    }
    this.showPanel = function(panelIndex){
    	for(var i = 0; i < this.panelVisible.length; i++){
    		this.panelVisible[i] = false;
    	}
    	this.panelVisible[panelIndex] = true;
    }
   this.content = ['I have very regular daily routines','I am able to increase the regularity of my daily routines','I am pleased with my SRM scores ','I am aware of the social rhythm anchors in my life','I am able to recognize the symptoms of bipolar disorder','I feel comfortable rating my mood on a -5 to + 5 scale','I recognize the link between   body clock and  daily rhythms in my own life','I recognize the  link daily rhythms and moods in my own life','I understand how “sleep juice” affects my sleep patterns ','I feel I have control over my sleep','I recognize patterns of problem communication','I  communicate well with people','I  use “I” statements when I communicate'];  
 }

  angular.module('cbitsPrototype.controllers')
    .controller('ReviewingProgressController',
    [ReviewingProgressController]);
})();
