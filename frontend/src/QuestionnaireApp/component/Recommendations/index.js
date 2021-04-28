import React from 'react'
import { Card, Typography, Space, Row } from 'antd';
const { Title, Text } = Typography;

export const Recommendations = ({ data }) => {
  return (
    <Row type="flex" align="middle" justify="center">
      {data.map(item =>
        <Card key={item.type} bordered={true} style={{ width: 500 }}>
          <Space >
            <Text strong>{item.type}</Text>
            <Text>{item.price.amount} {item.price.periodicity}
            </Text>
          </Space>
        </Card>
      )
      }
    </Row >
  )
}
