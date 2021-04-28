import React, { useState, useContext, useEffect } from 'react'
import { Header } from './component/Header'
import { Question } from './component/Question'
import { banner, questionsData } from './AppData'
import AppContext from '../ContextStore/app-context'


export const QuestionnaireApp = () => {
  const [questions, setQuestions] = useState(questionsData)
  const { app, nextQuestion, setTotalQuestions } = useContext(AppContext)

  useEffect(() => {
    setTotalQuestions(questionsData.length)
    return () => { }
  }, [])

  return (
    <>
      <pre>{JSON.stringify(app, null, 4)}</pre>
      <Header {...banner} currentQuestionIndex={app.currentQuestion} />
      <main>
        {((app.totalQuestions + 1) > app.currentQuestion) &&
          <Question
            {...questions[app.currentQuestion - 1]}
            nextButtonCB={nextQuestion}
          // prevButtonCB={renderPreviousQuestion}
          />
        }
      </main>
      <footer></footer>
    </>
  )
}
