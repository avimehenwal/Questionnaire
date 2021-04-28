import React from 'react'
import { Row, Typography } from 'antd';
const { Text, Title } = Typography;

export const Header = ({ title, subtitel, currentQuestionIndex, total }) => {

  return (
    <header>
      <br></br>
      <Row type="flex" align="middle" justify="center">
        <Title level={2}>{title}</Title>
        <br></br>
      </Row>

      <Row type="flex" align="middle" justify="center">
        <Text type="primary">{subtitel} !!! </Text>
      </Row><br></br>

      <Row type="flex" align="middle" justify="center">
        <Text type="primary">question {currentQuestionIndex}/{total}</Text>
      </Row><br></br>

      <br></br>
      <br></br>
    </header >
  )
}


export const Footer = ({ data }) => (
  <footer>
    <br></br>
    <Row type="flex" align="middle" justify="center">
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Row>
  </footer>
)