import React from 'react'
import { Card, Row, Button } from 'antd';
import { InputText, InputSelect } from './InputBar'

// { title = "Card title", type = "select", data }
export const Question = ({ title, type, data, nextButtonCB, name }) => {


  return (
    <>
      <Row type="flex" align="middle" justify="center">
        <Card title={title} bordered={false} style={{ width: 500 }}>
          <br></br>

          {(type === 'text') && <InputText {...data} name={name} />}
          {(type === 'select') && <InputSelect {...data} name={name} />}

          <br></br>
          <br></br>
          <br></br>

          <Button type="primary" onClick={nextButtonCB}>Next Question</Button>

        </Card>
      </Row>
    </>
  )
}
