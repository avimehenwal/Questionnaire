import React, { useState } from 'react'
import { Radio, Space } from 'antd';

export const InputSelect = (data) => {
  const [value, setValue] = useState(1)

  const onChange = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value)
  };

  return (
    <>
      {/* <pre>{JSON.stringify(data, null, 4)}</pre> */}
      <Radio.Group onChange={onChange} value={value}>
        <Space direction="vertical">

          {Object.keys(data).map(key => (
            <Radio key={key} value={key}>{data[key]}</Radio>
          ))}

        </Space>
      </Radio.Group>
    </>
  )
}
