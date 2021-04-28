import React, { useState, useContext, useEffect } from 'react'
import { Input, Radio, Space } from 'antd';
import AppContext from '../../../../ContextStore/app-context'


export const InputText = (props) => {
  const { app, saveAnswer } = useContext(AppContext)
  // console.log(app.currentQuestion);

  useEffect(() => {
    const ls = window.localStorage
    if (ls.getItem(props.name) !== null) {
      saveAnswer(props.name, ls.getItem(props.name))
    }
  }, [app.currentQuestion])

  const inputHandler = (e) => {
    console.log(e.target.value);
    saveAnswer(props.name, e.target.value)
  }

  return (
    <>
      <Input
        name={props.name}
        value={app.answers[props.name]}
        onChange={inputHandler}
        placeholder={(app.answers[app.currentQuestion]) ? app.answers[app.currentQuestion] : props.placeholder}
      />

    </>
  )
}


export const InputSelect = ({ name, ...data }) => {
  const [value, setValue] = useState(1)
  const { app, saveAnswer } = useContext(AppContext)

  useEffect(() => {
    const ls = window.localStorage
    if (ls.getItem(name) !== null) {
      // console.log('SEL ' + ls.getItem(name));
      saveAnswer(name, ls.getItem(name))
      Object.keys(data).map(key => {
        // console.log('SELECTION ' + key + name + ' is eq ' + data[key].toUpperCase());
        if (data[key].toUpperCase() === ls.getItem(name)) {
          // console.log('MATCH' + key);
          setValue(data[key])
        }
      })
    }
  }, [app.currentQuestion])

  console.log('VALUE SET TO ' + value);


  const inputHandler = (e) => {
    console.log(e.target.value);
    setValue(e.target.value)
    saveAnswer(name, e.target.value.toUpperCase())
  }

  return (
    <>
      {/* <pre>{JSON.stringify(data, null, 4)}</pre> */}
      <Radio.Group onChange={inputHandler} value={value} name={name} >
        <Space direction="vertical">

          {Object.keys(data).map(key => (
            <Radio key={key} value={data[key]}>{data[key]}</Radio>
          ))}

        </Space>
      </Radio.Group>
    </>
  )
}
