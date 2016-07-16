(function() {
  'use strict';
  var GettingOutOfBedContent = [];
  GettingOutOfBedContent[0] = {
    id: 1,
    name:'alarms',
    title: 'use alarms or timers to:',
    content: [
      'Put alarm clock across the room; vary the location',
      'Practice physically getting up in response to the alarm going off.',
      'Use multiple alarm clocks',
      'Use vibrating alarm clock',
      'Use cell phone alarm: use different ringtones and volumes',
      'Use an appliance timer to turn ON:<ul><li>Lamp</li><li>Radio</li><li>Cassette player</li><li>TV</li><li>Coffee maker</li><li>Microwave</li></ul></li>',
      'Use an appliance timer to turn OFF:<ul><li>White noise machine</li></ul></li></ul>'
    ]
  };
  GettingOutOfBedContent[1] = {
    id: 2,
    name:'enlist_friends',
    title: 'enlist your friends or relatives to',
    content: [
      'Call you on telephone',
      'Visit you in the morning for breakfast (or come live with you?)',
      'Meet you for coffee or breakfast or exercise or errands',
    ]
  };
  GettingOutOfBedContent[2] = {
    id: 3,
    name:'environment',
    title: 'adjust your environment',
    content: [
      'Raise/open blinds when you go to bed to allow morning light',
      'Get a rooster?'
    ]
  };
  GettingOutOfBedContent[3] = {
    id: 4,
    name:'on_waking_up',
    title: 'try to',
    content: [
      'Place encouraging/coping thoughts card on bedside table; read immediately',
      'Practice mindfulness and note thoughts, emotions',
      'Place pros and cons list of getting out of bed on bedside table; read IMMEDIATELY',
      'Listen to tape you made reminding yourself of reasons to get up',
      'Place water on bedside table; splash on face or drink',
      'Place something with strong smell on table; inhale (e.g. cinnamon)',
      'Throw off the covers IMMEDIATELY',
      'Put feet on the floor IMMEDIATELY',
      'Get up and take a shower',
      'Get the newspaper IMMEDIATELY',
    ]
  };
  GettingOutOfBedContent[4] = {
    id: 5,
    title: 'have a reason to get up',
    content: [
      'Set appointment or make plan for doing something in morning (e.g. go to work, go to volunteer job, go to exercise)',
      'Get a pet',
    ]
  };
  angular.module('cbitsPrototype.constants')
    .constant('GettingOutOfBedContent', GettingOutOfBedContent);
})();