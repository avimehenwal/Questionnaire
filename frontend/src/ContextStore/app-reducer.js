import {
  NEXT_QUESTION,
  PREVIOUS_QUESTION,
  SET_TOTAL_QUESTIONS
} from './app-actions'

export const reducerFunction = (state, action) => {
  switch (action.type) {

    case NEXT_QUESTION:
      // console.dir(state);
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1
      }


    case PREVIOUS_QUESTION:
      return {
        ...state,
        currentQuestion: state.currentQuestion - 1
      }

    case SET_TOTAL_QUESTIONS:
      return {
        ...state,
        totalQuestions: action.payload
      }

    default:
      console.log('No case matched')
  }
}
