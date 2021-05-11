import React, { useState, useContext, useEffect } from 'react'
import { Header, Footer } from './component/Header'
import { Question } from './component/Question'
import { Recommendations } from './component/Recommendations'
import { banner, questionsData } from './AppData'
import AppContext from '../ContextStore/app-context'


export const QuestionnaireApp = () => {
  // questions could be fetched from external API
  const { app, nextQuestion, setTotalQuestions } = useContext(AppContext)
  const [questions] = useState(questionsData)
  const [recomm, setRecomm] = useState(app.recommendations)

  useEffect(() => {
    setTotalQuestions(questionsData.length)
    setRecomm(app.recommendations)
    return () => { }
  }, [questions, app.recommendations, setTotalQuestions])


  return (
    <>
      <Header {...banner} currentQuestionIndex={app.currentQuestion} total={app.totalQuestions} />
      <main>
        {(recomm.length > 0) ? <Recommendations data={recomm} /> :
          <form name="questions" method="post" action="/some-api">
            {((app.totalQuestions + 1) > app.currentQuestion) &&
              <Question
                {...questions[app.currentQuestion - 1]}
                nextButtonCB={nextQuestion}
              />
            }
          </form>
        }
      </main>
      <Footer data={app} />
    </>
  )
}
