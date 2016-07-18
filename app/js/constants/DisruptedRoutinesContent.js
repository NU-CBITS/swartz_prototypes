(function() {
  'use strict';
  var DisruptedRoutinesContent = [];
  DisruptedRoutinesContent[0] = {
    id: 1,
    name: 'Faith',
    story: 'Faith has raised 7 children and her last child recently went off to college.  Faith has been feeling lost, like she does not know what to do with herself. ',
    challenges: [{
      name: 'Her children used to keep her rhythms on track but now they are out of the house',
      correct: true,
      message: null,
      solutions: [{
        name: 'Get a paying or volunteer job to give her something to do during the day',
        correct: true,
        prompt: null
      }, {
        name: 'Go visit all her kids a lot',
        correct: false,
        prompt: 'She may enjoy visiting her children, but traveling around to see them will not help Faith to stabilize her daily rhythms'
      }, {
        name: 'Make a schedule for calling her kids at regular times on specific days',
        correct: true,
        prompt: null
      }, {
        name: 'Take up a hobby',
        correct: true,
        prompt: null
      }]
    }, {
      name: 'Faith is sad',
      correct: false,
      solutions: []
    }, {
      name: 'Preparing meals for her family was a social rhythm anchor but now she is without an anchor at dinner time',
      correct: true,
      message: null,
      solutions: [{
        name: 'Be glad that she doesn’t have to worry about cooking for so many people any more',
        correct: false,
        prompt: 'She may be relieved that she no longer has to worry about cooking for a large family, but this will not address the fact that her schedule is no longer tied to cooking for her family.'
      }, {
        name: 'Even though she may not feel like it, continue to prepare a small meal for herself every night at the same time that she used to eat with her family',
        correct: true,
        prompt: null
      }, {
        name: 'Make plans to meet friends for evening meals on a regular basis.',
        correct: true,
        prompt: null
      }]
    }, {
      name: 'Faith really wants grandchildren',
      correct: false,
      message: null,
      solutions: []
    }]
  };
  DisruptedRoutinesContent[1] = {
    id: 2,
    name: 'Manuel',
    story: 'Manuel is a sophomore in college.  He has been very stressed out about his schoolwork  and is looking forward to going home for winter break.  He plans to sleep as much as he can and do absolutely nothing for two weeks.',
    challenges: [{
      name: 'His class and homework schedule kept Manuel on track.  When he goes home, he will lose his social anchors.',
      correct: true,
      message: null,
      solutions: [{
        name: 'Make plans before going home .  Set up regular activities every day to get Manuel out of bed and out of the house.',
        correct: true,
        prompt: null
      }, {
        name: 'Play video games',
        correct: true,
        prompt: 'He may enjoy playing video games, but this activity is unlikely to help regulate his rhythms.'
      }, {
        name: 'Discuss with his parents the importance of regular routines . Ask his family to join him in sticking to a schedule',
        correct: true,
        prompt: null
      }, {
        name: 'Continue to do some work over the break to maintain continuity with his school routines',
        correct: true,
        prompt: null
      }]
    }, {
      name: 'Manuel needs a break from his school work.',
      correct: false,
      message: null,
      solutions: [{
        name: '',
        prompt: null
      }]
    }, {
      name: 'Manuel is used to living with his roommates and will have trouble adapting the routines at home.',
      correct: true,
      message: null,
      solutions: [{
        name: 'Enjoy lots of home cooked meals',
        correct: true,
        prompt: 'He may enjoy home-cooked meals, but this activity is unlikely to help regulate his rhythms unless the meals are at regular times.'
      }, {
        name: 'Set up regular sleep, wake, and meal times at home',
        correct: true,
        prompt: null
      }, {
        name: 'Plan to visit with family and friends each day',
        correct: true,
        prompt: null
      }]
    }, {
      name: 'Manuel is worried about fighting with his parents when he gets home..',
      correct: false,
      message: null,
      solutions: [{
        name: '',
        prompt: null
      }],
    }]
  };
  angular.module('cbitsPrototype.constants')
    .constant('DisruptedRoutinesContent', DisruptedRoutinesContent);
})();