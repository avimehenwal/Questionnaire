import React, { useState } from 'react'
import { Header } from './component/Header'
import { Question } from './component/Question'
import { banner, questionsData } from './AppData'



export const QuestionnaireApp = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(3)

  return (
    <>
      <Header {...banner} currentQuestionIndex={currentQuestionIndex} />
      <main>
        <Question props={questionsData[currentQuestionIndex - 1]} />
      </main>
      <footer></footer>
    </>
  )
}
