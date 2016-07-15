(function() {
  'use strict';
  var ICantSleepContent = [];
  ICantSleepContent[0] = {
    id: 1,
    name:'bedtime',
    title: 'Bedtime Routines',
    instructions: 'Bedtime routines help you wind down before going to sleep.  Pick the strategies that you would like to add to your personalized plan for the hour before you go to sleep. (select as many options as apply)',
    content: [
      'Stop my usual activities', 'Schedule 20 minutes AT LEAST an hour before bedtime to write down a list of my worries and some possible solutions to the problems so that I will not have to think about them as bedtime approaches.  I will set the list aside until morning.', 'Keep lights low', '	Turn off my computer ', '	Take a warm bath', 'Listen to music', '	Read a book or magazine', '	Watch soothing (and slightly boring!) TV', 'Avoid conflicts with others'
    ]
  };
  ICantSleepContent[1] = {
    id: 2,
    name:'what_to_do',
    title: 'What To Do If I Can\'t Sleep',
    instructions: 'If you have trouble sleeping FOR AT LEAST 30 MINUTES, it is important to have some strategies in mind so that you don’t get worked up or anxious (which will make it even harder to fall asleep).  These strategies can be used if you have trouble falling asleep at the beginning of the night or are awake FOR AT LEAST 30 MINUTES in the middle of the night. (select as many options as apply)',
    content: ['	Keep lights as dim as possible (no overhead lights)', '	Stay off the computer (too bright and too engaging)', '	Watch a boring TV program from a distance (if it’s close, it’s too bright)', '	Read a boring book in dim light', '	Listen to quiet music', '	Drink a cup of warm tea (decaffeinated)', 'Knit', '	Keep a pad of paper by my bed so I can jot down thoughts that are bothering me.  I will think about them in the morning.', 'Pet my dog or cat', 'Play Solitaire in dim light']
  };
  ICantSleepContent[2] = {
    id: 3,
    name:'getting_out',
    title: 'Strategies for Getting Out Bed',
    instructions: 'Getting out of bed is the most important thing you can do to ensure that you can fall asleep.  Most people will not be able to fall asleep unless they have been awake for at least 15-16 hours.  Getting up at the same time every day is the best thing that you can do for your sleep.  If you have trouble getting out of bed, consider some of these strategies.',
    content: ['Schedule something that will motivate me to get out of bed in the morning', '	Place my alarm across the room', '	Use multiple alarms', '	Put a glass of cold water next to my bed and splash some on my face when my alarm goes off', '	Open shades to let morning light in', '	Ask someone to call me to make sure I am awake', '	Throw off my blankets as soon as I hear my alarm', '	Promise myself a treat for getting up on time for ', 'consecutive days like a manicure or a downloading a movie', '	Buy a programmable coffee maker, put it in my bedroom, and set it to make coffee in the morning so that I can smell it when it’s ready.  Have a cup right away.']
  }
  angular.module('cbitsPrototype.constants')
    .constant('ICantSleepContent', ICantSleepContent);
})();