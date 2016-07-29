(function () {
  'use strict';

  function DisagreementsController() {
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

    this.videoURL = 'https://www.youtube.com/watch?v=kjRAWql2A3E';

    this.problems = [
    {title:'Assuming that the other person knows what you’re thinking but not saying it', answer:0, answers: [' Great.  You noticed that Paulette assumed that Claude knew that she had had a hard day with the kids and needed support from him, but didn’t say it.',' It seems that  Paulette assumed that Claude knew that she had had a hard day with the kids and needed support from him, but didn’t say it.']},
    {title:'Failing to take the other person’s perspective ', answer:0, answers: [' Great.  You noticed that neither Paulette nor Claude was able to put themselves in their partner’s shoes.',' It seems that  neither Paulette nor Claude was able to put themselves in their partner’s shoes.']},
    {title:'Giving in without sticking up for yourself ', answer:1, answers: [' It seems that neither Paulette nor Claude gave in, even if they weren’t able to effectively argue their position.',' Yes, neither Paulette nor Claude gave in, even if they weren’t able to effectively argue their position. .']},
    {title:'Not using “I” statements  ', answer:0, answers: ['Yes, neither Paulette nor Claude used “I” statments.',' Neither Paulette nor Claude used “I” statements .']},
    {title:'Name calling ', answer:0, answers: [' Yes, Paulette called Claude a “bastard.”',' Paulette called Claude a “bastard.”']},
    {title:'Not being direct about what they want/need ', answer:0, answers: ['Yes.  Neither Paulette nor Claude communicated clearly about what they wanted in this situation.',' Neither Paulette nor Claude communicated clearly about what they wanted in this situation.']},
    {title:'Being provocative ', answer:0, answers: [' Yes, both Paulette and Claude were sarcastic and said things to get a rise out of the other person. ',' Both Paulette and Claude were sarcastic and said things to get a rise out of the other person.']}
    ];
  }

  angular.module('cbitsPrototype.controllers')
    .controller('DisagreementsController',
    [DisagreementsController]);
})();
