export const banner = {
  title: 'Questionnaire App',
  subtitel: 'collect inputs from user and suggest recommendations',
}


export const questionsData = [
  {
    title: 'What\'s your first name?',
    type: 'text',
    data: {
      placeholder: 'eg: avi'
    },
    buttonCB: 'callback',
  },
  {
    title: 'What\'s your Address?',
    type: 'text',
    data: {
      placeholder: 'eg: abc, Berlin'
    },
    buttonCB: 'callback'
  },
  {
    title: 'What\'s your Occupation?',
    type: 'select',
    data: {
      1: 'Employed',
      2: 'Student',
      3: 'Self Employed',
    },
    buttonCB: 'callback'
  },

  // make decision for next view
  {
    title: 'Do you have any children?',
    type: 'select',
    data: {
      1: 'Yes',
      2: 'No',
    },
    buttonCB: 'callback'
  },
  {
    title: 'How many children do you have?',
    type: 'text',
    data: {
      placeholder: 'eg: 1'
    },
    buttonCB: 'callback'
  },

  // last
  {
    title: 'Whats your email?',
    type: 'text',
    data: {
      placeholder: 'eg: abc@xyz.com'
    },
    buttonCB: 'callback'
  },
]