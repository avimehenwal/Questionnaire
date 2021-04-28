import React from 'react'
import './App.css';
import 'antd/dist/antd.css'
import { QuestionnaireApp } from './QuestionnaireApp'
import { AppStates } from './ContextStore/AppStates'

function App() {
  return (
    <AppStates>
      <div className="App">
        <QuestionnaireApp />
      </div>
    </AppStates>
  );
}

export default App;
