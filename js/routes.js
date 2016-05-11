angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.ray', {
    url: '/home',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ray.html',
        controller: 'rayCtrl'
      }
    }
  })

  .state('menu.lessons', {
    url: '/lessons',
    views: {
      'side-menu21': {
        templateUrl: 'templates/lessons.html',
        controller: 'lessonsCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.exercisesLesson1', {
    url: '/exercises1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/exercisesLesson1.html',
        controller: 'exercisesLesson1Ctrl'
      }
    }
  })

  .state('menu.socialRhythmMetric', {
    url: '/social_rhythm_metric',
    views: {
      'side-menu21': {
        templateUrl: 'templates/socialRhythmMetric.html',
        controller: 'socialRhythmMetricCtrl'
      }
    }
  })

  .state('menu.targetTime', {
    url: '/target_time',
    views: {
      'side-menu21': {
        templateUrl: 'templates/targetTime.html',
        controller: 'targetTimeCtrl'
      }
    }
  })

  .state('menu.dailyTime', {
    url: '/srm_daily_time',
    views: {
      'side-menu21': {
        templateUrl: 'templates/dailyTime.html',
        controller: 'dailyTimeCtrl'
      }
    }
  })

  .state('menu.dailyPeople', {
    url: '/srm_people',
    views: {
      'side-menu21': {
        templateUrl: 'templates/dailyPeople.html',
        controller: 'dailyPeopleCtrl'
      }
    }
  })

  .state('dailyMoodEnergyLevel', {
    url: '/srm_mood_energy',
    templateUrl: 'templates/dailyMoodEnergyLevel.html',
    controller: 'dailyMoodEnergyLevelCtrl'
  })

  .state('anticipatingProgress', {
    url: '/anticipating_progress',
    templateUrl: 'templates/anticipatingProgress.html',
    controller: 'anticipatingProgressCtrl'
  })

  .state('anticipatingProgressQuestions', {
    url: '/anticipating_progress_questions',
    templateUrl: 'templates/anticipatingProgressQuestions.html',
    controller: 'anticipatingProgressQuestionsCtrl'
  })

  .state('alignedMisalignedRhythms', {
    url: '/didactic1',
    templateUrl: 'templates/alignedMisalignedRhythms.html',
    controller: 'alignedMisalignedRhythmsCtrl'
  })

  .state('rememberingAWellPeriod', {
    url: '/remembering_a_well_period',
    templateUrl: 'templates/rememberingAWellPeriod.html',
    controller: 'rememberingAWellPeriodCtrl'
  })

  .state('rememberingAWellPeriodFeedback', {
    url: '/remembering_a_well_period_feedback',
    templateUrl: 'templates/rememberingAWellPeriodFeedback.html',
    controller: 'rememberingAWellPeriodFeedbackCtrl'
  })

  .state('menu.allAboutRhythmsAndYou', {
    url: '/lesson1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/allAboutRhythmsAndYou.html',
        controller: 'allAboutRhythmsAndYouCtrl'
      }
    }
  })

  .state('rhythmsAndSleepStrategiesForBetterSleep', {
    url: '/lesson8',
    templateUrl: 'templates/rhythmsAndSleepStrategiesForBetterSleep.html',
    controller: 'rhythmsAndSleepStrategiesForBetterSleepCtrl'
  })

  .state('menu.reduceYourTimeInBed', {
    url: '/lesson8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/reduceYourTimeInBed.html',
        controller: 'reduceYourTimeInBedCtrl'
      }
    }
  })

  .state('exercisesLesson8', {
    url: '/exercises8',
    templateUrl: 'templates/exercisesLesson8.html',
    controller: 'exercisesLesson8Ctrl'
  })

  .state('menu.exercisesLesson5', {
    url: '/exercises5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/exercisesLesson5.html',
        controller: 'exercisesLesson5Ctrl'
      }
    }
  })

  .state('lonelinessAndMood', {
    url: '/loneliness_and_mood',
    templateUrl: 'templates/lonelinessAndMood.html',
    controller: 'lonelinessAndMoodCtrl'
  })

  .state('socialRhythmMetricFeedback', {
    url: '/srm_feedback',
    templateUrl: 'templates/socialRhythmMetricFeedback.html',
    controller: 'socialRhythmMetricFeedbackCtrl'
  })

  .state('menu.socialRhythmAnchors', {
    url: '/srm_anchors',
    views: {
      'side-menu21': {
        templateUrl: 'templates/socialRhythmAnchors.html',
        controller: 'socialRhythmAnchorsCtrl'
      }
    }
  })

  .state('menu.socialRhythmsAnchors', {
    url: '/srm_anchors2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/socialRhythmsAnchors.html',
        controller: 'socialRhythmsAnchorsCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/home')

  

});