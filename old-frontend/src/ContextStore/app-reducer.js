import {
  SET_JWT,
  SAVE_ANSWER,
  NEXT_QUESTION,
  JUMP_TO_EMAIL,
  // PREVIOUS_QUESTION,
  SET_RECOMMENDATIONS,
  SET_TOTAL_QUESTIONS,
} from './app-actions'

export const reducerFunction = (state, action) => {
  switch (action.type) {

    case NEXT_QUESTION:
      // console.dir(state);
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1
      }

    // case PREVIOUS_QUESTION:
    //   return {
    //     ...state,
    //     currentQuestion: state.currentQuestion - 1
    //   }

    case JUMP_TO_EMAIL:
      state.answers['numberOfChildren'] = 0
      return { ...state, currentQuestion: 6 }

    case SET_TOTAL_QUESTIONS:
      return {
        ...state,
        totalQuestions: action.payload
      }

    case SAVE_ANSWER:
      const key = action.payload.key
      const value = action.payload.value
      // persist in local storage
      let appStorage = window.localStorage;
      appStorage.setItem(key, value)
      console.log('LS:' + key + value);
      if (key === 'numberOfChildren') {
        state['answers'][key] = parseInt(value)
      } else {
        state['answers'][key] = value
      }

      console.log(state);
      return {
        ...state,
      }

    case SET_JWT:
      return {
        ...state,
        jwt: action.payload
      }

    case SET_RECOMMENDATIONS:
      return {
        ...state,
        recommendations: action.payload
      }

    default:
      console.log('No case matched')
  }
}
