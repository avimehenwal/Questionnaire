import React, { useEffect, useReducer } from 'react'
import AppContext from './app-context'
import { reducerFunction } from './app-reducer'
import {
  NEXT_QUESTION,
  SAVE_ANSWER,
  SET_JWT,
  PREVIOUS_QUESTION,
  SET_RECOMMENDATIONS,
  JUMP_TO_EMAIL,
  SET_TOTAL_QUESTIONS
} from './app-actions'
import { postFormData, getRecommendations } from '../QuestionnaireApp/apis'

export const AppStates = (props) => {
  const initialState = {
    currentQuestion: 1,
    totalQuestions: 6,
    answers: {},
    recommendations: []
  }

  const [state, dispatchFn] = useReducer(reducerFunction, initialState)

  useEffect(() => {
    return () => { }
  }, [])

  const nextQuestion = async () => {
    // document.querySelector('.ant-input').placeholder = ""
    // document.querySelector('.ant-input').value = ""
    if (state.currentQuestion === state.totalQuestions) {
      const result = await postFormData(state.answers)
      setJwt(result.jwt)
      const recommendations = await getRecommendations(result.jwt)
      console.log(recommendations);
      dispatchFn({ type: SET_RECOMMENDATIONS, payload: recommendations })
      // alert(`Form submitted \n JWT ${result.jwt}`)
      return
    } else if (state.currentQuestion === 4 && state.answers.children === 'NO') {
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

  const setJwt = (jwt) => {
    dispatchFn({ type: SET_JWT, payload: jwt })
  }

  return (
    <AppContext.Provider value={{
      app: state,
      reducerFn: dispatchFn,
      nextQuestion,
      setTotalQuestions,
      saveAnswer,
      setJwt
    }}>
      {props.children}
    </AppContext.Provider>
  )
}
