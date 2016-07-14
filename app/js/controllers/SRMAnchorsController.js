(function () {
  'use strict';

  function SRMAnchorsController($filter) {

    this.panelVisible = [true,false,false,false];

    this.showPanel = function(panelIndex){
    	for(var i = 0; i < this.panelVisible.length; i++){
    			this.panelVisible[i] = false;
    	}
    	this.panelVisible[panelIndex] = true;
    }

    this.anchors = [
    {name:'Set an alarm clock', response:false, days:null, targetTime:null},
	{name:'Walk my dog', response:false, days:null, targetTime:null},
	{name:'Cook for my family', response:false, days:null, targetTime:null},
	{name:'Eat breakfast', response:false, days:null, targetTime:null},
	{name:'Get woken up by kids/partner/pet', response:false, days:null, targetTime:null},
	{name:'Go to work', response:false, days:null, targetTime:null},
	{name:'Go to school', response:false, days:null, targetTime:null},
	{name:'Talk to friends', response:false, days:null, targetTime:null},
	{name:'Talk to family', response:false, days:null, targetTime:null},
	{name:'Eat lunch', response:false, days:null, targetTime:null},
	{name:'Eat dinner', response:false, days:null, targetTime:null},
	{name:'Take medications', response:false, days:null, targetTime:null},
	{name:'Watch a TV program at a specific time', response:false, days:null, targetTime:null},
	{name:'Catch the bus', response:false, days:null, targetTime:null},
	{name:'Exercise', response:false, days:null, targetTime:null},
	{name:'Do housework', response:false, days:null, targetTime:null},
	{name:'Do homework', response:false, days:null, targetTime:null},
	{name:'Check my blood sugar', response:false, days:null, targetTime:null},
	{name:'Play a sport', response:false, days:null, targetTime:null},
	{name:'Watch a sport', response:false, days:null, targetTime:null}
    ];

    this.filteredAnchors = function(){

    	return $filter('filter')(this.anchors,{response:true})

    }

    this.makePDF = function(){
    	  var pdf = new jsPDF('l', 'in', [11,8.5]);
		  pdf.addHTML( document.getElementById('anchorsTable'),  function() {
		    pdf.save('MySRMAnchors.pdf');
  		  });
    }

  }

  angular.module('cbitsPrototype.controllers')
    .controller('SRMAnchorsController',
    ['$filter', SRMAnchorsController]);
})();
