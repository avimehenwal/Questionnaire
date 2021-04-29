import React, { useState } from 'react'
import { Row, Typography, Checkbox } from 'antd';
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


export const Footer = ({ data }) => {
  const [showTrace, setShowTrace] = useState(false)

  function onChange(e) {
    setShowTrace(e.target.checked)
  }

  return (
    <footer>
      <br></br>
      <Row type="flex" align="middle" justify="center">
        <Checkbox onChange={onChange} checked={showTrace}>Log Debug Trace</Checkbox>
      </Row><br></br>
      {(showTrace) &&
        <Row type="flex" align="middle" justify="center">
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </Row>
      }
    </footer>
  )
}