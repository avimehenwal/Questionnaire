import React from 'react'
import { Card, Row, Col, Button } from 'antd';
import { InputText } from './InputText'
import { InputSelect } from './InputSelect'

// { title = "Card title", type = "select", data }
export const Question = ({ title, type, data, nextButtonCB, prevButtonCB }) => {

  return (
    <>
      <Row type="flex" align="middle" justify="center">
        <Card title={title} bordered={false} style={{ width: 500 }}>
          <br></br>

          {(type === 'text') && <InputText {...data} />}
          {(type === 'select') && <InputSelect {...data} />}

          <br></br>
          <br></br>
          <br></br>

          {/* <Row type="flex" justify="center" gutter={6}> */}
          {/* <Col align="middle" span={8}>
              <Button onClick={prevButtonCB}>Previous</Button>
            </Col> */}
          {/* <Col justify="center" align="middle" span={8}> */}
          <Button type="primary" onClick={nextButtonCB}>Next Question</Button>
          {/* </Col> */}
          {/* </Row> */}

        </Card>
      </Row>
    </>
  )
}
