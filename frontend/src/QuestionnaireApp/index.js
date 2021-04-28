import React from 'react'
import { Header } from './component/Header'
import { Question } from './component/Question'


export const QuestionnaireApp = () => {
  const appData = {
    title: 'Questionnaire App',
    subtitel: 'collect inputs from user and suggest recommendations',
  }

  return (
    <>
      <Header {...appData} />
      <main>
        <Question />
      </main>
      <footer></footer>
    </>
  )
}
