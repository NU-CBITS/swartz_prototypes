(function () {
  'use strict';

  function BipolarDisorderCalculatorController($location, $filter) {
  
  	this.panelVisible = [true,false,false,false,false];

  	this.disorders = {depression:null,mania:null,hypomania:null};


  	this.diagnoses = [
  		{name:'Bipolar One (I) Disorder', conditions:{mania:'true'}},
		  {name:'Bipolar Two (II) Disorder',conditions:{depression:'true',mania:'false',hypomania:'true'}},
  		{name:'Major Despressive Disorder',conditions:{depression:'true',mania:'false',hypomania:'false'}},
  		{name:'Cyclothymia or Other Specified Bipolar Disorder',conditions:{}}
  	];

  	this.chooseDiagnosis = function(){
  		var diagnosisIndex = null;

  		if(this.disorders.mania == 'true'){
  			diagnosisIndex = 0;
  		}
  		else if(this.disorders.mania == 'false' && this.disorders.depression == 'true' && this.disorders.hypomania == 'true'){
  			diagnosisIndex = 1;
  		}
  		else if(this.disorders.mania == 'false' && this.disorders.depression == 'true' && this.disorders.hypomania == 'false'){
  			diagnosisIndex = 2;
  		}
  		else {
  			diagnosisIndex = 3
  		}
  		return this.diagnoses[diagnosisIndex]
  	}

    this.showPanel = function(panelIndex){
    	for(var i = 0; i < this.panelVisible.length; i++){
    			this.panelVisible[i] = false;
    	}
    	this.panelVisible[panelIndex] = true;
    }

  }

  angular.module('cbitsPrototype.controllers')
    .controller('BipolarDisorderCalculatorController',
    [ '$location', '$filter', BipolarDisorderCalculatorController]);
})();
