import React, { useState, useContext, useEffect } from 'react'
import { Header } from './component/Header'
import { Question } from './component/Question'
import { banner, questionsData } from './AppData'
import AppContext from '../ContextStore/app-context'


export const QuestionnaireApp = () => {
  // questions could be fetched from external API
  const [questions] = useState(questionsData)
  const { app, nextQuestion, setTotalQuestions } = useContext(AppContext)

  useEffect(() => {
    setTotalQuestions(questionsData.length)
    return () => { }
  }, [questions])

  return (
    <>
      <Header {...banner} currentQuestionIndex={app.currentQuestion} />
      <main>
        <form name="questions" method="post" action="/some-api">
          {((app.totalQuestions + 1) > app.currentQuestion) &&
            <Question
              {...questions[app.currentQuestion - 1]}
              nextButtonCB={nextQuestion}
            />
          }
        </form>

      </main>
      <footer>
        <pre>{JSON.stringify(app, null, 4)}</pre>
      </footer>
    </>
  )
}
