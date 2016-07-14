(function() {
  'use strict';
  var SRMGoalSetting = {
    Goals: [],
    Stages: []
  }
  SRMGoalSetting.Stages[0] = {
    id: 0,
    title: 'Your First Goal',
    keyword: 'first_goal',
    preamble: 'Setting and meeting SRM goals can help you improve your social rhythms and your mood.',
    instructions: 'Select one of the following SRM goals. Pick something that you would like to work on and yet doesn’t seem too overwhelming.',
    description: 'This week you will set one short term SRM goal.  The idea is to pick a goal that you think you might be able to accomplish by the end of the week. Don’t pick something too ambitious.',
    tip: 'Each goal will come with a list of tips and suggestions to help you reach your goal this week.',
    goalSuccessHTML: {
      success: '',
      failure: ''
    }
  }
  SRMGoalSetting.Stages[1] = {
    id: 1,
    title: 'Setting a New Goal',
    keyword: 'second_goal',
    preamble: 'Setting and meeting SRM goals can help you improve your social rhythms and your mood.',
    instructions: 'Select one of the following SRM goals. Pick something that you would like to work on and yet doesn’t seem too overwhelming.',
    description: 'This week you will set one short term SRM goal.  The idea is to pick a goal that you think you might be able to accomplish by the end of the week. Don’t pick something too ambitious.',
    tip: 'Each goal will come with a list of tips and suggestions to help you reach your goal this week.',
    goalSuccessHTML: {
      success: '<h3>Great!</h3> You now can set your next SRM goal.  This next goal should be based on your SRMs.  Is there an area where you are having difficulty?  Select a goal that will help you achieve more regular SRMs. This week you will have the option of picking an exercise goal because exercise is also important to your rhythms and health.',
      failure: '<h3>That\'s OK!</h3> Many people do not meet their SRM goals on their first try.  Sometimes it takes additional attempts to reach your goal.  You will learn additional skills as you continue to work on RAY that will help you accomplish your goals.  We also have some additional tips for you to work on this week.'
    }
  }
  SRMGoalSetting.Stages[2] = {
    id: 2,
    title: 'Sett',
    keyword: 'Set a New Goal',
    preamble: 'Setting and meeting SRM goals can help you improve your social rhythms and your mood.',
    instructions: 'Select one of the following SRM goals. Pick something that you would like to work on and yet doesn’t seem too overwhelming.',
    description: 'This week you will set one short term SRM goal.  The idea is to pick a goal that you think you might be able to accomplish by the end of the week. Don’t pick something too ambitious.',
    tip: 'Each goal will come with a list of tips and suggestions to help you reach your goal this week.',
    goalSuccessHTML: {
      success: '<h3>Fantastic!</h3>  You are doing a great job of meeting your SRM goals!  You are making excellent progress. You now can set your next SRM goal.  This next goal should be based on your SRMs.  Is there an area where you are having difficulty?  Select a goal that will help you achieve more regular SRMs. This week you will have the option of picking a new sleep goal because we have focused on sleep in RAY this week. Pick one of these SRM goals as your new focus for this week.',
      failure: '<h3>That\'s OK!</h3>Many people do not meet their SRM goals immediately.  Sometimes it takes additional attempts to reach your goal.  You will learn additional skills as you continue to work on RAY that will help you accomplish your goals.  We also have some additional tips for you to work on this week.  You can continue to work on your goal from last week.  In addition, you will be asked to pick a new goal this week, including the option of a new sleep goal because we have focused on sleep in RAY this week .  Pick one of these SRM goals as your new focus for this week.'
    }
  }
  SRMGoalSetting.Stages[3] = {
    id: 3,
    title: 'Set a New Goal',
    keyword: 'fourth_goal',
    preamble: 'SRM Goal Setting this week will allow you to choose a new goal that focuses on further optimizing your routines.  If you are still having trouble meeting your initial goals, it is fine to continue working on your prior goals too.  However, this week you will have the opportunity to start focusing on some new challenges too.',
    instructions: 'Please select one of the following SRM goals as your focus for this week.  These new goals will allow you to achieve EVEN MORE regularity to further optimize your schedule.  You may select a goal that is related to those you have worked on in a previous week or one that is different from what you have been working on.',
    description: 'This week you will set one short term SRM goal.  The idea is to pick a goal that you think you might be able to accomplish by the end of the week. Don’t pick something too ambitious.',
    tip: 'Each goal will come with a list of tips and suggestions to help you reach your goal this week.',
    goalSuccessHTML: {
      success: '<h3>Excellent job!</h3>  You are doing a great job of meeting your SRM goals!  You are making excellent progress. ',
      failure: '<h3>That\'s OK!</h3> Many people do not meet their SRM goals immediately.  Sometimes it takes additional attempts to reach your goal.  You will learn additional skills as you continue to work on RAY that will help you accomplish your goals.'
    }
  }
  SRMGoalSetting.Stages[4] = {
    id: 4,
    title: 'Set a New Goal',
    keyword: 'fifth_goal',
    preamble: 'Setting and meeting SRM goals can help you improve your social rhythms and your mood.',
    instructions: 'Select one of the following SRM goals. Pick something that you would like to work on and yet doesn’t seem too overwhelming.',
    description: 'This week you will set one short term SRM goal.  The idea is to pick a goal that you think you might be able to accomplish by the end of the week. Don’t pick something too ambitious.',
    tip: 'Each goal will come with a list of tips and suggestions to help you reach your goal this week.',
    goalSuccessHTML: {
      success: '<h3>Good work!</h3>  You have met another SRM goal!  You are making excellent progress. You now can set another SRM goal.  Select a goal that will help you achieve more regular SRMs. This week you will also have the option of focusing on managing disrupted rhythms.',
      failure: '<h3>Not a big deal!</h3>Many people do not meet their SRM goals immediately.  Sometimes it takes additional attempts to reach your goal.  You will learn additional skills as you continue to work on RAY that will help you accomplish your goals.  Here are some additional tips for you to work on this week.'
    }
  }
  SRMGoalSetting.Stages[5] = {
    id: 6,
    title: 'Set a New Goal',
    keyword: 'sixth',
    preambleHTML: 'Setting and meeting SRM goals can help you improve your social rhythms and your mood.',
    instructions: 'Over the next 2 weeks, you should continue to work on developing regular routines.  Below are a list of SRM goals that you have worked on in the past 4 weeks.  You can continue to practice maintaining regularity in these areas.  Or, if you are feeling pretty confident, you can work on one of the other SRM goals listed below.  If you select one of the goals below, a list of tips to help you reach your goal will be provided.',
    description: 'This week you will set one short term SRM goal.  The idea is to pick a goal that you think you might be able to accomplish by the end of the week. Don’t pick something too ambitious.',
    tip: 'Each goal will come with a list of tips and suggestions to help you reach your goal this week.',
    goalSuccessHTML: {
      success: '<h3>Congratulations!</h3>  You have met another SRM goal!  You are making excellent progress.',
      failure: '<h3>No worries!</h3> Many people do not meet their SRM goals immediately.  Sometimes it takes additional attempts to reach your goal.  You will learn additional skills as you continue to work on RAY that will help you accomplish your goals.'
    }
  }
  SRMGoalSetting.Goals[0] = {
    title: 'Get up at the same time every day.',
    availability: [0,1,2,5],
    tags: [],
    strategiesHTML: [
      '<ol><li>This is the most important activity of the day. It anchors all of the rest of your routines.&nbsp; It is great that you have decided to work on this goal!</li><li>Pick a wake up time that is around the midpoint of your current wake up time for most days of the week.</li><li>Don&rsquo;t try to change the TIME that you are getting up; just work on getting up at the same time. For instance, if you have been sleeping too late in the morning, pick a wake up time like 11 am&nbsp; instead of 8 am.&nbsp; Although you might eventually like to get up at 8 am, that is something you can work on later.&nbsp; Right now, you should just work on getting up at the same time every day.</li><li>For most people, it is hard to stick to the same wake-up time on weekends. Yet, it is really important to get up at the same time on the weekends as you do on the week days.&nbsp; Otherwise, your sleep schedule will be a mess by Monday morning.</li><li>Think about is as &ldquo;I will try it for a week and see what how I feel.&rdquo; This is a kind of experiment; not a life-long commitment.</li></ol>',
      '<ol><li>Are you having trouble getting out of bed? This is a very common problem with bipolar disorder.&nbsp; We will spend more time on this issue later in RAY. But, in the meantime, here are some suggestions: <ol><li>Set multiple alarm clocks</li><li>Ask a friend or family member to call you in the morning</li><li>Keep a cold glass of water by your bed and drink the whole thing as soon as you wake up. Even if you fall back to sleep, soon your bladder will convince you to get out of bed.</li><li>Don&rsquo;t close your blinds at night; the light in the morning will help you wake up</li></ol></li></ol><ol><li>Maybe you are being too ambitious. Instead of trying to get up at exactly the same time every day, give yourself a 1 hour window</li><li>Are you trying to get up too early for your body clock ? Try setting your wake up time a little later this week.</li></ol>']
  }
  SRMGoalSetting.Goals[1] = {
    title: 'Start an activity at the same time every day.',
    availability: [0,1,2,5],
    tags: [],
    strategiesHTML: [
      '<ol><li>It is important to find something to do every day, but this can be especially challenging if you if you are not working or going to school.</li><li>Although your long term goal may be to return to school or work or to find a volunteer job, this week you should focus on scheduling a &ldquo;temporary&rdquo; activity every day like meeting friends for coffee , buying tickets for a movie in advance (so you are committed to going) or paying for a session with a trainer at the gym (again, so that you feel obligated to go. &nbsp;</li><li>Check to see if your mood changes when you complete these activities. Does it make a difference if you do the activity by yourself (like a movie) or with another person.</li><li>The Internet can be a good source of ideas for activities. You may be able to find information about free activities in your community or &nbsp;ways to meet other people who share your interests.</li><li>When possible, schedule activities with other people.</li><li>It is really important to schedule activities on the weekends too, especially if you already have scheduled activities during the week. Otherwise, your body clock slows down over the weekend and you feel &ldquo;off&rdquo; by Monday morning.&nbsp; If this is your pattern, try adding more activities on the weekend and see how you feel on the weekend and also on Monday.&nbsp;</li></ol>',
      '<p>Break your goal into incremental steps. Below is an example of how you might do that.&nbsp; For instance, if you want to volunteer at the library, you might need to start with looking at the library web page.&nbsp; Perhaps your goal for this week should just be steps 1 and</p><ol><li>Look at the library web page</li><li>Call the library to ask about volunteer opportunities</li><li>Visit the library</li><li>Talk to the volunteer coordinator</li><li>Shadow a volunteer</li><li>Attend an orientation session</li><li>Volunteer at the Library</li></ol>'  
    ]
  }
  SRMGoalSetting.Goals[2] = {
    title: 'Increase the regularity of my social contacts.',
    availability: [0,1,2,5],
    tags: [],
    strategiesHTML: [
      '<ol><li>As a first step, trying reaching out to the people in your social network. Is there anyone who might be sympathetic to your &ldquo;cause&rdquo; of trying to add regular social interactions to your day?&nbsp; Who would you like to spend more time with? Who could you invite to meet you for coffee in the morning?&nbsp; &nbsp;A walk in the afternoon? A shared meal at dinner?</li><li>Although social media may help you feel connected, face-to-face communication is important to our body clocks. Our bodies were &ldquo;programmed&rdquo; long before smartphones and computers were created, so it is unclear whether the chemicals in our body respond to human contact via technology the same way it does when we are in the same room with another human being.&nbsp; Try to find time to be face-to-face with people.</li><li>If you reach out to one person this week, consider it a victory!</li></ol>',
      '<ol><li>If you are having trouble putting regular social contact into your schedule, you may need to work on expanding your face-to-face social contacts. Although we explained that face-to-face communication is preferred, it may be easier to start by connecting with friends on Facebook or by texting. Initial contact via social media may eventually lead to face-to-face contact</li><li>If you cannot arrange to meet with friends at a regular time, arrange to have regular social interactions by having a brief conversation with a sales clerk at a store. Have a brief conversation about the weather or about an item that you are purchasing.&nbsp; This is preferable to remaining isolated and without social contact.</li><li>Set a goal of having regular social contact for just a few days this week if meeting up with people every day is too ambitious.</li></ol>'
    ]
  }
  SRMGoalSetting.Goals[3] = {
    title: 'Eat dinner at a regular time every day.',
    availability: [0,1,2,5],
    tags: [],
    strategiesHTML: [
      '<ol><li>Dinner time helps to set our sleep time. Eating dinner at a regular time is a great goal for this week!</li><li>Is there someone in your network who can help you stick to your goal this week? It is more fun (and better for your rhythms) if you can eat dinner with a friend or family member.</li><li>Dinners can be quick and easy. Don&rsquo;t worry about preparing a feast.&nbsp; It is fine to eat something small, light, and easy to prepare.&nbsp; Focus on eating something (anything!) at the same time every evening&mdash;including weekends.</li><li>If you are up for a bigger challenge, try turning one or more dinner into a pleaasant social interaction. Maybe invite a friend to share his sandwich with you while you talk about the day&rsquo;s events.&nbsp; It will make your evening even better.</li><li>Be attentive to your weekend dinner routines. Many people get thrown off by weekends.&nbsp; It is important to try to eat meals at the same time on weekends as you do during the week.&nbsp; Setting an alarm on your phone to remind you to begin meal preparation might help you remember on Saturday and Sunday.</li></ol>',
      '<ol><li>Focus on the essentials: eating food at the same time every evening. If it is too hard to prepare a meal, think about a portable healthy snack like yogurt, nuts or fruit.</li><li>Do you need to re-evaluate the time that you are planning to eat dinner. Is it too early (i.e., are you rushing to get out of work or are you still tied up with classes)?&nbsp; Is it too late (i.e., are you too tired to eat or not hungry)?&nbsp; Maybe try a different target time for dinner this week.</li><li>Are the weekends causing trouble? If you have a very different schedule on the weekends, allow yourself a one hour difference in time for your meals during the week and on the weekend.</li></ol>'
    ]
  }
  SRMGoalSetting.Goals[4] = {
    title: 'Go to bed at a regular time every night.',
    availability: [0,1,2,5],
    tags: [],
    strategiesHTML: [
      '<ol><li>This is a very important activity. It helps to anchor your body clock.&nbsp; It is great that you have decided to work on this goal!</li><li>Don&rsquo;t try to change the TIME that you are going to bed; just work on going to bed at the same time. For instance, if you have been having trouble going to sleep before midnight, pick a bed time like 1 am&nbsp; (instead of 11 pm).&nbsp; Although you might eventually like to go to bed at 11 pm, &nbsp;that is something you can work on later.&nbsp; Right now, you should just work on going to bed at the same time every day.</li><li>Some tips for going to bed at a regular time include: developing a &ldquo;wind down&rdquo; ritual such as a warm bath, turning off computers/TVs/bright lights at least an hour before bed time, avoiding caffeine after 5 pm, and making sure that your bedroom is dark, cool and comfortable.</li></ol>',
      '<ol><li>It is very hard to go to sleep at a regular time if you are not getting up a regular time. Make sure your wake-up time is regular.</li><li>Avoid activities that might interfere with sleep such as alcohol, caffeine, late night exercise, and bright lights.</li><li>Create a soothing bedtime ritual this week such as peaceful music, soothing aromatherapy or a glass of warm milk. Use this activity to help you get ready for a regular bedtime.</li><li>It is normal for some people to lay awake in bed for up to 30 minutes. If you are resting comfortably in the dark, don&rsquo;t worry if you do not fall asleep immediately.</li><li>Make sure that you are not napping during the day. Napping during the day makes it harder to fall asleep.</li></ol>'
    ]
  }

  SRMGoalSetting.Goals[5] = {
    title: 'Exercise at least 5 times per week.',
    availability: [1,2,5],
    tags: ['Exercise'],
    strategiesHTML: [
      '<ol><li>If you are not used to exercising, check with your doctor to find out if you have any health conditions that would prevent you from doing new activities</li><li>Try to exercise at the same time every day. Regular exercise at the same time of day provides an additional anchor for your body clock.</li><li>Do not exercise late at night. Being very active at night can interfere with sleep.</li><li>Reward yourself when you complete your work out as planned with a healthy snack or a brief fun activity</li><li>Start with very short periods of exercise (5 minutes is fine, if you are not used to doing any activity), but stick to your goal of doing it at least 5 times per week.</li></ol>',
      '<ol><li>Record your daily fitness activities in a notebook. This will help you document your progress each day and make it seem more &ldquo;real.&rdquo;</li><li>Look online for examples of easy fitness routines that will fit into your schedule.</li><li>Work out with friends or family for added motivation</li><li>If 5 times a week is too ambitious, aim for 3 times this week.</li></ol>'
    ]
  }

  SRMGoalSetting.Goals[5] = {
    title: 'Reduce Time in Bed to Time Asleep + 30 minutes',
    availability: [2,5],
    tags: ['Sleep'],
    strategiesHTML: [
      '<ol><li>Use RAY&rsquo;s sleep calculator to determine how much time you should spend in bed</li><li>Remind yourself that reducing the time in bed does not mean that you are reducing the amount of sleep that you are getting</li><li>Ask a friend or family member to help you meet your goal. If you are used to going to bed early or getting up late, you may need someone to help you stay occupied so that you do not revert to &ldquo;old habits.&rdquo;&nbsp;</li><li>If you are trying to limit your time in bed, be sure to plan ahead for activities that you will do during the time that you would usually be in bed. Plan to watch a movie or TV show, catch up on your reading, schedule a Skype call with a friend, or plan an outing.</li><li>Make small changes to your sleep schedule. Decrease your time in bed by no more than 30 minutes each day.</li></ol>',
      ''
    ]
  }

  SRMGoalSetting.Goals[6] = {
    title: 'Get up earlier than my current wake up time.',
    availability: [3,4,5],
    tags: ['Optimize'],
    strategiesHTML: [
      '<ol><li>Would you like to get out of bed earlier in the morning? This is a very common problem with bipolar disorder.&nbsp; It is important to remember that many individuals with bipolar disorder have an &ldquo;owl&rdquo; chronotype, which means that you may be programmed to get up later (and go to bed later) than someone who doesn&rsquo;t have bipolar disorder.&nbsp; So, the first thing to do is decide whether or not an earlier wake up time is a reasonable goal FOR YOU.</li><li>If you want or need to get up earlier than your current wake up time, it is important to set a realistic goal for yourself. For instance, if you are currently getting up at noon, 7 am may be an unrealistic wake up time.</li><li>When you a set a new wake time goal for yourself, allow yourself to adjust to that new wake up time slowly. Try to back up your wake up time by 15 minutes every 3 days to get to your final goal.</li><li>It takes your body clock a few days to adjust to a new wake up time. Gradual shifting of your wake up time will probably be accompanied by jet lag-like symptoms.&nbsp; You should be prepared to feel kind of crummy while you are making these changes.</li></ol>',
      '<ol><li>Are you having trouble getting out of bed? You may want to revisit the RAY lesson on strategies for getting out of bed. Here are some ideas to get you started:<ol><li>Set multiple alarm clocks</li><li>Ask a friend or family member to call you in the morning</li><li>Keep a cold glass of water by your bed and drink the whole thing as soon as you wake up. Even if you fall back to sleep, soon your bladder will convince you to get out of bed.</li><li>Don&rsquo;t close your blinds at night; the light in the morning will help you wake up</li></ol></li><li>Maybe you are being too ambitious. Instead backing up your wake time by 15 minutes every 3 days, maybe you need to go more slowly.&nbsp; Try 15 minutes every 5 days.</li><li>Are you trying to get up too early for your body clock ? If you are an &ldquo;owl,&rdquo; it may not be practical to try to get up too early in the morning. Try setting your wake up time a little later this week.</li></ol>'
    ]
  }

  SRMGoalSetting.Goals[7] = {
    title: 'Find a meaningful daily activity.',
    availability: [3,5],
    tags: ['Optimize'],
    strategiesHTML: [
      '<ol><li>Are you dissatisfied with your current job or school? Does your current occupation or major interfere with your ability to maintain a regular daily rhythm?&nbsp; It is reasonable to start thinking about what you might want to do differently to promote your well-being and improve the quality of your life.</li><li>Start by asking yourself, &ldquo;What do I want? What kind of changes do I want to make?&rdquo; If you can answer those questions, the next question should be, &ldquo;What do I need to do to get what I want?&rdquo;&nbsp; This will allow you to begin to set reasonable goals for finding more meaningful daily activities.</li><li>Break your goal into incremental steps. Below is an example of how you might do that.&nbsp; For instance, if you want to get a new job, you might need to start with updating your resume.&nbsp; Perhaps your goal for this week should just be identifying what you want and taking one step toward that goal.<ol><li>Update my resume</li><li>Network/talk to other people who are in jobs similar to the one I may want</li><li>Figure out steps I would need to take to quit my current job</li><li>Send out my resume</li><li>Interview for a new job</li><li>Get a new job</li></ol></li></ol>','<ol><li>Make sure that you are breaking your big goal (finding a new job, switching schools) into small and manageable goals. It is a good idea to write your goal on a piece of paper and then write down all the steps that will be needed to allow you to reach that goal.&nbsp; Start with a goal of a just one or two steps, rather than the whole big goal.</li><li>Talk to someone about your overall ambitions. If you are thinking about making a big change in your life, you probably should discuss it with other people.&nbsp; Maybe your goal for this week should simply be to talk about it (pros and cons) with someone you trust (a friend, family member, clergy) before taking action.</li></ol>'
    ]
  }

  SRMGoalSetting.Goals[8] = {
    title: 'Increase the number and quality of my face-to-face social contacts.',
    availability: [3,5],
    tags: ['Optimize'],
    strategiesHTML: [
      '<ol><li>If you are used to connecting with friends via social media, you may wish to try to increase your &ldquo;face time&rdquo; with your social contacts to see if that has a positive impact on your mood.</li><li>The best way to increase your social contacts is to go places where you will be with other people. Can you think of places you can go where you will have social interactions?&nbsp; Perhaps you could generate a list of ideas (the gym, a class, a free lecture, a coffee shop) and select one as your goal for the week.</li><li>Ask! You can always ask your friends to meet you &ldquo;IRL&rdquo; instead of on social media.&nbsp; If you are concerned that the meeting will be awkward, invite them to join you for an activity (check the Internet for suggestions) rather than just a conversation.</li></ol>','<ol><li>If you cannot arrange to meet with friends at a regular time, arrange to have regular social interactions by having a brief conversation with a sales clerk at a store. Have a brief conversation about the weather or about an item that you are purchasing.&nbsp; This is preferable to remaining isolated and without social contact.</li><li>If you are having trouble with social interactions, practice what you would say by writing down &ldquo;opening lines.&rdquo; For instance, if you are trying to make connections with people, it is always a good idea to ask others about their interests, concerns, and opinions. Look for an opportunity to try out one of these conversations this week.</li><li>Try Skype or another technology-enabled video call if in-person interactions are not possible.</li></ol>'
    ]
  }

  SRMGoalSetting.Goals[9] = {
    title: 'Improve the regularity of my weekend schedule.',
    availability: [3,4,5],
    tags: ['Optimize'],
    strategiesHTML: [
      '<ol><li>Weekends pose a challenge for social rhythms. Many of the anchors that keep your schedule regular during the week do not exist on the weekend.&nbsp; It can be very hard to stay on track over the weekend.</li><li>What happens to you on Monday mornings? Do you have trouble getting up in the morning?&nbsp; Do you feel tired and grumpy?&nbsp; Reminding yourself of how badly you feel on Mondays may provide you with incentive to keep your routines regular over the weekend.</li><li>The key to regular routines over the weekend is scheduling activities in advance. Write down your planned wake time, sleep time and meals.&nbsp; In the &ldquo;in between&rdquo; spaces, be sure to write down activities that both keep you out of the house and provide you with social contacts.</li></ol>','<ol><li>Allow yourself a little leeway. A one hour difference in timing for your activities during the week and on the weekend may work for you.&nbsp; A good way to tell will be how you feel on Monday morning.</li><li>Set lots of alarms on your phone for Saturday and Sunday. Set alarms for meal times, exercise times, activity times, sleep routine times.&nbsp; See if you can use the alarms to get you on a better schedule.</li></ol>'
    ]
  }

  SRMGoalSetting.Goals[10] = {
    title: 'Go to bed earlier.',
    availability: [3,4,5],
    tags: ['Optimize'],
    strategiesHTML: [
      '<ol><li>Are you a night owl? It is important to remember that many individuals with bipolar disorder have an &ldquo;owl&rdquo; chronotype, which means that you may be programmed to go to sleep later than someone who doesn&rsquo;t have bipolar disorder. So, the first thing to do is decide whether or not an earlier bed time is a reasonable goal FOR YOU.</li><li>If you want or need to go to bed earlier than your current bed time, it is important to set a realistic goal for yourself. For instance, if you are currently going to bed at 2 am, 10 pm may be an unrealistic bed time.</li><li>When you a set a bed time goal for yourself, allow yourself to adjust to that new time slowly. Try to back up your wake up time by 15 minutes every 3 days to get to your final goal.</li><li>It takes your body clock a few days to adjust to a new bed time. Gradual shifting of your bed time will may be accompanied by jet lag-like symptoms.&nbsp;</li><li>Don&rsquo;t forget to stick to the same wake-up time. Your wake-up time has a big impact on your ability to fall asleep the following night.</li></ol>','<ol><li>It is very hard to go to sleep earlier if you are not getting up reasonably early. Make sure your wake-up time is regular and earlier enough so that you are tired when your new bed time rolls around.</li><li>Are you trying to go to bed too early for your body clock ? If you are an &ldquo;owl,&rdquo; it may not be practical to go to bed too early in the morning. Try setting your bed time a little later this week.</li><li>You may want to revisit the RAY lesson on Rules for Better Sleep. Here are some ideas to get you started:<ol><li>Avoid activities that might interfere with sleep such as alcohol, caffeine, late night exercise, and bright lights.</li><li>Create a soothing bedtime ritual this week such as peaceful music, soothing aromatherapy or a glass of warm milk. Use this activity to help you get ready for bedtime.</li><li>It is normal for some people to lay awake in bed for up to 30 minutes. If you are resting comfortably in the dark, don&rsquo;t worry if you do not fall asleep immediately.</li><li>Make sure that you are not napping during the day. Napping during the day makes it harder to fall asleep.</li></ol></li></ol>'
    ]
  }

  SRMGoalSetting.Goals[11] = {
    title: 'Prepare for an Anticipated Rhythm Disruption.',
    availability: [4,5],
    tags: ['Rhythm'],
    strategiesHTML: [
      '<ol><li>Follow the steps outlined in the RAY exercise, &ldquo;Anticipating Upcoming Routine Disruptions.&rdquo;</li><li>Identify the upcoming event and write down how you think it will disrupt your routines</li><li>Think about ways to limit changes in routine. For instance, if you know that you have a big work deadline, try to get some work done ahead of time so that you will have less to do at the very end.</li><li>Write down a modified schedule for yourself during the period of rhythm disruption. Think about keeping some routines steady like meals and exercise.&nbsp;</li><li>Write down a &ldquo;rebound plan.&rdquo; Think about how you will recover from the planned disruption.&nbsp; For instance, you may decide to take a day off of work, allow yourself to go to sleep earlier than usual, or reset your wake up time for a few days.</li></ol>'
    ]
  }



  angular.module('cbitsPrototype.constants')
    .constant('SRMGoalsContent', SRMGoalSetting);
})();