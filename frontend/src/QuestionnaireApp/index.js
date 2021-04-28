import React, { useState } from 'react'
import { Header } from './component/Header'
import { Question } from './component/Question'
import { banner, questionsData } from './AppData'

export const QuestionnaireApp = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(1)

  const renderNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1)
  }

  return (
    <>
      <Header {...banner} currentQuestionIndex={currentQuestionIndex} />
      <main>
        {((questionsData.length + 1) > currentQuestionIndex) &&
          <Question
            {...questionsData[currentQuestionIndex - 1]}
            buttonCB={renderNextQuestion}

          />
        }
      </main>
      <footer></footer>
    </>
  )
}
