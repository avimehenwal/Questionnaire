export const banner = {
  title: 'Questionnaire App',
  subtitel: 'collect inputs from user and suggest recommendations',
}


export const questionsData = [
  {
    title: 'What\'s your first name?',
    type: 'text',
    name: 'firstName',
    data: {
      placeholder: 'eg: avi'
    },
  },
  {
    title: 'What\'s your Address?',
    type: 'text',
    name: 'address',
    data: {
      placeholder: 'eg: abc, Berlin'
    },
  },
  {
    title: 'What\'s your Occupation?',
    type: 'select',
    name: 'occupation',
    data: {
      1: 'Employed',
      2: 'Student',
      3: 'Self_Employed',
    },
  },

  // make decision for next view
  {
    title: 'Do you have any children?',
    type: 'select',
    name: 'children',
    data: {
      1: 'Yes',
      2: 'No',
    },
  },
  {
    title: 'How many children do you have?',
    type: 'text',
    name: 'numberOfChildren',
    data: {
      placeholder: 'eg: 1'
    },
  },

  // last
  {
    title: 'Whats your email?',
    type: 'text',
    name: 'email',
    data: {
      placeholder: 'eg: abc@xyz.com'
    },
  },
]