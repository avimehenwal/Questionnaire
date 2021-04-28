import React, { useEffect, useReducer } from 'react'
import AppContext from './app-context'
import { reducerFunction } from './app-reducer'
import {
  NEXT_QUESTION,
  SAVE_ANSWER,
  PREVIOUS_QUESTION,
  JUMP_TO_EMAIL,
  SET_TOTAL_QUESTIONS
} from './app-actions'


export const AppStates = (props) => {
  const initialState = {
    currentQuestion: 1,
    totalQuestions: 6,
    answers: {},
  }

  const [state, dispatchFn] = useReducer(reducerFunction, initialState)

  useEffect(() => {
    return () => { }
  }, [])

  const nextQuestion = () => {
    // document.querySelector('.ant-input').placeholder = ""
    // document.querySelector('.ant-input').value = ""
    if (state.currentQuestion === state.totalQuestions) {
      alert('You have filled all the questions')
      return
    }
    if (state.currentQuestion === 4 && state.answers.children === 'NO') {
      console.log('Skip next, set current page to 6')
      state.currentQuestion = 6
      dispatchFn({ type: JUMP_TO_EMAIL })
    } else {
      dispatchFn({ type: NEXT_QUESTION })
    }
  }

  const setTotalQuestions = (count) => {
    dispatchFn({
      type: SET_TOTAL_QUESTIONS,
      payload: count
    })
  }

  const saveAnswer = (key, value) => {
    dispatchFn({
      type: SAVE_ANSWER,
      payload: {
        key: key,
        value: value,
      }
    })
  }

  return (
    <AppContext.Provider value={{
      app: state,
      reducerFn: dispatchFn,
      nextQuestion,
      setTotalQuestions,
      saveAnswer
    }}>
      {props.children}
    </AppContext.Provider>
  )
}
