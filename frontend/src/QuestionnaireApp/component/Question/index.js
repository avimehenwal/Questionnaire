import React from 'react'
import { Card, Row, Button } from 'antd';
import { InputText } from './InputText'
import { InputSelect } from './InputSelect'

export const Question = ({ title = "Card title", type = "select", data }) => {

  return (
    <>
      <Row type="flex" align="middle" justify="center">
        <Card title={title} bordered={false} style={{ width: 500 }}>
          <br></br>
          {/* <input type="text"></input> */}

          {(type === 'text') && <InputText {...data} />}
          {(type === 'select') && <InputSelect {...data} />}

          <br></br>
          <br></br>
          <br></br>
          <Button type="primary">Primary Button</Button>
        </Card>
      </Row>
    </>
  )
}
