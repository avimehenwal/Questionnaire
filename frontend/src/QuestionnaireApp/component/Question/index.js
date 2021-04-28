import React from 'react'
import { Card, Row, Button } from 'antd';
import { InputText } from './InputText'
import { InputSelect } from './InputSelect'

// { title = "Card title", type = "select", data }
export const Question = (props) => {

  return (
    <>
      <pre>{JSON.stringify(props, null, 4)}</pre>

    </>
  )
}

{/* <Row type="flex" align="middle" justify="center">
  <Card title={title} bordered={false} style={{ width: 500 }}>
    <br></br>

    {(type === 'text') && <InputText {...data} />}
    {(type === 'select') && <InputSelect {...data} />}

    <br></br>
    <br></br>
    <br></br>
    <Button type="primary">Next</Button>
  </Card>
</Row> */}