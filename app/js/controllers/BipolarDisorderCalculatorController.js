(function () {
  'use strict';

  function BipolarDisorderCalculatorController($location, $filter) {
  
  	this.panelVisible = [true,false,false,false,false];

  	this.disorders = {depression:null,mania:null,hypomania:null};


  	this.diagnoses = [
  		{name:'Bipolar One (I) Disorder', content:' Bipolar I Disorder is characterized by alternating “highs” (mania or hypomania) and “lows” (depression).  When doctors make a diagnosis of Bipolar I Disorder, they require only a single episode of mania (one high) but most people have a mix of highs and lows. Does this sound like your experience? Ask your doctor if he or she thinks you might have Bipolar I Disorder.', conditions:{mania:'true'}},
		  {name:'Bipolar Two (II) Disorder', content:'Bipolar II Disorder is sometimes called the “less severe” form of bipolar disorder because the highs are not as high as those in Bipolar I Disorder.  In truth, however, many people with Bipolar II Disorder suffer a great deal with their illness, experiencing many “lows” (depressions) as well as mixed states (symptoms of both highs and lows at the same time). Does this sound like your experience? Ask your doctor if he or she thinks you might have Bipolar II Disorder.', conditions:{depression:'true',mania:'false',hypomania:'true'}},
  		{name:'Major Despressive Disorder', content:'Major Depressive Disorder is characterized by recurrent episodes of depression.  If you have Major Depressive Disorder, you experience low periods but do not have episodes of mania or “highs.” Does this sound like your experience? Ask your doctor if he or she thinks you might have Major Depressive Disorder.', conditions:{depression:'true',mania:'false',hypomania:'false'}},
  		{name:'Cyclothymia or Other Specified Bipolar Disorder', content:'', conditions:{}}
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
