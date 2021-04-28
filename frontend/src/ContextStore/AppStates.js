import React, { useEffect, useReducer } from 'react'
import AppContext from './app-context'
import { reducerFunction } from './app-reducer'
import {
  NEXT_QUESTION,
  PREVIOUS_QUESTION,
  SET_TOTAL_QUESTIONS
} from './app-actions'


export const AppStates = (props) => {
  const initialState = {
    currentQuestion: 1,
    totalQuestions: 6
  }

  const [state, dispatchFn] = useReducer(reducerFunction, initialState)

  const nextQuestion = () => {
    dispatchFn({
      type: NEXT_QUESTION,
    })
  }

  const setTotalQuestions = (count) => {
    dispatchFn({
      type: SET_TOTAL_QUESTIONS,
      payload: count
    })
  }

  return (
    <AppContext.Provider value={{
      app: state,
      reducerFn: dispatchFn,
      nextQuestion,
      setTotalQuestions
    }}>
      {props.children}
    </AppContext.Provider>
  )
}
